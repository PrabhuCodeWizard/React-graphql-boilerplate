/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from '../../utils/lazyLoader';

const DashboardLayout = lazyLoad(
  () => import('./DashboardLayout'),
  module => module.DashboardLayout,
);

export default DashboardLayout;
