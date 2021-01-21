import { GET_JOBS, GET_JOB, ADD_JOB, EDIT_JOB } from "../actions/types";

const initialState = {
  jobs: [],
  job: null,
  loading: true,
  error: {},
};

function jobReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
        loading: false,
      };
    case GET_JOB:
      return {
        ...state,
        job: payload,
        loading: false,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
      };
    case EDIT_JOB:
      return {
        ...state,
        job: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default jobReducer;
