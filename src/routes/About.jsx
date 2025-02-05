import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6>عن شركة وبل نجد لتقنية المعلومات</h6>
              <h1>نحو مستقبل رقمي أكثر ابتكاراً</h1>
              <p>
                في <strong>شركة وبل نجد لتقنية المعلومات</strong>، نقدم حلولاً
                تقنية متكاملة تجمع بين الإبداع والفعالية. نحن ندرك أهمية التحول
                الرقمي في عصرنا الحديث ودوره الحاسم في نجاح الأعمال التجارية.
                لذلك، نعمل بشغف لتحويل الأفكار إلى مشاريع تقنية مبتكرة وتطوير
                استراتيجيات تسويقية ذكية تُلبي تطلعات عملائنا وتحقق أهدافهم
                بكفاءة عالية.
                <br />
                نحرص على تقديم خدمات متكاملة تبدأ من تحليل احتياجات العميل،
                مرورًا بتطوير الحلول التقنية المخصصة، وانتهاءً بالدعم الفني
                لضمان استمرارية النجاح.
                <br />
                كما نلتزم باتباع أحدث المعايير العالمية في البرمجة وتطبيق أفضل
                الممارسات لضمان الجودة العالية، مع الحرص على الابتكار والتحديث
                المستمر لمواكبة التطورات السريعة في عالم التقنية. رؤيتنا هي أن
                نكون شريكك التقني الموثوق، حيث نساهم في تحقيق أهدافك وتوسيع نطاق
                أعمالك داخل المملكة العربية السعودية وخارجها.
              </p>

              <h5>أخبرنا عن فكرتك الان وما عليك بتصير واقع مميز معنا</h5>
              <Link to="/contact">ارسل لنا الان</Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="imgs">
              <div className="img">
                <img src="/images/about3.jpeg" alt="about" />
              </div>
              <div className="img">
                <img src="/images/about2.jpg" alt="about" />
                <div className="projects_count">
                  <h3>+50</h3>
                  <p>مشروع</p>
                </div>
                <div className="success_rate">
                  <h3>100%</h3>
                  <p>معدل النجاح</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box">
              <div className="img">
                <img src="/images/icon-our-mission.svg" alt="مهمتنا" />
              </div>
              <div className="content">
                <h3>مهمتنا</h3>
                <p>
                  تقديم حلول تقنية مبتكرة تسهم في تمكين الشركات والأفراد من
                  تحقيق أهدافهم، من خلال خدمات عالية الجودة تجمع بين الإبداع
                  والكفاءة.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box">
              <div className="img">
                <img src="/images/icon-our-vision.svg" alt="رؤيتنا" />
              </div>
              <div className="content">
                <h3>رؤيتنا</h3>
                <p>
                  أن نكون الشريك التقني الرائد في المملكة العربية السعودية
                  وخارجها، من خلال قيادة مسيرة التحول الرقمي وتقديم حلول تواكب
                  تطلعات المستقبل.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box">
              <div className="img">
                <img src="/images/icon-our-value.svg" alt="قيمنا" />
              </div>
              <div className="content">
                <h3>قيمنا</h3>
                <p>
                  نؤمن بالابتكار، الجودة، الشفافية، والعمل بروح الفريق لتحقيق
                  النجاح المشترك مع عملائنا وتعزيز الثقة في كل ما نقدمه من
                  خدمات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
