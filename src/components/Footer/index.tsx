import Image from "next/image";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        priority
        src="/placeholder.webp"
        alt="logo"
        width={150}
        height={30}
      />
      <p>
        <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
      </p>
      <p>
        NOT FACEBOOK: This site is not a part of the Facebook website or
        Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any
        way. FACEBOOK is a trademark of FACEBOOK, Inc.
      </p>
    </footer>
  );
}

export default Footer;
