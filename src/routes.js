import { useRoutes } from 'react-router-dom';
import { ForgotPassword,AuthTabs, ResetPassword } from './pages/auth';
import Streams from '@pages/social/streams/Stream';
import Social from '@pages/social/Social';
import Chat from '@pages/social/chat/Chat';
import Followers from '@pages/social/followers/Followers';
import Following from '@pages/social/following/Following';
import People from '@pages/social/people/People';
import Photos from '@pages/social/photos/Photos';
import Profile from '@pages/social/profile/Profile';
import Notifications from '@pages/social/notifications/Notification';
import ProtectedRoute from '@pages/ProtectedRoute';
import Error from '@pages/error/Error';
import { Suspense } from 'react';
import StreamsSkeleton from '@pages/social/streams/StreamsSkeleton';
import NotificationSkeleton from '@pages/social/notifications/NotificationSkeleton';

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
      path: '*',
      element: <Error />,
    },
    {
      path: '/app/social',
      element: (
        <ProtectedRoute>
          <Social />
        </ProtectedRoute>
      ),
      children:[
        {
          path: 'streams',
          element: (
            <Suspense fallback={<StreamsSkeleton/>}>
              <Streams />
            </Suspense>
          ),
        },
        {
          path: 'chat/messages',
          element: <Chat />
        },
        {
          path: 'people',
          element: <People />
        },
        {
          path: 'followers',
          element: <Followers />
        },
        {
          path: 'following',
          element: <Following />
        },
        {
          path: 'photos',
          element: <Photos />
        },
        {
          path: 'notifications',
          element: (
            <Suspense fallback={<NotificationSkeleton/>}>
              <Notifications />
            </Suspense>
          )
        },
        {
          path: 'profile/:username',
          element: <Profile />
        },
      ]
    },
  ]);

  return elements;
};