import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <H1>Quizney</H1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--primary);
  z-index: 10;
`;

const H1 = styled.h1`
  font-family: oregano;
  margin: 0;
  text-align: center;
  color: var(--primary-100);
`;
