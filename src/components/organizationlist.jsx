import axios from 'axios';
import React from 'react';
import AuthManager from "../APIs/AuthManager";
import { useState, useEffect } from "react";

function OrganizationList() {
  const [orgData, setOrgData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [rateFilter, setRateFilter] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRateFilterChange = (e) => {
    setRateFilter(e.target.value);
  };

  const filteredOrgData = orgData
  .filter(org => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .filter(org => rateFilter ? String(org.average_rate) === rateFilter : true);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="جست و جو..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border  rounded-lg w-full md:w-1/3"
          style={{border:'1px solid rgb(38, 87, 124)'}}
        />
        <select
          value={rateFilter}
          onChange={handleRateFilterChange}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/3"
          style={{border:'1px solid rgb(38, 87, 124)'}}
        >
          <option value=""> فیلتر بر اساس امتیاز </option>
          <option value="">بدون امتیاز</option>
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {filteredOrgData.map((org, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden"  style={{border:'1px solid rgb(38, 87, 124)'}}>
      <img src={org.image_url} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-start"  style={{borderTop:'1px solid rgb(38, 87, 124)'}}>
        <h3 className="font-bold text-lg ">{org.name}</h3>
        <div className="flex justify-between items-center text-sm">
          <div className="flex-1">
            <span className="">امتیاز: {org.average_rate} ({org.number_of_rates} نظر)</span>
          </div>
          <div className="">

            {/* <span>{new Date(org.created_at).toLocaleDateString()}</span> */}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default OrganizationList;