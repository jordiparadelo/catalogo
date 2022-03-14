import "../styles/Card.css";
import ButtonEdit from './ButtonEdit';
import {Link} from 'react-router-dom'
import {slugify} from '../../utilities/helpers'

function Card({widget}) {
  const {title, contributor, image, status, id} = widget
  return (
    <Link to={{
      pathname: `/widget/${slugify(title)}`,
      widget}}>
    <article className="card">
      <div className="image">
        <img src={image} alt={`${title} uploaded by ${contributor}`}/>
        <ButtonEdit/>
      </div>
      <div className="details">
        <button className="btn btn-publish" data-status={`${status}`} title={`Widget ${status}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2.13318C11.5532 2.2668 14.6861 4.50215 15.9682 7.81866C16.0106 7.93585 16.0106 8.06416 15.9682 8.18134C14.6861 11.4979 11.5532 13.7332 8 13.8668C4.44678 13.7332 1.31393 11.4979 0.031774 8.18134C-0.0105913 8.06416 -0.0105913 7.93585 0.031774 7.81866C1.31393 4.50215 4.44678 2.2668 8 2.13318ZM4.53325 8C4.53325 9.91464 6.08537 11.4668 8.00001 11.4668C9.91343 11.4638 11.4638 9.91342 11.4668 8C11.4668 6.08536 9.91465 4.53324 8.00001 4.53324C6.08537 4.53324 4.53325 6.08536 4.53325 8Z"
            />
          </svg>
        </button>
        <div className="details_body">
          <h3 className="title">{title}</h3>
          <p className="contributor">
            <span>by </span>
            <span className="contributor-name">{contributor}</span>
          </p>
        </div>
      </div>
    </article>
    </Link>
  );
}

Card.defaultProps = {
    title: "Card Tile",
    contributor: "Name of contributor"
}
export default Card;
