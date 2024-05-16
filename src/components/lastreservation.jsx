import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from '../styles/lastreservation.module.css';
const localizer = momentLocalizer(moment);
import Navbar from './Navbar';
import Footer from './footer';
import Navbarparent from './navbarparent';
const events = [
  {
    title: 'قرمه سبزی',
    start: new Date(2024, 3, 15, 10, 0), 
    end: new Date(2024, 3, 15, 12, 0), 
  },
  {
    title: 'فسنجون',
    start: new Date(2024, 3, 17, 14, 0), 
    end: new Date(2024, 3, 17, 16, 0),
  },

];

const ReservationCalendar = () => {
  return (
    <div className={styles.app}>
      <Navbarparent/>
      <div className= {styles.calendarcontainer}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week']}
          min={new Date(2024, 3, 15, 8, 0)} 
          max={new Date(2024, 12, 15, 23, 0)} 
          step={120} 
          timeslots={1}
          defaultDate={new Date()} 
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ReservationCalendar;