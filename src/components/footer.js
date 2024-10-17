import React from 'react';

function Footer() {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Caregiver Tips</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">AI Assistance Info</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>About Our Elderly Care System</h2>
              <p>We provide AI-powered healthcare assistance tailored to the needs of seniors. Our goal is to enhance the quality of life through personalized care, safety, and support, helping elderly individuals and their families achieve peace of mind.</p>
            </div>
          </div>
          <div className="row copy-footer">
            <div className="col-sm-6 col-md-3"> &copy;<script type="text/javascript">document.write(new Date().getFullYear());</script> ElderCare AI System</div>
            <div className="col-sm-6 col-md-3 pull-right text-xs-right">Designed with <i className="fa fa-heart"></i> for better healthcare</div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
