import { Link } from 'react-router-dom';
import './styles.scss';
import Portal from '../../styles/images/portal.png';

function Welcome() {
  return(
    <div className="welcome-wrapper">
      <Link to="/home">
        <img src={Portal} className="portal-image" alt="Portals"/>
      </Link>
      <div className="rick-morty-font">
        We are in a website Morty!
      </div>
      <div className="created-by">
        Created by: Johanes Ronaldo
      </div>
    </div>
  );
}

export default Welcome;