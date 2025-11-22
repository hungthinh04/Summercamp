"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                About us
              </h1>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  It all began with a project by Jan Vieth during his studies in
                  2002. His aim was to take the distinguishing features of camps
                  he had experienced in Canada, Australia and the USA and
                  introduce those features to camps in Germany. The main focus
                  is not only varied programs and great locations but also the
                  special cohesion that&apos;s built up and promoted in a truly
                  international camp community.
                </p>

                <p>
                  Regardless of which country or culture a child, teen or
                  Teamer (staff member) comes from – they should all feel
                  comfortable together and experience a unique and unforgettable
                  time at camp. Even though camp participants might live
                  thousands of kilometers apart, new friendships are forged in
                  camp which often last long after the camp session has ended.
                  New participants are welcomed by returning campers because
                  that&apos;s what they like about our camps: meeting new
                  people, making new friends and refreshing old friendships.
                  Parents often tell us that after camps, their kids have kept
                  up friendships and visited each other, even travelling to
                  places like France, Spain or as far as Canada. Parents also
                  tell us that kids develop an increased motivation to study
                  English in school so that they can communicate better at the
                  next camp.
                </p>

                <p>
                  Another one of our basic principles is that sports in camp
                  aren&apos;t about winning and losing. Instead, it&apos;s about
                  having fun together, gaining self-confidence and learning to
                  become more independent. Naturally, conflicts can arise. But
                  we always find a way to solve them together.
                </p>

                <p>
                  We are not a huge company – we prefer to remain a big family.
                  Our founder, Jan Vieth, knows every Teamer personally and
                  always leads training along side the coaching team. Every
                  year we have approximately 400 Teamers from about 30 different
                  nations supporting us in our camps for at least 4 weeks. Our
                  international office team consists of 12 staff members and
                  operates in Canada, Spain and Germany. Every year we have
                  participants from up to 40 (!!!) different nations and about
                  70 % &quot;returning campers&quot;.
                </p>

                <p>
                  We want to treat every child like an individual, which is why
                  we do not offer enormous camps involving a thousand kids. We
                  are also not a &quot;drunk beach-party&quot; youth tour
                  operator. Any form of violence or any use of drugs, alcohol
                  or cigarettes is not permitted for any participant regardless
                  of age.
                </p>

                <p>
                  We know that it is an incredible leap of faith when a parent
                  entrusts us with their child. We also know many questions can
                  arise. Please feel free to contact us and we will do our best
                  to answer any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Parallax */}
      <div
        className="uk-section-secondary uk-section-overlap"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom; delay: 200;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-flex uk-flex-middle uk-height-viewport"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/94/ueber_uns_parallax-94ba57a3.jpeg")})`,
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <div className="uk-width-1-1">
            <div className="uk-container uk-container-large">
              <div
                className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
                uk-grid=""
              >
                <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
                  <div className="uk-panel uk-width-1-1">
                    <div
                      className="uk-h1 uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      Nothing ever becomes real till it is experienced.
                    </div>
                    <div
                      className="uk-panel uk-text-lead uk-margin uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      Spending the night under the stars, listening to the
                      cracking of wood, managing a climbing challenge, feeling
                      the enthusiasm of the people – this is Camp Adventure.
                    </div>
                  </div>
                </div>
                <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                  <div className="uk-panel uk-width-1-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Camp Team Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Our Camp Team
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  Camp Adventure is an organization founded in 2002 by Jan
                  Vieth and combines the positive elements of Canadian summer
                  camps and German holiday-camps to offer children and young
                  people from all over the world a unique and memorable
                  adventure at summer camp. Key points to our camps are not
                  only a focus on quality and safety but also ensuring that both
                  Teamers and participants actively shape and create the program
                  in camp.
                  <br />
                  <br />
                  Years of experience along with excellent and comprehensive
                  training for our highly qualified Teamers, ensure that
                  children and young people spend an exciting yet relaxing
                  holiday with Camp Adventure. For several years we have
                  cooperated with the organization Camp Europe e.V., which
                  specializes in the search, selection and training of German
                  and international Teamers and language coaches. With offices
                  in Spain and Canada, Camp Europe is responsible for a great
                  international mix of staff in our camps.
                  <br />
                  Whether student or athlete, artist or musician, we want the
                  most heterogeneous mixture possible in our Teams so that our
                  program can include a wide range expertise and experience.
                  Most Teamers are between 19-35 years old and have experience
                  working with children and young people.
                  <br /> <br />
                  We never put our money into major advertising campaigns, but
                  mainly into Teamer recruitment, selection and training by
                  Camp Europe. That is why we are lucky to always have so many
                  applicants for our camps. All applicants go through an
                  extensive personal interview. Our minimum conditions for Team
                  Members: They must present a police clearance certificate, be
                  at least 19 years old, have a valid first aid certificate and
                  go through our one-week training course which takes place at
                  our camp in the Lüneburger Heide.
                  <br /> <br />
                  Our camp directors are responsible for the organization of our
                  great camps. They are the contact for all parents and are
                  responsible for the coordination and management of our teams.
                  They already have several years of experience in our camps and
                  help the Teamers with problems of all kinds.
                  <br />
                  <br />
                  Our language coaches are dedicated young native speakers who
                  go through our intensive Teamer training for our unique
                  language program. They receive a variety of methods, which they
                  can use creatively and flexibly to fit the different
                  requirements of our camps. Through the successful recruitment
                  of native speaking Teamers for our language program, the
                  campers have a special opportunity to communicate and interact
                  in another language. They learn the language in a relaxed and
                  authentic context. This is a huge advantage over school!
                  International Teamers can also &quot;represent&quot; their
                  country, so that the children not only learn the language but
                  also about the people, culture and customs of various
                  countries.
                  <br /> <br />
                  Do YOU feel inspired and want to be a Teamer as well? Just
                  visit the page of{" "}
                  <a href="http://www.campeurope.net/">CAMP EUROPE</a>. There
                  you will find all the information on the application!
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-margin"
                uk-slideshow="minHeight: 410; velocity: 1; autoplay: 1; pauseOnHover: false; ; autoplayInterval: 5000;"
                uk-scrollspy-class=""
              >
                <div className="uk-position-relative uk-visible-toggle" tabIndex={-1}>
                  <div className="uk-slideshow-items">
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/f8/team_cheeratcampfire-f81df5e6.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                      <div className="uk-position-cover uk-flex uk-padding uk-flex-left uk-flex-middle">
                        <div className="el-overlay uk-panel uk-light uk-margin-remove-first-child">
                          <div className="el-meta uk-text-meta uk-margin-top">
                            team
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2c/team_happyteamers-2c7da6c0.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/81/team_teamershirt-81df4239.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-center"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/07/team_officeteam-07ce1842.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light uk-position-medium uk-position-center-left" uk-inverse="">
                    <a
                      className="el-slidenav uk-slidenav-large"
                      href="#"
                      uk-slidenav-previous=""
                      uk-slideshow-item="previous"
                    ></a>
                  </div>
                  <div className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light uk-position-medium uk-position-center-right" uk-inverse="">
                    <a
                      className="el-slidenav uk-slidenav-large"
                      href="#"
                      uk-slidenav-next=""
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We love Camp Section */}
      <div
        className="uk-section-default uk-section uk-section-large"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid-margin uk-container uk-container-xlarge">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top"
                >
                  We love Camp
                </div>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom"
                >
                  Sharing our experiences since 2002
                </div>
              </div>
            </div>
          </div>
          <div className="uk-margin-xlarge uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  <a id="adventurers"></a>Our Adventurers
                </div>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/9d/Jan_klein-9d1a2a27.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Jan
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Founder & General Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

