import styled from "styled-components";

const S = {
  Header: styled.header`
    height: 80px;
    display: flex;
  `,
  Containers: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  `,

  Logo: styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    width: 50%;
    justify-content: flex-start;
    display: flex;
    margin-left: 3rem;
    word-spacing: 0.5rem;
    letter-spacing: 0.1rem;
  `,

  Nav: styled.nav`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 2rem;
    height: 100%;
  `,
};

export default S;
