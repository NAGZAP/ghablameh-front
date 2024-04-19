import React from 'react';
import styles from  '../styles/input.module.css';

const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
const InputField = () => {
  return (
    <div>
    <div className={styles.pattern}>
      <label htmlFor="email" className={styles.label}>
            input
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              required
            />
            </div>
            </div>
  );
};

export default InputField;