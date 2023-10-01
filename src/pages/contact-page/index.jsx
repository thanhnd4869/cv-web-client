import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import BottomBar from '../../components/bottom-bar';
import { ContactInfoProfiles2 } from '../../components/contact-info-profiles';
import { ContactUs } from '../../components/contact-us';
import Header2 from '../../components/header';
import PageTitle from '../../components/page-title';

const ContactPage = () => (
  <Fragment>
    <Helmet>
      <title>Contact - Fastone Personal Portfolio or CV/Resume React App</title>
    </Helmet>
    <Header2 />
    <PageTitle title='Contact Me' hometitle='Home' homeURL='/' currentPage='Contact Me' />
    <section className='pageWrap relative w-full'>
      <iframe
        className='w-full relative border-0 -mt-[8.125rem] min-h-[35rem] sm:min-h-[45rem] md:min-h-[60.3125rem]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4726.675082051774!2d106.41604522595155!3d17.690956043987512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3138a318834e5c2d%3A0xd43730d4dcafec3d!2zU8OibiBiw7NuZyDEkcOhIHRow7RuIDg!5e1!3m2!1svi!2s!4v1696155759920!5m2!1svi!2s'
        allowfullscreen
        loading='lazy'
        title='Contact Map'
      />
      {/* Page Wrap */}
    </section>
    <ContactUs />
    <ContactInfoProfiles2 />
    <BottomBar />
  </Fragment>
);

export default ContactPage;
