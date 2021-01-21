import React, { useState } from "react";
import { connect } from "react-redux";
import { editJob } from "../../actions/job";
import { Container, Card, Form, Button } from "react-bootstrap";
import history from "../../history";

const EditJob = ({ editJob, match, job: { job } }) => {
  const [formData, setFormData] = useState({
    jobTitle: job.jobTitle,
    jobDescription: job.jobDescription,
    salary: job.salary,
  });

  const { jobTitle, jobDescription, salary } = formData;

  const onSubmit = (e) => {
    editJob({ jobTitle, jobDescription, salary }, match.params.id);
    history.push(`/jobs/${match.params.id}`);
  };

  return (
    <Container>
      <Card style={{ padding: "20px", margin: "20px" }}>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicJobTitle">
            <Form.Label>Job title</Form.Label>
            <Form.Control
              type="text"
              value={jobTitle}
              placeholder={job.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicJobDescription">
            <Form.Label>Job description</Form.Label>
            <Form.Control
              type="text"
              value={jobDescription}
              placeholder={job.jobDescription}
              onChange={(e) =>
                setFormData({ ...formData, jobDescription: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              value={salary}
              placeholder={job.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { editJob })(EditJob);
