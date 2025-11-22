"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function InfoSessionsEngPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h1 uk-text-center" uk-scrollspy-class="">
                Live Info Sessions for our 2026 Camps
              </h1>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p style={{ textAlign: "center" }}>
                  <strong>FREE ONLINE INFO SESSIONS</strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  Want to get a better overview of our programs, philosophy, and
                  what to bring?
                  <br />
                  Join our monthly online info sessions!
                </p>
                <h3 style={{ textAlign: "center" }}>
                  <strong>OPEN DAY</strong>
                </h3>
                <p style={{ textAlign: "center" }}>
                  We&apos;re hosting an Open Day in Walsrode, where you can try
                  out some of our first activities, meet our staff, and take a
                  full tour with our camp director, Jan.{" "}
                  <strong>
                    Everyone is welcome—no registration needed!
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  📅 <strong>When?</strong> June 7th, from 12:00 to 16:00
                  <br />
                  📍 <strong>Where?</strong> Camp Adventure Academy, Vethem 58,
                  29664 Walsrode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
