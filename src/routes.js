import { useRoutes } from 'react-router-dom';
import { ForgotPassword,AuthTabs, ResetPassword } from './pages/auth';
import Streams from '@pages/social/streams/Stream';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/app/social/streams',
      element: <Streams />,
    },
    {
      path: '/app/social',
      element: <Streams />,
    },
  ]);

  return elements;
};