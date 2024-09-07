import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

export const getReviews = async () => {
  const response = await axios.get('api/reviews');

  return response.data;
};
