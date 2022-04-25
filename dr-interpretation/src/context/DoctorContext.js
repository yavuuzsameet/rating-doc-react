import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const values = {
    doctors,
    isLoading,
  };
  return (
    <DoctorContext.Provider value={values}>{children}</DoctorContext.Provider>
  );
};
export const useDoctor = () => useContext(DoctorContext);
