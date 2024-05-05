import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Image
          priority
          src="/placeholder.webp"
          alt="logo"
          width={150}
          height={30}
        />
      </div>
    </header>
  );
}

export default Header;
