import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  FaRegCommentDots,
  FaRegImage,
  FaBriefcase,
  FaRegCreditCard,
  FaRegClock,
  FaRegMap,
  FaExternalLinkAlt,
  FaSwatchbook,
  FaCheck,
  FaBolt,
  FaLink,
} from "react-icons/fa";
import "./sun.css";

function Star() {
  return (
    <>
      <div className="main">
        <div className="header">
          <h6 className=" title1 text-center text-primary">
            Why Digital Business Card?
          </h6>
          <h1 className=" title2 mb-5  text-center font-weight-bold ">
            vCard Features
          </h1>
        </div>
      </div>
      <div className="container ">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaRegCommentDots />
                  </span>
                </div>
                <h5 className="card-title mt-4 font-weight-bold">
                  WhatsApp Enabled
                </h5>
                <p className="card-text text-muted">
                  You can enable and disable WhatsApp Chat Feature in your
                  digital business card.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaRegImage />
                  </span>
                </div>
                <h5 className="card-title mt-4 font-weight-bold">
                  Photo Gallery
                </h5>
                <p className="card-text text-muted">
                  You can upload product photos or any business related photos
                  in your gallery section.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border  p-2">
                    <FaBriefcase />
                  </span>
                </div>
                <h5 className="card-title mt-4">Services Section</h5>
                <p className="card-text text-muted">
                  You can list your all services with image and description in
                  this section.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaRegCreditCard />
                  </span>
                </div>
                <h5 className="card-title mt-4">Payment Details</h5>
                <p className="card-text text-muted mb-3">
                  You can list your all accepted payment methods in your digital
                  business card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaRegClock />
                  </span>
                </div>
                <h5 className="card-title mt-4">Business Hours</h5>
                <p className="card-text text-muted mb-3">
                  You can display your business opening hours. Your customer can
                  easily understand when you are available.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaBriefcase />
                  </span>
                </div>
                <h5 className="card-title mt-4">Google Business Integration</h5>
                <p className="card-text text-muted ">
                  You can integrate your Google Business Link with your digital
                  business card.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaRegMap />
                  </span>
                </div>
                <h5 className="card-title mt-4">Google Maps Integration</h5>
                <p className="card-text text-muted ">
                  You can display your shop / business location in google maps.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaExternalLinkAlt />
                  </span>
                </div>
                <h5 className="card-title mt-4">Social Media Links</h5>
                <p className="card-text text-muted ">
                  Your all social media presence in one digital business card.
                  Stay connect with your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaSwatchbook />
                  </span>
                </div>
                <h5 className="card-title mt-4">Modern Theme</h5>
                <p className="card-text text-muted mb-3 ">
                  We used modern theme for user interface. It is fully
                  responsive.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaCheck />
                  </span>
                </div>
                <h5 className="card-title mt-4">Clean UI Design</h5>
                <p className="card-text text-muted">
                  We creafted all designs professionally. It made with latest
                  frameworks.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaBolt />
                  </span>
                </div>
                <h5 className="card-title mt-4">Faster Loading</h5>
                <p className="card-text text-muted">
                  We give more importance for page load. Your digital card load
                  faster than normal webpages.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="icon mt-3">
                  <span className="border p-2">
                    <FaLink />
                  </span>
                </div>
                <h5 className="card-title mt-4">Unique Link</h5>
                <p className="card-text text-muted">
                  Your name or business whatever it is. You can generate your
                  business card link as per your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Star;
