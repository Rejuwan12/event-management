import img from '../../../public/header.jpg'

const Header = () => {
    return (
        <div>
              <div className="relative ">
              <img className="w-full h-[500px] rounded-b-lg" src={img} alt="" /> 
              </div>
              <div className="absolute lg:top-[340px] top=[-10px] p-3 ml-4" data-aos="fade-up"
     data-aos-duration="3000">
                <h2 className="lg:text-6xl  text-sm mt-[-140px] text-[#194956b5] text-center font-bold ">
               The <br /> Greatest <br /> Wealth is Health
                   <br />
                 <p className="lg:text-2xl sm:text-sm">  -Virgil</p>
                </h2>
              </div>
        </div>
    );
};

export default Header;