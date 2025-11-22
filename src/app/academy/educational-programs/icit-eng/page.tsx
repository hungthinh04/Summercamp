"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function IcitEngPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/ac/00-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teambuilding-ac73e861.jpeg")})`,
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
                  id="page#0"
                  uk-scrollspy-class=""
                >
                  International Counselor in Training Program, Germany
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
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
                <p>Germany</p>
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
                <p>
                  17 and 18 years-old
                  <br />
                  <br />
                </p>
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
                  GER: Tents & Lodges
                  <br />
                  UK: Bording House
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
                <p>24h Supervision + All meals included</p>
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
                <p>
                  Bilingual
                  <br />
                  GER & EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="Walsrode" className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    International Counsellor in Training – Your Path to the Camp
                    Team!
                  </p>
                  <p></p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    You want to take on responsibility, work with children, and
                    experience an international camp from a whole new perspective?
                    Then our ICIT program for 17- to 18-year-olds is just right for
                    you!
                  </p>
                  <p>
                    Learn, lead, grow! Through qualified training, you&apos;ll
                    develop key skills to become a counsellor at an international
                    camp – from team building and childcare to outdoor education and
                    program management.
                  </p>
                  <p>
                    You love being outdoors? You&apos;re enthusiastic, responsible,
                    and a real team player? Then join our ICIT program and
                    experience the summer of a lifetime!
                  </p>
                  <p>
                    <strong>
                      Unleash your potential – we can&apos;t wait to meet you!
                    </strong>
                  </p>
                </div>
                <div className="uk-slider-container uk-margin uk-text-center" uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;">
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/da/08-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_summer-camp-team-da8ecb93.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Diverse international counselor team posing for a group photo at Camp Adventure summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/b5/01-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_Team-b54fe974.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teenagers in a group huddle during team-building activity at Camp Adventure youth camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/23/09-Sommercamp-Walsrode-tent-field-233fae70.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Spacious tent camp on a grassy field in Walsrode at Camp Adventure summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/fa/02-Sommercamp-Walsrode-Dining-Hall-inside-fa5687ee.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children eating together in the camp dining hall – shared meals and community spirit at Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/51/03-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_Archery-with-kids-51796269.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Camp counselor teaching a young camper how to use a bow during archery at summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/f2/01-Walsrode-Climbing-f2512af1.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Child climbing on a high ropes course with safety gear – thrilling outdoor activity at Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/0e/04-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teamertraining-0e420296.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Happy female camp counselors enjoying a break at Camp Adventure summer camp in Walsrode"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/2e/07-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_survival-with-kids-2e2b89b1.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Campers and counselors participating in a forest survival workshop during summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top uk-visible@s" uk-inverse="">
                    <ul className="el-nav uk-slider-nav uk-dotnav uk-flex-center" uk-margin=""></ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <div id="Accordion">
                  <div uk-accordion="collapsible: false;" id="js-4" className="custom_acc_691a9d01d8b93">
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content">
                        <div className="el-content uk-panel">
                          <p>
                            The ICIT program is designed for teenagers aged 17-18 who
                            want to take the first step towards becoming a camp
                            counselor. This intensive training program combines
                            leadership development, practical experience, and
                            mentorship opportunities.
                          </p>
                          <p>
                            ICIT participants assist with activities, learn about child
                            development, and gain valuable experience working with
                            younger campers under the guidance of experienced
                            counselors.
                          </p>
                          <p>
                            This program is perfect for those who want to develop
                            leadership skills and potentially work as counselors in
                            future camp seasons.
                          </p>
                        </div>
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
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/walicit"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
                    frameBorder="0"
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

