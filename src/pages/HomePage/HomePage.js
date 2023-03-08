import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import loading from "../../assets/img/loading.gif";

export default function HomePage() {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const request = axios.get(URL);
    request.then((response) => setMovie(response.data));
    request.catch((error) => console.log(error.response.data));
  }, []);

  if (movie === undefined) {
    return <Loading src={loading} alt="loading" />;
  }

  return (
    <PageContainer>
      <h1> 🎬 Selecione o Filme</h1>
      <ListContainer>
        {movie.map((film) => (
          <MovieContainer data-test="movie">
            <Link to={`/sessoes/${film.id}`}>
              <img src={film.posterURL} alt={film.title} />
            </Link>
          </MovieContainer>
        ))}
      </ListContainer>
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
  padding-top: 70px;
  h1 {
    min-width: 90vw;
    min-height: 10vh;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px #0000001a;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;

const Loading = styled.img`
  min-height: 40vh;
  margin: 250px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
