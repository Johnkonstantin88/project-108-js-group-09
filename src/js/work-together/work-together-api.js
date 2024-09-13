import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getRequest(data) {
  const response = await axios.post('/requests', data);

  return response.data;
}
