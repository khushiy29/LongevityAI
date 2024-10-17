import React from 'react';


function Blog() {
    return (
        <section className="blog-sec" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading text-md-center text-xs-center">
                            <h2><small>Latest Updates</small>AI in Elderly Care</h2>
                        </div>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-01.jpg" alt="AI and Health Monitoring" className="img-fluid blog-image" />
                        </div>
                        <h3 className="blog-title"><small>Health Monitoring</small><a href="#">AI's Role in Monitoring Elderly Health</a></h3>
                        <p className="blog-content">Explore how AI technology is revolutionizing the way we monitor the health of the elderly, ensuring timely interventions and better care.</p>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-02.jpg" alt="AI Innovations" className="img-fluid blog-image" />
                        </div>
                        <h3 className="blog-title"><small>Innovations</small><a href="#">Cutting-Edge AI Innovations in Senior Care</a></h3>
                        <p className="blog-content">Learn about the latest AI innovations that are making senior care more efficient and effective, from predictive analytics to smart home integrations.</p>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-03.jpg" alt="AI Tools" className="img-fluid blog-image" />
                        </div>
                        <h3 className="blog-title"><small>Tools</small><a href="#">Top AI Tools Enhancing Elderly Care</a></h3>
                        <p className="blog-content">Discover the top AI tools that are enhancing the quality of life for the elderly, providing support in daily activities and health management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
