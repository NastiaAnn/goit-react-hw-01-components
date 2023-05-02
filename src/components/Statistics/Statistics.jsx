import css from './Statistics.module.css';

export const StatisticBoard = ({ title, id, label, percentage }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      </ul>
    </section>
  );
};
