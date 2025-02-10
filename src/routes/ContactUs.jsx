import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <section className="contact_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="contact_info">
                <span>{t("keepInTouch")}</span>
                <h2>{t("contactTitle")}</h2>
                <div className="blocks">
                  <div className="block">
                    <h6>{t("callCenter")}</h6>
                    <a href="tel:+966558100108">+966 558 100 108</a>
                    {/* <a href="tel:+966558100108">+966 558 100 108</a> */}
                  </div>
                  <div className="block">
                    <h6>{t("ourLocation")}</h6>
                    <a
                      href="https://www.google.com/maps/place/King+Abdullah+Park/@24.6474709,46.7602933,12387m/data=!3m1!1e3!4m6!3m5!1s0x3e2f043b45575437:0xa2bebdcec14359bd!8m2!3d24.6663657!4d46.7371594!16s%2Fg%2F11c76mxsyk?entry=ttu&amp;g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      السعوديه نجد اﻟﺪور اﻟﺮاﺑﻊ .مكتب رقم 26
                    </a>
                  </div>
                  <div className="block">
                    <h6>{t("email")}</h6>
                    <a href="mailto:info@wabel-najd.com">info@wabel-najd.com</a>
                  </div>
                  <div className="block">
                    <h6>{t("socialMedia")}</h6>
                    <div className="socials">
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.behance.net/wabelnajd"
                        target="_blank"
                      >
                        <i className="fa-brands fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-2">
              <form>
                <div className="input_field">
                  <label htmlFor="name">{t("fullName")}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("enterFullName")}
                  />
                </div>
                <div className="input_field">
                  <label htmlFor="name">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                  />
                </div>

                <div className="input_field">
                  <label htmlFor="phone">{t("phoneNumber")}</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="9665555555"
                  />
                </div>
                <div className="input_field">
                  <label htmlFor="message">{t("message")}</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder={t("messagePlaceHolder")}
                  ></textarea>
                </div>

                <button>{t("send")}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535113.984671908!2d53.54736328124999!3d22.755920681486405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e25a515bcc5f541%3A0x3b01b7acbb324df8!2z2YbYrNiv!5e0!3m2!1sar!2seg!4v1738241118992!5m2!1sar!2seg"
          height="350"
          width="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
