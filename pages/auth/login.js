import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center  mb-6">Login</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block  font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-lg py-2 px-4" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block  font-bold">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-lg py-2 px-4" placeholder="Enter your password" />
          </div>
          <button type="submit" className="rounded-lg py-2 px-4 font-bold">Sign in</button>
        </form>
        <div className="mt-6">
          <p className=" text-sm">Don't have an account yet? <Link className="font-bold" href="/auth/register">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
