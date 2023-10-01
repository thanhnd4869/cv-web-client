import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SmoothScroll from '../components/smooth-scroll';
import HomePage2 from '../pages/home-pages';

const RouterLinks = () => (
  <>
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path='/' element={<HomePage2 />} />
          {/* <Route path="/blog" element={<BlogPage></BlogPage>} /> */}
          {/* <Route path="/blog/:Id" element={<BlogDetail></BlogDetail>} /> */}
          {/* <Route path="/plans" element={<PlansPage></PlansPage>} /> */}
          {/* <Route path="/service" element={<ServicePage></ServicePage>} /> */}
          {/* <Route path="/service/:Id" element={<ServiceDetail></ServiceDetail>} /> */}
          {/* <Route path="/portfolio/:Id" element={<PortfolioDetail></PortfolioDetail>} /> */}
          {/* <Route path="/portfolio2" element={<PortfolioPage2></PortfolioPage2>} /> */}
          {/* <Route path="/contact" element={<ContactPage></ContactPage>} /> */}
          {/* <Route path="/404" element={<ErrorPage></ErrorPage>} /> */}
          {/* <Route path="*" element={<ErrorPage></ErrorPage>} /> */}
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  </>
);

export default RouterLinks;
