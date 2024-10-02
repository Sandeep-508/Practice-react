import { Input } from "@mui/material";
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormValidationHook = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        toast.success(
            "Form submitted successfully",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        )
        reset();
    };
    return (
        <div className="p-20">
            <form className="grid grid-rows-1 gap-5 max-w-[500px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("name", { required: "Name is required" })}
                    type="text" name='name' placeholder="enter name" />
                <span className="-mt-4 h-4">{errors.name?.message}</span>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            // inside the pattern we can use condition on which it will pass the validation
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                            message: "Enter a valid email address"
                        }
                    })}
                    type="email" name="email" placeholder="enter email" />
                <span className="-mt-4 h-4">{errors.email?.message}</span>
                <input
                    {...register("phone", {
                        required: "Phone number is required",
                        minLength: {
                            value: 10,
                            message: "Phone number must be exactly 10 digits"
                        },
                        maxLength: {
                            value: 10,
                            message: "Phone number must be exactly 10 digits"
                        }
                    })}
                    type="number" name="phone" placeholder="enter phone number" />
                <span className="-mt-4 h-4">{errors.phone?.message}</span>
                <button type="submit" className="border border-black bg-white rounded-lg py-3 px-5 mt-5">Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FormValidationHook