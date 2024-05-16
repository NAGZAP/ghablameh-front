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
        if (!Number.isInteger(Number(value))) {
          setError('مقدار دلخواه خود را به عدد وارد کنید');
        } else {
          setError('');
        }
        setAmount(value);
      };
    const walletModal = () => (
        <div className="p-4">
            {/* {open && ( */}
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-10 px-14 rounded-lg shadow-lg items-center justify-center">
                    <div className=' mb-9 mt-4'>
                        <h1 className="flex text-lg font-bold justify-center" style={{ fontSize: '1.6rem' }}>
                            کیف پول
                        </h1>
                        <hr style={{ margin: '8px 0', border: '0.5px solid rgb(38, 87, 124)' }} />

                    </div>
                    <div className={`${styles.bgme} text-white p-2 rounded-lg`}>
                        <h3 className="flex mb-4 justify-center">موجودی: </h3>
                        <h1 className="flex text-lg font-bold mb-4 justify-center" style={{ fontSize: '2.2rem' }}>
                            {fetchedAmount} تومان
                        </h1>
                    </div>
                    <div className='flex justify-center flex-col mb-5'>
                        <label htmlFor="confirmPassword" className={`${styles.label} mt-6 mb-2 `}>
                            افزایش اعتبار
                        </label>
                        <input
                            placeholder="مقدار دلخواه خود را وارد کنید"
                            // value={amount}
                            // type="text"
                            onChange={handleAmountChange}
                            className={`${styles.input} mb-2`}
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
            {/* )} */}
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