import Image from "next/image";
import styles from "./scheduleCall.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ScheduleCall() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.form}></div>
        <div className={styles.content}>
          <Image
            className={styles.img}
            priority
            src="/large-DSC08508.webp"
            alt="logo"
            width={170}
            height={170}
          />
          <h3>SCHEDULE YOUR CALL WITH JESSE</h3>
          <h2>Free 15-Minute Demo Call</h2>
          <p>
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with Funnels & Paid
            Advertising.
          </p>
          <p>
            Find a time on Dany’s calendar to schedule your call today and we
            look forward to speaking to you soon!
          </p>
          <h3>THIS AUDIT CALL IS PERFECT FOR:</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check} />
              Businesses looking to convert their current website into a high
              quality & streamlined funnel format.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check} />
              Businesses looking to take their offline business onlineㅤㅤㅤㅤㅤ
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check} />
              Businesses looking to understand their increased revenue potential
              with funnels & conversion rate optimization.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check} />
              ​Businesses looking to maximize their conversion rates & average
              order value.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.check} />
              ​Businesses looking for a reliable agency that can make their
              company a priority.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ScheduleCall;
