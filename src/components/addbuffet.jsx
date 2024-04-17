import { useState } from 'react';
import styles from '../styles/addBuffet.module.css';

function AddBuffet() {
    // Model
    
    const onClose = () => {
        setShowMyModel(false);
    };

    const [showMyModel, setShowMyModel] = useState(false);
    window.showMyModel = showMyModel;

    const onOpen =() =>{
        setShowMyModel(true)
    }

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
            {showMyModel && (
                <div id='close' onClick={handleOnClose} className={`${styles['modal-me']} fixed `}>
                    <div className={`bg-white rounded p-2 ${styles['modal-content']}`} >
                        <div className='flex flex-row justify-end'>
                            <button onClick={onClose} className={`${styles['close-button-me']} text-sm`}>X</button>
                        </div>

                        <div style={{ width: "400px" }}>
                            <div className="max-w-2xl px-4 ">
                                <h2 className="mb-2 text-xl font-bold text-gray-900 text-center"> افزودن بوفه </h2>
                                <form onSubmit={handleSubmit} className={`${styles['border-t']}`}>
                                    <div className="sm:col-span-2 p-3">
                                        <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}> نام بوفه </label>
                                        <input name="admin_phone_number" className="text-gray-900 rounded-md block w-full p-2.5" style={{ border: '1px solid #000000' }}  />
                                        
                                    </div>
                                    <div className="flex items-center justify-center space-x-4">
                                        <button type="submit" className={`${styles['submit-button-me']} text-white text-center`}>ذخیره</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddBuffet;