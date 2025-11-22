"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function InnovationConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-3@m">
              <div className="uk-margin">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/ad/Jan-Vieth_Potrait-ad3f092b.jpg"
                  )}
                  width={250}
                  height={166}
                  className="el-image"
                  alt="Jan Vieth"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-2-3@m">
              <blockquote>
                <p>
                  &quot;Spending the night under the stars, listening to the
                  cracking of wood, managing a climbing challenge, feeling the
                  enthusiasm of the people – this is Camp Adventure.&quot;
                </p>
              </blockquote>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  I always wanted to give the people an understanding of the fact
                  that adventure programs can take place in a safe environment
                  and therefore are made for everyone. Not only kids love to get
                  the chance to overcome their own limitations but adults also
                  want to test how far they can go. This is why I founded Camp
                  Adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h5 uk-margin-small uk-text-center">
                All this is
              </div>
              <div className="uk-h1 uk-margin-small uk-text-center">
                Camp Adventure
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Camp Adventure stands for safety, integrity, togetherness,
                  individuality, responsibility and creativity. In combination
                  with our motivation and enthusiasm, we offer clients and
                  participants high quality programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Consulting Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h1 uk-margin-small uk-text-center">
                Innovation Consultancy
              </h1>
              <div className="uk-h5 uk-margin-small uk-text-center">
                Consulting for hotels, resorts &amp; amusement parks
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <blockquote>
                <p>
                  &quot;Anyone can offer room and board – Camp Adventure will
                  attract new clients to your hotel or destination by creating
                  memorable moments. With highly involved consolation, we will
                  help develop programs and packages that will keep your clients
                  close to your location. The adventure is out there, we will
                  help you to find it!&quot;
                </p>
                <p>Jan Vieth, Owner-Manager of Camp Adventure</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
