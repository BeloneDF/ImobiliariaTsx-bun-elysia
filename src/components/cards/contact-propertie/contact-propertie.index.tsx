import { useState } from "react";
import { TextInput } from "../../input/text-input/text-input.index";
import * as S from "./contact-propertie.styled";
import {
  ButtonContactPropertie,
  WhatsAppButton,
} from "../../buttons/contact-propertie/button-contact-propertie";

interface IDProps {
  id: object | string;
}
const ContactCard = (id: IDProps) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <S.Container>
      <S.InfoDiv>
        <TextInput
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          label="Nome"
          placeholder="Nome"
        />
        <TextInput
          id="phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          type="text"
          label="Telefone/Celular"
          placeholder="Telefone/Celular"
        />
        <TextInput
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="text"
          label="Email"
          placeholder="Email"
        />
      </S.InfoDiv>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          height: "50%",
        }}
      >
        <S.InfoDiv
          style={{
            width: "65%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              paddingLeft: "3%",
            }}
          >
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: 16,
                fontWeight: "bold",
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Sua Dúvida
            </label>
            <textarea
              id="message"
              style={{
                width: "100%",
                height: "70%",
                borderRadius: 10,
                border: "1px solid #e5e5e5",
                color: "#1b2d51",
                fontWeight: 600,
                fontSize: "1rem",
                paddingLeft: 5,
              }}
            ></textarea>
          </div>
        </S.InfoDiv>
        <S.InfoDiv
          style={{
            width: "33%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: 10,
            paddingLeft: 10,
            border: "1px solid red",
            height: "100%",
          }}
        >
          <ButtonContactPropertie
            user={user}
            message={user.message}
          ></ButtonContactPropertie>
          <WhatsAppButton id={id.id}></WhatsAppButton>
        </S.InfoDiv>
      </div>
    </S.Container>
  );
};

export default ContactCard;
