import axios from "axios";
const request = async (configs) => {
  const token = localStorage.getItem("token");
  if (token) {
    configs.header = {
      Authorization: "Bearer " + token,
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
