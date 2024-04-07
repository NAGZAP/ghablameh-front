import { useState, useRef, useEffect } from 'react';
import styles from '../styles/updateorg.module.css';
import Avatar from 'react-avatar';
import axios from 'axios';
// import isLoggedIn from '../APIs/AuthManager.js';
function Updateorg() {

    // fetch org data
    const [fetchedOrgData, setFetchedOrgData] = useState(null);
    useEffect(() => {
        const fetchOrgData = async () => {
            try { //https://ghablameh.fiust.ir/api/v1/organizations/me/
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setFetchedOrgData(response.data);

            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchOrgData();
    }, []);

    // fetch org password ???
    // const [fetchedorgPassData, setFetchedorgPassData] = useState(null);
    // useEffect(() => {
    //     const fetchorgPassData = async () => {
    //         try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/OrganizationChangePassword
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    //             setFetchedorgPassData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data: ', error);
    //         }
    //     };
    //     fetchorgPassData();
    // }, []);

    // model
    const [showMyModel, setShowMyModel] = useState(false);

    const onClose = () => {
        setShowMyModel(false);
    };
    const handleOnClose = (e) => {
        if (e.target.id === "close") onClose();
    };

    //read and save image
    const [imagePreview, setImagePreview] = useState('');
    const fileInputRef = useRef(null);

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        let reader = new FileReader();

        reader.onload = (e) => {
            setImagePreview(e.target.result);
            setOrgData({ ...orgData, [event.target.name]: event.target.value })
        };

        reader.readAsDataURL(file);
    };

    //show image
    function userPicuter() {
        return (
            <div className="flex justify-center mt-4">
                <label htmlFor="fileInput" className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center">
                    <input name='image_base64' type="file" id="fileInput" ref={fileInputRef} className="hidden" onChange={handleImage} accept="image/*" />
                    {imagePreview ? (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (fetchedOrgData.image ? (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${orgData.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (
                        <div className="user-profile flex items-center">
                            <Avatar name={orgData.name} size="80" round={true} maxInitials={1} />
                        </div>
                    )
                    )}
                </label>
            </div>
        );
    }


    //information
    const [orgData, setOrgData] = useState({
        name: fetchedOrgData && fetchedOrgData.name !== null ? fetchedOrgData.name : "",
        image_base64: fetchedOrgData && fetchedOrgData.image_base64 !== null ? fetchedOrgData.image_base64 : "",
        admin_username: fetchedOrgData && fetchedOrgData.admin_username !== null ? fetchedOrgData.admin_username : "",
        admin_first_name: fetchedOrgData && fetchedOrgData.admin_first_name !== null ? fetchedOrgData.admin_first_name : "",
        admin_last_name: fetchedOrgData && fetchedOrgData.admin_last_name !== null ? fetchedOrgData.admin_last_name : "",
        admin_phone_number: fetchedOrgData && fetchedOrgData.admin_phone_number !== null ? fetchedOrgData.admin_phone_number : "",
        admin_email: fetchedOrgData && fetchedOrgData.admin_email !== null ? fetchedOrgData.admin_email : ""
    });


    const handleOrgInput = (event) => {
        setOrgData({ ...orgData, [event.target.name]: event.target.value })
    }

    function organizationInfo() {
        return (
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 ">

                <div className="sm:col-span-2 p-2 ">
                    <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}> نام سازمان </label>
                    <input name="name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                    <span className={`${styles['not-valid']}`}>{formError.name} </span>
                </div>

                <div className="sm:col-span-2 p-2">
                    <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}>نام مدیر سازمان</label>
                    <input name="admin_first_name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام " />
                    <span className={`${styles['not-valid']}`}> {formError.admin_first_name} </span>
                    <input name="admin_last_name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام خانوادگی" />
                    <span className={`${styles['not-valid']}`}> {formError.admin_last_name} </span>
                </div>

                <div className="sm:col-span-2 p-2 ">
                    <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}> نام کاربری مدیر سازمان </label>
                    <input name="admin_username" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام کاربری مدیر سازمان " />
                    <span className={`${styles['not-valid']}`}> {formError.admin_username} </span>
                </div>

                <div className="sm:col-span-2 p-2 ">
                    <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}> ایمیل مدیر سازمان</label>
                    <input name="admin_email" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" ایمیل مدیر سازمان" />
                    <span className={`${styles['not-valid']}`}> {formError.admin_email} </span>
                </div>

                <div className="sm:col-span-2 p-2 ">
                    <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}> شماره تماس مدیر سازمان</label>
                    <input name="admin_phone_number" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" شماره تماس مدیر سازمان" />
                    <span className={`${styles['not-valid']}`}> {formError.admin_phone_number} </span>
                </div>

            </div>
        );
    }

    //password
    const inputRef = useRef(null);
    const [orgPassData, setOrgPassData] = useState({
        old_password: "",
        new_password: "",
        confirm_new_password:""
    })

    // const handleOrgPass = (event) => {
    //     // console.log(event.target.value)
    //     setOrgPassData({
    //         ...orgPassData
    //         ,[event.target.name]: event.target.value
    //     })
    // }
    
    const handleOrgPass = (event) => {
        const { name, value } = event.target;
        setOrgPassData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    function PasswordFields() {
        return (
            <div className='flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h3 className={`${styles.changepassbutton} flex justify-center p2 mb-1 text-base`}>تغییر رمز عبور</h3>
                </div>
                
                <div className={`${styles['border-t']} my-4`}></div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 p-2">
                    <div className="sm:col-span-2">
                        <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}>رمز عبور فعلی</label>
                        <input ref={inputRef} type="password" name="old_password" value={orgPassData.old_password} onChange={(e) => handleOrgPass(e)}className="text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور فعلی"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}>رمز عبور جدید</label>
                        <input type="password" name="new_password" value={orgPassData.new_password} onChange={(e) => handleOrgPass(e)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور جدید" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}>تکرار رمز عبور جدید</label>
                        <input type="password" name="confirm_new_password" onChange={(e) => handleOrgPass(e)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="تکرار رمز عبور جدید" />
                    </div>
                    <span className={`${styles['not-valid']}`}>{formError.passwordsDonotMatch} </span>
                </div>
            </div>
        );
    }

    //handle errors
    const [formError, setFormError] = useState({})

    const validateForm = () => {
        let err = {}

        if (typeof orgData.name !== 'string' || orgData.name.length < 1 || orgData.name.length > 127) {
            err.name = '.نام سازمان نمی تواند خالی باشد!';
        }
        
        if (typeof orgPassData.admin_username !== 'string' || orgPassData.admin_username.length < 1) {
            err.admin_username = '.نام کاربری مدیر باید یک رشته خالی نباشد!';
        }
        
        if (typeof orgPassData.admin_first_name !== 'string' || orgPassData.admin_first_name.length < 1) {
            err.admin_first_name = '.نام مدیر نمی تواند خالی باشد';
        }
        
        if (typeof orgPassData.admin_last_name !== 'string' || orgPassData.admin_last_name.length < 1) {
            err.admin_last_name = '.نام خانوادگی مدیر  نمی تواند خالی باشد';
        }
        
        const emailPattern = /\S+@\S+\.\S+/;
        if (typeof orgPassData.admin_email !== 'string' || !emailPattern.test(orgPassData.admin_email)) {
            err.admin_email = '.یک آدرس ایمیل معتبر وارد کنید';
        }

        if (typeof orgPassData.admin_phone_number !== 'string' || orgPassData.admin_phone_number.length < 1) {
            err.admin_phone_number = '.شماره تماس مدیر نمی تواند خالی باشد';
        }
        
        if (orgPassData.new_password !== orgPassData.confirm_new_password) {
            err.passwordsDonotMatch = '.رمز عبور جدید و تکرار آن مطابقت ندارند ';
        }
        setFormError({ ...err })

        return false;
    }

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(orgData);
        
        let isValid = validateForm();
        // console.log(isValid);
    
        if (isValid) {
            //org
            //https://jsonplaceholder.typicode.com/users/1
            axios.put('https://ghablameh.fiust.ir/api/v1/organizations/me/', { orgData })
                .then(response => console.log(response))
                .catch(error => console.log(error));
    
            //pass
            //https://jsonplaceholder.typicode.com/posts
            axios.post('https://ghablameh.fiust.ir/api/v1/organizations/password/', { orgPassData })
                .then(response => console.log(response))
                .catch(error => console.log(error));
    
            setShowMyModel(false);
        }
    }
