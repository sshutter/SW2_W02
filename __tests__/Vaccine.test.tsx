import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockHospitalJson = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "6524290427cae34a7eda9b3c",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "6524290427cae34a7eda9b3c",
    },
    {
      _id: "6524294027cae34a7eda9b3f",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "6524294027cae34a7eda9b3f",
    },
    {
      _id: "6524297227cae34a7eda9b42",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "6524297227cae34a7eda9b42",
    },
    {
      _id: "65437b2b71c7ada0dcd41f17",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "02-244-3000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "65437b2b71c7ada0dcd41f17",
    },
  ],
};

describe("Hospital Catalog", () => {
  it("should have the correct number of hospitals", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJson: mockHospitalJson,
    });
    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalCards = screen.getAllByRole("img");
      expect(hospitalCards.length).toBe(mockHospitalJson.data.length);
    });
  });
});
