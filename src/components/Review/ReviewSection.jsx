import PropTypes from 'prop-types';

import SectionHeading from '../SectionHeading/SectionHeading';
import Carousel from '../Slider/Carousel';

import './Review.css';

const Review = ({ data }) => {
    return (
        <section className="st-dark-bg">
            <div className="st-height-b100 st-height-lg-b80" />
            <SectionHeading title="Review" />
            <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <Carousel data={data} />
            </div>
            <div className="st-height-b100 st-height-lg-b80" />
        </section>
    );
};

Review.propTypes = {
    data: PropTypes.object,
};

export default Review;
