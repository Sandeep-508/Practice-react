import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const FormValidationWithZod = () => {
    const schema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        age: z.coerce.number().min(10, { message: 'Age must be at least 10' }),
    });
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="p-20">
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-1 gap-5 max-w-[500px] mx-auto'>
                <input {...register('name')} placeholder="Enter name" />
                <p>{errors.name?.message}</p>

                <input type="number" {...register('age')} placeholder="Enter age" />
                <p>{errors.age?.message}</p>

                <button type="submit" className="border border-black bg-white rounded-lg py-3 px-5 mt-5">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormValidationWithZod;
