import Navigation from "./navigation";
import Itinerary from "./itinerary";
import BusSchedule from "./busSchedule";
import Resources from "./resources";
export default function SiteContent() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <section id="itinerary-section">
        <Itinerary />
      </section>
      <section id="bus-section">
        <BusSchedule />
      </section>
      <section id="resources-section">{<Resources />}</section>
      <section className="bg-[#84CFE7] flex justify-center py-8">
        <p className="text-white font-abhy font-semibold text-2xl">
          Thank you for joining our celebration!
        </p>
      </section>
    </div>
  );
}
