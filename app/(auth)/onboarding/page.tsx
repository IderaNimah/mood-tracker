import Image from "next/image";

const Onboarding = () => {
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
            Personalize your experience
          </h1>
          <p className="text-sm sm:text-base text-[#57577B] mb-6 sm:mb-8">
            Add your name and a profile picture to make Mood yours.
          </p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-5">
            <div className="flex flex-col">
              <label className="text-sm sm:text-base font-medium text-[#57577B] mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Appleseed"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4865DB]"
              />
            </div>

            <div className="flex  gap-6">
              {/* Avatar Image */}
              <div>
                <Image
                  src="/assets/avatar-placeholder.svg"
                  alt="avatar"
                  width={60}
                  height={60}
                  className=" cursor-pointer object-cover rounded-full"
                />
              </div>

              {/* Text + Button Column */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg  text-[#21214D]">
                  Upload Image
                </h3>
                <p className="text-sm text-[#57577B]">Max 250KB, PNG or JPEG</p>
                <button className="w-fit font-semibold px-2 py-2 text-[#21214D] rounded-lg border-1 border-[#21214D]cursor-pointer">
                  Upload
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4865DB] text-white p-2 sm:p-3 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Start Tracking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
