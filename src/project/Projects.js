import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Projects extends Component{
    render(){

        let data = [
            {pageLink: 'project-details', img: 'DHA-Phase-3.jpeg', projectTitle: 'Dha Phase 3', projectSubtitle: 'Come live life at its bountiful best!'},
            {pageLink: 'project-details', img: 'BlueWorld.jpg', projectTitle: 'Blue World City ', projectSubtitle: 'Blue World City Islamabad is the top-ranking housing society in Islamabad.'},
            {pageLink: 'project-details', img: 'CapitalSmartCity.jpg', projectTitle: 'Capital Smart City', projectSubtitle: 'Capital Smart City (CSCI) is a grand, state-of-the-art residential project in Pakistan.'},
            {pageLink: 'project-details', img: 'LahoreSmartCity.jpg', projectTitle: 'Lahore Smart City', projectSubtitle: 'Lahore Smart City (LSC) is an LDA-approved housing society located at Lahore Bypass'},
            {pageLink: 'project-details', img: 'Kharia.jpg', projectTitle: 'City Housing Kharian', projectSubtitle: 'Mega residential housing development for the District Gujrat & Jhelum in Kharian Sarai Alamgir.'},
            {pageLink: 'project-details', img: 'Bahria.jpg', projectTitle: 'Bahria Town Phase 1 to 9', projectSubtitle: 'Bahria Town Limited is an Islamabad-based privately owned real-estate development company which owns, develops and manages properties across Pakistan.'},
            {pageLink: 'project-details', img: 'MetroCity.jpg', projectTitle: 'New Metro City Gujarkhan', projectSubtitle: 'It is easy to go about New Metro City Gujar Khan because of its convenient access to key highways in the twin cities region.'},

        ];

        let Datalist = data.map((val, i)=> {
            return(
                <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                        </a> */}
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href='javascript:void(0)'>{val.projectTitle}</a>
                        </h3>
                        <p className="subtitle">{val.projectSubtitle}</p>
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a> */}
                    </div>
                    </div>
                </div>
            )
        });

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
                                    <h1>Project</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Project</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                    {/*Projects section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-item-wrapper">
                                        <div className="row">
                                            {Datalist}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row section-space--top--60">
                                <div className="col">
                                    <ul className="page-pagination">
                                        <li><a href="/"><i className="ion-ios-arrow-back" /> Prev</a></li>
                                        <li className="active"><a href="/">01</a></li>
                                        <li><a href="/">02</a></li>
                                        <li><a href="/">03</a></li>
                                        <li><a href="/"><i className="ion-ios-arrow-forward" /> Next</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/*Projects section end*/}
                </div>

                {/*====================  End of project page content  ====================*/}

                

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>
            </div>
        )
    }
}


export default Projects;