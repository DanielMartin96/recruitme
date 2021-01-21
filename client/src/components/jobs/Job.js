import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobById, deleteJob } from "../../actions/job";
import Jumbotron from "../layout/Jumbotron";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../../history";

const Job = ({ getJobById, deleteJob, job: { job }, auth, match }) => {
  useEffect(() => {
    getJobById(match.params.id);
  }, [getJobById, match.params.id]);

  const onSubmit = () => {
    deleteJob(match.params.id);
    alert("Job deleted, please click back to jobs");
    history.push("/search-jobs");
  };

  if (job === null) {
    return null;
  }

  const renderButtons = () => {
    if (auth.user === null) {
      return null;
    }

    if (job.user === auth.user._id) {
      return (
        <>
          <Link to={`/jobs/edit/${job._id}`}>
            <Button variant="secondary" style={{ margin: "5px" }}>
              Edit post
            </Button>
          </Link>
          <Button variant="danger" style={{ margin: "5px" }} onClick={onSubmit}>
            Delete post
          </Button>{" "}
        </>
      );
    }
  };

  return (
    <>
      <Jumbotron
        title={job.jobTitle}
        to={"/search-jobs"}
        button="Back to jobs"
      />
      <Container>
        <h2>Job Description</h2>
        <p>{job.jobDescription}</p>
        <h2>Salary</h2>
        <p>£{job.salary}</p>
        <Button style={{ marginRight: "10px" }}>Apply</Button>
        <Button>Save for later</Button>
        {renderButtons()}
      </Container>
    </>
  );
};

Job.propTypes = {
  getJobById: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
  auth: state.auth,
});

export default connect(mapStateToProps, { getJobById, deleteJob })(Job);
