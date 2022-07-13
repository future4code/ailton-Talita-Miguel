import styled from "styled-components"

export const Section = styled.section`
    width: 80vw;
`

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    box-shadow: 2px 2px 3px 2px #ccc;
    margin: 16px;
    padding: 16px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        /* border-bottom: 4px solid orange; */
    }
`

export const Card = styled.div`
    display: flex;
    width: 75%;
    
    h2 {
        width: 75%;
        font-size: 1.4rem;
    }
    
`

