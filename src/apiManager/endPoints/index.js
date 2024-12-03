import service_url from "./config";

const API = {
  REGISTER_API: `${service_url}/v1/api/user/register`,
  VERIFY_EMAIL_API: `${service_url}/v1/api/user/verifyOtp`,
  LOGIN_API: `${service_url}/v1/api/auth/login`,
  RESET_PASSWORD: `${service_url}/v1/api/auth/reset-password`,
  DELETE_USER: `${service_url}/v1/api/user/delete`,
  GET_ALL_USERS: `${service_url}/v1/api/user/`,
  UPDATE_PROFILE: `${service_url}/v1/api/user/updateProfile`,
  ADD_QUESTIONS: `${service_url}/v1/api/onlineTest`,
  GET_QUESTIONS: `${service_url}/v1/api/onlineTest`,
  DELETE_QUESTIONS: `${service_url}/v1/api/onlineTest`,
  GET_QUESTION: `${service_url}/v1/api/onlineTest`,
  GET_JOB_OPENING_DROPDOWN: `${service_url}/v1/api/jobOpening/dropdowns`,
  GET_JOB_OPENING: `${service_url}/v1/api/jobOpening`,
  CREATE_JOB_OPENING: `${service_url}/v1/api/jobOpening`,
  GET_JOB_OPENING_BY_ID: `${service_url}/v1/api/jobOpening`,
  DELETE_JOB_OPENING_BY_ID: `${service_url}/v1/api/jobOpening`,
  APPLIED_JOB_OPENING_BY_ID: `${service_url}/v1/api/jobOpening/jobapply`,
  SAVED_JOB_OPENING_BY_ID: `${service_url}/v1/api/jobOpening/saveJob`,
  REMOVE_JOB_OPENING_BY_ID: `${service_url}/v1/api/jobOpening/removejob`,
  UPLOAD_RESUME: `${service_url}/v1/api/resume/uploadResume`,
  INVITE_CANDIDATE: `${service_url}/v1/api/candidate/inviteCandidate`,
  JOB_INVITE_CANDIDATE: `${service_url}/v1/api/candidate/jobOpeningInvite`,
  UPDATE_CANDIDATE_DATA: `${service_url}/v1/api/candidate/updateCandidateDetails`,
};

export default API;
