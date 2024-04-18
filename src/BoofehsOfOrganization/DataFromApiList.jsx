import React, { useState } from 'react';
import Cards from './Cards';
import Boofeh from './Boofeh';
import styles from './Cards.module.css';
import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx'

function DataFromApiList() {
  const [cards, setCards] = useState([
    { name: "first", counter_organ: "1" },
    { name: "second", counter_organ: "2" },
    { name: "third", counter_organ: "3" },
    { name: "four", counter_organ: "4" },
    { name: "fifth", counter_organ: "5" },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteCard = (card) => {
    setCards(prevCards => prevCards.filter(c => c !== card));
  };

  const filteredCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
    <div className={styles.containment_boof}>
      <Navbar></Navbar>
      <div className={styles.rtl}>
      <Boofeh searchTerm={searchTerm} onSearchChange={onSearchChange} />
      {filteredCards.map((card, index) => (
        <Cards
          key={index}
          name={card.name}
          counter_organ={card.counter_organ}
          onDelete={() => handleDeleteCard(card)}
        />
      ))}
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default DataFromApiList;