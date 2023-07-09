import { useLocation } from 'react-router-dom';

import { BackLink } from '../components/BackLink/BackLink';
import { CoctailInfo } from '../components/CoctailInfo/CoctailInfo';

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
