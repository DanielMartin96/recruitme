import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../layout/Jumbotron";

import Jobs from "../jobs/Jobs";

const SearchJobs = () => {
  return (
    <>
      <Jumbotron title="Jobs" button="Back home" to="/" />
      <Container>
        <Jobs />
      </Container>
    </>
  );
};

export default SearchJobs;
