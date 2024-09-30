import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #c4a484;
  color: #fff;
  backdrop-filter: blur(8px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 0 15px;

  @media screen and (max-width: 450px) {
    margin: 0;
  }
`;

export const NavItems = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 2rem;
  font-size: 1.1rem;

  @media screen and (max-width: 450px) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

export const AuthHref = styled.a`
  &:hover {
    border-radius: 2rem;
    transition: all 1s ease;
    text-shadow: 1px 1px #ccc;
  }
`;

export const Img = styled.img`
  width: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: center;
  gap: 10px;
  width: 100px;
  position: absolute;
  top: 70px;
  right: 40px;
  background-color: #fff;
  color: #c4a484;
  border: 2px solid #c4a484;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 10px;
  z-index: 100;

  @media screen and (max-width: 450px) {
    gap: 8px;
    font-size: 0.9rem;
    width: 80px;
  }
`;
