import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [fetchDoctorIsLoading, setFetchDoctorIsLoading] = useState(false);
  const [doctorRating, setDoctorRating] = useState([]);
  const [doctorData, setDoctorData] = useState();

  useEffect(() => {
    getDoctorsList();
    postDoctorsList();
    getRatingValue();
    saveDoctorStarRating();
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
      return e;
    }
  };
  const postDoctorsList = async () => {
    const data = { id: 1, point: 3 };
    const REST_API_URL = "http://127.0.0.1:8000/core/doctor";

    try {
      setFetchDoctorIsLoading(true);
      await axios.post(REST_API_URL, data).then((response) => {
        if (response) {
        }
      });
    } catch (e) {
      return e;
    }
  };

  const getRatingValue = async () => {
    try {
      await axios("http://127.0.0.1:8000/core/doctor").then((response) => {
        const tempData = [];

        const { data } = response;

        if (data) {
          data.forEach((item) => {
            tempData.push({
              id: item.id,
              ratedValue: Math.floor(item.rating),
            });
          });

          setDoctorRating(tempData);
        }
      });
    } catch (e) {
      return e;
    }
  };

  const saveDoctorStarRating = async (doctorId, ratedValue) => {
    const findUserById = doctorRating.find((item) => item.id === doctorId);

    if (findUserById) {
      axios
        .post("http://127.0.0.1:8000/core/doctor", {
          id: doctorId,
          point: ratedValue,
        })
        .then((response) => {
          console.log(response);
          setDoctorData(response.data);
          console.log(doctorData);
        });
    }

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
    doctorData,
  };
  return (
    <DoctorContext.Provider value={values}>{children}</DoctorContext.Provider>
  );
};
export const useDoctor = () => useContext(DoctorContext);
