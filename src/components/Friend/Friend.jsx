import css from './Friend.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, online }) => {
  return (
    <li className={css.item}>
      <span className={css[online]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
