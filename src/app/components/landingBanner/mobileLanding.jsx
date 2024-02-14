import Navigation from "../navigation";

export default function MobileLandingPage() {
  return (
    <>
      <div className="bg-cover h-fit w-full bg-hero-banner  bg-[#84CFE7]">
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="font-abhy font-bold text-5xl text-white mt-[50%]">
            {" "}
            Nitya & Jeet
          </h1>
          <h4 className="font-abhy  text-white font-semibold text-base ">
            17th & 18th February, 2024
          </h4>
        </div>
        <div className="sm:mt-[20%] lg:mt-[20%]">
          <Navigation />
        </div>
      </div>
    </>
  );
}
