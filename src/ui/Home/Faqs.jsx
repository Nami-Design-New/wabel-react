import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { accordionData } from "../../utils/data";

export default function Faqs() {
  return (
    <section className="faqs_section">
      <div className="container">
        <div className="row">
          <SectionHeader
            title=" لديك استفسار؟ نحن هنا للمساعدة!"
            subTitle=" اكتشف الإجابات على أكثر الأسئلة شيوعًا حول خدماتنا وتقنياتنا، وكن
              على اطلاع دائم بكل ما تحتاج إلى معرفته."
          />
          <div className="col-lg-6 col-12 p-2">
            <div className="accordion" id="accordionExample">
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
              <img src="/images/faq.svg" alt="الأسئلة الشائعة" />
              <h4>هل لديك استفسار آخر؟</h4>
              <p>
                إذا لم تجد الإجابة على سؤالك، لا تتردد في التواصل معنا وسنكون
                سعداء بمساعدتك.
              </p>
              <Link to="contact">تواصل معنا</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
