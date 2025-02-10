export default function TopBar() {
  return (
    <div className="top_bar">
      <div className="container">
        <div className="location_email">
          <ul>
            <li>
              <i className="fa-light fa-location-dot"></i>
              اﻟﺪور اﻟﺮاﺑﻊ . مكتب رقم 26
            </li>
            <li>
              <i className="fa-light fa-envelope"></i>
              <a href="mailto:info@wabel-najd.com">info@wabel-najd.com</a>
            </li>
            {/* <li>
              <i className="fa-light fa-flag"></i>
              س.ت : 1009153086
            </li> */}
          </ul>
        </div>
        <div className="social_media">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/wabelnajd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/wabel_najd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/wabel-najd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/wabelnajd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/wabelnajd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
