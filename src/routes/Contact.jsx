import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="form-control">
          <span className="label label-text">Name</span>
          <input
            className={`input input-bordered ${
              errors.name ? 'input-error' : ''
            }`}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="label label-text text-error">Name is required</p>
          )}
        </label>

        <label className="form-control">
          <span className="label label-text">Email</span>
          <input
            className={`input input-bordered ${
              errors.email ? 'input-error' : ''
            }`}
            type="email"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="label label-text text-error">Email is required</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="label label-text text-error">Email is invalid</p>
          )}
        </label>

        <label className="form-control">
          <span className="label label-text">Message</span>
          <textarea
            className={`textarea textarea-bordered ${
              errors.message ? 'textarea-error' : ''
            }`}
            {...register('message', { required: true })}
          />
          {errors.message && (
            <p className="label label-text text-error">Message is required</p>
          )}
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
