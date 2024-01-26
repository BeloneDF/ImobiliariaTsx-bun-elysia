import styled from "styled-components";

export const TextInput = styled.input`
    transition: all 0.2s ease-in-out;
    display: flex;
    width: 25%;
    height: 40px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    align-items: center;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    color: #1b2d51;
    font-weight: 600;
    font-size: 1rem;
    
    &:active {
        background-color: #e5e5e5;
        box-shadow: inset 0px 0px 10px gray;
        border:none ;
    }
`