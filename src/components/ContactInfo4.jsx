import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./icon";

const ContactInfo4 = () => {
  return (
    <div className="contact-info-four">
      <div>
        <h5 className=" fw-bold">Categories</h5>
        <div className=" p-1">
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit.
            <br /> Delectus ipsam quaerat <br />
            soluta perferendis tempora Suscipit nemo.
          </p>
        </div>
      </div>
      <div className=" d-flex justify-content-start gap-2 ">
        <FacebookIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
};

export default ContactInfo4;
