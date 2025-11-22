import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Information | Camp Adventure",
  description:
    "Find all information about Camp Adventure: About us, Contact, FAQ, Safety, Terms & Conditions, and more.",
};

const infoPages = [
  {
    id: "about",
    title: "About us",
    description:
      "What began as a study project has now become a top address for international sports, language and adventure camps.",
    href: "/info/about",
    image: "yootheme/cache/94/ueber_uns_parallax-94ba57a3.jpeg",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "Do you have any questions, comments, suggestions or haven't found what you are looking for on our website?",
    href: "/info/contact",
    image: "yootheme/cache/ae/kontakt_header-ae908058.jpeg",
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Frequently Asked Questions about our camps, programs, and services.",
    href: "/info/faq",
    image: "yootheme/cache/18/faqs_header-187f72fb.jpeg",
  },
  {
    id: "safety",
    title: "Safety",
    description: "Philosophy & Safety at Camp - Our comprehensive safety concept.",
    href: "/info/safety",
    image: "yootheme/cache/5e/sicherheit_header-5ede6167.jpeg",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    description: "Terms and conditions for booking and participating in our camps.",
    href: "/info/terms-conditions",
    image: "yootheme/cache/fe/agb_header-fe044a83.jpeg",
  },
  {
    id: "arrival-departure",
    title: "Arrival & Departure",
    description: "Information about arrival and departure procedures for our camps.",
    href: "/info/arrival-departure",
    image: "yootheme/cache/a9/an_und_abreise_header-a9e326f2.jpeg",
  },
  {
    id: "travel-documents",
    title: "Travel Documents",
    description: "Information about required travel documents for international participants.",
    href: "/info/travel-documents",
    image: "yootheme/cache/9d/Reiseunterlagen-9d81dea5.jpeg",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Information about insurance coverage and recommendations for camp participants.",
    href: "/info/insurance",
    image: "yootheme/cache/07/insurance_header-07793359.jpeg",
  },
  {
    id: "family-weekend",
    title: "Family Weekend",
    description: "Information about our family weekend programs.",
    href: "/info/family-weekend",
    image: "yootheme/cache/81/wal_header-810b1eb4.jpg",
  },
];

export default function InfoPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b3.jpg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1 className="uk-heading-large uk-text-center" style={{ color: "#fff" }}>
                  Information
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  style={{ color: "#fff" }}
                >
                  <p>Everything you need to know about Camp Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Pages Grid */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Information Pages</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
            </div>
          </div>

          <div
            className="uk-grid tm-grid-expand uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-margin"
            uk-grid=""
          >
            {infoPages.map((page) => (
              <div key={page.id}>
                <Link
                  href={page.href}
                  className="uk-card uk-card-default uk-card-hover uk-link-toggle"
                >
                  <div className="uk-card-media-top">
                    <Image
                      src={getTemplateImageUrl(page.image)}
                      width={1920}
                      height={1275}
                      alt={page.title}
                      className="el-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="el-title uk-h3 uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      {page.title}
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>{page.description}</p>
                    </div>
                    <div className="uk-margin-top">
                      <div className="el-link uk-button uk-button-default">Read more</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

