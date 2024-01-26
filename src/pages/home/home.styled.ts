import styled from "styled-components";

const S = {
  Contaier: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    flex: 1;
  `,
  FilterContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-bottom: 1rem;
    justify-content: center;
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
  `,

  Image: styled.img`
    object-fit: cover;
    height: 100%;
    filter: drop-shadow(5px 5px 5px #222);
    -webkit-filter: drop-shadow(5px 5px 5px #222);
  `,
};
export default S;