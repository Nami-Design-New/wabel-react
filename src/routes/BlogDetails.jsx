import { useGetBlogsDetails } from "../hooks/blogs/useGetBlogsDetails";
import BlogsSideBar from "../ui/BlogsDetails/BlogsSideBar";
import DataLoader from "../ui/DataLoader";
import { dateFormat } from "../utils/helper";

export default function BlogDetails() {
  const { blogsDetails, isLoading } = useGetBlogsDetails();

  return (
    <>
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="blog_details">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12 p-2">
                <div className="blog_header">
                  <h1> {blogsDetails.title}</h1>
                  <div className="blog_header_actions">
                    <span className="date">
                      <i className="fa-light fa-calendar-days"></i>{" "}
                      {dateFormat(blogsDetails.created_at)}
                    </span>
                    <button className="share" onClick="share()">
                      <i className="fa-light fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
                <div className="blog_content">
                  <div className="img">
                    <img
                      src={blogsDetails.image}
                      alt="أفضل لغات البرمجة في 2024"
                    />
                  </div>

                  <div className="content-text">
                    <h3>تطور عالم البرمجة في 2024</h3>
                    <p>
                      يشهد عالم البرمجة تطورًا سريعًا مع ظهور تقنيات جديدة
                      وتحديثات مستمرة. مع بداية عام 2024، برزت العديد من لغات
                      البرمجة التي أصبحت الخيار الأمثل للمطورين بفضل سهولة
                      استخدامها وقوتها في تطوير التطبيقات المختلفة.
                    </p>

                    <h3>أهم لغات البرمجة في 2024</h3>
                    <ul>
                      <li>
                        <strong>Python:</strong> لا تزال تتصدر القائمة بفضل
                        استخدامها الواسع في مجالات الذكاء الاصطناعي وتحليل
                        البيانات وتطوير الويب.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> اللغة الأساسية لتطوير
                        تطبيقات الويب الحديثة، خاصة مع أطر العمل مثل React و
                        Node.js.
                      </li>
                      <li>
                        <strong>Go:</strong> تزداد شعبيتها بفضل أدائها العالي
                        وسهولة كتابة الكود، مما يجعلها مثالية لتطبيقات الشبكات
                        والبنية التحتية.
                      </li>
                      <li>
                        <strong>Rust:</strong> تبرز كلغة قوية لتطوير البرمجيات
                        التي تتطلب أمانًا عاليًا وأداءً ممتازًا.
                      </li>
                      <li>
                        <strong>TypeScript:</strong> تطور طبيعي لـ JavaScript
                        يوفر كتابة كود أكثر وضوحًا وأمانًا.
                      </li>
                    </ul>

                    <h4>معايير اختيار لغة البرمجة المناسبة</h4>
                    <p>عند اختيار لغة البرمجة، يجب مراعاة عدة عوامل مثل:</p>
                    <ol>
                      <li>سهولة التعلم والتوثيق المتاح.</li>
                      <li>مجالات الاستخدام والتطبيقات المدعومة.</li>
                      <li>أداء اللغة وكفاءتها في المشاريع الكبيرة.</li>
                      <li>مجتمع المطورين والدعم الفني المتوفر.</li>
                    </ol>

                    <blockquote>
                      اختيار لغة البرمجة المناسبة يعتمد على أهدافك كمطور ونوع
                      المشاريع التي تعمل عليها.
                    </blockquote>

                    <h4>توقعات مستقبلية</h4>
                    <p>
                      من المتوقع أن تستمر لغات مثل Python و JavaScript في
                      الهيمنة على سوق البرمجة، بينما ستشهد لغات مثل Rust و Go
                      نموًا ملحوظًا مع تطور تقنيات الذكاء الاصطناعي والحوسبة
                      السحابية.
                    </p>

                    <h3>الخاتمة</h3>
                    <p>
                      عالم البرمجة دائم التطور، ومن المهم مواكبة أحدث الاتجاهات
                      لتظل في صدارة المنافسة. سواء كنت مبتدئًا أو محترفًا، فإن
                      تعلم لغات البرمجة الجديدة سيعزز من مهاراتك ويوسع من فرصك
                      في سوق العمل.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-12 p-2">
                <BlogsSideBar />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
