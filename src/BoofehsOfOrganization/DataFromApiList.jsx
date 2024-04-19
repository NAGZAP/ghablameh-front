import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Boofeh from './Boofeh';
import styles from './Cards.module.css';
import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import {
  TERipple,
  TEModal,
  TEModalContent,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

function DataFromApiList() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletedCards, setDeletedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedCard, setSelectedCard] = useState(null); // State to store the selected card

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

  const handleEditClick = (card) => {
    setSelectedCard(card); // Set the selected card when the edit button is clicked
    setShowModal(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      // Update the name of the selected card
      const updatedCard = { ...selectedCard, name: inputValue };
      // Make Axios request to save changes
      await axios.put(`https://ghablameh.fiust.ir/api/v1/buffets/${selectedCard.id}/`, updatedCard, {
        headers: {
          Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDUxMzk4LCJpYXQiOjE3MTM0NTkzOTgsImp0aSI6IjBkYzBhMGFhN2VmNzQwMWE4ZjQzNzZjZmMyZDQzZmY1IiwidXNlcl9pZCI6MTh9.dF5OAekvQhkmz1fVPx7ZXJURXnpX70jk_woW33QH24U`,
        },
      });
      // Update the 'cards' state with the updated card
      const updatedCards = cards.map(c => c.id === selectedCard.id ? updatedCard : c);
      setCards(updatedCards);
      // Close the modal after saving changes
      setShowModal(false);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
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
              onEdit={() => handleEditClick(card)}
            />
          ))}
        </div>
        <Footer />
      </div>
      
      <TEModal className={styles.itemscenter} show={showModal} setShow={setShowModal}>
        <TEModalContent>
          <TEModalBody>
            <p>تغییر نام بوفه</p>
            <div className="flex justify-center items-center">
              <div className="relative">
                <input
                  className="w-full h-10 px-3 py-2.5 bg-gray-100 border border-template-custom-orange rounded-[6px] focus:outline-none focus:border-2 focus:border-template-custom-orange"
                  placeholder="نام"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </TEModalBody>
          <TEModalFooter>
            <TERipple rippleColor="light">
              <button
                type="button"
                className={styles.button}
                onClick={handleSaveChanges}
              >
                ذخیره
              </button>
            </TERipple>
          </TEModalFooter>
        </TEModalContent>
      </TEModal>
    </>
  );
}

export default DataFromApiList;
