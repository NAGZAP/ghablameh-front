/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styles from '../styles/wallet.module.css';
import PropTypes from 'prop-types';
import axios from "axios";
import AuthManager from "../APIs/AuthManager";

// const UserWallet = (props) => {
const UserWallet = ({ open, setOpen }) => {
    // const [open, setOpen] = useState(props.open);
    const [fetchedAmount, setFetchedAmount] = useState('0');
    const [amount, setAmount] = useState('0');
    const [error, setError] = useState('');


    //fetch data
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             // https://jsonplaceholder.typicode.com/users/1
    //             const token = AuthManager.getToken();

    //             const response = await axios.get("https://ghablameh.fiust.ir/api/v1/clients/me/",
    //                 { headers: { Authorization: "JWT " + token } }
    //             );
    //             setFetchedAmount(response.data);
    //         } catch (error) {
    //             console.error("Error fetching user data: ", error);
    //         }
    //     };
    //     if (AuthManager.isLoggedIn()) fetchUserData();
    // }, []);


    //send data
    const handleTopUp = (user) => {

        const token = 'JWT ' + localStorage.getItem("token");

        const url = 'https://ghablameh.fiust.ir/api/v1/organizations/join-requests/' + user.id + '/'

        try {
            const response = axios.patch(url, amount, {
                headers: {
                    'Authorization': token
                }
            });
            if (response.status === 200) {
                console.log('formData submitted successfully');
            } else {
                const errorData = response.json();
                console.log('formData submission failed:', errorData);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
        setOpen(false);
    };

    //error
    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (!/^\d+$/.test(value)) {
            setError('مقدار دلخواه خود را به عدد وارد کنید');
        } else {
            setError('');
            setAmount(value);
        }
    };

    const handlePresetAmount = (presetAmount) => {
        setAmount(presetAmount);
    };

    const walletModal = () => (
        <div className="p-4">
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-10 px-14 rounded-lg shadow-lg items-center justify-center">
                        <div className=' mb-9 mt-4'>
                            <h1 className="flex text-lg font-bold justify-center" style={{ fontSize: '1.6rem' }}>
                                کیف پول
                            </h1>
                            <hr style={{ margin: '8px 0', border: '0.5px solid rgb(38, 87, 124)' }} />

                        </div>
                        <div className='flex flex-row w-full items-center justify-between'>
                            <h3 className="px-3">موجودی فعلی :</h3>
                            <div className={`${styles.bgmee} text-white py-1 px-3 rounded-lg`} style={{ fontSize: '1rem' }}>
                                {fetchedAmount} تومان
                            </div>
                        </div>
                        <div className='flex justify-center flex-col mb-9 mt-4'>
                            <label className={`${styles.label} mt-6 mb-2`} style={{ fontSize: '1.6rem' }}>
                                افزایش اعتبار
                            </label>
                            <hr style={{ margin: '8px 0', border: '0.5px solid #ccc' }} />

                        </div>

                        <div className='flex flex-row justify-center mb-7'>
                            <div className='px-1' onClick={() => handlePresetAmount('20000')}><div className={`${styles.bgme} text-white py-2 px-3 rounded-lg flex flex-col justify-center items-center`}> 20,000 تومان </div></div>
                            <div className='px-1' onClick={() => handlePresetAmount('40000')}><div className={`${styles.bgme} text-white py-2 px-3 rounded-lg flex flex-col justify-center items-center`}> 40,000 تومان </div></div>
                            <div className='px-1' onClick={() => handlePresetAmount('60000')}><div className={`${styles.bgme} text-white py-2 px-3 rounded-lg flex flex-col justify-center items-center`}> 60,000 تومان </div></div>
                        </div>

                        <div className='flex justify-center flex-col mt-8 mb-12 items-center'>
                            <input
                                placeholder=' مبلغ دلخواه '
                                value={amount !== '0' ? amount : ''}
                                // type="text"
                                onChange={handleAmountChange}
                                className={`${styles.input} mb-1`}
                                style={{ width: '17vw', textAlign: 'center' }} // Adjust the width as needed, 'auto' or specific value
                            />
                            {error && <span className='text-sm' style={{ color: 'red' }}>{error}</span>}
                        </div>
                        <div className='flex flex-row justify-center'>
                            <button onClick={handleTopUp} className={`${styles.button1} mx-2 text-white py-2 px-4 rounded mr-2`}>
                                افزایش موجودی
                            </button>
                            <button onClick={() => setOpen(false)} className={`${styles.button2} bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded`}>
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <div className={`flex flex-col`}>
                <div className='flex flex-grow justify-center items-center m-3'>
                    {walletModal()}
                </div>
            </div>
        </div>
    );
};

UserWallet.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};


export default UserWallet;