import { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/updateorg.css';
import Avatar from 'react-avatar';
import axios from 'axios';

function Updateorg() {

    //fetch org data
    const [orgData, setOrgData] = useState(null);
    useEffect(() => {
        const fetchOrgData = async () => {
            try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/Organizations/me
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setOrgData(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchOrgData();
    }, []);

    //fetch admin data
    const [adminData, setAdimData] = useState(null);
    useEffect(() => {
        const fetchOrgData = async () => {
            try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/Organizations/admin
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setAdimData(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchOrgData();
    }, []);

    //read and save pic
    const [profilePic, setProfilePic] = useState('');
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
            setProfilePic(e.target.result);
        };
    
        reader.readAsDataURL(file);
    };

    // model
    const [showMyModel, setShowMyModel] = useState(false);

    const onClose = () => {
        setShowMyModel(false);
    };
    const handleOnClose = (e) => {
        if (e.target.id === "close") onClose();
    };

    //functions
    function userPicuter() {
        return (
            <div className="flex justify-center mt-4">
                <label htmlFor="fileInput" className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center cursor-pointer">
                    <input name='profilepic' type="file" id="fileInput" ref={fileInputRef} className="hidden" onChange={handleImage} accept="image/*" />
                    {imagePreview ? (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (
                        <div className="user-profile flex items-center">
                            <Avatar name={orgData.name} size="80" round={true} maxInitials={1} />
                        </div>
                    )}
                </label>
            </div>
        );
    }

    //information
    const [name, setName] = useState('');
    const [adminName, setAdminName] = useState('');
    const [adminUsername, setAdminUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adminLastName, setAdminLastName] = useState('');

    function userInfo() {
        return (
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 ">

                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام سازمان </label>
                    <input name="name" onChange={(e) => setName(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان "/>
                    {/* value={orgData.name} */}
                </div>
                <div className="sm:col-span-2 p-2">
                    <label className="block mb-2 text-sm text-gray-90 text-right">نام مدیر سازمان</label>
                    <input name="adminName" onChange={(e) => setAdminName(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام " />
                    <input name="adminLastName" onChange={(e) => setAdminLastName(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="نام خانوادگی" />
                    {/* value={adminData.name} */}
                    {/* value={adminData.Lastname} */}
                    </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام کاربری مدیر سازمان </label>
                    <input name="adminUsername" onChange={(e) => setAdminUsername(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام کاربری مدیر سازمان " />
                    {/* value={adminData.username} */}
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> ایمیل مدیر سازمان</label>
                    <input name="email" onChange={(e) => setEmail(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder=" ایمیل مدیر سازمان" /> 
                    {/* value={adminData.email} */}
                </div>

            </div>
        );
    }
    //password
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
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
                        <input type="password" name="currentPass" onChange={(e) => setCurrentPass(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور قبلی" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور جدید</label>
                        <input type="password" name="newPass" onChange={(e) => setNewPass(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور جدید" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm text-gray-90 text-right">تکرار رمز عبور جدید</label>
                        <input type="password" name="confirmNewPass" onChange={(e) => setConfirmNewPass(e.target.value)} className="text-gray-900 rounded-md block w-full p-2.5" placeholder="تکرار رمز عبور جدید" />
                    </div>
                </div>
            </div>
        );
    }

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const orgData = {
            name,
            email,
            currentPass,
            newPass,
            confirmNewPass,
            profilePic,
        };

        const adminData = {
            adminName,
            adminLastName,
            adminUsername,
        }

        console.log(orgData);
        console.log(adminData);
    };

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
                                    {userInfo()}
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