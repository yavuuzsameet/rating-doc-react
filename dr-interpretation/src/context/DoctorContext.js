import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [fetchDoctorIsLoading, setFetchDoctorIsLoading] = useState(false);
  const [doctorRating, setDoctorRating] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = async () => {
    try {
      setFetchDoctorIsLoading(true);
      await axios("https://jsonplaceholder.typicode.com/users").then(
        (response) => {
          if (response) {
            setDoctors(response.data);
            setFetchDoctorIsLoading(false);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const saveDoctorStarRating = async (doctorId, ratedValue) => {
    const findUserById = doctorRating.find((item) => item.id === doctorId);
    if (findUserById) {
      findUserById.ratedValue = ratedValue;
    } else {
      await setDoctorRating([
        ...doctorRating,
        { id: doctorId, ratedValue: ratedValue },
      ]);
    }
  };

  const getRatingByDoctor = (doctorId) => {
    return doctorRating.find((item) => item.id === doctorId);
  };

  const values = {
    doctors,
    fetchDoctorIsLoading,
    saveDoctorStarRating,
    getRatingByDoctor,
    doctorRating,
  };
  return (
    <DoctorContext.Provider value={values}>{children}</DoctorContext.Provider>
  );
};
export const useDoctor = () => useContext(DoctorContext);
