

const Offer = ({offerr}) => {
    const {doctor_icons,offer_title, offer_details} = offerr;
    return (
        <div className=''>
            <img  className='items-center ml-14 lg:ml-6 ' src={doctor_icons} alt="" />
            <p className='text-center mt-2 font-semibold text-lg text-[#176B87]' >{offer_title}</p>
            <p className="text-center">{offer_details}</p>
        </div>
    );
};

export default Offer;