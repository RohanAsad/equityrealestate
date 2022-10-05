import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomeTwo from './HomeTwo';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './service/Services';
import ServiceDetailsLeftSidebar from './service/ServiceDetailsLeftSidebar';
import Projects from './project/Projects';
import ProjectDetails from './project/ProjectDetails';
import BlogLeftSidebar from './blog/BogLeftSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
  render(){
    return(
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeTwo/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/about-us`} element={<About/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} element={<Contact/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/services`} element={<Services/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`} element={<ServiceDetailsLeftSidebar/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={<Projects/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/project-details`} element={<ProjectDetails/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} element={<BlogLeftSidebar/>}/>
          <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} element={<BlogDetailsLeftSidebar/>}/>
        </Routes>
      </BrowserRouter>

    )
  }
}
//ReactDOM.render(<Root/>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

serviceWorker.register();