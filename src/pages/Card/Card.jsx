import Cards from "./Cards";


const Card = ({data}) => {
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 mx-auto p-2">
            {
                data?.map((card) => <Cards key={card.id} card={card}></Cards>)
            }
        </div>
    );
};

export default Card;