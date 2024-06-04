import { useState, useEffect } from 'react';
import HomeOrgPage from '../HomePageForOrg/HomePage';
import ListOrg from '../listorg/listorg';
import AuthManager from '../APIs/AuthManager';
const Home = () => {
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        const checkUserType = async () => {
            const userType = await AuthManager.orguser();
            setFlag(userType);
        };

        checkUserType();
    }, []);

    if (flag === null) {
        return (
            <div className='w-full flex items-center justify-center'>
                <h3 className="text-xl font-light text-gray-800 pt-3 pb-2 pr-3 text-right p-6 m-2"> در حال انتقال به صفحه اصلی... </h3>
            </div>
        );
    }

    return (
        <div>
            {flag === 1 ? <ListOrg /> : <ListOrg />}
        </div>
    );
};
export default Home;

