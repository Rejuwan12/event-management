

const Cards = ({card}) => {
    const {name, image, price, short_details} = card;
    return (
        <div>
            <div className="card card-compact h=[280px] bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_details}</p>
    
    <div className="card-actions justify-between items-center">
    <p>${price}</p>
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
   </div>
    );
};

export default Cards;