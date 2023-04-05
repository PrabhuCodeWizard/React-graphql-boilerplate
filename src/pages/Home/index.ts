/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from '../../utils/lazyLoader';

const HomeComponent = lazyLoad(
  () => import('./HomeComponent'),
  module => module.HomeComponent,
);

export default HomeComponent;
