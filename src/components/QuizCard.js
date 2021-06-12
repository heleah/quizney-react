import { useState } from 'react';
import styled from 'styled-components';

import bookmark from '../assets/crown_outlined.svg';
import bookmarked from '../assets/crown_filled.svg';

export default function QuizCard({ card, isFave, toggleFave }) {
  const [optionP, setOptionP] = useState('Choose one of the options below:');

  function isOptionCorrect(option) {
    return option === card.answer
      ? setOptionP('🧚 Congratulations, that is correct! 🧚')
      : setOptionP('☠️ Sorry, that is wrong. Please try again. ☠️');
  }

  return (
    <CardWrapper>
      <Bookmark
        src={isFave(card) ? bookmarked : bookmark}
        alt='Bookmark'
        onClick={() => toggleFave(card)}
      />
      <QuestionP>Question:</QuestionP>
      <Question>{card.question}</Question>
      <OptionsP>{optionP}</OptionsP>
      <Options>
        {card.options.map((option) => {
          return <li onClick={() => isOptionCorrect(option)}>{option}</li>;
        })}
      </Options>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  position: relative;
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  padding: 1rem;
  padding-top: 0;
  border-radius: 1rem;
  align-items: center;
`;

const Bookmark = styled.img`
  width: 3rem;
  position: absolute;
  right: 40px;
  top: -22px;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(360deg);
  }
`;

const QuestionP = styled.h3`
  margin-bottom: 0;
  align-self: flex-start;
  font-family: oregano;
`;

const Question = styled.p`
  font-weight: bold;
  text-align: center;
`;

const OptionsP = styled.p`
  font-family: oregano;
  margin-top: 0;
  font-weight: thin;
`;

const Options = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding-left: 0;
  flex-wrap: wrap;

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: var(--primary-200);
    border-radius: 0.5rem;
    text-align: center;
    align-self: center;
    font-size: 1.2rem;
  }

  li:hover {
    background-color: var(--primary);
    color: var(--light);
    transform: scale(1.1);
  }
`;
