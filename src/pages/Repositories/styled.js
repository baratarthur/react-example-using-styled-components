import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

export const Title = styled.h1`
    margin: 0 .5rem;
    text-align: center;
`;

export const List = styled.ul`
    list-style: none;
    padding: 1rem 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

export const ListItem = styled.li`
    margin: .75rem 0;
    padding: 1rem;
    font-size: 1.5rem;
    width: 70%;
    background-color: black;
    color: white;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: white;
    padding: .5rem 0;
    text-decoration: none;

    &:active {
        background-color: gray;
        color: black;
    }
`;
