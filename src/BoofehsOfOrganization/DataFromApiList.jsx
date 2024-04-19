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
  TEModalDialog,
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

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes
    setShowModal(false); // Close the modal after saving changes
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
              onEdit={handleEditClick}
            />
          ))}
        </div>
        <Footer />
      </div>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalBody>
              <p>تغییر نام بوفه</p>
              <div className="w-72 mt-10 mb-1 mr-20 ml-20">
                <div className="relative">
                <input name="name"  className="text-gray-900 rounded-md block w-full p-2.5" style={{ border: '1px solid #000000' }} />
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
              <div className="flex items-center justify-center space-x-4">
                  <button type="submit" className={styles.button}>ذخیره</button>
              </div>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}

export default DataFromApiList;
