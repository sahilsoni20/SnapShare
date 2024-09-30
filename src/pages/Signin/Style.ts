import styled from "styled-components";

export const Container = styled.div`
 display: flex;
    width: 100%;
    aligin-items: center;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  gap: 20px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #a9a9a9;

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
    color: #808080;
    margin-bottom: 6rem;
  }

  h2 {
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;

  button {
    border: none;
    font-size: 1.1rem;
    color: white;
    letter-spacing: 0.5px;
    font-weight: 500;
    position: relative;
    z-index: 0;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #c4a484;
    transition: background-color 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  @media screen and (max-width: 580px) {
    padding: 7px;
    margin: auto;
    font-size: 1rem;
  }

  a {
    color: #c4a484;
    text-decoration: none;
  }
`;
