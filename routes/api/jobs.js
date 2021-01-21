const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Job = require("../../models/Job");
const User = require("../../models/User");
const checkObjectId = require("../../middleware/checkObjectId");

// @route    POST api/jobs
// @desc     Create a job
// @access   Private
router.post(
  "/",
  auth,
  check("jobTitle", "Job title is required").not().isEmpty(),
  check("jobDescription", "Job description is required").not().isEmpty(),
  check("salary", "Salary is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newJob = new Job({
        jobTitle: req.body.jobTitle,
        jobDescription: req.body.jobDescription,
        salary: req.body.salary,
        name: user.name,
        user: req.user.id,
      });

      const job = await newJob.save();

      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/jobs
// @desc     Get all jobs
// @access   Public
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/jobs/:id
// @desc     Get job by ID
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/jobs/:id
// @desc     Delete a job
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    // Check user
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await job.remove();

    res.json({ msg: "Job removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/jobs/:id
// @desc     Edit a job
// @access   Private
router.put("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body);
    await console.log(job);
    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    // Check user
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    console.log(job);
    await job.save();

    res.json({ msg: "Job updated" });
  } catch (err) {}
});

module.exports = router;