// <footer className={styles.footersection}>
    //   <div className={`${styles.changepassbutton} flex justify-center p2 mb-1 text-base`}>
    //     <div className={`${styles['submit-button-me']} text-white text-center`}></div>
    //     </footer>
    return (
        <div>
            {/* Modal toggle button */}
            <button onClick={() => setShowMyModel(true)} className={`${styles['update-button-me']} text-white rounded text-sm text-center`} type="button">ویرایش اطلاعات</button>

            {/* Main modal */}
            {showMyModel && (
                <div id='close' onClick={handleOnClose} className={`${styles['modal-me']} fixed bg-black`}>
                    <div className="bg-white rounded p-2">
                        <div className='flex flex-row justify-end'>
                            <button onClick={onClose} className={`${styles['close-button-me']} text-sm`}>X</button>
                        </div>

                        <div style={{ height: "600px", overflowY: "scroll" }}>
                            <div className="max-w-2xl px-4 py-8 lg:py-16">
                                <h2 className="mb-2 text-xl font-bold text-gray-900 text-center">ویرایش اطلاعات</h2>
                                <form onSubmit={handleSubmit} className={`${styles['border-t']}`}>
                                    {userPicuter()}
                                    {organizationInfo()}
                                    <PasswordFields />
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

export default Updateorg;