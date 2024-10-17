import React from 'react';

function Gallery() {
  return (
    <section className="gallery-sec" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading text-md-center text-xs-center">
              <h2>
                <small>Explore Our Services</small>Elderly Care Image Gallery
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            {/* iso section */}
            <div className="iso-section text-md-center text-xs-center" data-wow-delay="0.5">
              <ul className="filter-wrapper clearfix">
                <li><a href="#" data-filter="*" className="selected opc-main-bg">All</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".monitoring">Health Monitoring</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".emergency">Emergency Response</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".companionship">Companionship</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".wellness">Wellness & Care</a></li>
              </ul>

              {/* iso box section */}
              <div className="iso-box-section wow fadeInUp" data-wow-delay="0.9s">
                <div className="iso-box-wrapper col4-iso-box">
                  <div className="iso-box monitoring col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-monitoring-01.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-monitoring-01.jpg" className="fluid-img" alt="Health Monitoring" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box emergency col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-emergency-01.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-emergency-01.jpg" className="fluid-img" alt="Emergency Assistance" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box companionship col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-companionship-01.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-companionship-01.jpg" className="fluid-img" alt="Companionship Services" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box wellness col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-wellness-01.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-wellness-01.jpg" className="fluid-img" alt="Wellness and Care" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box emergency col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-emergency-02.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-emergency-02.jpg" className="fluid-img" alt="Emergency Response" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box wellness col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/elderly-wellness-02.jpg" data-lightbox-gallery="elderly-gallery">
                        <img src="img/elderly-wellness-02.jpg" className="fluid-img" alt="Holistic Wellness" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
