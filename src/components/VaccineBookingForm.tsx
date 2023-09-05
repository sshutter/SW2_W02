"use client";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";

export default function VaccineBookingForm() {
  return (
    <form className="flex flex-col bg-slate-100 rounded-lg w-fit px-10 py-5 space-y-5 justify-center">
      <div className="flex flex-row space-x-5">
        <TextField id="firstName" label="First name" variant="outlined" />

        <TextField id="lastName" label="Last name" variant="outlined" />
      </div>

      <div>
        <TextField
          id="identityId"
          label="IdentityID"
          variant="outlined"
          fullWidth={true}
        />
      </div>

      <FormControl>
        <InputLabel id="hospital-label">Hospital</InputLabel>
        <Select
          labelId="hospital-label"
          variant="standard"
          id="hospital"
          label="Hospital"
          fullWidth={true}
        >
          <MenuItem value="Chulalongkorn Hospital">
            Chulalongkorn Hospital
          </MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat Hospital">Thammasat Hospital</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Pick Up Date" className="bg-transparent" />
      </LocalizationProvider>

      <Button>Make Vaccine Appointment</Button>
    </form>
  );
}
