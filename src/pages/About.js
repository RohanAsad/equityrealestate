import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import TeamMemberGrid from '../components/TeamMemberGrid';
import TestimonialSlider from '../components/Testimonialider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video'

class About extends Component{
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
        this.opemModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
      }


      render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>
                
                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>About Us</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}


                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container">
                    <div className="row row-25 align-items-center">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-image-two">
                        <img src="assets/img/about/about-3.jpg" alt="" />
                            <span className="video-popup">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OrS-93U4AYQ' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <i className="ion-ios-play" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                        <h3>Welcome to Equity</h3>
                        <h1>10 Years of Experience in Industry</h1>
                        <h4>We are ready to build your dream home.</h4>
                        <p>Equity Real Estate is a mixture that has expanded its firm working in real estate & marketing. We believe that the path to success is deliverance. We invite you to embark on this journey with us and together we will step into the future of real estate innovations.  For a secure future, invest today with Equity Real Estates.</p>
                        <a href="services" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Our Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}
                
                {/* Feature Icon */}
                <FeatureIcon background = "grey-bg"/>

                {/*About section start*/}
                <div className="about-section section-space--inner--120">
                <div className="container">
                    <div className="about-wrapper row">
                    <div className="col-sm-6 col-12 order-1 order-lg-2">
                        <div className="about-image about-image-1">
                        <img src="assets/img/about/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 order-2 order-lg-3">
                        <div className="about-image about-image-2">
                        <img src="assets/img/about/about-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-3 order-lg-1">
                        <div className="about-content about-content-1">
                        <h1><span>10</span>Years of Experience</h1>
                        <p>ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-4">
                        <div className="about-content about-content-2">
                        <p>ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapie</p>
                        <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Contact us</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}
                
                {/* Fun fact */}
                <Funfact/>
                
                {/* Team member */}
                {/* <TeamMemberGrid/> */}
                
                {/* Testimonial Slider */}
                {/* <TestimonialSlider/> */}
                

                </div>


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default About;