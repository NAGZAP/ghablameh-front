import { useState } from 'react';
import '../styles/updateorg.css';

function Updateorg() {
    const [showMyModel, setShowMyModel] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onClose = () => {
        setShowMyModel(false);
    };

    const handleOnClose = (e) => {
        if (e.target.id === "close") onClose();
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handlePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            {/* Modal toggle button */}
            <button onClick={() => setShowMyModel(true)} className="text-white rounded-lg text-sm text-center update-button-me" type="button">تغییر اطلاعات</button>

            {/* Main modal */}
            {showMyModel && (
                <div id='close' onClick={handleOnClose} className="fixed full-screen bg-black bg-opacity-30 modal-me ">

                    <section className="bg-white dark:bg-gray-900 rounded p-2">
                        <div className='flex flex-row justify-end'>
                            <button onClick={onClose} className='close-button-me text-sm'>X</button>
                        </div>

                        <div className="max-w-2xl px-4 py-8  lg:py-16">
                            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">تغییر اطلاعات</h2>
                            <form action="#">
                                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

                                    {/* pic */}
                                    <div className="flex justify-center">
                                        <label className="flex justify-center custom-file-upload">
                                            <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                                            <div className="circle-edit" onClick={handleButtonClick}>
                                                {selectedImage ? (
                                                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                                                ) : (
                                                    <span className='meee flex items-center justify-center'> ویرایش</span>
                                                )}
                                            </div>
                                        </label>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm text-gray-90 text-right"> نام سازمان </label>
                                        <input name="name" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder=" نام سازمان " />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm text-gray-90 text-right">نام کاربری سازمان</label>
                                        <input name="name" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="نام کاربری" />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm text-gray-90 text-right">  ایمیل </label>
                                        <input name="name" id="name" className=" input-me text-gray-900 rounded-md block w-full p-2.5" placeholder=" ایمیل " />
                                    </div>
                                </div>



                                {/* password */}
                                <div className='flex justify-center'>
                                    <button onClick={handlePassword} >تغییر رمز عبور</button>

                                    {showPassword && (
                                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                            <div className="sm:col-span-2">
                                                <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور قبلی</label>
                                                <input name="name" id="name" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور قبلی" />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="block mb-2 text-sm text-gray-90 text-right">رمز عبور جدید</label>
                                                <input name="name" id="name" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="رمز عبور جدید" />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="block mb-2 text-sm text-gray-90 text-right">تکرار رمز عبور قبلی</label>
                                                <input name="name" id="name" className="input-me text-gray-900 rounded-md block w-full p-2.5" placeholder="تکرار رمز عبور جدید" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-center space-x-4">
                                    <button type="submit" className="text-white text-center submit-button-me">ذخیره</button>
                                </div>

                            </form>
                        </div>
                    </section>

                </div>
            )}
        </div>
    );
}

export default Updateorg;