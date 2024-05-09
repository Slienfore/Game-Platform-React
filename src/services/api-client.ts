import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17101569852946699bf88f549ad4a063",
  },
});
