import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from "../pages/NavBar.jsx";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20">
        
        <p className="text-gray-100 text-4xl mb-4">404</p>

        <h1 className="text-3xl md:text-5xl font-light text-gray-100 leading-snug max-w-4xl">
          Oops! The page you were looking for couldn't be found.
        </h1>

        <Link
          to="/"
          className="mt-8 text-lg font-semibold text-white hover:underline"
        >
          Back to the home page
        </Link>

      </div>

      <Footer />
    </>
  );
}
