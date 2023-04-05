/**
 * Asynchronously loads the component for Header
 */

import { lazyLoad } from '../../../../utils/lazyLoader';

const HeaderComponent = lazyLoad(
  () => import('./HeaderComponent'),
  module => module.HeaderComponent,
);

export default HeaderComponent;
