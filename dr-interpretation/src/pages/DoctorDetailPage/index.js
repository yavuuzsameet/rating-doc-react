import "./DoctorDetailPage.scss";
import { useParams } from "react-router-dom";
import { useDoctor } from "../../context/DoctorContext";
import { Link } from "react-router-dom";
import { Star } from '../../component/Star';

function DetailPage() {
  const { _id } = useParams();
  const { doctors,getRatingByDoctor,saveDoctorStarRating } = useDoctor();
  const doctorInfo = doctors[_id - 1];
  return (
    <div className="doctorDetail">
      <div className="container">
        {/* <h1>Detail Page {_id}</h1> */}
        <div className="sub-container">
          <center>
            <img
              src="https://www.pinnaclecare.com/wp-content/uploads/2017/12/bigstock-African-young-doctor-portrait-28825394.jpg"
              alt=""
            />
          </center>
          <div className="star">
          <Star doctorId={_id} saveRatedByDoctor={saveDoctorStarRating} getRatingByDoctor={getRatingByDoctor} />
          </div>
          <h1>ABOUT</h1>
          <p>
            <span>Name:</span> {doctorInfo.name}
          </p>
          <p>
            <span>Hospital Name:</span> {doctorInfo.company.name}
          </p>
        </div>

        <div className="sub-container">
          {" "}
          <h1>SUMMARY</h1>
          <p style={{ padding: "0 50px" }}>
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="sub-container">
          <h1>CONTACT</h1>
          <p>
            <span>Email: </span>
            {doctorInfo.email}
          </p>
          <p>
            <span>Phone: </span>
            {doctorInfo.phone}
          </p>
          <p>
            <span>Website: </span>
            {doctorInfo.website}
          </p>
          <p>
            <span>Address: </span>
            {doctorInfo.address.city}
          </p>
        </div>
        <br />
      </div>
      <button>
        <Link to={"/"}>All Doctors</Link>
      </button>
    </div>
  );
}

export default DetailPage;
