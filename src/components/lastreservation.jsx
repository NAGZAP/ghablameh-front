import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from '../styles/lastreservation.module.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './footer';
const localizer = momentLocalizer(moment);

const ReservationCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/reservs/next');
        const reservations = response.data;
        
        const formattedEvents = reservations.map((reservation) => ({
          title: reservation.meal.name,
          start: new Date(reservation.meal.time),
          end: new Date(reservation.meal.time),
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error('An error occurred while fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className={styles.app}>
     <Navbar></Navbar>
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