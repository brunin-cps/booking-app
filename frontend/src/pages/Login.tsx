import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client'
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string,
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const { showToast } = useAppContext()
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.singIn, {
    onSuccess: async () => {
      showToast({ message: "Login sucessfull!", type: "SUCCESS" })
      await queryClient.invalidateQueries("validateToken");
      navigate("/")
    },
    onError: (err: Error) => {
      showToast({ message: err.message, type: "ERROR" })
    }
  });

  const onSubmmit = handleSubmit((data) => {
    mutation.mutate(data);
  })

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmmit}>
      <h2 className="text-3xl font-bold">Login</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input type="email" className="border rounded w-full py-1 px-2 font-normal"{...register("email", { required: "This field is required" })}></input>
        {errors.email && (
          <span className="text-red-500 font-normal">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input type="password" className="border rounded w-full py-1 px-2 font-normal"{...register("password", { required: "This field is required", minLength: { value: 6, message: "Password must be at least 5 characteres" } })}></input>
        {errors.password && (
          <span className="text-red-500 font-normal">{errors.password.message}</span>
        )}
      </label>
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?
          <Link className="underline text-blue-500" to="/register"> Create Account here</Link>
        </span>
        <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Logar</button>
      </span>
    </form>
  )
}

export default Login;