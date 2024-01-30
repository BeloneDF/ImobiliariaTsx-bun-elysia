import { useState } from "react";
import {
  SelectInput,
  TextInput,
} from "../../input/text-input/text-input.index";
import * as S from "./rent-buy.styled";
import { LargeButton } from "../../buttons/large-button/large-button.styled";

const RentBuy = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  return (
    <S.Container>
      <S.FilterContainer>
        <SelectInput
          value={selectValue}
          id={"test"}
          label="Tipo de Imóvel"
          onChange={(event) => setSelectValue(event.target.value)}
        >
          <option>Selecione </option>
          <option>Casa</option>
          <option>Apartamento</option>
          <option>Terreno</option>
          <option>Sala Comercial</option>
        </SelectInput>
        <TextInput
          id="city"
          onChange={(e) => setCity(e.target.value)}
          type="text"
          value={city}
          label="Cidade"
          placeholder="Cidade"
        />
        <TextInput
          id="minPrice"
          onChange={(e) => setMinPrice(e.target.value)}
          type="text"
          value={minPrice}
          label="Preço Mínimo"
        />
      </S.FilterContainer>
      <S.FilterContainer>
        <TextInput
          id="maxPrice"
          onChange={(e) => setMaxPrice(e.target.value)}
          type="text"
          value={maxPrice}
          label="Preço Máximo"
        />
        <LargeButton style={{ marginTop: 30 }}>Buscar</LargeButton>
      </S.FilterContainer>
    </S.Container>
  );
};

export default RentBuy;
