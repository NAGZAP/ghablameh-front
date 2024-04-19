import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Boofeh from './Boofeh';
import styles from './Cards.module.css';
import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';

function DataFromApiList() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletedCards, setDeletedCards] = useState([]); // Add deletedCards state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
          headers: {
            Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDUxMzk4LCJpYXQiOjE3MTM0NTkzOTgsImp0aSI6IjBkYzBhMGFhN2VmNzQwMWE4ZjQzNzZjZmMyZDQzZmY1IiwidXNlcl9pZCI6MTh9.dF5OAekvQhkmz1fVPx7ZXJURXnpX70jk_woW33QH24U`,
          },
        });
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCard = async (card) => {
    try {
      await axios.delete(`https://ghablameh.fiust.ir/api/v1/buffets/${card.id}`, {
        headers: {
          Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDUxMzk4LCJpYXQiOjE3MTM0NTkzOTgsImp0aSI6IjBkYzBhMGFhN2VmNzQwMWE4ZjQzNzZjZmMyZDQzZmY1IiwidXNlcl9pZCI6MTh9.dF5OAekvQhkmz1fVPx7ZXJURXnpX70jk_woW33QH24U`,
        },
      });
      setDeletedCards((prevDeletedCards) => [...prevDeletedCards, card.id]);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={styles.containment_boof}>
        <Navbar />
        <div className={styles.itemscenter}>
          <Boofeh searchTerm={searchTerm} onSearchChange={onSearchChange} />
          {filteredCards.map((card, index) => (
            <Cards
              key={index}
              name={card.name}
              counter_organ={card.counter_organ}
              onDelete={() => handleDeleteCard(card)}
              isDeleted={deletedCards.includes(card.id)}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DataFromApiList;
