export default function Navigation() {
  return (
    <div className="flex flex-wrap justify-center  bg-menu border-t-2 border-sky-200">
      <div className="flex justify-center p-2 md:w-1/4 sm:w-full  ">
        <div className="border-b-2 p-1 border-wedding-pink">Itinerary</div>
      </div>
      <div className="flex justify-center p-2 md:w-1/4 sm:w-full">
        <div className="border-b-2 p-1 border-wedding-pink">Contact</div>
      </div>
      <div className="flex justify-center p-2 md:w-1/4 sm:w-full">
        <div className="border-b-2 p-1 border-wedding-pink">Gallery</div>
      </div>
      <div className="flex justify-center p-2 md:w-1/4 sm:w-full">
        <div className="border-b-2 p-1 border-wedding-pink">Holder</div>
      </div>
    </div>
  );
}
