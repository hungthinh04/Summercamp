"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SoccerPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge uk-padding-remove-bottom"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/dd/11-Soccer-Camps-dda0e3d8.jpg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-margin-remove-bottom uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>Soccer Speciality Camps in Germany, England & Spain</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Can&apos;t keep your feet off the ball even during the
                    holidays and want to improve your English skills at the same
                    time? Then our soccer camps in Germany, England, and Spain
                    are perfect for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-light uk-width-1-3@s uk-width-1-6@m">
              <div>
                <center>
                  <div id="proSealWidget"></div>
                </center>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: location; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Germany, England, and Spain</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: users; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Ages 7 - 17<br />Separated by age groups</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: home; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>
                  Germany: Tents & Lodges<br />
                  GB: Boarding House<br />
                  Spain: BISC Sailing Center
                </p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: heart; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>24-hour supervision + full board</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: comments; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Bilingual<br />GER & EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div
        id="page#4"
        className="uk-section-default uk-section uk-section-small uk-flex uk-flex-middle"
        uk-height-viewport="expand: true;"
      >
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1">
                <div className="uk-panel uk-text-large uk-margin uk-text-center">
                  <p>
                    <span style={{ color: "#ffffff" }}>
                      Can&apos;t keep your feet off the ball even during the
                      holidays and want to improve your English skills at the
                      same time? Then our soccer camps in Germany, England, and
                      Spain are perfect for you! Depending on the location, we
                      offer soccer courses with top European clubs in various
                      formats, tailored to your individual skill level. Whether
                      you&apos;re a regular player or just want to try something
                      new — we have the right camp for you:
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div className="uk-margin uk-text-center">
                <div className="uk-grid uk-child-width-1-1 uk-child-width-1-4@m uk-grid-match" uk-grid="parallax: 0;">
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/dd/11-Soccer-Camps-dda0e3d8.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccer with Camp Adventure Academy"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Camp Adventure Academy
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        7 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Lüneburger Heide,
                          <br />
                          Northern Germany
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/10/15-Soccer-Camps-10ea528e.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp with VfL Wolfsburg"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        VfL Wolfsburg Fußballschule
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        7 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <span>
                            Lüneburger Heide,
                            <br />
                            Northern Germany
                          </span>
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/5e/12-Soccer-Camps-5ec9331b.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp with Paris Saint-Germain Academy in England"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Paris Saint-Germain Academy
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        10 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          England
                          <br />
                          Bath & London
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-england-bath-university"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/5e/12-Soccer-Camps-5ec9331b.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp Barcelona"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        C.E.Vila Olímpica Football
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        10 - 16 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Barcelona, Spain
                          <br />
                          BISC Sailing Center
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-spain-barcelona"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/soccerwal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1550"
                    frameBorder="0"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div>
                <center>
                  <div className="pe-richsnippets"></div>
                  <Script
                    type="text/javascript"
                    src="https://www.provenexpert.com/widget/richsnippetf927.js?u=1Z3p4tQZkSQphSwAi92ZltwA0ZwAkWUZ&v=2"
                    async
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

