import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../styles/DatingCards.scss';
import axios from './axios';

function DatingCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/dating/cards');
      setPeople(req.data);
    };
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`receiving ${nameToDelete} and swiped to the ${direction}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen!!`);
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default DatingCards;
