import { Link } from "react-router-dom";


const Cards = ({ card }) => {
  const { id, name, image, price, short_details } = card;
  return (
    <div>
      <div className="card card-compact h=[280px] bg-base-100 shadow">
        <figure>
          <img className="w-full h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_details}</p>

          <div className="card-actions justify-between items-center">
            <p>Price: $ {price}</p>
     
           <Link to={`/cards/${id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
