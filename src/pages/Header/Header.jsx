import img from '../../../public/header.jpg'

const Header = () => {
    return (
        <div>
              <div className="relative">
              <img className="w-full" src={img} alt="" /> 
              </div>
              <div className="absolute top-[240px] p-3 ml-4">
                <h2 className="text-6xl text-[#194956b5] text-center font-bold">
                   The <br /> Greatest <br /> Wealth is Health
                   <br />
                 <p className="text-2xl">  -Virgil</p>
                </h2>
              </div>
        </div>
    );
};

export default Header;