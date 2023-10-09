

const Offer = ({offerr}) => {
    const {doctor_icons,offer_title, offer_details} = offerr;
    return (
        <div className=''>
            <img  className='items-center ml-14 lg:ml-6 ' src={doctor_icons} alt="" data-aos="flip-down"
     data-aos-duration="3000"/>
            <p className='text-center mt-2 font-semibold text-lg text-[#176B87]'data-aos="flip-down"
     data-aos-duration="3000">{offer_title}</p>
            <p className="text-center" data-aos="flip-down"
     data-aos-duration="3000">{offer_details}</p>
        </div>
    );
};

export default Offer;