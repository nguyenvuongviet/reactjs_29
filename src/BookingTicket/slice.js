import { createSlice } from "@reduxjs/toolkit";
import data from "./danhSachGhe.json";

const initialState = {
  listState: data,
  listSeatSelected: [],
};

const findIndexSeat = (data, seat) => {
  return data.findIndex((item) => item.soGhe === seat.soGhe);
};

const bookingTicketSlice = createSlice({
  name: "bookingTicket",
  initialState,
  reducers: {
    setSeatSelected: (state, action) => {
      const { payload } = action;
      const index = findIndexSeat(state.listSeatSelected, payload);
      const listSeatSelectedClone = [...state.listSeatSelected];
      if (index !== -1) {
        listSeatSelectedClone.splice(index, 1);
      } else {
        listSeatSelectedClone.push(payload);
      }
      state.listSeatSelected = listSeatSelectedClone;
    },
  },
});

export const { setSeatSelected } = bookingTicketSlice.actions;
export default bookingTicketSlice.reducer;
