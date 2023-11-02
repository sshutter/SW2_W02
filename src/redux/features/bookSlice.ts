import { RootState } from "./../store";
import { BookingItem } from "./../../../interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type bookState = {
  bookingItem: BookingItem[];
};

const initialState: bookState = {
  bookingItem: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBookingItem: (state, action: PayloadAction<BookingItem>) => {
      if (state.bookingItem.length > 0) {
        state.bookingItem = [];
      }
      state.bookingItem.push(action.payload);
    },
    removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
      const remainingItem = (state.bookingItem = state.bookingItem.filter(
        (item) => {
          return (
            item.firstName !== action.payload.firstName ||
            item.lastName !== action.payload.lastName ||
            item.identityId !== action.payload.identityId
          );
          state.bookingItem = remainingItem;
        }
      ));
    },
  },
});

export const { addBookingItem, removeBookingItem } = bookingSlice.actions;
export default bookingSlice.reducer;
