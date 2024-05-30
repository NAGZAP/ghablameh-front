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
        return <div>Loading...</div>;
    }

    return (
        <div>
            {flag === 1 ? <HomeOrgPage /> : <ListOrg />}
        </div>
    );
};
export default Home;

