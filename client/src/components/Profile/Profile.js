import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from "../layout/Spinner";
import { getProfileByID } from "../../actions/profile";

const Profile = ({ getProfileByID, profile: { profile, loading }, auth, match }) => {

    useEffect(() => {
        getProfileByID(match.params.id);
    }, [getProfileByID]);

    return (
        <Fragment>
            {
                profile === null || loading ?
                    <Spinner />
                    :
                    <Fragment>
                        <Link to='/profiles' className='btn btn-light'>Back To Profiles</Link>
                        {
                            auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='btn btn-primary' >Edit Profile</Link>)
                        }
                    </Fragment>
            }
        </Fragment>
    )
};

Profile.propTypes = {
    getProfileByID: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileByID })(Profile);