import S from "./header.main.styled";
import HeaderButton from "../buttons/header/button.header";

const Header = () => {
  return (
    <S.Header>
      <S.Containers>
        <S.Logo>Sua Imobiliária</S.Logo>
        <S.Nav>
          <HeaderButton title={"Home"} path={"/"} />
          <HeaderButton title={"Sobre"} path={"/about"} />
          <HeaderButton title={"Imóveis"} path={"/properties"} />
          <HeaderButton title={"Contato"} path={"/contact"} />
          <HeaderButton
            title={"Iniciar Tour"}
            path={"/contact"}
            isStarted={true}
          />
        </S.Nav>
      </S.Containers>
    </S.Header>
  );
};

export default Header;
