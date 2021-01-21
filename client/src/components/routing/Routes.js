import React from "react";
import { Route, Switch } from "react-router-dom";

import SearchJobs from "../SearchJobs/SearchJobs";
import SearchGrads from "../SearchGrads/SearchGrads";
import CreateJob from "../CreateJob/CreateJob";
import Job from "../jobs/Job";
import Register from "../auth/Register";
import Login from "../auth/Login";
import EditJob from "../EditJob/EditJob";

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search-jobs" component={SearchJobs} />
        <Route exact path="/search-grads" component={SearchGrads} />
        <Route exact path="/create-job" component={CreateJob} />
        <Route exact path="/jobs/:id" component={Job} />
        <Route exact path="/jobs/edit/:id" component={EditJob} />
      </Switch>
    </section>
  );
};

export default Routes;
