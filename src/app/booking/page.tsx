import VaccineBookingForm from "@/components/VaccineBookingForm";

const Booking = () => {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 text-[#f2f2f2]">
      <div className="pt-[50px] text-[#f2f2f2] text-4xl font-extrabold">
        Vaccine Appointment
      </div>
      <div className="w-fit space-y-2">
        <VaccineBookingForm />
      </div>
    </main>
  );
};

export default Booking;
