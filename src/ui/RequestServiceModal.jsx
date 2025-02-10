import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useGetWhatYouNeed } from "../hooks/useGetWhatYouNeed";
import axiosInstance from "../utils/axios";
import { toast } from "sonner";

export default function RequestServiceModal({ show, setShow }) {
  const { t } = useTranslation();
  const { whatYouNeed } = useGetWhatYouNeed();
  const formRef = useRef();
  const [loading, setLoading] = useState();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    whats: "",
    date_time: "",
    type: "",
    status: "yes",
    why: "",
    contact: "",
    what_you_need_idea_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("create_order", formData);
      if (res.data.code === 200) {
        toast.success(t("sucessMessage"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal centered show={show} backdrop="static" size="lg">
      <Modal.Header onHide={() => setShow(false)} closeButton>
        <Modal.Title>{t("whatDoYouWant")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contact modal-contact request_service_modal">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="form_group">
              <div className="input_field">
                <label htmlFor="name">{t("fullName")}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder={t("enterFullName")}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="input_field">
                <label htmlFor="name">{t("email")}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="example@example.com"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="form_group">
              <div className="input_field">
                <label htmlFor="phone">{t("phoneNumber")}</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  placeholder="9665555555"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="input_field">
                <label htmlFor="whats">{t("whatsNumber")}</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  placeholder="9665555555"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="form_group">
              <div className="input_field">
                <label htmlFor="what_you_need_idea_id">
                  {t("whatDoYouNeed")}
                </label>
                <select
                  name="what_you_need_idea_id"
                  id="what_you_need_idea_id"
                  value={formData.what_you_need_idea_id}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      what_you_need_idea_id: e.target.value,
                    }))
                  }
                >
                  <option value="">{t("select")}</option>
                  {whatYouNeed?.map((opt) => (
                    <option value={opt?.id} key={opt?.id}>
                      {opt?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input_field">
                <label htmlFor="type">{t("chooseProjectType")}</label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="">{t("select")}</option>
                  <option value="public">{t("public")}</option>
                  <option value="private">{t("private")}</option>
                </select>
              </div>
            </div>

            <div className="form_group">
              <div className="input_field">
                <label htmlFor="contact">{t("contactType")}</label>
                <select
                  name="contact"
                  id="contact"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option value="">{t("select")}</option>
                  <option value="phone">{t("phone")}</option>
                  <option value="whats">{t("whats")}</option>
                  <option value="booking">{t("booking")}</option>
                  <option value="meet">{t("meet")}</option>
                </select>
              </div>

              <div className="input_field">
                <label htmlFor="status">{t("isPriceSuitable")}</label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                >
                  <option value="">{t("select")}</option>
                  <option value="yes">{t("yes")}</option>
                  <option value="no">{t("no")}</option>
                </select>
              </div>
            </div>

            <div className="input_field">
              <label htmlFor="phone">{t("meetingTime")}</label>
              <input
                type="datetime-local"
                name="phone"
                id="phone"
                placeholder="9665555555"
              />
            </div>

            {formData?.status === "no" && (
              <div className="input_field">
                <label htmlFor="message">{t("why")}</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData?.why}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      why: e.target.value,
                    }))
                  }
                  placeholder={t("why")}
                ></textarea>
              </div>
            )}

            <button style={{ opacity: loading ? 0.7 : 1 }} disabled={loading}>
              {t("send")}{" "}
              {loading ? (
                <i className="fa-duotone fa-regular fa-circle-notch fa-spin"></i>
              ) : null}
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
