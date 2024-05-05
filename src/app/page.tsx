import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Starter from "@/components/Starter";
import Footer from "@/components/Footer";
import ScheduleCall from "@/components/ScheduleCall";

export default function Home() {
  return (
    <>
      <Header />
      <Starter />
      <ScheduleCall />
      <Footer />
    </>
  );
}
