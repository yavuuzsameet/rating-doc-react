import React from 'react'
import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt, FaHospitalAlt, FaUserAlt } from "react-icons/fa";
import { Star } from '../../Star';

import { useDoctor } from "../../../context/DoctorContext";

export const Card = ({data}) => {
  const { saveDoctorStarRating ,getRatingByDoctor} = useDoctor();
  const {id,name,email,phone} = data;


  return (
    <>
    <div key={id} className="card">
            <img
              src="https://www.pinnaclecare.com/wp-content/uploads/2017/12/bigstock-African-young-doctor-portrait-28825394.jpg"
              alt=""
            />
          <div className="card-content">
            <h4>
              <FaUserAlt className="icon" /> {name}
            </h4>
            <h5>
              <FaHospitalAlt className="icon" /> {data.company.name}
            </h5>
            <p className="mail">
              <GrMail className="icon" />
              {email}
            </p>
            <p className="phone">
              <FaPhoneAlt className="icon" />
              {phone}
            </p>
            <br />
            <div className="card-footer">
                <Star doctorId={id} saveRatedByDoctor={saveDoctorStarRating} getRatingByDoctor={getRatingByDoctor} />
              <button>
                <Link to={`/detail/${id}`}>READ MORE</Link>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}
