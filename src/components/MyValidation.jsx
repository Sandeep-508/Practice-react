import { useForm } from "react-hook-form"

const MyValidation = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset();
    }
    return (
        <form onClick={handleSubmit(onSubmit)}>
            <div>
                <p>First Name</p>
                <input {...register("name", { required: "First Name is Required" })} />
                <span className="mt-4 h-4">{errors.name?.message}</span>
            </div>
            <div>
                <p>Email</p>
                <input
                    {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Enter Valid Email Address..."
                        }
                    })} />
                <span className="mt-4 h-4">{errors.email?.message}</span>
            </div>
            <div>
                <p>Phone Number</p>
                <input
                    type="number"
                    name="phoneNumber"
                    {...register("phoneNumber", {
                        required: "Phone Number is Required",
                        pattern: {
                            value: /^[0-9\-\+]{9,15}$/,
                            message: "Phone Number Should Be Exactly 10 Digits"
                        }
                    })} />
                <span className="mt-4 h-4">{errors.phoneNumber?.message}</span>
            </div>
            <button type="submit" className="border border-black bg-white rounded-lg py-3 px-5 mt-5">Submit</button>
        </form>
    )
}

export default MyValidation