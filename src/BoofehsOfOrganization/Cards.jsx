import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cards.module.css';

function Cards(props) {
  if (props.isDeleted) {
    return null;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.card_orgName}>{props.name}</h2>
      <h3 className={styles.card_orgNum}>{props.counter_organ}</h3>
      {/* Edit button */}
      <button onClick={props.onEdit} className={styles.button} type="button">ویرایش</button>

      {/* Delete button */}
      <button onClick={props.onDelete} className={styles.button} type="button">
        پاک کردن
      </button>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  counter_organ: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default Cards;
