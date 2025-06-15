"use client";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Debe ser un email válido').required('Requerido'),
});

export default function SubscriptionForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    console.log(data);
    alert('¡Gracias! Te mantendremos informado.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col items-center gap-3">
      <input 
        {...register('email')} 
        placeholder="Ingresa tu correo"
        className="p-2 rounded text-center shadow-md w-64" 
      />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>
      <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded shadow">
        ¡Avísame!
      </button>
    </form>
  );
}
