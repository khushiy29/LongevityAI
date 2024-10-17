import React from 'react';

function Contact() {
  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <h2>
          Get in Touch <small>Contact us for any assistance or inquiries regarding elderly care.</small>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleName">Your Name</label>
              <input type="text" className="form-control" id="exampleName" placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="examplePhone">Phone Number</label>
              <input type="text" className="form-control" id="examplePhone" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
              <small id="emailHelp" className="form-text text-muted">Your email will be kept confidential.</small>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleTextarea">How can we assist you?</label>
              <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Describe your query or concern"></textarea>
            </div>
          </div>
          <div className="col-md-12 text-xs-center action-block">
            <a href="#" className="btn btn-capsul btn-aqua">Submit</a>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Contact;
