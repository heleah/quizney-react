import styled from 'styled-components';

export default function AddQuestion() {
  return (
    <Form>
      <label htmlFor='addquestion'>Your new question:</label>
      <textarea
        name='addquestion'
        id='addquestion'
        placeholder='Type here...'
        cols='20'
        rows='10'
      ></textarea>
      <label htmlFor='addanswer'>Your answer:</label>
      <textarea
        name='addanswer'
        id='addanswer'
        placeholder='Type here...'
        cols='20'
        rows='10'
      ></textarea>
      <label htmlFor='addtags'>Other answer options:</label>
      <input type='text' id='addtags' placeholder='Separate tags by comma' />
      <button>Submit</button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 20rem;

  label {
    font-weight: 400;
  }

  textarea {
    margin: 0.5rem 0 1.2rem;
    height: 10vh;
  }

  input {
    margin: 0.5rem 0;
    height: 6vh;
  }

  button {
    align-self: center;
    width: 6rem;
    margin-top: 3rem;
    padding: 1rem;
    background-color: var(--light);
    border: none;
    border-radius: 100rem;
    text-align: center;
    font-family: oregano;
    color: var(--dark);
    font-size: 1.3rem;
    transition: transform 0.4s ease;
  }

  button:hover {
    transform: scale(1.2);
    background-color: var(--primary);
    color: var(--light);
  }
`;
