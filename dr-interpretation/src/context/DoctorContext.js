import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userStar, setUserStar] = useState([
    {
      id: 1,
      starValue: 5,
    },
  ]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const saveStarWithId = (id, starValue) => {
    const findUser = userStar.find((item) => item.id === id);
    if (!findUser) {
      setUserStar([...userStar, { id: id, starValue: starValue }]);
    } else {
      if (starValue !== findUser.starValue) {
        const changeObject = {
          ...findUser,
          starValue: starValue,
        };

        const createArray = {
          ...userStar.slice(0, findUser.id),
          changeObject,
          ...userStar.slice(findUser.id + 1),
        };

        console.log(createArray);
      }
    }
  };

  const values = {
    doctors,
    isLoading,
    userStar,
    saveStarWithId,
  };
  return (
    <DoctorContext.Provider value={values}>{children}</DoctorContext.Provider>
  );
};
export const useDoctor = () => useContext(DoctorContext);
