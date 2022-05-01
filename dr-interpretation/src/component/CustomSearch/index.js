import React from 'react'
import { FaSearch} from "react-icons/fa";
export const CustomSearch = ({setTextInput}) => {
  return (
    <div className="input-text">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search doctor..."
            onChange={(event) => {
              setTextInput(event.target.value)
            }}
          />
    </div>
  )
}
