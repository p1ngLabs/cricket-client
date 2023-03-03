import Link from 'next/link';
import { FaFacebookF, FaGoogle, FaDiscord } from 'react-icons/fa';

const LoginModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-3xl text-center font-bold">Log In</h3>
          <form>
            <div className="form-control">
              <label className="label label-text">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label label-text">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </div>
            <Link
              href="#"
              className="inline-block underline underline-offset-1 mt-4 hover:no-underline"
            >
              Forgot password
            </Link>
            <button type="button" className="btn w-full mt-4">
              Log In
            </button>

            <div className="divider">OR</div>

            <div className="btn-group w-full mb-4">
              <Link href="#" type="button" className="btn bg-facebook border-0 flex-1 py-2 gap-1">
                <FaFacebookF />
                Facebook
              </Link>
              <Link href="#" type="button" className="btn bg-google border-0 flex-1 py-2 gap-1">
                <FaGoogle />
                Google
              </Link>
              <Link href="#" type="button" className="btn bg-discord border-0 flex-1 py-2 gap-1">
                <FaDiscord className="text-xl" />
                Discord
              </Link>
            </div>

            <p className="text-center">
              No account?{' '}
              <Link href="#" className="font-bold hover:text-blue-500">
                Sign Up
              </Link>
            </p>
          </form>
        </label>
      </label>
    </>
  );
};

export default LoginModal;
