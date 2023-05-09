import LogoIcon from './../../images/setting 1.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className='logo'>
      <img
        className='logo__icon'
        src={LogoIcon}
        alt="Dashboard"
      />
      <span className='logo__title'>Dashboard</span>
    </div>
  )
};
