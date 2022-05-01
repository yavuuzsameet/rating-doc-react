import { useState,useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';



export const Star = ({doctorId, saveRatedByDoctor,getRatingByDoctor}) => {

  const [star,setStar] = useState(2);


  const onChange = (nextValue) => {
    saveRatedByDoctor(doctorId,nextValue)
    setStar(nextValue);
  }

  useEffect(() => {
    const getRated = getRatingByDoctor(Number(doctorId));
    if(getRated){
      setStar(getRated.ratedValue);
    }
  }, [doctorId, getRatingByDoctor]);

  return (
    <StarRatingComponent 
          starCount={5}
          value={star}
          onStarClick={(nextValue) => {onChange(nextValue)}}
        />
  );
};
