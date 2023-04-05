/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from '../../utils/lazyLoader';

const AuthLayout = lazyLoad(
  () => import('./AuthLayout'),
  module => module.AuthLayout,
);

export default AuthLayout;
