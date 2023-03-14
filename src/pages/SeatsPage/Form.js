import styled from "styled-components";

export default function Form({ setName, setCpf, bookSeats, name, cpf }) {
  return (
    <FormContainer>
      <form onSubmit={bookSeats}>
        <label htmlFor="name">Nome do Comprador:</label>
        <input
          data-test="client-name"
          placeholder="Digite seu nome..."
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="cpf">CPF do Comprador:</label>
        <input
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          id="cpf"
          type="text"
          pattern="\d{11}"
          required
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <Button>
          <button data-test="book-seat-btn" type="submit">
            Reservar Assento(s)
          </button>
        </Button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  input {
    width: calc(100vw - 60px);
    margin-left: 20px;
  }
  label {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    &:hover {
      background-color: rgb(234 88 12);
    }
    cursor: pointer;
  }
`;
