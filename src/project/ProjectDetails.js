import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';
class Projects extends Component{

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
                                    <h1>Project Details</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="projects">Project</a></li>
                                        <li>Project Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project details page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Projects section start*/}
                <div className="project-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 section-space--bottom--40">
                        <div className="project-image"><img src="assets/img/projects/project-details.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Project Information</h3>
                                <ul>
                                    <li><strong>Client:</strong> <a href="project-details">RRS Company</a></li>
                                    <li><strong>Location:</strong> San Francisco</li>
                                    <li><strong>Area(sf):</strong> 550,000 sf</li>
                                    <li><strong>Year:</strong> 2019</li>
                                    <li><strong>Budget:</strong> $245000000</li>
                                    <li><strong>Architect:</strong> Scott &amp; Austin</li>
                                    <li><strong>Sector:</strong> <a href="project-details">Tunnel</a>, <a href="project-details">Transport</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Mountain Tunnel</h2>
                                <p>Located at the heart of enchanting Potohar Region, DHA Phase III promises elegant town planning with modernized residential and commercial areas set in a serene & secure environment. Development of this Phase has commenced since Dec 2016 with full swing and so far approx 3500 Kanal has been developed. Stretch your imagination to fill in your address at DHA Phase III. Its grand landscapes are a full delight and its proximity to major schools, hospitals, banks, shopping mall, restaurants and cineplexes maximizes your living joy…</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum fugit officia dolores eligendi, rem. Quibusdam quasi impedit perspiciatis iure maiores, eaque numquam doloremque, quo nam soluta itaque obcaecati tempore!.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum nihil alias, laudantium molestiae, vitae quidem dolorem officiis ipsum. Aliquid nemo consequuntur cupiditate delectus sapiente doloribus dolorem, at suscipit, non laudantium mollitia magnam repellat atque quia! Aut, veniam, nam. Ex porro optio facilis nostrum, qui ipsa?</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery/>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Projects section end*/}

                </div>

                {/*====================  End of project details page content  ====================*/}


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Projects;