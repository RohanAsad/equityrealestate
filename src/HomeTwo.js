import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderTwo from './components/HeroSliderTwo';
import VideoCta from './components/VideoCta';
import ProjectSliderTwo from './components/ProjectSliderTwo';
import ServiceTab from './components/ServiceTab';
import TestimonialSlider from './components/Testimonialider';
import TeamJob from './components/TeamJob';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeTwo extends Component{
    render(){
        return(
            <div>
                
                <NavBar/>
                
                
                <HeroSliderTwo/>

                <VideoCta/>

                {/* <ProjectSliderTwo/> */}

                <ServiceTab/>

                {/* <TestimonialSlider/> */}

                {/* <TeamJob/> */}

                {/* <BlogGrid background = "" /> */}

                <Footer/>

                <MobileMenu/>
            </div>
        )
    }
}

export default HomeTwo;