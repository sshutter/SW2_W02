export default async function getHospital(hid: string) {
  const res = await fetch("http://localhost:5001/api/v1/hospitals/" + hid);
  if (!res.ok) throw new Error(res.statusText);
  const hospitalJson = await res.json();
  return hospitalJson;
}
