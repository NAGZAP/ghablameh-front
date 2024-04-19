import React from 'react';
import styles from './Cards.module.css';
import PropTypes from 'prop-types';

function Cards(props) {
  if (props.isDeleted) {
    return null;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.card_orgName}>{props.name}</h2>
      <h3 className={styles.card_orgNum}>{props.counter_organ}</h3>
      <button className={styles.button} type="button"><a href='#'>ویرایش</a></button>
      <button onClick={props.onDelete} className={styles.button} type="button">پاک کردن</button>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  counter_organ: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default Cards;
