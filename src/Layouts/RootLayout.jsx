import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import i18n from "../utils/i18n";

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState();
  const lang = useSelector((state) => state.language.lang);

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

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

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
