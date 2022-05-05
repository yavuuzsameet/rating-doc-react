import { useMemo, useState } from "react";
import "./HomePage.scss";
import { useDoctor } from "../../context/DoctorContext";
import { CustomSearch } from "../../component/CustomSearch";
import { CustomHeader } from "../../component/CustomHeader";
import { Cards } from "../../component/Cards";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { doctors, fetchDoctorIsLoading } = useDoctor();
  const [textInput, setTextInput] = useState("");


  const doctorListByFilter = useMemo(() => {
        return doctors.filter(item => item.name.toLowerCase().includes(textInput.toLowerCase()))
  },[doctors,textInput])
  
  return (
    <>
      {fetchDoctorIsLoading && <div>Loading...</div>}
      <nav>
        <CustomHeader title="DOCTOR INTERPRETATION APP" />
        <CustomSearch setTextInput={setTextInput} />
      </nav>
        <Cards data={doctorListByFilter} />
        <button>
        <Link to={"/"}>Logout</Link>
      </button>
    </>
  );
}
