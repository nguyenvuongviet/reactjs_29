import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSeatSelected } from "./slice";

export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const [isChoosed, setIsChoosed] = useState(false);
  return (
    <button
      disabled={seat.daDat}
      className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-white transition-transform duration-200 ${
        seat.daDat
          ? "bg-red-500 cursor-not-allowed"
          : isChoosed
          ? "bg-yellow-500"
          : "bg-green-500 hover:bg-green-600 hover:scale-105"
      }`}
      onClick={() => {
        setIsChoosed(!isChoosed);
        dispatch(setSeatSelected(seat));
      }}
    >
      {seat.soGhe}
    </button>
  );
}
