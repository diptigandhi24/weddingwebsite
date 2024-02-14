import NavCard from "./navCard";
import itinerary from "../../image/svg/Itinerary.svg";
import bus from "../../image/svg/Bus Schedule.svg";
import gallery from "../../image/svg/gallery.svg";
import resources from "../../image/svg/Resources.svg";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className=" bg-[#84CFE7] grid grid-cols-2 gap-x-2 gap-y-2 pt-2 pb-2 ">
      <Link href="#itinerary-section">
        <NavCard
          heading={"Itinerary"}
          description={"A peek into the weekend's excitement ahead!"}
          url={itinerary}
        ></NavCard>
      </Link>
      <Link href="#bus-section">
        <NavCard
          heading={"Bus Schedule"}
          description={"Stay updated on this weekend's transport schedule"}
          url={bus}
        ></NavCard>
      </Link>

      <a
        target="_blank"
        href="https://drive.google.com/drive/folders/1QF9bu5DEpkKDYlQIov9MRwIn9SvcbECt"
        rel="noopener noreferrer"
      >
        <NavCard
          heading={"Gallery"}
          description={
            "View and upload your festive moments on our Google Drive!"
          }
          url={gallery}
        ></NavCard>
      </a>

      <Link href="#resources-section">
        <NavCard
          heading={"Resources"}
          description={"Find all the vital contacts and venue details here"}
          url={resources}
        ></NavCard>
      </Link>
    </div>
  );
}
