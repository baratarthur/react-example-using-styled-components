import { useState } from "react";
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError ] = useState(false);
  const navigate = useNavigate();

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.forEach(element => {
        repositoriesName.push(element.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      navigate('/repositories');
    })
    .catch(err => {
      setError(true)
    })
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          className="usuarioInput"
          placeholder="Usuario"
          value={ usuario }
          onChange={(e) => { setUsuario(e.target.value) }}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { error ? <S.ErrorMessage>Ocoreu um erro. Tente novamente.</S.ErrorMessage> : '' }
    </S.HomeContainer>
  );
}

export default Home;
