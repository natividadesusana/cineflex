import styled from "styled-components";

export default function Caption() {
  return (
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
  );
}

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;


const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
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
