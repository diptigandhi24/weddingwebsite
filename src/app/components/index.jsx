/**
 * 
 *  ***************resizeable page load **************
 * 
 * 
 * const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);
  const targetRef = useRef();

  useLayoutEffect(() => {
    if (targetRef.current.width <= width) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  return targetReached;
};
 */
"use client";
import { useState } from "react";

import Navigation from "./navigation";
import Loader from "./loader/loader";
import dynamic from "next/dynamic";

// Loading mobile and Desktop landing page dynamically

const DynamicMobile = dynamic(() => import("./landingBanner/mobileLanding"), {
  ssr: false,
  loading: () => <div className="w-screen h-screen"></div>,
});
const DesktopLandingPage = dynamic(
  () => import("./landingBanner/desktopLandingPage"),
  {
    ssr: false,
  }
);

export default function MainPage({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 900;
  return (
    <div>
      {windowWidth < breakpoint ? (
        <div>
          <DynamicMobile />
          {children}
        </div>
      ) : (
        <div className="relative left-0 right-0 top-0 bottom-0">
          <div className="fixed left-0 top-0 w-[50%] h-screen">
            <DesktopLandingPage />
          </div>

          <div className="h-screen relative w-[50%] left-[50%] top-0 right-0">
            <div>
              <DynamicMobile />
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
