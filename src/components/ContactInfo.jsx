import ContactInfo1 from "./ContactInfo1";
import ContactInfo2 from "./ContactInfo2";
import ContactInfo3 from "./ContactInfo3";
import ContactInfo4 from "./ContactInfo4";

const ContactInfo = () => {
  return (
    <div className="contact-info bg-body-secondary p-5">
      <div className=" d-flex justify-content-evenly container">
        <ContactInfo1 />
        <ContactInfo2 />
        <ContactInfo3 />
        <ContactInfo4 />
      </div>
    </div>
  );
};

export default ContactInfo;
