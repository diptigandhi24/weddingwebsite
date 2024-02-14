import Image from "next/image";
import flower from "../../image/svg/TimelineFlower.svg";
import { WeddingRituals } from "@/app/weddingEventList";
import RitualsEmptyState from "../../image/Rituals_Empty State.svg";
function CreateWeddingEvent() {
  let ritualTimeList = Object.keys(WeddingRituals);
  return (
    <>
      {" "}
      {ritualTimeList.map((objectKey, index) => {
        return (
          <div
            key={index}
            className="grid grid-flow-col  grid-cols-[10%_auto] p-2"
          >
            <div>
              <Image src={flower} alt="My SVG" width={15} height={15}></Image>
            </div>
            <div>
              <div>
                <p className="font-abhy font-semibold text-sm text-[#EF475F]">
                  {objectKey}
                </p>
              </div>
              {WeddingRituals[objectKey].map((detailsObject, index) => {
                return (
                  <div
                    key={index}
                    className=" border-b-2 border-dotted border-[#EAE3E8] py-2 relative"
                  >
                    <p className="my-2 text-lg font-abhy  text-[#7D1566]">
                      {console.log(
                        "Ritual name",
                        detailsObject,
                        detailsObject["Ritual"]
                      )}
                      {detailsObject.Ritual}
                    </p>
                    <p className="my-2 text-base font-avenir text-[#7D1566]">
                      {detailsObject.Description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

function RitualPlaceholder() {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-[600px]">
      <Image
        src={RitualsEmptyState}
        style={{ objectFit: "contain" }}
        height={230}
        width={230}
      />
      <p className="text-[#7D1566] font-avenir text-base">
        Follow along on the day!
      </p>
    </div>
  );
}

export default function WeddingRitualsTimeline(list) {
  const dateObj = new Date();
  const currentDate = dateObj.getDate();
  return (
    <>{currentDate >= 18 ? <CreateWeddingEvent /> : <RitualPlaceholder />}</>
  );
}
