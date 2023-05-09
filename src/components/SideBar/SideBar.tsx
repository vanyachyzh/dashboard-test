import { useState } from 'react';
import { Color } from "../../types/Color";
import { UserInfo } from "../../types/UserInfo";
import { Logo } from "../Logo/Logo";
import { NavLink } from "../NavLink/NavLink";
import { User } from "../User/User";
import './SideBar.scss';
import { CloseIcon, MenuIcon } from '../Icon/Icon';

type Props = {
  user: UserInfo
}

export const SideBar: React.FC<Props> = ({ user }) => {
  const [colorState, setColorState] = useState(Color.Gray);

  return (
    <div className="sidebar" id="menu">
      <div className="sidebar__logo">
        <Logo />
      </div>

      <a
        className='sidebar__menu-button'
        onMouseOver={() => setColorState(Color.Purple)}
        onMouseLeave={() => setColorState(Color.Gray)}
        href='#'
      >
        <CloseIcon color={colorState} />
      </a>

      <nav>
        <div className="sidebar__link">
          <NavLink title="Dashboard" />
        </div>

        <div className="sidebar__link">
          <NavLink title="Product" />
        </div>

        <div className="sidebar__link">
          <NavLink title="Customers" />
        </div>

        <div className="sidebar__link">
          <NavLink title="Income" />
        </div>

        <div className="sidebar__link">
          <NavLink title="Promote" />
        </div>

        <div className="sidebar__link">
          <NavLink title="Help" />
        </div>
      </nav>

      <div className="sidebar__user">
        <User user={user} />
      </div>
    </div>
  );

} 