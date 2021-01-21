import api from "../utils/api";
import { GET_JOBS, GET_JOB, ADD_JOB, EDIT_JOB, JOB_DELETED } from "./types";

// Get jobs
export const getJobs = () => async (dispatch) => {
  try {
    const res = await api.get("/jobs");

    dispatch({
      type: GET_JOBS,
      payload: res.data,
    });
  } catch (err) {}
};

// Get job by ID
export const getJobById = (jobId) => async (dispatch) => {
  try {
    const res = await api.get(`/jobs/${jobId}`);

    dispatch({
      type: GET_JOB,
      payload: res.data,
    });
  } catch (err) {}
};

// Create job
export const createJob = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/jobs", formData);

    dispatch({ type: ADD_JOB, payload: res.data });
  } catch (err) {}
};

// Edit job
export const editJob = (formData, jobId) => async (dispatch) => {
  try {
    const res = await api.put(`jobs/${jobId}`, formData);
    console.log(res);
    dispatch({ type: EDIT_JOB, payload: res.data });
  } catch (err) {}
};

// Delete job
export const deleteJob = (jobId) => async (dispatch) => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await api.delete(`/jobs/${jobId}`);

      dispatch({ type: JOB_DELETED });
    } catch (err) {}
  }
};
