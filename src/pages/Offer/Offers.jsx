import Offer from "./Offer";


const Offers = ({data}) => {
    console.log(data);
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center py-4">Offers For You</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-3 py-2 ">
                {
                    data?.map(offer => <Offer key={offer.id} offerr={offer}/>)
                }
            </div>
        </div>
    );
};

export default Offers;