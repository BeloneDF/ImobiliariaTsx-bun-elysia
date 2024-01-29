import { useState } from "react";
import {
  SelectInput,
  TextInput,
} from "../../input/text-input/text-input.index";
import * as S from "./rent-buy.styled";

const RentBuy = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <S.Container>
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
        value={minPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        })}
        label="Preço Mínimo"
      />
      <TextInput
        id="maxPrice"
        onChange={(e) => setMaxPrice(e.target.value)}
        type="text"
        value={maxPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        })}
        label="Preço Máximo"
      />
    </S.Container>
  );
};

export default RentBuy;
