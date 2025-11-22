"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function NewsPage() {
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
                News
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
                  Under this rubric we keep you up to date about our camps,
                  offers and what&apos;s currently important to know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-margin">
                <p>
                  Stay tuned for the latest updates, special offers, and news
                  from Camp Adventure. Follow us on{" "}
                  <a
                    href="https://www.instagram.com/campadventuregermany/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>{" "}
                  for daily updates and behind-the-scenes content from our
                  camps!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
