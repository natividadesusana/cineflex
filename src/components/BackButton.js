import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/img/arrow.png";

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleGoBack}>
      <img src={arrow} alt="arrow"></img>
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  top: 15px;
  left: 20px;
  width: 50px;
  background-color: #c3cfd9;
  z-index: 2;
  font-size: 50px;
  cursor: pointer;
`;
