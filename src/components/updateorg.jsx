import { useState, useRef, useEffect } from 'react';
import '../styles/updateorg.css';
import Avatar from 'react-avatar';
import axios from 'axios';

function Updateorg() {

    // fetch org data
    const [fetchedOrgData, setFetchedOrgData] = useState(null);
    useEffect(() => {
        const fetchOrgData = async () => {
            try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/Organizations/me
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setFetchedOrgData(response.data);
                
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchOrgData();
    }, []);

    // fetch org password ???
    const [fetchedorgPassData, setFetchedorgPassData] = useState(null);
    useEffect(() => {
        const fetchorgPassData = async () => {
            try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/OrganizationChangePassword
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setFetchedorgPassData(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchorgPassData();
    }, []);

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
                <label htmlFor="fileInput" className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center cursor-pointer">
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
        name: "",
        image_base64: "",
        admin_username: "",
        admin_first_name:"",
        admin_last_name: "",
        admin_phone_number: "",
        admin_email: ""
    })

    const handleOrgInput = (event) => {
        setOrgData({ ...orgData, [event.target.name]: event.target.value })
    }

    function organizationInfo() {
        return (
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 ">

                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام سازمان </label>
                    <input name="name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                    {/* value={orgData.name} */}
                </div>
                <div className="sm:col-span-2 p-2">
                    <label className="block mb-2 text-sm text-gray-90 text-right">نام مدیر سازمان</label>
                    <input name="admin_first_name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام " />
                    <input name="admin_last_name" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام خانوادگی" />
                    {/* value={orgData.admin_first_name} */}
                    {/* value={adminData.admin_last_name} */}
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام کاربری مدیر سازمان </label>
                    <input name="admin_username" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام کاربری مدیر سازمان " />
                    {/* value={orgData.admin_username} */}
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> ایمیل مدیر سازمان</label>
                    <input name="admin_email" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" ایمیل مدیر سازمان" />
                    {/* value={orgData.admin_email} */}
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> شماره تماس مدیر سازمان</label>
                    <input name="admin_phone_number" onChange={handleOrgInput} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" ایمیل مدیر سازمان" />
                    {/* value={orgData.admin_phone_number} */}
                </div>

            </div>
        );
    }
    
    //password
    const inputRef = useRef(null);
    const [orgPassData, setOrgPassData] = useState({
        old_password: "",
        new_password: ""
    })

    const handleOrgPass = (event) => {
        setOrgPassData({
            ...orgPassData
            ,[event.target.name]: event.target.value
        })
    }
    function PasswordFields() {
        return (
            <div className='flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h3 className='flex justify-center p2 mb-1 changepassbutton text-base'>تغییر رمز عبور</h3>
                </div>
                <div className="border-t my-4"></div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 p-2">
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور فعلی</label>
                        <input
            ref={inputRef}
            type="password"
            name="old_password"
            value={orgPassData.old_password}
            onChange={handleOrgPass}
            className="text-gray-900 rounded-md block w-full p-2.5"
            placeholder="رمز عبور قبلی"
        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور جدید</label>
                        <input type="password" name="new_password" value={orgPassData.new_password} onChange={handleOrgPass} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور جدید" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm text-gray-90 text-right">تکرار رمز عبور جدید</label>
                        <input type="password" name="confirm_new_password" onChange={handleOrgPass} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="تکرار رمز عبور جدید" />
                    </div>
                </div>
            </div>
        );}

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        //org
        //https://jsonplaceholder.typicode.com/users/1
        axios.put(' https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/Organizations/me', { orgData })
            .then(response => console.log(response))
            .catch(error => console.log(error));

        //pass
        //https://jsonplaceholder.typicode.com/posts
        axios.post('https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/OrganizationChangePassword', { orgPassData })
            .then(response => console.log(response))
            .catch(error => console.log(error));

        setShowMyModel(false);
    }

    return (
        <div>
            {/* Modal toggle button */}
            <button onClick={() => setShowMyModel(true)} className="text-white rounded text-sm text-center update-button-me" type="button">ویرایش اطلاعات</button>

            {/* Main modal */}
            {showMyModel && (
                <div id='close' onClick={handleOnClose} className="fixed full-screen bg-black bg-opacity-30 modal-me ">
                    <div className="bg-white dark:bg-gray-900 rounded p-2">
                        <div className='flex flex-row justify-end'>
                            <button onClick={onClose} className='close-button-me text-sm'>X</button>
                        </div>

                        <div className="form-container" style={{ height: "600px", overflowY: "scroll" }}>
                            <div className="max-w-2xl px-4 py-8 lg:py-16">
                                <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white text-center">ویرایش اطلاعات</h2>
                                <form onSubmit={handleSubmit} className='border-t'>
                                    {userPicuter()}
                                    {organizationInfo()}
                                    <PasswordFields />
                                    <div className="flex items-center justify-center space-x-4">
                                        <button type="submit" className="text-white text-center submit-button-me">ذخیره</button>
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