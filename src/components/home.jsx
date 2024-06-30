import React, { useState, useEffect } from 'react';
import style from '../styles/home.module.css';
import axios from 'axios';

const Home = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');
  const [immigrationType, setImmigrationType] = useState('');

  const getConsultant = async (id) => {
    axios.get(`/consultant/${id}`)
      .then(response => {
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCustomer = async (id) => {
    axios.get(`/customer/${id}`)
      .then(response => {
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getDocument = async (id) => {
    axios.get(`/document/${id}`)
      .then(response => {
        // const document = response.data;
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCustomerDocument = async (id) => {
    axios({
      method: "GET",
      url: `/customer/${id}/document/`,
    })
      .then((response) => {
        const data = response.data;
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const getAllConsultants = async () => {
    axios.get('/consultants/')
      .then(response => {
        const consultants = response.data;
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });

  }

  const getVisasByStatus = async (status) => {
    axios.get(`/visas/${status}/`)
      .then(response => {
        const visas = response.data;
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getVisasByImmigrationType = async (immigrationType) => {
    try {
      const response = await axios.get(`/visas/immigration-type/${immigrationType}/`);
      const visas = response.data;
      console.log(visas);
    } catch (error) {
      console.error(error);
    }
  };

  const getVisasByCountryID = async (id) => {
    try {
      const response = await axios.get(`/visas/country/${countryID}/`);
      const visas = response.data;
      console.log(visas);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomersByPaymentStatus = async (Status) => {
    try {
      const response = await axios.get(`/customers/payment-status/${Status}/`);
      const customers = response.data;
      console.log(customers);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomersByCountryID = async (id) => {
    try {
      const response = await axios.get(`/customers/country/${id}/`);
      const customers = response.data;
      console.log(customers);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomersByConsultantID = async (id) => {
    try {
      const response = await axios.get(`/customers/consultant/${id}/`);
      const customers = response.data;
      console.log(customers);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomersByImmigrationType = async (immigrationType) => {
    try {
      const response = await axios.get(`/customers/immigration_type/${immigrationType}/`);
      const customers = response.data;
      console.log(customers);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='w-full flex flex-col justify-center items-center' >

      {/* cards row 1*/}
      <div className={style['parentContainer']}>

        {/* get Consultant */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشاور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشاور را وارد کنید. </h2>
            {/* <div className='my-7'></div> */}
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <div className='my-3'></div>
            <button className={style.week} onClick={getConsultant}>
              ارسال
            </button>

          </div>
        </div>

        {/* get customer */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشتری را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomer}>
              ارسال
            </button>

          </div>
        </div>

        {/* get Document */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مدرک </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه مدرک را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" شناسه مدرک "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getDocument}>
              ارسال
            </button>
          </div>
        </div>
      </div>

      {/* cards row 2 */}
      <div className={style['parentContainer']}>

        {/* get customer document */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مدرک یک مشتری </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشتری را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomerDocument}>
              ارسال
            </button>

          </div>
        </div>

        {/* get all Consultants */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> دریافت لیست مشاوران </h3>

            <div className='my-20'></div>
            <div className='my-2'></div>
            <button className={style.week} onClick={getAllConsultants}>
              دریافت
            </button>

          </div>
        </div>

        {/* get visa by status */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> فیلتر ویزا بر اساس وضعیت </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> وضعیت مورد نظر را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" وضعیت "
              // value={id}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getVisasByStatus}>
              ارسال
            </button>

          </div>
        </div>

      </div>

      {/* cards 3 */}
      <div className={style['parentContainer']}>

        {/* get visa by immigration type */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> فیلتر ویزا بر اساس روش مهاجرتی  </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> روش مهاجرتی  مورد نظر را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" روش مهاجرتی "
              // value={id}
              onChange={(e) => setImmigrationType(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getVisasByImmigrationType}>
              ارسال
            </button>

          </div>
        </div>

        {/* get visa by Country id */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> دریافت ویزا بر اساس کشور  </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه کشور  مورد نظر را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" شناسه کشور "
              // value={id}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getVisasByCountryID}>
              ارسال
            </button>

          </div>
        </div>

        {/* get customer by payment status */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس وضعیت پرداخت </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> وضعیت پرداخت را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="وضعیت پرداخت "
              // value={id}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomersByPaymentStatus}>
              ارسال
            </button>

          </div>
        </div>
      </div>

      {/* cards 4 */}
      <div className={style['parentContainer']}>

        {/* get Customers By Country ID */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس کشور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه کشور را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="شناسه کشور "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomersByCountryID}>
              ارسال
            </button>

          </div>
        </div>

        {/* get Customers By Consultant ID */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس  مشاور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه مشاور را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="شناسه مشاور "
              // value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomersByConsultantID}>
              ارسال
            </button>

          </div>
        </div>

        {/* get Customers By Immigration Type */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس  روش مهاجرتی </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'>  روش مهاجرتی را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="شناسه مشاور "
              // value={id}
              onChange={(e) => setImmigrationType(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={getCustomersByImmigrationType}>
              ارسال
            </button>

          </div>
        </div>

      </div>

    </div>

  );
};

export default Home; 