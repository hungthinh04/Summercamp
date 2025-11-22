"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { getTemplateImageUrl } from "@/lib/assets";

export default function ArrivalDeparturePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/a9/an_und_abreise_header-a9e326f2.jpeg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-heading-large uk-text-center" uk-scrollspy-class="">
                  Arrival & Departure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Information about arrival and departure at our camps
              </h1>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-0; itemNav: #js-1; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="#">Independent arrival & departure</a>
                  </li>
                  <li>
                    <a href="#">Accompanied Flights</a>
                  </li>
                </ul>
                <div id="js-0" className="uk-switcher" uk-height-match="row: false">
                  <div className="el-item uk-margin-remove-first-child">
                    <h2 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Independent arrival & departure
                    </h2>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        If you would prefer to arrange the arrival and departure
                        of your child yourself, you can definitely do so. You
                        will receive detailed information with your booking
                        confirmation.
                      </p>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              Arrival for all of our locations in Germany,
                              England and Spain
                            </td>
                            <td>4 – 6 pm</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                Departure for all of our locations in Germany,
                                England and Spain
                              </td>
                              <td>10 am – noon</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h2 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Accompanied Flights
                    </h2>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        All group flights will be accompanied by our teamers!
                        They ensure the safe arrival of your child in the camp
                        and a safe return journey. At latest fourteen days prior
                        to departure you will get all the transfer details and
                        relevant phone numbers. For our group flights a minimum
                        number of participants is required. If the transfer is
                        not possible, you will be informed at least 4 weeks
                        prior to arrival and can, if necessary, cancel/rebook the
                        camp free of charge.
                      </p>
                      <p>
                        You can find all meeting points and times that are fixed
                        already under Group Flights on our last travel
                        information page here:{" "}
                        <Link
                          href="/info/travel-documents"
                          target="_blank"
                          rel="noopener"
                          title="https://www.campadventure.de/en/traveldocuments"
                        >
                          https://www.campadventure.de/en/traveldocuments
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shuttles Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Shuttles
              </div>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                All shuttles will take place on the day of arrival Sunday and
                departure day Saturday. As we can not make any shuttles outside
                those days, we ask you to book a taxi by yourself.
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-2; itemNav: #js-3; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="#">Airport Pick ups</a>
                  </li>
                  <li>
                    <a href="#">Train station Pick Ups</a>
                  </li>
                </ul>
                <div id="js-2" className="uk-switcher" uk-height-match="row: false">
                  <div className="el-item uk-margin-remove-first-child">
                    <h2 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Airport Pick ups
                    </h2>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        Inside the airport one of our teamers will meet your
                        child at the exit after baggage claim. On the return trip
                        we will ensure that your child is checked-in properly and
                        enters the security check. Please make sure you inform us
                        at the latest 4 weeks prior to departure and provide
                        travelling times and flight numbers and note the
                        different airline regulations regarding children
                        travelling alone. At some airports we offer the
                        McDonald&apos;s restaurant as a meeting point, e.g. for
                        parents who fly together with their children or for
                        children who live nearby and do not travel by plane.
                        Attention: Please see fixed times for pick ups below.
                        <br />
                        <br />
                        <strong>
                          <strong>
                            Please consider our pick up times for Germany /Spain
                            (arrival/departure of the flight has to be in this
                            interval):
                            <br />
                            <strong>
                              <br />
                            </strong>
                          </strong>
                        </strong>
                      </p>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Airport Munich</strong>
                                <br />
                                Arrival: 10am – 3pm
                                <br />
                                McDonald&apos;s: 3pm
                                <br />
                                Departure: noon – 4pm
                                <br />
                                McDonald&apos;s: 10am
                              </td>
                              <td>
                                <strong>Airport Hamburg</strong>
                                <br />
                                Arrival: 10am – 3pm
                                <br />
                                McDonald&apos;s: 2pm
                                <br />
                                Departure: 2pm – 6pm
                                <br />
                                McDonald&apos;s: 12:30pm
                                <br />
                              </td>
                              <td>
                                <p>
                                  <strong>Airport Hanover</strong>
                                  <br />
                                  Arrival: 10am – 4pm
                                  <br />
                                  McDonald&apos;s: 3:30pm
                                  <br />
                                  Departure: 1pm – 6pm
                                  <br />
                                  McDonald&apos;s: 11am
                                </p>
                              </td>
                              <td>
                                <strong>Airport Barcelona</strong>
                                <br />
                                Arrival: 10am – 3pm <br />
                                Departure: 12pm – 4pm
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        All early arrivals or late departures outside our shuttle
                        times will be charged an extra <strong>USD 50</strong> per
                        arrival/departure, as we will have to purchase and send
                        additional transportation and a guardian to the airport.
                        Depending on the number of participants, the transfer can
                        take place by bus, train or car.
                        <br />
                        <br />
                        <strong>
                          <strong>
                            For the camps in England (arrival/departure has to be
                            in this interval):
                            <br />
                            <br />
                            <strong>Airport London Heathrow</strong>
                            <br />
                          </strong>
                        </strong>
                        Pickup after exit arrival: 3pm – 8pm
                        <br />
                        Meetingpoint Heathrow Express station Terminal 5: 8:30
                        pm
                        <br />
                        Meetingpoint Heathrow Express station Terminal 2&3: 9 pm
                        <br />
                        transfer to check in Departure: 8am – 1pm
                        <br />
                        Meetingpoint Heathrow Express station Terminal 5: 8 am
                        <br />
                        Meetingpoint Heathrow Express station Terminal 2&3: 8:30
                        am
                      </p>
                      <p>
                        No extra shuttles will be available at these airports..
                      </p>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h2 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Train station Pick Ups
                    </h2>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        At the train station our teamer will await your child
                        directly at the train/wagon. On the return trip we
                        ensure your child is accompanied and escorted until
                        inside the train wagon. Please make sure you inform us
                        at the latest 6 weeks prior to departure, providing us
                        with traveling times and train numbers.
                        <br />
                        <br />
                        <strong>
                          <strong>
                            Please consider our pick up times
                            (arrival/departure of the train has to be in this
                            interval):
                            <br />
                            <br />
                          </strong>
                        </strong>
                      </p>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Train station Plattling</strong>
                              <br />
                              Arrival: 1:30pm – 3:30pm
                              <br />
                              Platform 5 : 3:30pm
                              <br />
                              Departure: 10am – noon
                              <br />
                              Platform 5 : 9:30am
                            </td>
                            <td>
                              <strong> </strong>
                            </td>
                            <td>
                              <strong>Main station Hannover</strong>
                              <br />
                              Arrival: 2pm – 4pm
                              <br />
                              McDonald&apos;s: 3:30pm
                              <br />
                              Departure: 11am – 1pm
                              <br />
                              McDonald&apos;s: 10:30am
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        Depending on the number of participants, the transfer can
                        take place by bus, train or car.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

