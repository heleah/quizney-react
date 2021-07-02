import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import NavFooter from './components/NavFooter';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import AddQuestion from './pages/AddQuestion';
import Profile from './pages/Profile';

import { quizCards } from './lib/db';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(quizCards);
  const [faveCards, setFaveCards] = useState([]);

  function toggleFave(card) {
    return isFave(card) ? removeFromFaves(card) : addToFaves(card);
  }

  function isFave(card) {
    return faveCards.find((faveCard) => faveCard.question === card.question);
  }

  function removeFromFaves(cardToRemove) {
    const remaining = faveCards.filter(
      (card) => card.question !== cardToRemove.question
    );
    setFaveCards(remaining);
  }

  function addToFaves(cardToAdd) {
    const newCard = cards.find((card) => card.question === cardToAdd.question);
    setFaveCards([...faveCards, newCard]);
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home quizCards={cards} isFave={isFave} toggleFave={toggleFave} />
          </Route>
          <Route path='/bookmarks'>
            <Bookmarks
              faveCards={faveCards}
              isFave={isFave}
              toggleFave={toggleFave}
            />
          </Route>
          <Route path='/add-question'>
            <AddQuestion />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </main>
      <NavFooter />
    </div>
  );
}

export default App;
