import { useState } from 'react';
import './NavLink.scss'
import { Color } from '../../types/Color';
import { 
  ArrowIcon,
  CubeIcon,
  DiscountIcon,
  KeyIcon,
  QuestionIcon,
  UserIcon,
  WalletIcon } from '../Icon/Icon';


type Props = {
  title: string,
};

export const NavLink: React.FC<Props> = ({ title }) => {
  const [colorState, setColorState] = useState(Color.Gray);

  return (
    <a
      href='#'
      onMouseOver={() => setColorState(Color.White)}
      onMouseLeave={() => setColorState(Color.Gray)}
      className='nav-link'
    >
      <div className='nav-link__icon'>
        {title === 'Dashboard' && <KeyIcon color={colorState} />}
        {title === 'Product' && <CubeIcon color={colorState} />}
        {title === 'Customers' && <UserIcon color={colorState} />}
        {title === 'Income' && <WalletIcon color={colorState} />}
        {title === 'Promote' && <DiscountIcon color={colorState} />}
        {title === 'Help' && <QuestionIcon color={colorState} />}
      </div>

      <span className='nav-link__title'>{title}</span>

      <div className='nav-link__active-flag'>
        <ArrowIcon color={colorState} />
      </div>
    </a>
  )
};
