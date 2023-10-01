import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import BottomBar from '../../components/bottom-bar';
import { ContactUs2 } from '../../components/contact-us';
import { FreelanceWork2 } from '../../components/freelance-work';
import { FunFacts2 } from '../../components/fun-facts';
import Header2 from '../../components/header';
import PageTitle from '../../components/page-title';
import Partners2 from '../../components/partners';
import PriceTable from '../../components/price-table';

const PlansPage = () => (
  <Fragment>
    <Helmet>
      <title>Pricing Plans - Fastone Personal Portfolio or CV/Resume React App</title>
    </Helmet>
    <Header2 />
    <PageTitle title='Pricing Plan' hometitle='Home' homeURL='/' currentPage='Pricing Plan' />
    <FunFacts2 />
    <FreelanceWork2 />
    <PriceTable />
    <Partners2 />
    <ContactUs2 />
    <BottomBar />
  </Fragment>
);

export default PlansPage;
