import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { accordionData } from "../../utils/data";
import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();

  return (
    <section className="faqs_section">
      <div className="container">
        <div className="row">
          <SectionHeader title={t("faqTitle")} subTitle={t("faqSubTitle")} />
          <div className="col-lg-6 col-12 p-2">
            <div className="accordion" id="accordionExample" data-aos="fade-up">
              {accordionData.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={item.heading}>
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={item.id}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={item.heading}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <div className="faq_side_content text-center">
              <img
                src="/images/faq.svg"
                alt="الأسئلة الشائعة"
                data-aos="zoom-in"
              />
              <h4 data-aos="fade-up">{t("haveAnotherQuestion")}</h4>
              <p data-aos="fade-up">{t("haveAnotherQuestionSub")}</p>
              <div data-aos="fade-up">
                <Link to="contact">{t("contact")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
