import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { ListIcon } from 'components/icons/ListIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { SecondaryCheckmarkIcon } from 'components/icons/CheckmarkIcon';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { EmailIcon } from 'components/icons/EmailIcon';
import { MapIcon } from 'components/icons/MapIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <CartIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
    { icon: <ListIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <SecondaryCheckmarkIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <AchiveIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <EmailIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <MapIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <CartIcon />, title: 'security', href: ROUTES.PRIVATE.MESSAGES },
    
  ],
};
