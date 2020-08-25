import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({username, getGithubRepos, repos}) => {

    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos]);

    return (
        <div className='profile-github bg-dark' >
            <h2 className="text-white p-1">Github Repos</h2>
            <hr/>
            {
                repos === null ?
                    <Spinner />
                    :
                    (
                        repos.map(repo => (
                            <div key={repo._id} className='repo p-1' >
                                <div>
                                    <h4>
                                        <a href={repo.html_url} target='_blank' rel='noopener noreferrer' >
                                            {repo.name}
                                        </a>
                                    </h4>
                                    <p>
                                        {repo.description}
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="badge badge-primary p-1">
                                            Stars: {repo.stargazers_count}
                                        </li>
                                        <li className="badge badge-light p-1">
                                            Watchers: {repo.watchers_count}
                                        </li>
                                        <li className="badge badge-warning p-1">
                                            Forks: {repo.forks_count}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
};

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);