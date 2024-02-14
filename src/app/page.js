import dynamic from "next/dynamic";
import Loader from "./components/loader/loader";
import SiteContent from "./components/siteContent";

const MainPage = dynamic(() => import("./components"), {
  ssr: false,
  loading: () => <Loader />,
});
export default function Home() {
  return (
    <div className="flex justify-center w-screen h-screen items-center bg-origin-content bg-repeat bg-sitebg">
      <h1 className="text-4xl tracking-wide text-white">Coming Soon!</h1>
    </div>
  );
}
