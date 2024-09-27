import styled from "styled-components";

export const Retrieve = styled.div`
  background-color: #c9ad90;
  height: 464px;
  width: 460px;
  position: relative;
  right: 10px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) -9px 4px 8px 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    position: relative;
    right: 5rem;
    bottom: 0.2rem;
    color: white;
  }

  @media screen and (max-width: 930px) {
    right: 0;
    height: 420px;
    width: 400px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px -0.5px 0.5px,
      rgba(0, 0, 0, 0.12) 0px 12px 30px, rgba(0, 0, 0, 0.12) 0px -4px 6px,
      rgba(0, 0, 0, 0.17) 0px -12px 13px, rgba(0, 0, 0, 0.09) 0px 3px 5px;

    h1 {
      right: 3.7rem;
    }
  }

  @media screen and (max-width: 480px) {
    height: 340px;
    width: 320px;

    h1 {
      right: 4rem;
      bottom: 0.1rem;
      font-size: 0.95rem;
    }
  }
`;

export const DownloadCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 5px dashed #fff;
  width: 350px;
  height: 370px;

  .download-icon {
    height: 37%;
    width: 37%;
    color: #c4a484;
  }

  @media screen and (max-width: 930px) {
    height: 300px;
    width: 300px;

    .download-icon {
      height: 5.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    height: 240px;
    width: 270px;

    .download-icon {
      height: 4rem;
    }
  }
`;

export const Input = styled.input`
  border: 4px double #c4a484;
  padding: 7px;
  border-radius: 30px;
  margin: 0;
  position: relative;
  top: 25px;
  width: 12rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: 930px) {
    width: 10rem;
  }

  @media screen and (max-width: 480px) {
    width: 8rem;
    font-size: 0.6rem;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: #b09376;
  padding: 8px;
  width: 120px;
  text-align: center;
  font-size: 1rem;
  color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  margin-top: 45px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 930px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    margin-bottom: 1rem;
    font-size: 0.7rem;
  }
`;
