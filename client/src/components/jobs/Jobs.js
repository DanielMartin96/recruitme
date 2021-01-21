import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobs } from "../../actions/job";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobs = ({ getJobs, deleteJob, job: { jobs }, isAuthenticated }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const renderJobs = () => {
    return jobs.map((job, idx) => {
      return (
        <Card style={{ margin: "20px 0 20px 0" }} key={idx}>
          <Card.Header>
            <h5>{job.jobTitle}</h5>
          </Card.Header>
          <Card.Body>
            <Card.Text>{job.jobDescription}</Card.Text>
            <Card.Text>Salary: £{job.salary}</Card.Text>

            <hr />
            <Link to={`jobs/${job._id}`}>
              <Button style={{ margin: "5px" }}>Find out more</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <Fragment>
      <h1 style={{ margin: "20px" }}>Jobs</h1>
      {renderJobs()}
      {isAuthenticated ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "40px",
          }}
        >
          <Link to="create-job">
            <Button style={{ alignSelf: "center", width: "300px" }}>
              Create Job
            </Button>
          </Link>
        </div>
      ) : null}
    </Fragment>
  );
};

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
