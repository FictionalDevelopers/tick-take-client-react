import axios from 'axios';

import { API_URL } from '@app/config/env';

export default axios.create({
  baseURL: `${API_URL}/api`,
});
