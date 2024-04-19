import React, { useState } from 'react';
import styles from './Cards.module.css';
import defaultpic from "/src/assets/profilepic.jpg";
import PropTypes from 'prop-types';

function Cards(props) {
  const [deleted, setDeleted] = useState(false);
  const handleClickDelete = () => {
    console.log("Delete button clicked");
    setDeleted(true);
  };

  if (deleted) {
    return null; 
  }

  return (
    <div className={styles.card}>
{/*       <img className={styles.card_image} src={defaultpic} alt="عکس شرکت" />
 */}      <h2 className={styles.card_orgName}>{props.name}</h2>
      <h3 className={styles.card_orgNum}>{props.counter_organ}</h3>
      <button className={styles.button} type="button"><a href='#'>ویرایش</a></button> 
      <button onClick={handleClickDelete} className={styles.button} type="button">پاک کردن</button> 
    </div>
  );
}

/* Cards.propTypes = {
  name: PropTypes.string,
  counter_organ: PropTypes.string,
}; */

Cards.defaultProps = {
  name: "Guest",
  counter_organ: "0",
};

export default Cards;