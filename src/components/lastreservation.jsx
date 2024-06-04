import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from '../styles/lastreservation.module.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './footer';
import Navbarparent from './navbarparent';

const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [events, setEvents] = useState([]);

  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/reserve/', {
        headers: {
          Authorization: token
        }
      });

      console.log('Data retrieved:', response.data);
      // Convert response data into the format required by react-big-calendar
      const formattedEvents = response.data.map(reservation => ({
        title: `${reservation.food.name} - ${reservation.buffet.organization_name}`,
        start: new Date(reservation.created_at),
        end: new Date(new Date(reservation.created_at).getTime() + 1 * 60 * 60 * 1000) // Assuming 2-hour events
      }));
      setEvents(formattedEvents);

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();
  }, []);

  return (
    <div className={styles.app}>
      <Navbarparent />
      <div className={styles.calendarcontainer}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week']}
          min={new Date(2024, 3, 15, 8, 0)}
          max={new Date(2024, 12, 15, 23, 0)}
          step={60}
          timeslots={1}
          defaultDate={new Date()}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationCalendar;
