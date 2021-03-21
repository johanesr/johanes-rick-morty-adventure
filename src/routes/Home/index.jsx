import { useQuery } from '@apollo/client';
import { GET_ALL_RICKS } from '../../graphql/index';

import './styles.scss';
import Portal from '../../styles/images/portal.png';


function Home() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_RICKS);
  console.log(data);
  console.log(error);
  console.log(loading);

  return(
    <div className="home-wrapper">
      <img src={Portal} className="portal-image" alt="Portals"/>
      <div className="rick-mort-font">
        We are in a website Morty!
      </div>
      <div className="created-by">
        Created by: Johanes Ronaldo
      </div>
    </div>
  );
}

export default Home;