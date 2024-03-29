// import { useState, useEffect } from 'react';
import { useState } from 'react';
import '../styles/updateorginfo.css';

function Updateorg() {
    const [ShowMyModel, SetShowMyModel] = useState(false);

    const onClose = () => {
        SetShowMyModel(false);
    }
    const handleOnClose = (e) =>{
        if (e.target.id === "close" ) onClose();
    }

    return (
        <div>
            {/* Modal toggle button */}
            <button onClick={() => SetShowMyModel(true)} className="text-white rounded-lg text-sm text-center button-me" type="button">Update Info</button>

            {/* Main modal */}
            {ShowMyModel && (
                <div id='close' onClick={handleOnClose} className="fixed full-screen flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
                    <div className='bg-white p-2 rounded text-center'>
                    <h1 className='block'>Modal Title</h1>
                    <button onClick={onClose} className='button-me block mt-4'>Close</button>
                </div>
                </div>
            )}
        </div>
    );
}


export default Updateorg;

