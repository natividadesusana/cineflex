import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import BackButton from "../../components/BackButton";
import LoadingPage from "../../components/LoadingPage";

export default function SessionsPage() {
  const [sessions, setSessions] = useState(undefined);
  const { movieID } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieID}/showtimes`;
    const request = axios.get(URL);
    request.then((resp) => setSessions(resp.data));
    request.catch((error) => console.log("Error: ", error.response.data));
  }, [movieID]);

  if (sessions === undefined) {
    return <LoadingPage />;
  }

  return (
    <PageContainer>
      <BackButton />
      <h1>🕒 Selecione o Horário</h1>
      {sessions.days.map((sessions) => (
        <SessionContainer data-test="movie-day" key={sessions.id}>
          {sessions.weekday} - {sessions.date}
          <ButtonsContainer>
            {sessions.showtimes.map((showtimes) => (
              <Link to={`/assentos/${showtimes.id}`} key={showtimes.id}>
                <button data-test="showtime">{showtimes.name}</button>
              </Link>
            ))}
          </ButtonsContainer>
        </SessionContainer>
      ))}
      <FooterContainer data-test="footer">
        <div>
          <img src={sessions.posterURL} alt={sessions.title} />
        </div>
        <div>
          <p>{sessions.title}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
  h1 {
    margin-bottom: 20px;
  }
`;

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
  a {
    text-decoration: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  button {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgb(234 88 12);
    }
  }
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
