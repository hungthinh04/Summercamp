import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const Footer: React.FC = () => {
  const logoUrl = getTemplateImageUrl("yootheme/logo/logo.png");

  return (
    <footer>
      {/* Contact Section */}
      <div
        id="contact"
        className="uk-section-default uk-section uk-section-large uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large" uk-grid>
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-h2 uk-text-left@m uk-text-center" uk-scrollspy-class>
                  <Link className="el-link uk-link-reset" href="/info/contact">
                    Kontakt / Contact
                  </Link>
                </div>
                <div className="uk-divider-small uk-text-left@m uk-text-center" uk-scrollspy-class></div>
                <ul
                  className="uk-list uk-margin-medium uk-text-left@m uk-text-center"
                  uk-scrollspy-class
                >
                  <li className="el-item">
                    <div className="uk-child-width-expand@s uk-grid-small" uk-grid>
                      <div className="uk-width-medium@s uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Adresse / Address
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            <a
                              href="https://share.google/aoJe7eELE01bPE8I1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Pobalacion, Madridejos 22
                            </a>
                            <br />
                            <a
                              href="https://share.google/aoJe7eELE01bPE8I1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Cebu City
                            </a>
                            <br />
                            <a
                              href="https://share.google/aoJe7eELE01bPE8I1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Philippines
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div className="uk-child-width-expand@s uk-grid-small" uk-grid>
                      <div className="uk-width-medium@s uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Telefon / Phone - Camps
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            <a href="tel:+4940808057600">+123456789</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div className="uk-child-width-expand@s uk-grid-small" uk-grid>
                      <div className="uk-width-medium@s uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">E-Mail - Camps</div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            <a href="mailto:office@campadventure.de">office@campadventure.de</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div className="uk-child-width-expand@s uk-grid-small" uk-grid>
                      <div className="uk-width-medium@s uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Telefon / Phone - School Trips
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            <a href="tel:+4940808057616">+123456789</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-margin uk-text-center@m uk-text-center" uk-scrollspy-class>
                  <ul
                    className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle"
                    uk-grid
                  >
                    <li className="el-item">
                      <a
                        className="el-link uk-icon-link"
                        href="#"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span uk-icon="icon: instagram; width: 36; height: 36;"></span>
                      </a>
                    </li>
                    <li className="el-item">
                      <a
                        className="el-link uk-icon-link"
                        href="#"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span uk-icon="icon: facebook; width: 36; height: 36;"></span>
                      </a>
                    </li>
                    <li className="el-item">
                      <a
                        className="el-link uk-icon-link"
                        href="#"
                        aria-label="Youtube"
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
      </div>

      {/* Copyright Section */}
      <div
        className="uk-section-default uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: 200;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid>
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1"></div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-margin uk-text-center@m uk-text-center" uk-scrollspy-class>
                  <Link className="el-link" href="/" style={{ display: "inline-block" }}>
                    <Image
                      src={logoUrl}
                      width={100}
                      height={35}
                      className="el-image"
                      alt="This is Go and Grow's logo"
                      loading="lazy"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </Link>
                </div>
                <div className="uk-panel uk-text-meta uk-margin uk-text-center" uk-scrollspy-class>
                  <p>Copyright © 2002-2025 by Go and Grow</p>
                </div>
                <div className="uk-panel uk-text-small uk-margin uk-text-center" uk-scrollspy-class>
                  <p>
                    <a href="https://www.campadventure.de/de/impressum">Impressum</a> /{" "}
                    <a href="https://www.campadventure.de/de/datenschutz">Datenschutz</a> /{" "}
                    <a href="https://www.campadventure.de/de/infos/agb">AGB</a>
                    <br />
                    <Link href="/camp-adventure-imprint">Imprint</Link> /{" "}
                    <Link href="/camp-adventure-privacy-statement">
                      Data Protection Policy
                    </Link>{" "}
                    / <Link href="/info/terms-conditions">Terms & Conditions</Link>
                  </p>
                </div>
                <div
                  className="uk-panel uk-text-small uk-margin-small uk-text-center"
                  uk-scrollspy-class
                >
                  <p>
                    <span style={{ color: "#008000" }}>
                      <a
                        style={{ color: "#008000" }}
                        href="https://tc568d2e6.emailsys1a.net/104/3151/488e165149/subscribe/form.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Newsletter Sign Up
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};