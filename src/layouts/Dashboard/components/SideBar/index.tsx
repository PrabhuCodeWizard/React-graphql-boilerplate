/**
 * Asynchronously loads the component for sidebar
 */

import { lazyLoad } from '../../../../utils/lazyLoader';

const SideBarComponent = lazyLoad(
  () => import('./SideBarComponent'),
  module => module.SideBarComponent,
);

export default SideBarComponent;
