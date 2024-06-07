import axios from 'axios';
import AuthManager from "../APIs/AuthManager";
import { useState, useEffect } from "react";
import Select from 'react-select';
import defaultPhoto from '../images/team.png'
import styles from '../styles/organizationlist.module.css'
function OrganizationList() {
    const [orgData, setOrgData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [rateFilter, setRateFilter] = useState('');
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? 'rgb(38, 87, 124)' : 'rgb(38, 87, 124)', // Changes the border color when the select is focused and when it is not.
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)', 
            boxShadow: state.isFocused ? '0 0 0 1px #A593E0' : 'none', // Removes the blue border on focus
        }),
        // rest of your custom styles
    };

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const token = AuthManager.getToken();
                const response = await axios.get('https://ghablameh.fiust.ir/api/v1/organizations/', {
                    headers: { Authorization: "JWT " + token }
                });
                setOrgData(response.data);
            } catch (error) {
                console.error('Error fetching organizations: ', error);

            }
        };
        if (AuthManager.isLoggedIn()) fetchOrganizations();
    }, []);

    //search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    //select/filter
    const rateOptions = [
        { value: '', label: 'همه' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
    ];

    const handleRateFilterChange = (selectedOption) => {
        setRateFilter(parseInt(selectedOption.value));
    };

    // const filteredOrgData = orgData
    //     .filter(org => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
    //     .filter(org => rateFilter ? String(org.average_rate) === rateFilter : true);
    const filteredOrgData = orgData
        .filter(org => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(org => rateFilter ? org.average_rate >= rateFilter && org.average_rate < (rateFilter + 1) : true);
    return (
        <div className="container mx-auto p-4">
            {AuthManager.isLoggedIn() && orgData && (
                <>
                    <div className={`flex flex-row gap-4 mb-4 items-center ${styles.wrapper}`}>
                        {/* search */}
                        <input
                            type="text"
                            placeholder="جست و جو سازمان ها ... "
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className={`p-2 border rounded-lg w-full md:w-1/3`}
                            style={{ border: '1px solid rgb(38, 87, 124)',width:'32.7%' }}
                        />

                        {/* filter */}
                        <div className='' style={{ width: '10vw' }}>
                            <Select
                                placeholder="فیلتر بر اساس امتیاز"
                                value={rateOptions.find(option => option.value === rateFilter)}
                                onChange={handleRateFilterChange}
                                options={rateOptions}
                                className="z-10 md:w-1/7"
                                title="فیلتر بر اساس امتیاز"
                                isSearchable={false}
                                styles={customStyles}
                            />
                        </div>
                    </div>
                </>
            )}

            {/* orgs list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredOrgData.map((org, index) => (
                    <div key={index} className="bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden" style={{ border: '1px solid rgb(38, 87, 124)' }}>
                        {org.image_url && org.image_url.toLowerCase().endsWith('.jpeg') ? (
                            <div className="bg-white w-full h-48 overflow-hidden bg-opacity-50" style={{ padding: '10px' }}>
                                <img src={'https://ghablameh.fiust.ir' + org.image_url} className="w-full h-full rounded-lg" style={{ objectFit: 'contain' }} />
                            </div>
                        ) : (
                            <img src={defaultPhoto} className="w-full h-48" style={{ objectFit: 'contain' }} />
                        )}
                        <div className="p-4 flex flex-col justify-start" style={{ borderTop: '1px solid rgb(38, 87, 124)' }}>
                            <h3 className="font-bold text-lg">{org.name}</h3>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex-1">
                                    <span>امتیاز: {org.average_rate} ({org.number_of_rates} نظر)</span>
                                </div>
                                {/* <div>
                                    <span>{new Date(org.created_at).toLocaleDateString()}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrganizationList;