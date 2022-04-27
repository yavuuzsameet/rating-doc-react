import { useState } from "react";
import "./HomePage.scss";
import { useDoctor } from "../../context/DoctorContext";
import { Link } from "react-router-dom";
import { StarsRating } from "stars-rating-react-hooks";
import { FaSearch, FaPhoneAlt, FaHospitalAlt, FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function HomePage() {
  const { doctors, isLoading } = useDoctor();
  const [searchTerm, setSearchTerm] = useState("");
  const [selecting, setSelecting] = useState(null);
  // console.log(doctors);

  const config = {
    totalStars: 5,
    initialSelectedValue: 4,
    renderFull: "★",
    renderEmpty: "☆",
  };
  return (
    <>
      {" "}
      {isLoading && <div>Loading...</div>}
      <nav>
        <h3>DOCTOR INTERPRETATION APP</h3>

        <div className="input-text">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search doctor.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </nav>
      <div className="cards">
        {doctors
          .filter((user) => {
            if (searchTerm === " ") {
              return user;
            } else if (
              user.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => (
            <div key={user.id} className="card">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=150"
                alt=""
              />
              <div className="card-content">
                <h4>
                  <FaUserAlt className="icon" /> {user.name}
                </h4>
                <h5>
                  <FaHospitalAlt className="icon" /> {user.company.name}
                </h5>
                <p className="mail">
                  <GrMail className="icon" />
                  {user.email}
                </p>
                <p className="phone">
                  <FaPhoneAlt className="icon" />
                  {user.phone}
                </p>
                <br />
                {/* <h3>{selecting?.selectingValue}</h3> */}
                <div className="card-footer">
                  <StarsRating
                    // onStarsRated={(value) => {
                    //   alert(`${value} stars rated`);
                    // }}
                    onSelecting={(isSelecting, selectingValue) => {
                      setSelecting({ isSelecting, selectingValue });
                      // alert(`You just rated ${selectingValue} Stars!!`);
                      // console.log(selectingValue, selecting);
                    }}
                    config={config}
                  />
                  <button>
                    {" "}
                    <Link to={`/detail/${user.id}`}>READ MORE</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default HomePage;
