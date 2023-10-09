

const CardShow = ({card}) => {
   const {image, name, details} = card;
    console.log(card);
    
    return (
        <div className=" items-center">
         <img className="w-full" src={image} alt="" />
         <p className="text-2xl p-3 py-3 font-semibold">{name}</p>
         <p className="py-4 p-4">{details}</p>
          
        </div>
    );
};

export default CardShow;