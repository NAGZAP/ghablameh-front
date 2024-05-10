import { useState } from 'react';
// import { WalletIcon } from '@heroicons/react/20/solid';
import styles from '../styles/wallet.module.css'
const UserWallet = () => {
    const [amount, setAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTopUp = () => {
        console.log(`Top up amount: ${amount}`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4">
            <svg onClick={openModal} style={{ height: '2rem', width: '2rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg items-center justify-center">
                        <h1 className="flex text-lg font-bold mb-4 justify-center" style={{ fontSize: '2rem' }}> کیف پول </h1>

                        <h1 className="flex text-lg font-bold mb-4 justify-center" style={{ fontSize: '2rem' }}> موجودی  </h1>

                        <div className='flex justify-center flex-col'>
                            <label htmlFor="confirmPassword" className={`${styles.label} mt-4 mb-2`}>
                                افزایش اعتبار
                            </label>
                            <input
                                type="number"
                                placeholder=" مقدار دلخواه خود را وارد کنید "
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className={`${styles.input} mb-2`}
                            />
                        </div>
                        <div className='flex flex-row justify-center'>
                            <button onClick={handleTopUp} className={`${styles.button1} mx-2 text-white py-2 px-4 rounded mr-2`} >
                                افزایش موجودی
                            </button>
                            <button onClick={closeModal} className={`${styles.button2} bg-gray-500 hover:bg-gray-700 text-white  py-2 px-4 rounded`}>
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserWallet;