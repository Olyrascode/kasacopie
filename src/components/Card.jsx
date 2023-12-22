import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ title, cover }) {
    return (
      <Link to="Logements">
        <div className="card">
          <img src={cover} alt="Cover" className="card_cover" />
          <h1 className='card_title'>{title}</h1>
        </div>
      </Link>
    );
  }
  
  Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
  
  export default Card;