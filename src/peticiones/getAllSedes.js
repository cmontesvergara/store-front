import axios from "axios";
const API = "https://lit-reaches-52960.herokuapp.com/sedes";

export default {
  get() {
    return axios.get(API);
  }
};
