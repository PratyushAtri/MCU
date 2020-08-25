import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";

const ProfileExperience = ({ experience: {
    company,
    title,
    location,
    current,
    to,
    from,
    description
} }) => {
    return (
        <div>
            <h3 className="text-dark">
                {company}
            </h3>
            <p>
                <Moment format='YYYY/MM/DD'>{from}</Moment>
                {' - '}
                {
                    !to ? 'Now' : (
                        <Moment format='YYYY/MM/DD'>{to}</Moment>
                    )
                }
            </p>
            <p>
                <b>Position: </b> {title}
            </p>
            {
                description && (
                    <p>
                        <b>Description: </b> {description}
                    </p>
                )
            }
        </div>
    )
};

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired
};

export default ProfileExperience;