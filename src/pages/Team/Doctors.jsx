import Doctor from "./Doctor";

const Doctors = ({setCard}) => {
    console.log(setCard);
    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold text-center py-6">Our Doctors</h1>

               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-4">
               {
                    setCard?.map(doctor => <Doctor key={doctor.id} doctor={doctor}/>)
                }
               </div>
            </div>
        </div>
    );
};

export default Doctors;