import css from './FriendList.module.css';
import { Friend } from 'components/Friend/Friend';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} online={isOnline} />
      ))}
    </ul>
  );
};

const friendShape = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
});

FriendList.propTypes = {
  friends: PropTypes.arrayOf(friendShape).isRequired,
};
