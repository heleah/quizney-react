import QuizCard from '../components/QuizCard';

export default function Bookmarks({ faveCards, isFave, toggleFave }) {
  return faveCards.map((card) => {
    return <QuizCard card={card} isFave={isFave} toggleFave={toggleFave} />;
  });
}
