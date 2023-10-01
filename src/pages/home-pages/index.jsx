import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import AboutUs2 from '../../components/about-us';
import BlogPost2 from '../../components/blog-posts';
import BottomBar from '../../components/bottom-bar';
import { ContactUs2 } from '../../components/contact-us';
import Education2 from '../../components/education';
import { FreelanceWork2 } from '../../components/freelance-work';
import { FunFacts } from '../../components/fun-facts';
import Header2 from '../../components/header';
import MyExperienceAndSkills from '../../components/my-experience-and-skills';
import Partners2 from '../../components/partners';
import Portfolio2 from '../../components/portfolio';
import PriceTable from '../../components/price-table';
import Services2 from '../../components/services';
import Testimonials2 from '../../components/testimonials';
import VideoBox from '../../components/video-boxes';

const HomePage2 = () => (
  <Fragment>
    <Helmet>
      <title>Home - ThanhND&apos;s CV</title>
    </Helmet>
    <Header2 />
    <AboutUs2 />
    <Services2 />
    <VideoBox />
    <Education2 />
    <MyExperienceAndSkills />
    <FunFacts />
    <Portfolio2 />
    <FreelanceWork2 />
    <PriceTable />
    <Partners2 />
    <Testimonials2 />
    <BlogPost2 />
    <ContactUs2 />
    <BottomBar />
  </Fragment>
);

export default HomePage2;
