import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// custom definition
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17101569852946699bf88f549ad4a063", // the authentication of rawg.io -> https://rawg.io/@slienfore/apikey
  },
});
