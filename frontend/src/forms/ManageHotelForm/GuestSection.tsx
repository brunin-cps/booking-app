import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const GuestSection = () => {
  const { register, formState: { errors } } = useFormContext<HotelFormData>()
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3"> Guests</h2>
      <div className="grid grid-cols-2 gap-5 bg-gray-300 p-6">
        <label className="text-gray-700 text-sm font-semibold ">
          Number of Adults
          <input type="number" min={1} className="border rounded w-full py-2 px-3 font-normal"{...register("adultCount", { required: "This field is required" })}></input>
          {errors.adultCount?.message && (
            <span className="text-red-500 font-normal">{errors.adultCount?.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold ">
          Number of Children
          <input type="number" min={0} className="border rounded w-full py-2 px-3 font-normal"{...register("childCount", { required: "This field is required" })}></input>
          {errors.childCount?.message && (
            <span className="text-red-500 font-normal">{errors.childCount?.message}</span>
          )}
        </label>
      </div>
    </div>
  )
}

export default GuestSection