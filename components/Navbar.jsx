import React, { useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-pink-600 sticky top-0 z-50  shadow-2xl mb-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-white hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <Link href="/">
                    <span className="font-bold">Codeswear</span>
                  </Link>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/tshirt/">
                  <a className="py-5 px-3 text-white hover:text-gray-900">
                    T-Shirts
                  </a>
                </Link>
                <Link href="/hoodies/">
                  <a className="py-5 px-3 text-white hover:text-gray-900">
                    Hoodies
                  </a>
                </Link>
                <Link href="/stickers/">
                  <a className="py-5 px-3 text-white hover:text-gray-900">
                    Stickers
                  </a>
                </Link>
                <Link href="/mugs/">
                  <a className="py-5 px-3 text-white hover:text-gray-900">
                    Mugs
                  </a>
                </Link>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-2 px-3 text-pink-400 bg-white rounded-lg hover:text-white hover:bg-purple-400"
              >
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-pink-400 hover:bg-purple-400 text-white hover:text-white rounded transition duration-300"
              >
                Signup
              </a>

              <a
                onClick={toggleCart}
                className="cursor-pointer py-2 px-3 bg-pink-400 hover:bg-purple-400 text-white hover:text-white rounded transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </a>

              <div
                ref={ref}
                className="max-w-md sidebar mt-16 absolute top-0 right-0 bg-pink-200   z-50 h-screen w-1/2 transform transition-transform translate-x-full"
              >
                <div className="absolute top-2 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-600 h-8 shadow-lg rounded-full cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={toggleCart}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-center mt-3 text-xl text-pink-600">
                    Shopping Cart
                  </p>
                </div>

                <div className="pl-8 pt-8 space-y-3   text-lg">
                  <div className="flex space-x-10">
                  <p className="w-60"><span className="bg-pink-600 rounded-full px-3 py-1 text-white">1</span> Tshirt - Wear The Code</p>
                    <div className="flex justify-center text-pink-600 items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>1</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex space-x-10">
                  <p className="w-60"><span className="bg-pink-600 rounded-full px-3 py-1 text-white">1</span> Tshirt - Wear The Code</p>
                    <div className="flex justify-center text-pink-600 items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>1</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-evenly items-center">
                  <div className="flex items-center cursor-pointer space-x-1 py-3 mt-10 hover:bg-purple-400 bg-pink-600 text-white hover:text-white  transition duration-300 px-10  rounded-lg shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <button type="submit">Checkout</button>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-1 py-3 mt-10 hover:bg-purple-400 bg-pink-600 text-white hover:text-white  transition duration-300 px-10  rounded-lg shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <button type="submit">Clear Cart</button>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center" onClick={toggleCart}>
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="mobile-menu md:hidden bg-white right-0 absolute h-screen w-3/5">
          <div className="flex flex-col">
            <span className="py-2 px-3 text-pink-400 bg-white rounded-lg hover:text-white hover:bg-purple-400">
              Login
            </span>
            <spans className="py-2 px-3 bg-pink-400 hover:bg-purple-400 text-white hover:text-white rounded transition duration-300">
              Signup
            </spans>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
