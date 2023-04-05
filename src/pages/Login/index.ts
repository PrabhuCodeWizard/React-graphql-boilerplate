/**
 * Asynchronously loads the component for Login
 */

import { lazyLoad } from '../../utils/lazyLoader';

const LoginComponent = lazyLoad(
  () => import('./LoginComponent'),
  module => module.LoginComponent,
);

export default LoginComponent;
