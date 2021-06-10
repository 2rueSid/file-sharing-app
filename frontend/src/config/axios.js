import Axios from 'axios';
import Cookie from 'universal-cookie';
const cookie = new Cookie();
export default Axios.create({
  headers: {
    Authorization: `Bearer ${cookie.get('token')}`,
  },
  withCredentials: true,
  baseURL: 'http://localhost:5000/',
});
