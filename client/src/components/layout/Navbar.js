import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul>
            <li>
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    {' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <a href="#!">
                    <i className="fas fa-user-friends"></i>
                    {' '}
                    Super Heroes
                </a>
            </li>
            <li>
                <Link to="/register">
                    <i className="fas fa-user-plus"></i>
                    {'  '}
                    Register
                </Link>
            </li>
            <li>
                <Link to="/login">
                    <i className="fas fa-sign-in-alt"></i>
                    {'  '}
                    Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to='/'>
                    <i className="fas fa-home"></i>
                    {' '}
                    MCU
                </Link>
            </h1>
            {
                !loading && (
                    <Fragment>
                        { isAuthenticated ? authLinks : guestLinks }
                    </Fragment>
                )
            }
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);