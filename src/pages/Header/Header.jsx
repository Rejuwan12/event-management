import img from '../../../public/header.jpg'

const Header = () => {
    return (
        <div>
              <div className="relative ">
              <img className="w-full rounded-lg" src={img} alt="" /> 
              </div>
              <div className="absolute lg:top-[370px] top=[-10px] p-3 ml-4">
                <h2 className="lg:text-6xl text-sm mt-[-140px] text-[#194956b5] text-center font-bold">
                   The <br /> Greatest <br /> Wealth is Health
                   <br />
                 <p className="lg:text-2xl sm:text-sm">  -Virgil</p>
                </h2>
              </div>
        </div>
    );
};

export default Header;