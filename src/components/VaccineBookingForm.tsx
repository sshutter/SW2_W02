"use client";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { BookingItem } from "../../interfaces";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBookingItem } from "@/redux/features/bookSlice";

export default function VaccineBookingForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<BookingItem>({
    firstName: "",
    lastName: "",
    identityId: "",
    hospital: "",
    pickupDate: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addBookingItem(formData));
  };

  return (
    <form
      className="flex flex-col bg-slate-100 rounded-lg w-fit px-10 py-5 space-y-5 justify-center"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-row space-x-5">
        <TextField
          name="firstName"
          label="First name"
          variant="outlined"
          onChange={handleInputChange}
        />

        <TextField
          name="lastName"
          label="Last name"
          variant="outlined"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <TextField
          name="identityId"
          label="IdentityID"
          variant="outlined"
          fullWidth={true}
          onChange={handleInputChange}
        />
      </div>

      <FormControl>
        <InputLabel id="hospital-label">Hospital</InputLabel>
        <Select
          name="hospital"
          labelId="hospital-label"
          variant="outlined"
          label="Hospital"
          fullWidth={true}
          value={formData.hospital}
          onChange={handleInputChange}
        >
          <MenuItem value="Chulalongkorn Hospital">
            Chulalongkorn Hospital
          </MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat Hospital">Thammasat Hospital</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Pick Up Date"
          className="bg-transparent"
          onChange={(value: Dayjs | null) =>
            setFormData({
              ...formData,
              pickupDate: value ? value.format("DD/MM/YYYY") : "",
            })
          }
        />
      </LocalizationProvider>

      <Button type="submit">Make Vaccine Appointment</Button>
    </form>
  );
}
