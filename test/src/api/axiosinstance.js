import axios from "axios";
const axiosinstance = axios.create({
    baseURL: "https://631445ddfc9dc45cb4eb458c.mockapi.io/api",
    timeout: 11000,
    headers: { "X-Custom-Header": "foobar" },
});
export default axiosinstance;