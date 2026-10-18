import { useAuthStore } from '@/stores/auth';

export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};

interface temp {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

function request(method: string) {
  return async <T = unknown>(url: string, body?: object): Promise<T> => {
    const requestOptions: temp = {
      method,
      headers: authHeader(url)
    };
    if (body) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions.body = JSON.stringify(body);
    }
    const response = await fetch(url, requestOptions);
    return (await handleResponse(response)) as T;
  };
}

// helper functions

function authHeader(url: string): Record<string, string> {
  // return auth header with jwt if user is logged in and request is to the api url
  const { user } = useAuthStore();
  const isLoggedIn = !!user?.token;
  const apiUrl = import.meta.env.VITE_API_URL;
  const isApiUrl = Boolean(apiUrl && url.startsWith(apiUrl));
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response: Response): Promise<unknown> {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const { user, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }

      const error: string = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data as unknown;
  });
}
