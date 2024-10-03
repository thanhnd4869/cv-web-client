import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const SocialLinks2 = ({ data }) => {
    return (
        <div className="st-hero-social-links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            {data.map((item, index) => (
                <Link to={item.link} className="st-social-btn" key={index}>
                    <span className="st-social-icon">
                        <Icon icon={`fa6-brands:${item.icon}`} />
                    </span>
                </Link>
            ))}
        </div>
    );
};

SocialLinks2.propTypes = {
    data: PropTypes.array,
};

export default SocialLinks2;
