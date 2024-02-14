import styles from "./loader.module.css";
import Image from "next/image";
import flower from "../../../../public/image/TimelineFlower.svg";

export default function Loader() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-white">
      <span className="text-black">
        <h4>Loading</h4>
      </span>
      <span className={styles.dot}>
        <Image src={flower} width={32} height={32} />
      </span>
      <span className={styles.dot}>
        <Image src={flower} width={32} height={32} />
      </span>
      <span className={styles.dot}>
        <Image src={flower} width={32} height={32} />
      </span>
    </div>
  );
}
