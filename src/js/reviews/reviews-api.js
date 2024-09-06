import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

export const data = () => {
  return axios.get('api/reviews');
};
