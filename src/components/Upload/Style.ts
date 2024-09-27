import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  height: 460px;
  width: 460px;
  margin: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  position: relative;
  left: 15px;

  @media screen and (max-width: 930px) {
    height: 420px;
    width: 400px;
    left: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
  }

  @media screen and (max-width: 480px) {
    height: 340px;
    width: 320px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
  }
`;

export const UploadFun = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 330px;
  height: 370px;
  background-color: rgba(196, 164, 132, 0.4);
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 20px;
  border: 4px dashed #c4a484;
  position: relative;
  right: 0.7rem;

  h1 {
    font-size: 1.2rem;
    position: relative;
    right: 6rem;
    bottom: 4rem;
  }

  p {
    font-weight: 700;
    letter-spacing: 1px;
    color: #b09376;
    margin-bottom: 0;
  }

  @media screen and (max-width: 930px) {
    height: 300px;
    width: 300px;
    right: 0;
    bottom: 1rem;

    .upload-icon {
      height: 5.5rem;
    }

    h1 {
      right: 5.5rem;
      bottom: 2.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 480px) {
    height: 240px;
    width: 270px;

    .upload-icon {
      margin: 0;
      height: 4rem;
    }

    h1 {
      position: relative;
      right: 5rem;
      bottom: 1.2rem;
      font-size: 0.95rem;
    }

    p {
      font-size: 0.8rem;
    }
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
  margin-bottom: 30px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-color: #c4a484;
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 930px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    margin-bottom: 3rem;
    font-size: 0.7rem;
  }
`;

export const ImgName = styled.div`
  font-size: 0.8rem;
  margin-top: 0;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Data = styled.div`
  font-size: 0.6rem;

  a {
    display: flex;
    text-decoration: none;
    color: #000;
    width: 398px;

    &:hover {
      text-decoration: underline;
      color: #c4a484;
    }
  }

  @media screen and (max-width: 930px) {
    font-size: 0.55rem;
    margin-top: -1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.4rem;
    a {
      width: 346px;
    }
  }
`;

export const DataInt = styled.div``;

export const Url = styled.p``;

export const Id = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: .8rem;
  position: relative;
  top: 5px;

  @media screen and (max-width: 930px) {
    font-size: 0.7rem;
    color: black;
    top: 1px;

    .copy-icon {
      height: 0.8rem;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    font-weight: 500;
  }
`;

export const Copy = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 0.5rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.1rem;
  }
`;
