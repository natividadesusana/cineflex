import styled from "styled-components";
import loading from "../assets/img/loading.gif";

export default function LoadingPage() {
  return <Loading src={loading} />;
}

const Loading = styled.img`
  min-height: 40vh;
  margin: 250px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
