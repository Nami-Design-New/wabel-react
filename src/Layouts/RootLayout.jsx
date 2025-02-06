import { useEffect, useState } from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 118) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`${isSticky === true ? "sticky" : ""}`}>
        <Header />
      </header>
      <main className={`${isSticky === true ? "main_fixed" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
