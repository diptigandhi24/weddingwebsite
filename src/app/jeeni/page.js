import dynamic from "next/dynamic";
import Loader from "../components/loader/loader";
import SiteContent from "../components/siteContent";
const MainPage = dynamic(() => import("../components"), {
  ssr: false,
  loading: () => <Loader />,
});
export default function Home() {
  return (
    <main>
      <section>
        <MainPage>
          <SiteContent></SiteContent>
        </MainPage>
      </section>
    </main>
  );
}
