import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SmoothScroll from '../components/smooth-scroll';
import { BlogDetail, BlogPage } from '../pages/blog-pages';
import ContactPage from '../pages/contact-page';
import ErrorPage from '../pages/error-page';
import HomePage2 from '../pages/home-pages';
import PlansPage from '../pages/plans-page';
import { PortfolioDetail } from '../pages/portfolio-pages';
import PortfolioPage2 from '../pages/portfolio-pages/PortfolioPage2';
import { ServiceDetail, ServicePage } from '../pages/service-pages';

const RouterLinks = () => (
  <Fragment>
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path='/' element={<HomePage2 />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:Id' element={<BlogDetail />} />
          <Route path='/plans' element={<PlansPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/service/:Id' element={<ServiceDetail />} />
          <Route path='/portfolio' element={<PortfolioPage2 />} />
          <Route path='/portfolio/:Id' element={<PortfolioDetail />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  </Fragment>
);

export default RouterLinks;
