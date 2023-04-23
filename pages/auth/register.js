import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full border rounded-lg py-2 px-4" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-lg py-2 px-4" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block font-bold">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-lg py-2 px-4" placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block font-bold">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" className="w-full border rounded-lg py-2 px-4" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="rounded-lg py-2 px-4 font-bold">Sign up</button>
        </form>
        <div className="mt-6">
          <p className="text-sm">Already have an account? <Link href="/auth/login" legacyBehavior><a className="font-bold">Log in</a></Link></p>
        </div>
      </div>
    </div>
  );
}
