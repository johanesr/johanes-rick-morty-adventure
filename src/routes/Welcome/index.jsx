import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ALL_RICKS } from '../../graphql/index';

import './styles.scss';
import Portal from '../../styles/images/portal.png';

function Welcome() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_RICKS);
  console.log(data);
  console.log(error);
  console.log(loading);

  return(
    <div className="welcome-wrapper">
      <Link to="/home">
        <img src={Portal} className="portal-image" alt="Portals"/>
      </Link>
      <div className="rick-mort-font">
        We are in a website Morty!
      </div>
      <div className="created-by">
        Created by: Johanes Ronaldo
      </div>
    </div>
  );
}

export default Welcome;