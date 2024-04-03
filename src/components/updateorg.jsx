import { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/updateorg.css';
import Avatar from 'react-avatar';
import axios from 'axios';

function Updateorg() {

    //fetch user data
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
          try { //https://ghablameh.fiust.ir/api/v1/swagger/?format=openapi#/definitions/Organization/me
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching user data: ', error);
          }
        };
        fetchUserData();
      }, []);

    //pic
    const [imagePreview, setImagePreview] = useState('');
    const fileInputRef = useRef(null);

    const displayImage = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            setImagePreview(e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
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
                    <input name='image' type="file" id="fileInput" ref={fileInputRef} className="hidden" onChange={displayImage} accept="image/*" />
                    {imagePreview ? (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (
                        <div className="user-profile flex items-center">
                            <Avatar name={userData.name} size="80" round={true} maxInitials={1} />
                        </div>
                    )}
                </label>
            </div>
        );
    }

    function userInfo() {
        return (
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 ">

                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام سازمان </label>
                    <input  name="name" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                </div>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm text-gray-90 text-right">نام مدیر سازمان</label>
                    <input name="admin_name" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="نام کاربری" />
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> نام کاربری مدیر سازمان </label>
                    <input  name="admin_username" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                </div>
                <div className="sm:col-span-2 p-2 ">
                    <label className="block mb-2 text-sm text-gray-90 text-right"> ایمیل مدیر سازمان</label>
                    <input  name="email" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                </div>
                

            </div>
        );
    }

    function PasswordFields() {
    const [showPasswordFields, setShowPasswordFields] = useState(false);

    const togglePasswordFields = () => {
        setShowPasswordFields(!showPasswordFields);
    };

    return (
        <div className='flex justify-center flex-col'>
            <div className='flex justify-center'>
            <h3 className='flex justify-center p2 mb-1 changepassbutton text-base' onClick={togglePasswordFields}>تغییر رمز عبور</h3>
            </div>
                    <div className="border-t my-4"></div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 p-2">
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور قبلی</label>
                            <input  name="oldPassword" id="oldPassword" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور قبلی" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور جدید</label>
                            <input  name="newPassword" id="newPassword" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور جدید" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm text-gray-90 text-right">تکرار رمز عبور جدید</label>
                            <input  name="confirmPassword" id="confirmPassword" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="تکرار رمز عبور جدید" />
                        </div>
                        
                    </div>

        </div>
    );
}

    return (
        <div>
            {/* Modal toggle button */}
            <button onClick={() => setShowMyModel(true)} className="text-white rounded text-sm text-center update-button-me" type="button">ویرایش اطلاعات</button>

            {/* Main modal */}
            {showMyModel && (
                <div id='close' onClick={handleOnClose} className="fixed full-screen bg-black bg-opacity-30 modal-me ">
                    <section className="bg-white dark:bg-gray-900 rounded p-2">
                        <div className='flex flex-row justify-end'>
                            <button onClick={onClose} className='close-button-me text-sm'>X</button>
                        </div>

                        <div className="form-container" style={{ height: "600px", overflowY: "scroll" }}>
                            <div className="max-w-2xl px-4 py-8 lg:py-16">
                                <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white text-center">ویرایش اطلاعات</h2>
                                <form  className='border-t'>
                                    {userPicuter()}
                                    {userInfo()}
                                    <PasswordFields />

                                    <div className="flex items-center justify-center space-x-4">
                                        <button type="submit" className="text-white text-center submit-button-me">ذخیره</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Updateorg;