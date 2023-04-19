import axios from "axios";

const basicVCUrl = "/api/vc";

export const createMeeting = async (fileNumber) => {
  const response = await axios.post(`${basicVCUrl}/create_meeting`, {fileNumber},);
  return response.data.meetingId;
};

export const getMeetingDetails = async ({ meetingId }) => {
  const response = await axios.get(`${basicVCUrl}/${meetingId}`);
  return rrr.response.data;
};

export const setActions = async ({ meetingId, actionType, participantId }) => {
  const response = await axios.post(`${basicVCUrl}/${meetingId}`, {actionType, participantId});

  return response.data.meetingId;
};