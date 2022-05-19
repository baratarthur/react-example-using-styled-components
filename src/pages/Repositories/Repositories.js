import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export default function Repositories() {

    const [ repositories, setRepositories ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const retrieveRepo = async () => {
            let repositoriesName = await localStorage.getItem('repositoriesName');
            repositoriesName = await JSON.parse(repositoriesName);
            if (repositoriesName) {
                setRepositories(repositoriesName);
                 await localStorage.clear();
            } else {
                navigate('/');
            }
        }    

        retrieveRepo();
    }, [navigate]);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {
                    repositories.map((repo) => (
                        <S.ListItem key={repo}>{ repo }</S.ListItem>
                    ))
                }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
