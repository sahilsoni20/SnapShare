import styled from "styled-components";

export const Div = styled.div`
  width: auto;
  padding: 1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;

  p {
    color: white;
  }
`;

export const MasonryItem = styled.div`
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border: 2px dashed #c4a484;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 6px;
`;

export const Nothing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 39rem;
  width: auto;
  margin: auto;
`
