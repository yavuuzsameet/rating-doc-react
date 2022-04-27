import { StarsRating } from "stars-rating-react-hooks";
import { useState } from "react";

function Star() {
  const [selecting, setSelecting] = useState(null);

  const config = {
    totalStars: 5,
    initialSelectedValue: 4,
    renderFull: "★",
    renderEmpty: "☆",
  };
  return (
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
  );
}
export default Star;
