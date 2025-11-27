import Image from "next/image";

const LogIn = () => {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#FAFAFF,#E0E0FF)] flex flex-col items-center pt-16 sm:pt-24">
      <div className="w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 sm:mb-10">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={120}
            height={120}
            className="w-auto h-auto cursor-pointer"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#21214D] mb-2 sm:mb-3">
            Welcome back!
          </h1>
          <p className="text-sm sm:text-base text-[#57577B] mb-6 sm:mb-8">
            Log in to continue tracking your mood and sleep.
          </p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-5">
            <div className="flex flex-col">
              <label className="text-sm sm:text-base font-medium text-[#57577B] mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@mail.com"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4865DB]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm sm:text-base font-medium text-[#57577B] mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4865DB]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4865DB] text-white p-2 sm:p-3 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm sm:text-base text-gray-700 mt-4 sm:mt-6">
          Haven&apos;t got an account?{" "}
            <a href="#" className="text-[#4865DB] font-medium hover:underline">
             Sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
