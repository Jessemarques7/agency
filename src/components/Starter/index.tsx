import styles from "./starter.module.css";
import Image from "next/image";

function Starter() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>LOOKING FOR MORE SALES ONLINE? THEN WE CAN HELP YOU.</h1>
          <button className={styles.btn}>Scale your business now</button>
        </div>
        <div>
          <Image
            priority
            src="/notebook-dell.webp"
            alt="logo"
            width={600}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}

export default Starter;
