"use client";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBookingItem } from "@/redux/features/bookSlice";

export default function MyBookedVaccine() {
  const bookingItem = useAppSelector((state) => state.bookingSlice.bookingItem);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {bookingItem.length === 0 ? (
        <div className="text-md font-semibold text-center text-neutral-50">
          No Vaccine Booking
        </div>
      ) : (
        bookingItem.map((item) => (
          <div
            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-gray-800"
            key={item.hospital}
          >
            <div className="text-xl font-medium">{item.hospital}</div>
            <div className="text-md text-left text-gray-600">
              Name: {item.firstName} {item.lastName}
            </div>
            <div className="text-md text-left text-gray-600">
              Identity Id: {item.identityId}
            </div>
            <div className="text-md text-left text-gray-600">
              Pick Date: {item.pickupDate}
            </div>
            <button
              className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-2"
              onClick={() => dispatch(removeBookingItem(item))}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </>
  );
}
