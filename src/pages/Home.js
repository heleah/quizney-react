import QuizCard from '../components/QuizCard';

export default function Home({ quizCards, isFave, toggleFave }) {
  return quizCards.map((card) => {
    return <QuizCard card={card} isFave={isFave} toggleFave={toggleFave} />;
  });
}
