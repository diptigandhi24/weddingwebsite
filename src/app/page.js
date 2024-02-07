import Navigation from "./menu";
import EventTabs from "./eventTabs";
import localFont from "next/font/local";
const weddingFont = localFont({
  src: "../../public/fonts/monsieur_la_doulaise/MonsieurLaDoulaise-Regular.ttf",
  variable: "--font-monsieur",
});

export default function Home() {
  return (
    <main>
      {/* <section className="w-full h-[80vh] bg-cover bg-no-repeat bg-center sm:bg-hero-md md:bg-hero-md lg:bg-hero-lg"></section>
      <section>
        <Navigation />
      </section>
      <section className="h-full bg-origin-content bg-repeat bg-sitebg">
        <section className="flex justify-center">
          <div className="p-10">
            <h1
              className={`${weddingFont.className} sm:text-3xl sm:tracking-wider md:text-6xl  tracking-wide font-normal`}
            >
              Wedding
              <span className={`font-normal sm:text-4xl md:text-4xl p-0`}>
                Itinerary !
              </span>
            </h1>
          </div>
        </section>
        <section className="flex justify-center">
          <div className=" bg-white bg-opacity-70 w-4/5 flex justify-center mb-10">
            <EventTabs />
          </div>
        </section>
      </section> */}
      <div className="flex justify-center w-screen h-screen items-center bg-origin-content bg-repeat bg-sitebg">
        <h1 className="text-6xl tracking-wide text-white">Coming Soon!</h1>
      </div>
    </main>
  );
}
