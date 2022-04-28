import { StarsRating } from "stars-rating-react-hooks";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { useDoctor } from "../context/DoctorContext";

export const Star = ({ userId }) => {
  const { _id } = useParams();
  const [selecting, setSelecting] = useState(null);
  const { userStar, setUserStar, saveStarWithId } = useDoctor();

  // const selectingValueStorage = localStorage.getItem("selectingValue");
  // const stringifiedRating = localStorage.getItem("selectingValue");
  // const ratingAsObjectAgain = JSON.parse(stringifiedRating);
  // console.log("ratingAsObjectAgain", ratingAsObjectAgain);

  const config = {
    totalStars: 5,
    initialSelectedValue: "",
    renderFull: "★",
    renderEmpty: "☆",
  };

  const saveLocalStorage = (isSelecting, selectingValue) => {
    if (isSelecting) {
      saveStarWithId(userId, selectingValue);
      console.log(userStar);
      const localObject = {
        userId: userId,
        selectingValue: selectingValue,
      };
      localStorage.setItem("selectingValue", JSON.stringify(localObject));
    }
  };

  return (
    <StarsRating
      // onStarsRated={(value) => {
      //   alert(`${value} stars rated`);
      // }}

      onSelecting={(isSelecting, selectingValue) =>
        saveLocalStorage(isSelecting, selectingValue)
      }
      config={config}
    />
  );
};
