import { apiClient, storage } from '@app/common/utils';
import { TOKEN_STORAGE_KEY } from '@app/features/auth/constants';

export default function getEnhancedApiClient() {
  apiClient.interceptors.request.use(function(config) {
    const token = storage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return apiClient;
}
