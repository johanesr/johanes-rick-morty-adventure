import './styles.scss';
import Portal from '../../styles/images/portal.png';

function Home() {
  return(
    <div className="home-wrapper">
      <img src={Portal} className="portal-image" alt="Portals"/>
      <div className="rick-mort-font">
        We are in a website Morty!
      </div>
      <div className="created-by">Created by: Johanes Ronaldo</div>
    </div>
  );
}

export default Home;