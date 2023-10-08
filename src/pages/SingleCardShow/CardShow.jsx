

const CardShow = ({card}) => {
   const {image, name, details} = card;
    console.log(card);
    
    return (
        <div className=" items-center">
         <img className="w-full" src={image} alt="" />
         <p className="text-2xl font-semibold">{name}</p>
         <p>{details}</p>
          
        </div>
    );
};

export default CardShow;