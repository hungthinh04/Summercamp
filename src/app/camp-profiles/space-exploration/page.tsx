"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SpaceExplorationPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg")})`,
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
                  <p>Space Exploration Specialty Camp in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Explore the universe and learn about space science!
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
                <p>Sweden</p>
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
                <p>10 - 17 years</p>
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
                <p>ESA Space Camp</p>
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

      {/* Content Section - Walsrode */}
      <div
        id="Walsrode"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Space Exploration Specialty Camp – Your Children&apos;s &
                    Youth Trip to the Universe in Northern Germany!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Are you fascinated by space? At the Space Exploration Camp in
                    Northern Germany, you&apos;ll dive into the mysteries of the
                    universe! Explore planets, experiment with rocket engines,
                    and discover what it&apos;s like to be an astronaut.
                  </p>
                  <p>
                    Learn, build, research! With cool hands-on projects,
                    exciting experiments, and real space challenges, you&apos;ll
                    push your limits and develop your scientific thinking.
                  </p>
                  <p>
                    Science meets adventure holidays! Surrounded by the nature of
                    Northern Germany, you&apos;ll combine research with teamwork
                    and explore the universe alongside children and teens from
                    all over the world.
                  </p>
                  <p>
                    Get ready for your mission – Space Exploration is waiting for
                    you!
                  </p>
                </div>
                <div
                  className="uk-slider-container uk-margin uk-text-center"
                  uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;"
                >
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/6c/01-Space-Exploration-Sommer-Camp-6c698308.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Two girls conducting a water science experiment during the space-themed kids camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/c3/02-Space-Exploration-Sommer-Camp-c32f2b6e.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children creating a solar system model during a space exploration summer camp workshop"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/0e/08-Sommercamp-Walsrode-tents-inside-0ec7f7f4.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Smiling boys sitting inside a shared camp tent – outdoor adventure vacation for kids in Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Cozy wooden cabin with bunk beds – child-friendly accommodation at summer camp in Walsrode"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
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
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/44/05-Walsrode-Kanu-44a26bc9.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling together on MegaFlo rafts – water fun and teamwork at summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
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
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/68/13-Walsrode-SUP-Girls-68ee43b2.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Group of girls relaxing on a stand-up paddleboard at the lake – summer fun at kids holiday camp in Walsrode"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/66/20-Walsrode-Bubble_Soccer-667cab53.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids playing bubble soccer outdoors – action-packed fun at Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top uk-visible@s" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-3"
                    className="custom_acc_691a9cf7946c8"
                  >
                    <div id="js-3_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Space Exploration – 4 days × 2.5 hours</li>
                            <li>
                              Comprehensive space science developed by expert
                              Alessandro Ercolani (ESA)
                            </li>
                            <li>
                              Fascination of the universe: a mix of science and
                              experiments
                            </li>
                            <li>
                              For everyone: children and teens are welcome
                            </li>
                            <li>
                              Community & adventure: full-day diverse program
                              including canoeing, archery, high ropes course,
                              and lake with water trampoline
                            </li>
                            <li>
                              Colorful evening program: campfires, stick bread,
                              capture the flag, and more
                            </li>
                            <li>
                              Cool trips & excursions for two-week stays:
                              overnight hike, swimming pool, Heide Park, and
                              Hamburg trip
                            </li>
                            <li>
                              Camp languages English/German: learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital detox approach: phones and electronic
                              devices allowed only during siesta
                            </li>
                            <li>
                              Arrival & departure services: shuttle transfers
                              from train station/airport
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf7946c8 .uk-accordion-title {
                    padding: 10px 15px;
                    background-color: #f8f8f8;
                    border-bottom: 1px solid #ddd;
                    cursor: pointer;
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-title:hover {
                    background-color: #e8e8e8;
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-content {
                    padding: 15px;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
          </div>
        </div>
      </div>

      {/* Content Section - Regen */}
      <div
        id="Regen"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Space Exploration Camp – Your Children&apos;s & Youth Trip
                    to the Universe in Southern Germany!
                  </p>
                </h2>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                    Fascinated by space? Then the Space Exploration Camp in Regen
                    is just right for you! Explore planets, experiment with
                    rocket engines, and discover what it&apos;s like to
                    experience space as an astronaut.
                  </p>
                  <p>
                    Learn, build, research! With hands-on projects, exciting
                    experiments, and real space challenges, you&apos;ll develop
                    your scientific thinking and push beyond your limits.
                  </p>
                  <p>
                    Science meets adventure! Surrounded by nature in the Bavarian
                    Forest, you&apos;ll combine research with teamwork and
                    explore the universe together with like-minded peers from
                    around the world – bilingual and interactive!
                </p>
                <p>
                    Get ready for your mission – Space Exploration is waiting for
                    you!
                  </p>
                </div>
                <div
                  className="uk-slider-container uk-margin uk-text-center"
                  uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;"
                >
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/a6/03-Space-Exploration-Sommer-Camp-a612b34c.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids building a homemade rocket as part of the space camp activities for children"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/46/04-Space-Exploration-Sommer-Camp-46d37de3.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Starry night sky over the space exploration summer camp with campfire and glowing tent"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/d6/01-Regen-Sport-Camp-Location-d6d81402.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Aerial view of Sportcamp Regen with sports fields and scenic nature – active summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Outdoor climbing and ziplining under a stone viaduct – thrilling activities at summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/8b/1_Adventure-Camp-Bayerischer-Wald-Location-8bc87db8.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Large group of teens socializing during meet-and-greet – community experience at Camp Adventure in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/de/2-Adventure-Camp-Bayerischer-Wald-Megaflo-dedb0c2c.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling a canoe on the lake – exciting water sports at adventure camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/0c/1-Adventure-Camp-Bayerischer-Wald-Pool-0c86d060.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Group of boys enjoying a giant water cushion at the outdoor pool – summer adventure at Camp Adventure youth camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/cd/02-Regen-Language-Camp-Kayak-cd591e8f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children on a canoeing trip through nature – outdoor language camp adventure with expert supervision in Regen"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top uk-visible@s" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9cf799e26"
                  >
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          At a glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Space Exploration – 4 days × 2.5 hours</li>
                            <li>
                              Comprehensive space science developed by expert
                              Alessandro Ercolani (ESA)
                            </li>
                            <li>
                              Fascination of the universe: theory & practice
                            </li>
                            <li>For all levels & ages: 7–16 years</li>
                            <li>
                              Activity program alongside the main profile:
                              (day/evening) outdoor activities, sports,
                              creativity, campfire, disco & more
                            </li>
                            <li>
                              Cool trips & excursions for two-week stays:
                              overnight hike or Munich trip, both combined with
                              outdoor activities and swimming pool visits
                            </li>
                            <li>
                              Camp languages English/German: learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Accommodation: tents, tiny houses, and log cabins
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital detox approach: phones and electronic
                              devices only allowed during siesta
                            </li>
                            <li>
                              Arrival & departure services: shuttle transfers
                              from train station/airport
                            </li>
                          </ul>
              </div>
            </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf799e26 .uk-accordion-title {
                    padding: 10px 15px;
                    background-color: #f8f8f8;
                    border-bottom: 1px solid #ddd;
                    cursor: pointer;
                  }
                  .custom_acc_691a9cf799e26 .uk-accordion-title:hover {
                    background-color: #e8e8e8;
                  }
                  .custom_acc_691a9cf799e26 .uk-accordion-content {
                    padding: 15px;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/spaceexplorationwal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
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
      <div className="uk-section-muted uk-section">
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

