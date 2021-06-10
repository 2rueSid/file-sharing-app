import Axios from '../config/axios';

const useRouter = () => {
  return {
    post: async (url, data, config = {}) => {
      return await Axios.post(url, data, config);
    },
  };
};

export default useRouter;
