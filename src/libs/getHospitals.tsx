export default async function getHospitals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("http://localhost:5001/api/v1/hospitals");
  if (!res.ok) throw new Error(res.statusText);
  const hospitalJson = await res.json();
  return hospitalJson;
}
