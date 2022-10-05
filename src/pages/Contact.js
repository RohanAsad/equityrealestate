import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Contact extends Component{
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
                                    <h1>Contact Us</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://maps.google.com/maps?q=Equity%20real%20estate,%20Square%20commercial,%20Rawalpindi,%2046000,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>Office # 03, Ground Floor Equity RealEstate, Plaza # 82 Lane 1 Bahria Square Commercial, Phase 7, RWP.</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:+923335399620">(+92) 333 539 9620</a><a href="tel:+923352221946">(+92) 335 222 1946</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:Equityinfoonline@gmail.com">Equityinfoonline@gmail.com</a><a href="mailto:Equityinfoonline@gmail.com">Equityinfoonline@gmail.com</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Leave Your Message</h3>
                            <form id="contact-form">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Your Name" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Your Email" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Your Message" defaultValue={""} /></div>
                                <div className="col-12"><button>Send Message</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Contact;