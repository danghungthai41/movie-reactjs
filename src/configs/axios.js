import axios from "axios";
const request = async (configs) => {
  const token = localStorage.getItem("token");
  if (token) {
    configs.headers = {
      Authorization: `Bearer ${token}`,
      TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBDeWJlclNvZnQiLCJIZXRIYW5TdHJpbmciOiIzMC8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODI4MTI4MDAwMDAiLCJuYmYiOjE2NTAwNDIwMDAsImV4cCI6MTY4Mjk2MDQwMH0.5MwS0rVAIaDwTxZkRRQq8PzMSuRNjKWC9t3UrLWBPo0',
    };
  }
  try {
    const res = await axios(configs);
    return res;
  } catch (err) {
    throw err;
  }
};
export default request;
