import React from "react";
import { Button, WhatsappButton } from "./button-contact-propertie.styled";
import * as T from "./types";
import api from "../../../api/api.index";
import { UserButtonProps } from "./../../../types/button/contactButtonProperties";

export const ButtonContactPropertie: React.FC<T.ButtonProps> = ({ user }) => {
  async function sendEmail(user: UserButtonProps) {
    try {
      console.log(user)
      api.post("/sendEmail", {
        user: user
      });
      alert("Email enviado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }
  return <Button onClick={() => sendEmail(user)}>Enviar Dúvidas</Button>;
};

export const WhatsAppButton: React.FC<T.WhatsAppButtonProps> = ({ id }) => {
  function sendToWhatsapp() {
    const message = `Olá tenho estou interessado no Imóvel: http://localhost:5173/properties/${id} e gostaria de tirar dúvidas com você! `;
    const link = `https://web.whatsapp.com/send?phone={5548991748301}&text=${message}`;
    window.open(link, "_blank");
  }

  return <WhatsappButton onClick={sendToWhatsapp}>ZAP</WhatsappButton>;
};
