import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 500px;
  margin: auto;
  position: relative;
  top: 5rem;
  padding: 15px;
  border-radius: 30px;
  background: #c4a484;

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 900px;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 700px;
  }
`;
