import AirPlay from "./Icons/AirPay";
import AppleTv4K from "./Icons/AppleTv4K";
import IpadIcon from "./Icons/IpadIcon";
import IphoneIcon from "./Icons/IphoneIcon";
import MacAndWindow from "./Icons/MacAndWindow";
import WebIcon from "./Icons/WebIcon";
import "./style/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <section>
          <div className="landing-devices">
            <figure className="appletv4k">
              <AppleTv4K />
            </figure>
            <figure className="ac-device__image-icon-samsung">
              <figcaption hidden>Samsung</figcaption>
            </figure>
            <figure className="ac-device__image-icon-lg">
              <figcaption hidden>LG</figcaption>
            </figure>
            <figure className="ac-device__image-icon-vizio">
              <figcaption hidden>VIZIO</figcaption>
            </figure>
            <figure className="ac-device__image-icon-sony">
              <figcaption hidden>Sony</figcaption>
            </figure>
            <figure className="ac-device__image-icon-xfinity">
              <figcaption hidden>Xfinity</figcaption>
            </figure>
            <figure className="ac-device__image-icon-roku">
              <figcaption hidden>Roku</figcaption>
            </figure>
            <figure className="ac-device__image-icon-firetv">
              <figcaption hidden>Fire TV</figcaption>
            </figure>
            <figure className="ac-device__image-icon-google-tv">
              <figcaption hidden>Google&nbsp;TV</figcaption>
            </figure>
            <figure className="ac-device__image-icon-playstation">
              <figcaption hidden>PlayStation</figcaption>
            </figure>
            <figure className="ac-device__image-icon-xbox">
              <figcaption hidden>Xbox</figcaption>
            </figure>
          </div>
          <h3>Watch on the go.</h3>
          <a className="landing-devices-info" href="#">
            See all the ways to watch Apple TV+
            <i className="bi bi-chevron-right"></i>
          </a>
          <div className="devices">
            <figure>
              <IphoneIcon />
              <figcaption>iPhone</figcaption>
            </figure>
            <figure>
              <IpadIcon />
              <figcaption>iPad</figcaption>
            </figure>
            <figure>
              <MacAndWindow />
              <figcaption>Mac & Window</figcaption>
            </figure>
            <figure>
              <AirPlay />
              <figcaption>AirPlay</figcaption>
            </figure>
            <figure>
              <WebIcon />
              <figcaption>Web</figcaption>
            </figure>
          </div>
        </section>

        <div className="copyright-part">
          <p>Something Copyright 2024 Apple clone Inc. Legal Stuff</p>
        </div>
        <div className="policy">
          <p className="internet-service-term">Internet Service Terms</p>
          <p className="seperator">|</p>
          <p className="apple-tv-&-services">Apple TV & Service</p>
          <p className="seperator">|</p>
          <p className="cookies-policy">Cookies Policy</p>
          <p className="seperator">|</p>
          <p>Support</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
