import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Caption from "./Caption";
import Form from "./Form";
import BackButton from "../../components/BackButton";
import LoadingPage from "../../components/LoadingPage";

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
    return <LoadingPage />
  };

  function chooseSeat(seats) {
    if (seats.isAvailable === false) {
      alert("Esse assento não está disponível!");
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
      alert("Erro: ", error.response.data.message)
    );
  }

  return (
    <PageContainer>
      <BackButton/>
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
      <Caption />
      <Form setName={setName} setCpf={setCpf} bookSeats={bookSeats}/>
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
