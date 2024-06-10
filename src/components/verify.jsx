import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import AuthManager from '../APIs/AuthManager';
import Navbarparent from './navbarparent';
import styles from '../styles/wallet.module.css'
import axios from 'axios';

function Verify() {

    const [searchParams] = useSearchParams();
    const queryparamtoken = searchParams.get('token');
    const [isLoading, setIsLoading] = useState(true);
    const [verificationSuccessful, setVerificationSuccessful] = useState(false);
    const [verificationFailed, setVerificationFailed] = useState(false);
    const [resultUnknown, setResultUnknown] = useState(false);
    const navigate = useNavigate();

    //icon style
    const variants = {
        visible: { scale: 1.5, opacity: 1, transition: { duration: 0.4 } },
        hidden: { scale: 0, opacity: 0 },
    };

    useEffect(() => {
        const verifyPayment = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post('https://ghablameh.fiust.ir/api/v1/wallets/verify/', queryparamtoken, {
                    headers: {
                        'Authorization': 'JWT ' + AuthManager.getToken(),
                    }
                });

                if (response.status === 200 && response.data.status=='COMPLETED') {
                    setIsLoading(false);
                    setVerificationSuccessful(true);

                }else if (response.status === 200 && response.data.status=='UNCOMPLETED') {
                    setIsLoading(false);
                    setVerificationFailed(true);

                } else {
                    console.log(response.data);
                    setIsLoading(false);
                    setResultUnknown(true);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                setIsLoading(false);
                setResultUnknown(true);
            }
        };

        if (queryparamtoken) {
            verifyPayment();
        }
    }, [queryparamtoken]);

    return (
        <div>
            <Navbarparent />
            <div className="flex flex-col items-center justify-center container mx-auto px-4 pt-10" style={{ minHeight: '50vh' }}>

                {isLoading && (
                    <div className="flex flex-col items-center justify-center">
                        <div className={`${styles.spinner}`}></div>
                        <p className="text-center text-gray-500 m-9"> در حال دریافت اطلاعات...  </p>
                    </div>
                )}

                {verificationSuccessful && (
                    <div className="flex flex-col items-center justify-center container mx-auto" >
                        <p className="text-center text-green-600 font-bold text-xl m-10 mb-12"> پرداخت با موفقیت انجام شد. </p>
                        <motion.div
                            className="text-green-600 font-bold text-6xl mx-auto mb-9"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </motion.div>
                    </div>
                )}

                {verificationFailed && (
                    <div className="flex flex-col items-center justify-center container mx-auto" >
                        <p className="text-center text-red-700 font-bold text-xl m-10 mb-12"> پرداخت ناموفق بود. </p>
                        <motion.div
                            className="text-red-700 font-bold text-6xl mx-auto mb-9"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </motion.div>
                    </div>
                )}

                {resultUnknown && (
                    <div className="flex flex-col items-center justify-center container mx-auto" >
                        <p className="text-center text-yellow-400 font-bold text-xl mt-12 mb-3">متاسفانه نتیجه تراکنش نامشخص می باشد.</p>
                        <p className="text-center text-yellow-400 font-bold text-xl mb-12"> لطفا کیف پول خود را بررسی کنید.</p>
                        
                        <motion.div
                            className="text-yellow-400 font-bold text-6xl mx-auto mb-7"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <FontAwesomeIcon icon={faExclamationCircle} />
                        </motion.div>
                    </div>
                )}

                {!isLoading && (
                    <div className='flex justify-center my-10' >
                        <button
                            className=" text-white px-4 py-2 rounded w-48 shadow"
                            style={{ backgroundColor: 'rgb(38, 87, 124)' }}
                            onClick={() => navigate('/')}
                        >
                            بازگشت به صفحه اصلی
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Verify;