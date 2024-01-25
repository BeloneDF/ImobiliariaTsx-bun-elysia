import styled from "styled-components";

const S = {
  Contaier: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%; // add this line
  `,
  FilterContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-bottom: 1rem;
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%; // make sure the container has a height
  `,

  Image: styled.img`
   object-fit: cover; // change this line
   height: 100%;
  `,
};

export default S;
