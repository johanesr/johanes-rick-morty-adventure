import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../../graphql';

function CharList() {
  const [gqlVariable, setGqlVariable] = useState({page:1});
  const [characters, setCharacters] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_ALL, {
    variables: gqlVariable
  });

  useEffect(() => {
    if(data) {
      setCharacters(data.characters.results);
    } else if(error) {
      console.log(error);
    }
  }, [data,error])

  const nextPage = () => {
    if(gqlVariable.page<34) {
      setGqlVariable({
        page: gqlVariable.page + 1
      })
      refetch();
    }
  }

  const prevPage = () => {
    if(gqlVariable.page!==0) {
      setGqlVariable({
        page: gqlVariable.page - 1
      })
      refetch();
    }
  }

  function test(params) {
    console.log(params);
  }

  return(
    <div className="char-list-wrapper">
      {loading===true ? <div>Loading...</div> :
        <>
        <Link to="/"><div>Home</div></Link>
        <div className="characters">
        {
          characters.map((char, i) => (
            <div key={i} className="character-display">
              <img src={char.image} className="char-image" alt={char.name}/>
              <div>{char.name}</div>
            </div>
          ))
        }
        </div>
        <button onClick={nextPage}>Next Page!</button>
        <button onClick={prevPage}>Prev Me!</button>
        <button onClick={() => test("TEST")}>TEST</button>
        </>
      }
    </div>
  );
}

export default CharList;