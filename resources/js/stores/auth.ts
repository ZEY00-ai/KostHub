import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

type AuthUser = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
};

const baseUrl = `${import.meta.env.VITE_API_URL || ''}/users`;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')) as AuthUser | null,
    returnUrl: null as string | null
  }),
  actions: {
    async login(username: string, password: string) {
      const user = await fetchWrapper.post<AuthUser>(`${baseUrl}/authenticate`, { username, password });

      // update pinia state
      this.user = user;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/main/dashboard/default');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});
