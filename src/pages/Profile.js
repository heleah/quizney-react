import styled from 'styled-components';

import pascal from '../assets/pascal.jpeg';

export default function Profile() {
  return (
    <>
      <About>
        <img src={pascal} alt='User' />
        <p>Pascal</p>
      </About>
      <Bio>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        incidunt, eveniet aperiam ea asperiores suscipit voluptatibus quis
        soluta rem nobis vitae expedita dignissimos! Reiciendis itaque libero
        voluptas vitae optio provident.
      </Bio>
      <Tags>
        <li>Adventure</li>
        <li>Disguise</li>
        <li>Not dressing up</li>
        <li>Messing with Eugene & Maximus</li>
      </Tags>
      <Button>Logout</Button>
    </>
  );
}

const About = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;

  img {
    width: 14rem;
    border-radius: 50rem;
    box-shadow: 8px 5px 10px var(--lighter);
    transition: transform 1.4s ease-in;
  }

  img:hover {
    transform: scale(1.05) rotate(360deg);
  }

  p {
    box-shadow: 0 0 2rem var(--light);
    padding: 0.8rem;
    border-radius: 10rem;
    font-size: 2rem;
    background-color: var(--lighter);
    font-family: oregano;
  }
`;

const Bio = styled.p`
  margin: 2rem 20rem;
`;

const Tags = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
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
`;

const Button = styled.button`
  width: 6rem;
  position: absolute;
  left: 50%;
  margin-left: -3rem;
  margin-top: 3rem;
  padding: 1rem;
  background-color: var(--light);
  border: none;
  border-radius: 100rem;
  font-family: oregano;
  color: var(--dark);
  font-size: 1.3rem;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
    background-color: var(--primary);
    color: var(--light);
  }
`;
