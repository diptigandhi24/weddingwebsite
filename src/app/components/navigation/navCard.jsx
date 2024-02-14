import Image from "next/image";

export default function NavCard({ url, heading, description }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-2xl p-3 flex flex-col justify-start sm:h-[170px] lg:h-[160px] lg:w-[60%] sm:w-[90%] md:w-[80%]">
        <span>
          <Image
            src={url}
            className="text-[#7D1566]"
            alt="My SVG"
            width={30}
            height={30}
          ></Image>
        </span>
        <h4 className="font-abhy text-[#EF475F] mt-1 mb-1 font-bold">
          {heading}
        </h4>
        <p className=" text-[#2E4057] text-base font-avenir">{description}</p>
      </div>
    </div>
  );
}
