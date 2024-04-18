// import { useState } from 'react';
import styles from '../styles/addBuffet.module.css';
import { useModalState } from './modalState';
function AddBuffet() {
    const { showMyModel, setShowMyModel } = useModalState();
    
    // Model
    const onClose = () => {
        setShowMyModel(false);
    };

    const handleOnClose = (e) => {
        if (e.target.id === "close") onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            {/* Modal toggle button */}
            {/* <button onClick={() => setShowMyModel(true)} className={`${styles['update-button-me']} text-white rounded text-sm text-center`} type="button"> افزودن بوفه </button> */}

            {/* Main modal */}
            m
        </div>
    );
}

export default AddBuffet;