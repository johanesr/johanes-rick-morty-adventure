import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../../graphql';

function Home() {
  const [gqlVariable, setGqlVariable] = useState({page:1});
  const [characters, setCharacters] = useState([]);
  // const [curPage, setCurPage] = useState(1);
  const { loading, data, refetch } = useQuery(GET_ALL, {
    variables: gqlVariable
  });

  useEffect(() => {
    refetch()
      .then(res => {
        if(res.data) {
          setCharacters(data.characters.results);
        }
      })
      .catch(err => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const nextPage = () => {
    console.log("Next");
    setGqlVariable({
      page: gqlVariable.page + 1
    })
    console.log(characters);
  }

  const prevPage = () => {
    console.log("Prev");
    if(gqlVariable.page!==0) {
      setGqlVariable({
        page: gqlVariable.page - 1
      })
    }
    console.log(characters);
  }

  function test(params) {
    console.log(params);
  }

  return(
    <div className="home-wrapper">
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

export default Home;