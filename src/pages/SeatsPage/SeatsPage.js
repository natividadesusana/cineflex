import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loading from "../../assets/img/loading.gif";

export default function SeatsPage({ setOrderData }) {
  const [seats, setSeats] = useState(undefined);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const { sessionID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionID}/seats`;
    const request = axios.get(URL);
    request.then((resp) => setSeats(resp.data));
    request.catch((error) => console.log("Error: ", error.response.data));
  }, [sessionID]);

  if (seats === undefined) {
    return <Loading src={loading} />
  };

  function chooseSeat(seats) {
    if (seats.isAvailable === false) {
      alert("Esse assento não está disponível");
    } else if (!selectedSeat.includes(seats)) {
      const seatArray = [...selectedSeat, seats];
      setSelectedSeat(seatArray);
    } else {
      const filtersSeat = selectedSeat.filter(
        (chair) => !(chair.id === seats.id)
      );
      setSelectedSeat([...filtersSeat]);
    }
  }

  function bookSeats(event) {
    event.preventDefault();
    if (selectedSeat.length === 0) {
      alert("Por favor, selecione um assento!");
      return;
    }
    const body = { ids: selectedSeat.map((event) => event.id), name, cpf };
    const urlPost = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const request = axios.post(urlPost, body);
    request.then((resp) => {
      const data = { name, cpf, seats, selectedSeat };
      setOrderData(data);
      navigate("/sucesso");
    });
    request.catch((error) =>
      alert("Error: ", error.response.data, " - Por favor, tente novamente!")
    );
  }

  return (
    <PageContainer>
      <h1>🛋 Selecione o(s) Assento(s)</h1>
      <SeatsContainer>
        {seats.seats.map((seats) => (
          <SeatItem
            data-test="seat"
            key={seats.id}
            onClick={() => chooseSeat(seats)}
            seatColor={
              selectedSeat.includes(seats)
                ? "#1AAE9E"
                : (!seats.isAvailable ? "#FBE192" : "#C3CFD9")
            }
            seatEdgeColor={
              selectedSeat.includes(seats)
                ? "#0E7D71"
                : (!seats.isAvailable ? "#F7C52B " : "#7B8B99")
            }>
            {seats.name}
          </SeatItem>
        ))}
      </SeatsContainer>

      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle circleColor="#1AAE9E" />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle circleColor="#C3CFD9" />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle circleColor="#FBE192" />
          Indisponível
        </CaptionItem>
      </CaptionContainer>

      <FormContainer>
      <form onSubmit={bookSeats}>
        Nome do Comprador:
        <input data-test="client-name"
          placeholder="Digite seu nome..."
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        CPF do Comprador:
        <input data-test="client-cpf"
          placeholder="Digite seu CPF..."
          id="cpf"
          type="text" 
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          required
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <button data-test="book-seat-btn" type="submit">
          Reservar Assento(s)
        </button>
      </form>
      </FormContainer>

      <FooterContainer data-test="footer">
        <div>
          <img src={seats.movie.posterURL} alt={seats.movie.title} />
        </div>
        <div>
          <p>{seats.movie.title}</p>
          <p>{seats.day.weekday} - {seats.name}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;

const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
    cursor: pointer;
  }
  input {
    width: calc(100vw - 60px);
  }
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;

const CaptionCircle = styled.div`
  border: 1px solid ${(props) => props.circleColor};
  background-color: ${(props) => props.circleColor};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;

const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const SeatItem = styled.div`
  background-color: black;
  border: 1px ${(props) => props.seatEdgeColor};
  background-color: ${(props) => props.seatColor};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;

const Loading = styled.img`
  min-height: 40vh;
  margin: 250px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
