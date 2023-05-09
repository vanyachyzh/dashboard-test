import { UserInfo } from '../../types/UserInfo';
import './User.scss';

type Props = {
  user: UserInfo
};

export const User: React.FC<Props> = ({ user }) => {
  return (
    <div className='user'>
      <img
        className='user__image'
        src={user.photo}
        alt="Dashboard"
      />

      <div className='user__info'>
        <span className='user__name'>{user.name}</span>
        <span className='user__position'>{user.position}</span>
      </div>
    </div>
  )
};
