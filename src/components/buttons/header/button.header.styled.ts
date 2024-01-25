import styled from "styled-components";
import { Link } from "react-router-dom";
const s = {
    Button: styled(Link)`
      transition: all .5s ease;
        color: white;
        text-transform: uppercase;
        text-align: center;
        line-height: 1;
        font-size: 0.8rem;
        background-color : transparent;
        padding: 10px;
        outline: none;
        font-weight: bold;
        font-family:quicksand;
        border:none;
        border-bottom: 1px solid transparent;
        width: 10%;
        height: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;



        &:hover {
            color: white;
            cursor: pointer;
            border-bottom: 1px solid white;
            transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
       }
    `,

    ButtonGetStarted: styled(Link)`
        transition: all .5s ease;
        color: white;
        text-transform: uppercase;
        text-align: center;
        line-height: 1;
        font-size: 0.8rem;
        background-color : #1B2D51 ;
        padding: 10px;
        outline: none;
        font-weight: bold;
        font-family:quicksand;
        border-radius:10px;
        border-bottom: 1px solid transparent;
        width: 12%;
        height: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        &:hover {
            color: #1B2D51 ;
            cursor: pointer;
            background-color: white ;
       }
    `
};

export default s;