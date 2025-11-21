"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";

export default function HomePage() {
  return (
    <main id="tm-main">
      {/* Hero Section với Background Image và Filter Form */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #page\\#0,
          #page\\#0 .el-title {
            text-shadow: 0px 0px 10px #00000099;
          }
          #page\\#1 {
            background: rgba(0, 0, 0, 0.55);
            padding: 20px;
            padding-bottom: 80px;
            margin-bottom: -100px;
          }
          #searchform {
            background: #006533;
          }
          #page\\#2 .el-meta {
            position: absolute;
            top: 0;
            right: 25px;
            background: #fff;
            padding: 3px 15px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px;
          }
        `,
        }}
      />

      <div
        id="searchform"
        className="uk-section-primary uk-section-overlap uk-position-relative"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b3.jpg"
            )})`,
            minHeight: "500px",
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>

          <div className="uk-container uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-margin-remove-bottom">
              <div className="uk-width-1-1">
                <h1
                  className="uk-heading-small uk-text-center"
                  id="page#0"
                  style={{ color: "#fff" }}
                >
                  International holiday camps with Go and Grow
                </h1>
                <div className="uk-margin uk-width-medium uk-margin-auto uk-text-center">
                  <Link className="el-link" href="/booking">
                    <Image
                      src={getTemplateImageUrl(
                        "yootheme/cache/12/Storer-min-125a5bd1.png"
                      )}
                      width={400}
                      height={200}
                      className="el-image"
                      alt="Camps 2026 online, Book now!"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Filter Form */}
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1">
                <div id="page#1">
                  <form id="filter-form" method="GET" action="/#searchform">
                    <div
                      className="uk-grid uk-child-width-1-4@m uk-grid-small"
                      uk-grid
                    >
                      <div className="uk-width-1-4@m">
                        <label
                          className="uk-form-label"
                          style={{ color: "#fff" }}
                        >
                          Programs & Courses
                        </label>
                        <select
                          id="field_4_select"
                          className="uk-select"
                          name="field_4"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <option value="">All Programs</option>
                          <option value="adventure">
                            Adventure, Sport and Creative
                          </option>
                          <option value="fishing">Fishing</option>
                          <option value="arts-crafts">Arts & Crafts</option>
                          <option value="englisch">English course</option>
                          <option value="soccer">Soccer</option>
                          <option value="husky">Husky</option>
                          <option value="climbing">Climbing</option>
                          <option value="horseback">Horseback Riding</option>
                          <option value="diving">Diving course</option>
                          <option value="tennis">Tennis</option>
                        </select>
                      </div>

                      <div className="uk-width-1-4@m">
                        <label
                          className="uk-form-label"
                          style={{ color: "#fff" }}
                        >
                          Holiday
                        </label>
                        <select
                          id="field_5_select"
                          className="uk-select"
                          name="field_5"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <option value="">All Seasons</option>
                          <option value="spring">Spring</option>
                          <option value="summer">Summer</option>
                          <option value="autumn">Autumn</option>
                        </select>
                      </div>

                      <div className="uk-width-1-4@m">
                        <label
                          className="uk-form-label"
                          style={{ color: "#fff" }}
                        >
                          Location
                        </label>
                        <select
                          id="field_6_select"
                          className="uk-select"
                          name="field_6"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <option value="">All Locations</option>
                          <option value="northern-germany">
                            Northern Germany
                          </option>
                          <option value="west-germany">West Germany</option>
                          <option value="south-germany">South Germany</option>
                          <option value="england">England</option>
                          <option value="spain">Spain</option>
                        </select>
                      </div>

                      <div className="uk-width-1-4@m">
                        <label
                          className="uk-form-label"
                          style={{ color: "#fff" }}
                        >
                          Age
                        </label>
                        <select
                          id="field_7_select"
                          className="uk-select"
                          name="field_7"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <option value="">All Ages</option>
                          {Array.from({ length: 12 }, (_, i) => i + 7).map(
                            (age) => (
                              <option key={age} value={age}>
                                {age}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div className="uk-width-1-1">
                        <button
                          className="uk-button uk-button-default"
                          type="submit"
                          style={{ marginRight: "10px", marginTop: "10px" }}
                        >
                          Apply filter
                        </button>
                        <button
                          className="uk-button uk-button-secondary"
                          type="button"
                          onClick={() => {
                            window.location.href = "/#searchform";
                          }}
                          style={{ marginTop: "10px" }}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-center@m uk-text-center">
                <p>Go and Grow program</p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="uk-section-default uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="page#2" className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid
                >
                  {programs.map((program) => (
                    <ProgramCard key={program.id} {...program} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go and Grow Camp has organised section */}
      <div className="uk-section-default uk-section uk-section-small uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center@m uk-text-center">
                <p>
                  Go and Grow Camp has organised international summer camps and
                  outdoor educational school trips in various countries
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Jan Vieth */}
      <div
        className="uk-section-muted uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div
                  className="uk-margin uk-text-center@s uk-text-center"
                  uk-scrollspy-class="uk-animation-fade"
                >
                  <Image
                    src={getTemplateImageUrl("yootheme/banner/b1.jpg")}
                    width={250}
                    height={166}
                    className="el-image"
                    alt="Jan Vieth, Founder & General Manager of Go and Grow"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote
                  className="uk-margin-medium uk-text-left@m uk-text-center"
                  uk-scrollspy-class
                >
                  <p>
                    Regardless of which country or culture a child, teen or
                    staff member comes from – they should all feel comfortable
                    together and experience a unique and unforgettable time at
                    camp.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">Go and Grow</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holidays that do more section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  Holidays that do more – International language and specialty
                  camps for kids & teens
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Outdoor adventures, language travel & unforgettable
                    experiences in Germany, England & Spain – bilingual,
                    media-free & full of camp vibes.
                  </p>
                  <p>
                    For over 20 years, Go and Grow has stood for international
                    summer camps that truly connect kids and teens. Founded by
                    Jan Vieth and inspired by Canadian camp life, we bring young
                    people from all over the world together – to learn, grow,
                    and explore.
                  </p>
                  <p>
                    Our language camps, sports camps, and specialty camps
                    combine nature, community, and real learning by living.
                    Here, you don't just learn a language – you learn life
                    itself: outdoors, together, for real.
                  </p>
                  <p>
                    Because with us, it's not just about what you learn – it's
                    about what you experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holiday camps for every season section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  Holiday camps for every season | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and language camps run all year round –
                    in Germany, England, and Spain.
                    <br />
                    When will your next adventure begin?
                  </p>
                  <p>
                    Spring, Easter & Whitsun – kick off your holidays full of
                    energy!
                    <br />
                    Our spring camps add some excitement to the short breaks:
                    bilingual, active, and packed with that true camp feeling –
                    from tent camps to language holidays in Germany or Spain.
                    <br />
                    Perfect to boost your English, Spanish, or German skills –
                    in class or out in nature during epic outdoor adventures.
                  </p>
                  <p>
                    Summer, summer camps – ready to go?
                    <br />
                    When the sun's out, Go and Grow is in its element!
                    <br />
                    Our summer camps in Germany, Spain, and England offer
                    endless variety: watersports, horseback riding, climbing,
                    football, creative camps, and so much more.
                    <br />
                    With our bilingual teamers, you'll improve your English
                    naturally – the best prep for a confident school start!
                    <br />
                    Or dive straight into language and adventure with our
                    English and Spanish language camps and youth travel programs
                    in Germany, Barcelona, or England.
                  </p>
                  <p>
                    Autumn, fall camps – days full of action?
                    <br />
                    Our autumn camp in Walsrode has become a true tradition –
                    authentic Canadian camp life with kids from all over the
                    world.
                    <br />
                    With over 20 activities, international teamers, and special
                    programs like Husky, horseback riding, or English camps,
                    there's something for everyone.
                  </p>
                  <p>
                    Winter, winter break – when the world slows down?
                    <br />
                    We're busy creating new ideas, training our teamers, and
                    planning fresh adventures – ready to welcome you back to
                    camp next season.
                  </p>
                  <p>
                    Find your perfect camp:
                    <br />→ Easter camp, Whitsun camp, summer camp, autumn camp
                    –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your next adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The perfect camp for every age group section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  The perfect camp for every age group
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, kids and teens from all over the world come
                    together – aged 7 to 17. Every age group brings its own
                    unique spirit, and not every camp fits everyone – that's why
                    we offer a wide range of summer camps and youth travel
                    programs for every age and interest!
                  </p>
                  <p>
                    Many start with our kids' camps and holiday programs,
                    experiencing for the first time what it's like to spend a
                    week away from home. It's a chance to grow courage,
                    confidence, and real friendships – that's pure camp life.
                    Our daily structure and activities are tailored to younger
                    campers, helping them feel safe, supported, and right at
                    home.
                  </p>
                  <p>
                    For older participants, we offer summer camps, specialty
                    programs, and international youth trips that encourage
                    independence, adventure, and new connections – always
                    active, inspiring, and full of opportunities to grow.
                  </p>
                  <p>
                    Depending on the location and program, age groups mix
                    differently – sometimes younger, sometimes older, but always
                    international. In our outdoor, language, and adventure
                    camps, everyone finds the perfect space to learn, explore,
                    and have fun.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      specialty camps
                    </Link>{" "}
                    nurture talents, interests, and self-confidence – with no
                    pressure, just plenty of motivation. Whether you're a
                    first-time camper or already a seasoned pro, you'll be seen,
                    supported, and appreciated – just as you are.
                  </p>
                  <p>
                    Find your camp:
                    <br />→ Discover the holiday camp that fits you best – and
                    grow beyond your limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty camps & adventure holidays section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  Specialty camps & adventure holidays | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and creative camps combine movement,
                    community, and adventure – all powered by true passion.
                    Whether you want to try something new, develop your talent,
                    or simply experience unforgettable holidays, you'll find
                    your personal highlight in our specialty camps.
                  </p>
                  <p>
                    Choose from over 20 different specialty camps across
                    multiple locations – from action to mindfulness, from sports
                    to language. The following examples give you just a taste of
                    our diverse camp world:
                  </p>
                  <p>
                    <Link
                      href="/camp-profiles/soccer"
                      target="_blank"
                      rel="noopener"
                    >
                      Football Camp:
                    </Link>{" "}
                    Train with real coaches from our partner clubs, boost your
                    skills, team spirit, and game understanding – all in an
                    authentic camp atmosphere.
                    <br />
                    <Link
                      href="/camp-profiles/multi-water-adventure"
                      target="_blank"
                      rel="noopener"
                    >
                      Multiwater Camp:
                    </Link>{" "}
                    Sailing, windsurfing, diving, or SUP – it's all about sun,
                    waves, and endless water fun.
                    <br />
                    <Link
                      href="/camp-profiles/climbing"
                      target="_blank"
                      rel="noopener"
                    >
                      Climbing Camp:
                    </Link>{" "}
                    Big climbs, high ropes, and our legendary climbing park –
                    with experienced guides, you'll find out what you're truly
                    capable of.
                    <br />
                    <Link
                      href="/camp-profiles/horseback-riding"
                      target="_blank"
                      rel="noopener"
                    >
                      Riding Camp:
                    </Link>{" "}
                    For all horse lovers – from grooming and care to riding
                    technique. Intensive, warm-hearted, and full of horse
                    passion.
                    <br />
                    <Link
                      href="/camp-profiles/husky-camp"
                      target="_blank"
                      rel="noopener"
                    >
                      Husky Camp:
                    </Link>{" "}
                    Connection, trust, and responsibility – experience pure
                    energy side by side with our huskies. Action, mindfulness,
                    and teamwork combined.
                    <br />
                    <Link
                      href="/camp-profiles/senior-plus-leadership"
                      target="_blank"
                      rel="noopener"
                    >
                      Leadership Camp
                    </Link>
                    <strong>:</strong> For teens ready to grow beyond themselves
                    – with team challenges, communication training, and a
                    wilderness hike that'll definitely push you out of your
                    comfort zone.
                  </p>
                  <p>
                    And if you don't choose a specialty camp? No worries! Every
                    Go and Grow program includes our signature mix of{" "}
                    <Link
                      href="/camp-profiles/adventure-sports-creative"
                      target="_blank"
                      rel="noopener"
                    >
                      adventure, sports, and creativity
                    </Link>{" "}
                    – designed to spark movement, imagination, and team spirit
                    for every age and interest.
                  </p>
                  <p>
                    Because at Go and Grow, one thing's always true: no matter
                    what you choose, you'll discover new things, build
                    friendships, and make memories that last a lifetime.
                  </p>
                  <p>
                    <strong>Find your specialty camp:</strong>
                    <br />→ Football, watersports, horseback riding, huskies,
                    climbing, or leadership –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language camps & adventure trips section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  Language camps & adventure trips | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, language isn't just taught – it's lived. We
                    go beyond vocabulary and grammar to focus on real-life
                    communication, culture, and adventure – true Learning by
                    Living.
                  </p>
                  <p>
                    Our language programs take place in Germany, England, and
                    Spain – for all ages and levels. Whether you're just
                    starting with English or preparing for the TOEFL®, we'll
                    help you grow from where you are.
                  </p>
                  <p>
                    Language is more than grammar drills. Our native-speaking
                    teamers take you out of the classroom and into real
                    experiences: playing football in English, exploring cities
                    in Spanish, connecting with locals – that's how your
                    language holiday becomes a true adventure trip.
                  </p>
                  <p>
                    In{" "}
                    <Link
                      href="/destinations/en-england-bath-university"
                      target="_blank"
                      rel="noopener"
                    >
                      Bath
                    </Link>{" "}
                    and Cornwall, you'll enjoy multi-day excursions to London.
                    In{" "}
                    <Link
                      href="/destinations/en-spain-barcelona"
                      target="_blank"
                      rel="noopener"
                    >
                      Barcelona
                    </Link>
                    , you're right in the heart of the city. And our German
                    locations are hand-picked to feel just as adventurous.
                  </p>
                  <p>
                    <strong>Program overview:</strong>
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englischcamps"
                      target="_blank"
                      rel="noopener"
                    >
                      English Classic
                    </Link>{" "}
                    – practical, everyday English with native coaches
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/german-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      German Classic
                    </Link>{" "}
                    – hands-on learning for beginners & advanced learners
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/spanishcourse"
                      target="_blank"
                      rel="noopener"
                    >
                      Spanish Classic
                    </Link>{" "}
                    – experience language, sunshine, and culture
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englisch-toefl"
                      target="_blank"
                      rel="noopener"
                    >
                      TOEFL® Course
                    </Link>{" "}
                    – focused exam preparation with intensive training
                  </p>
                  <p>
                    <strong>Find your language camp:</strong>
                    <br />→
                    <Link
                      href="/camp-profiles/language-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      English, Spanish, or German
                    </Link>{" "}
                    – in Germany, England, or Spain. Language, culture,
                    adventure – all in one camp experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School trips & group travel section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  School trips & group travel with Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Whether it's a school trip, group travel, or project days –
                    at Go and Grow, students aged 7 to 17 experience
                    unforgettable days full of teamwork, outdoor fun, and
                    international spirit.
                  </p>
                  <p>
                    Our proven camp concept is perfectly tailored for school
                    groups:
                  </p>
                  <p>
                    • <strong>Age-appropriate programs</strong>, clear daily
                    routines, and diverse activities help every class grow
                    closer together.
                    <br />• Whether it's{" "}
                    <strong>
                      outdoor challenges, creative workshops, or teambuilding
                      programs
                    </strong>{" "}
                    – at Camp Adventure, it's all about connection and
                    collaboration.
                    <br />• Teachers can relax: our internationally trained
                    teamers take care of supervision and educational guidance,
                    building confidence and strengthening group bonds.
                  </p>
                  <p>
                    That's how every school trip becomes a true adventure
                    journey – combining community, exploration, and learning.
                  </p>
                  <p>
                    Our locations in{" "}
                    <strong>Germany, England, and Spain</strong> offer the
                    perfect setting: spacious outdoor areas, a wide range of
                    activities, modern facilities, and plenty of room for real
                    camp life.
                  </p>
                  <p>
                    We also welcome <strong>international schools</strong>!
                    Together, we create learning spaces where cultures,
                    languages, and perspectives meet.
                    <br />
                    Openness and global exchange are part of our DNA – here, the
                    world becomes tangible on a small scale: kids and teens from
                    over 70 nations come together, learn from one another, and
                    discover what global community truly means.
                  </p>
                  <p>
                    <strong>Ready for an extraordinary school trip?</strong>
                    <br />→{" "}
                    <Link href="/schooltrips" target="_blank" rel="noopener">
                      Learn more about our group programs
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family weekends & parent-child camps section */}
      <div className="uk-section-default uk-section uk-section-xsmall">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  Family weekends & parent-child camps at Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Real camp life – this time, together!
                    <br />
                    At our family weekends, you'll enjoy three days full of
                    adventure, campfires, nature, and connection. Whether it's
                    canoeing, climbing, swimming, stand-up paddling, or archery
                    – a fun-filled program awaits you from morning till night.
                  </p>
                  <p>
                    The best part? You don't have to plan a thing!
                    Accommodation, meals, and activities are all included – true
                    to the Go and Grow motto: arrive, relax, experience.
                  </p>
                  <p>
                    Our international teamers create the perfect camp vibe,
                    guide you through every activity, and make sure it all feels
                    like a real vacation.
                    <br />
                    Ideal for families who want to get a taste of camp life,
                    spend quality time together, and share that unique Go and
                    Grow feeling with their kids.
                  </p>
                  <p>
                    Tip: We also offer <strong>father-child camps</strong> –
                    perfect for creating lasting memories and sharing
                    unforgettable adventures together.
                  </p>
                  <p>
                    → Find your date &{" "}
                    <Link
                      href="/info/family-weekend"
                      target="_blank"
                      rel="noopener"
                    >
                      book your family weekend
                    </Link>
                    <br />→ Experience nature, adventure & togetherness – as a
                    family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book your Holidaycamp CTA section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <div className="uk-panel uk-text-emphasis uk-margin">
                  <p>
                    Some holidays you forget. Others change you. At Go and Grow,
                    you grow beyond yourself, discover new languages, cultures,
                    and friends for life.
                    <br />
                    So – what's stopping you? Your next adventure is already
                    waiting.
                  </p>
                </div>
                <div className="uk-blend-difference uk-margin uk-text-center">
                  <Link
                    className="el-content uk-button uk-button-default"
                    href="/booking"
                  >
                    Book your Holidaycamp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We love Camp section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-medium uk-child-width-1-1 uk-grid-margin-medium">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
              <div className="uk-panel uk-width-1-1">
                <h4 className="uk-h2 uk-text-center" uk-scrollspy-class>
                  <p>We love Camp</p>
                </h4>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class
                ></div>
              </div>
            </div>
          </div>
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
            uk-grid
          >
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  Internationality
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  <p>&nbsp;participants from more than 70 countries</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  Outdoors
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  <p>feel the real nature in the best surroundings</p>
                </div>
              </div>
            </div>
            <div className="uk-width-medium@m">
              <div className="uk-margin uk-text-center" uk-scrollspy-class>
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/23/home_ilovecamp-23a9e7bf.png"
                  )}
                  width={640}
                  height={629}
                  className="el-image"
                  alt="We love Camp at Campadventure"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  Friendship
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  <p>make friends from all over the world</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">
                  Challenge
                </h3>
                <div className="el-content uk-panel uk-margin-top">
                  <p>leave your comfort zone, challenge yourself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Go and Grow team section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">Join the Go and Grow team</h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Since the very beginning, Go and Grow has stood for
                    openness, diversity, and community – within our team, too!
                    <br />
                    People from all over the world work with us and grow with
                    every season.
                  </p>
                  <p>
                    We train our teamers ourselves – directly within the
                    organization.
                    <br />
                    Our training follows Go and Grow's high standards in
                    experiential education and is personally guided by founder
                    Jan Vieth and our experienced trainers.
                    <br />
                    That's how we get to know every single teamer and build the
                    trust that makes our camps so special.
                  </p>
                  <p>
                    Whether as a <strong>counselor</strong>,{" "}
                    <strong>camp leader</strong>, or <strong>trainer</strong>,
                    you'll grow with us – take on responsibility, gain
                    experience, and inspire kids from around the world.
                  </p>
                  <p>
                    Grow with us – in the team, at camp, and in life.
                    <br />→{" "}
                    <Link href="/academy" target="_blank" rel="noopener">
                      Learn more about our training programs
                    </Link>
                    <br />→{" "}
                    <Link
                      href="/academy/jobs#application"
                      target="_blank"
                      rel="noopener"
                    >
                      Apply now and become part of the Camp Adventure family
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships & memberships section */}
      <div
        className="uk-section-default uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-scale-up; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/d1/background_campground-d13d89db.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-small"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/d1/background_campground-d13d89db.jpeg"
            )})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>

          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-h5 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  Go and Grow
                </div>
                <h2
                  className="uk-h1 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  <p>Partnerships & memberships</p>
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class
                ></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match"
                    uk-grid
                  >
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://simsswiss.ch/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/sims.jpg")}
                            width={120}
                            height={120}
                            alt="Sims"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/terranova.png"
                            )}
                            width={178}
                            height={120}
                            alt="Terra Nova"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/lrn.png")}
                            width={120}
                            height={120}
                            alt="LRN"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/salazar.jpg"
                            )}
                            width={112}
                            height={120}
                            alt="Salazar"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
