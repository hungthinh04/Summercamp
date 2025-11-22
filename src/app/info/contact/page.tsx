import type { Metadata } from "next";
import { getTemplateImageUrl } from "@/lib/assets";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to contact us | Camp Adventure",
  description: "Do you have any questions, comments, suggestions or haven't found what you are looking for on our website? Find out here how and when you can reach us.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="uk-section-primary uk-section-overlap uk-position-relative">
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/ae/kontakt_header-ae908058.jpeg")})`,
          }}
        >
          <div className="uk-position-cover" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-heading-large uk-text-center">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h1 uk-margin-small uk-text-center">Contact</h1>
              <div className="uk-panel uk-margin">
                <p>If you want you can chat in any language as well with our KI chatbot.</p>
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>

              <div className="uk-margin">
                <div className="uk-grid uk-child-width-1-1 uk-child-width-1-4@m uk-grid-match" uk-grid="">
                  {/* Business Hours */}
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <h5 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Business Hours
                      </h5>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Monday - Friday<br />
                          9 am - 5 pm
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <h5 className="el-title uk-margin-top uk-margin-remove-bottom">Address</h5>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Camp Adventure e.K.<br />
                          Pobalacion, Madridejos<br />
                          22761 Hamburg<br />
                          Germany
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Telephone & Fax */}
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <h5 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Telephone & Fax
                      </h5>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <a href="tel:+4940808057600">+49 (0) 40 8080 576 00</a>
                        </p>
                        <p>
                          School Trips:<br />
                          <a href="tel:+4940808057616">+49 (0) 40 8080 576 16</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <h5 className="el-title uk-margin-top uk-margin-remove-bottom">Email</h5>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <a href="mailto:office@campadventure.de">office@campadventure.de</a>
                        </p>
                        <p>
                          School Trips:<br />
                          <a href="mailto:groups@campadventure.de">groups@campadventure.de</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="uk-margin uk-text-center@m uk-text-center">
                <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" uk-grid="">
                  <li className="el-item">
                    <a
                      className="el-link uk-icon-link"
                      href="https://www.instagram.com/camp_adventure_germany/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: instagram; width: 36; height: 36;"></span>
                    </a>
                  </li>
                  <li className="el-item">
                    <a
                      className="el-link uk-icon-link"
                      href="https://www.facebook.com/campadventuregermany/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: facebook; width: 36; height: 36;"></span>
                    </a>
                  </li>
                  <li className="el-item">
                    <a
                      className="el-link uk-icon-link"
                      href="https://www.youtube.com/channel/UCzyP0PBjhh4BLgzvg8jhc-g"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span uk-icon="icon: youtube; width: 36; height: 36;"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
