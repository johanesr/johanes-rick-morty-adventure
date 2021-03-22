import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../../graphql';

function Home() {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL, {
    variables: {page: 1}
  });

  useEffect(() => {
    if(data) {
      setCharacters(data.characters.results.slice(0,2));
    } else if(error) {
      console.log(error);
    }
  }, [data,error])

  return(
    <div className="home-wrapper">
      {loading===true ? <div>Loading...</div> :
        <>
          <Link to="/"><div>Welcome Page</div></Link>
          <div>
            Rick and Morty is an American animated television series created by Dan Harmon and Justin Roiland that premiered on December 2, 2013 on Cartoon Network's Adult Swim programming block
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hl1U0bxTHbY" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          <div className="intro">
            Visit <br/>
            <a href="https://www.adultswim.com/videos/rick-and-morty">[adult swim]</a><br/>
            official website for more Rick and Morty!
          </div>
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
        </>
      }
    </div>
  );
}

export default Home;