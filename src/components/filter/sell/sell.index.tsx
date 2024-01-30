import { LargeButton } from "../../buttons/large-button/large-button.styled";
import { TextInput } from "../../input/text-input/text-input.index";
import * as S from "./sell.styled";
import { useState } from "react";
const Sell = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  return (
    <S.Container>
      <S.FilterContainer>
        <h2>
          <strong>
            Deseja deixar seu imóvel em boas mãos? Faça o preenchimento do
            formulário abaixo que entraremos em contato.
          </strong>
        </h2>
      </S.FilterContainer>
      <S.FilterContainer>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          label="Seu nome"
          placeholder="Seu nome"
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          label="Seu E-mail"
          placeholder="E-mail"
        />
        <TextInput
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          id="email"
          label="Telefone"
          placeholder="telefone"
        />
      </S.FilterContainer>
      <S.FilterContainer>
        <LargeButton style={{ width: "98%" }}>Enviar</LargeButton>
      </S.FilterContainer>
    </S.Container>
  );
};

export default Sell;
