import React from 'react';

const Doctor = ({doctor}) => {
    const {doctor_img, doctor_name, doctor_jobs, doctor_link,} = doctor;
    return (
        <div>
            <img className='rounded-full ml-14 lg:ml-9 p-2 bg-gray-100' src={doctor_img} alt="" />
            <p className='text-center mt-2 font-semibold text-lg'>{doctor_name}</p>
          <p className='text-center text-[#176B87]'> {doctor_jobs}</p>
          <img src={doctor_link} alt="" />
         
        </div>
    );
};

export default Doctor;