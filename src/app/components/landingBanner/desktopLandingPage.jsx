import Image from "next/image";
import desktopLanding from "../../image/desktopLanding.png";

export default function DesktopLandingPage() {
  return (
    <div className="top-0 right-0 flex justify-center bg-black relative">
      <Image
        src={desktopLanding}
        placeholder="blur"
        className="h-screen z-20"
        style={{ objectFit: "contain" }}
      />
      {/* <div className="absolute top-0 right-0 bg-[#7D1566] z-50 h-full w-full opacity-60"></div> */}
    </div>
  );
}
