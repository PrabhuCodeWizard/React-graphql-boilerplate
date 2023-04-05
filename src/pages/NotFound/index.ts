/**
 * Asynchronously loads the component for Login
 */

import { lazyLoad } from '../../utils/lazyLoader';

const NotFoundComponent = lazyLoad(
  () => import('./NotFoundComponent'),
  module => module.NotFoundComponent,
);

export default NotFoundComponent;
