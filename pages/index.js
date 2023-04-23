import Head from 'next/head';
import Footer from '@/components/home/Footer';
import HeroSection from '@/components/home/HeroSection';
export default function Home() {

  return (
    <>
    <HeroSection/>
      <div className="min-h-screen">
        <Head>
          <title>Ecommerce Platform for Digital Products</title>
          <meta name="description" content="A platform for sharing and selling digital files like PSD, PNG, and JPG." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="max-w-5xl mx-auto py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to our Ecommerce Platform</h1>
          <p className="text-xl mb-8">Our platform simplifies the process of sharing and selling digital products, making it easy for vendors to reach a larger audience and for users to access high-quality digital files.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-md rounded-md p-8">
              <h2 className="text-xl font-bold mb-4">For Vendors</h2>
              <p className="mb-4">Our platform allows you to share your digital products with users and earn for every purchase made. Reach a larger audience and increase your revenue with ease.</p>
              <button className="rounded-md py-2 px-4 transition duration-300">Become a Vendor</button>
            </div>
            <div className="shadow-md rounded-md p-8">
              <h2 className="text-xl font-bold mb-4">For Users</h2>
              <p className="mb-4">Our platform lets you easily purchase digital products using your account balance. Deposit funds into your account and use them to access high-quality digital files.</p>
              <button className="rounded-md py-2 px-4 transition duration-300">Create an Account</button>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
  </>
  );
}
