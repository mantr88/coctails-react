import { useLocation } from 'react-router-dom';

import BackLink from '../modules/about-coctail/BackLink/BackLink';
import CoctailInfo from '../modules/about-coctail/CoctailInfo/CoctailInfo';

const OneCoctail = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to coctails</BackLink>
      <CoctailInfo />
    </main>
  );
};

export default OneCoctail;
