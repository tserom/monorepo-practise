import { getQuerySearch } from "./utils/querySearch";

const params = { a: 1 };
const search = getQuerySearch(params);
console.log(search);

export default {
  getQuerySearch,
};
