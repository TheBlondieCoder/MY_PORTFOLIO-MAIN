import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p>
        Have A project in mind?
        <br className="sm:block" /> Let's build something together!
      </p>
      <Link to="Contact.jsx" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;CTA
