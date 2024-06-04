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
  const [deletedCards, setDeletedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  return (
    <>
      <div className={styles.containment_boof}>
        <Navbar />
        <div className={styles.itemscenter}>
          <Boofeh searchTerm={searchTerm} onSearchChange={onSearchChange}/>
          {filteredCards.map((card, index) => (
            <Cards
              key={index}
              name={card.name}
              counter_organ={card.counter_organ}
              onDelete={() => handleDeleteCard(card)}
              isDeleted={deletedCards.includes(card.id)}
              onEdit={() => handleEditClick(card)}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DataFromApiList;
