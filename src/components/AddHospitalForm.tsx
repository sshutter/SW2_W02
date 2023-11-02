import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
  const addHospital = async (hospitalFormData: FormData) => {
    "use server";
    const hospitalName = hospitalFormData.get("name");
    const hospitalAddr = hospitalFormData.get("addr");
    const hospitalDistrict = hospitalFormData.get("district");
    const hospitalProvince = hospitalFormData.get("province");
    const hospitalPostalCode = hospitalFormData.get("postalCode");
    const hospitalTel = hospitalFormData.get("tel");
    const hospitalPicture = hospitalFormData.get("picture");

    try {
      await dbConnect();
      const newHospital = await Hospital.create({
        name: hospitalName,
        address: hospitalAddr,
        district: hospitalDistrict,
        province: hospitalProvince,
        postalcode: hospitalPostalCode,
        tel: hospitalTel,
        picture: hospitalPicture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospital");
    redirect("/hospital");
  };

  return (
    <form action={addHospital}>
      <div className="w-full flex justify-center p-6">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="text-xl text-black">Create Hospital</div>

          <div className="flex items-center w-full my-2">
            <label className="w-auto text-black pr-2" htmlFor="name">
              Hospital Name
            </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              placeholder="Hospital Name"
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex items-center w-1/2 mr-2">
              <label
                className="w-auto text-start text-black pr-2"
                htmlFor="addr"
              >
                Address
              </label>
              <input
                type="text"
                required
                id="addr"
                name="addr"
                placeholder="Hospital Address"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex items-center w-1/4 my-2 mr-2">
              <label className="w-auto text-black pr-2" htmlFor="district">
                District
              </label>
              <input
                type="text"
                required
                id="district"
                name="district"
                placeholder="District"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex items-center w-1/4 my-2">
              <label className="w-auto text-black pr-4" htmlFor="province">
                Province
              </label>
              <input
                type="text"
                required
                id="province"
                name="province"
                placeholder="Province"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex items-center w-1/2 my-2">
              <label className="w-auto text-black pr-4" htmlFor="postalCode">
                Postal Code
              </label>
              <input
                type="text"
                required
                id="postalCode"
                name="postalCode"
                placeholder="xxxxx"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex items-center w-1/2 my-2">
              <label className="w-auto text-black pr-4" htmlFor="tel">
                Telephone Number
              </label>
              <input
                type="text"
                required
                id="tel"
                name="tel"
                placeholder="02-xxx-xxxx"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center w-full my-2">
              <label className="w-auto text-black pr-4" htmlFor="picture">
                Picture
              </label>
              <input
                type="text"
                required
                id="picture"
                name="picture"
                placeholder="URL"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Add new hospital
          </button>
        </div>
      </div>
    </form>
  );
}
