import React, { useState } from "react";
import { connect } from "react-redux";
import { createJob } from "../../actions/job";
import { Container, Card, Form, Button } from "react-bootstrap";
import history from "../../history";

const CreateJob = ({ createJob }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    salary: null,
  });

  const { jobTitle, jobDescription, salary } = formData;

  const onSubmit = (e) => {
    createJob({ jobTitle, jobDescription, salary });
    history.push(`/search-jobs`);
  };

  return (
    <Container>
      <Card style={{ padding: "20px", margin: "20px" }}>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicJobTitle">
            <Form.Label>Job title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job title"
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicJobDescription">
            <Form.Label>Job description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job description"
              onChange={(e) =>
                setFormData({ ...formData, jobDescription: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
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

export default connect(null, { createJob })(CreateJob);
