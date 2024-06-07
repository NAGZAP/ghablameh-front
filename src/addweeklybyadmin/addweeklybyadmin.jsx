import React, { useState } from 'react';
import './addweeklybyadmin.css';
import Navbarparent from '../components/navbarparent';
const AddWeeklyMenu = () => {
  const [menu, setMenu] = useState([
    { day: 'شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'یک شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'دو شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'سه شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'چهار شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'پنج شنبه', meal: '', food: '', time: '', price: '' },
    { day: 'جمعه', meal: '', food: '', time: '', price: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedMenu = [...menu];
    updatedMenu[index][field] = value;
    setMenu(updatedMenu);
  };

  const handleSubmit = () => {
    // Implement your submit logic here, e.g., send the menu data to the server
    console.log(menu);
  };

  return (
    <div>
      <Navbarparent/>
    <div className="add-weekly-menu-container">
      
      <div className="menu-grid">
        {menu.map((day, index) => (
          <div key={index} className="menu-item">
            <h2>{day.day}</h2>
            <div className="menu-details">
              <label>
                وعده:
                <input
                  type="text"
                  value={day.meal}
                  onChange={(e) => handleInputChange(index, 'meal', e.target.value)}
                />
              </label>
              <label>
                غذا:
                <input
                  type="text"
                  value={day.food}
                  onChange={(e) => handleInputChange(index, 'food', e.target.value)}
                />
              </label>
              <label>
                تاریخ:
                <input
                  type="text"
                  value={day.time}
                  onChange={(e) => handleInputChange(index, 'time', e.target.value)}
                />
              </label>
              <label>
                هزینه:
                <input
                  type="text"
                  value={day.price}
                  onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        اضافه کردن
      </button>
  
    </div>
        </div>
  );
};

export default AddWeeklyMenu;