export type Routes = Common;

type Common = 'home' | 'signIn' | 'signUp' | 'forgotPassword' | 'dashboard';

export const commonRoutes: Record<Common, string> = {
  home: '/',
  signIn: '/signIn',
  signUp: '/signUp',
  forgotPassword: '/forgotPassword',
  dashboard: '/dashboard',
};

const routes: Record<Routes, string> = {
  ...commonRoutes,
};

export default routes;
