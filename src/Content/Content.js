import React from 'react';
import DATASTORE from '../DataStore/DataStore';
import './Content.css';
import ImageSlideshow from '../Slideshow/Slideshow';

class Projects extends React.Component {
    state = {
        idx: 1,
    }

    makeSplitBox(el, index, idx, repeatFlag) {
        if (idx === 0) {
            // left render
            return (
                <div key={index} className="project-box">
                    <div className="top-of-project-box">
                        <div className="left-divider-left"></div>
                        <div className={`left-divider-line-top ${repeatFlag ? 'hide-top' : 'left-top-line-on'}`}></div>
                        <div className="left-divider-right-top"></div>
                    </div>
                    <div className="content-box">
                        <div className="content-left">
                            <div className="content-header-link">
                                <a target="_blank" rel="noreferrer" href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div className="content-description">
                                    {el.description}
                                </div>
                                <div className="content-link">
                                    <a target="_blank" rel="noreferrer" href={el.client_repo}>Client</a>
                                </div>
                                <div className="content-link">
                                    {el.server_repo === '' ? '' : <a target="_blank" rel="noreferrer" href={el.server_repo}>Server</a>}
                                </div>
                            </div>
                        </div>
                        <div className="anti-flex"></div>
                        <div className="anti-flex"></div>
                    </div>
                    <div className="bottom-of-project-box">
                        <div className="left-divider-left"></div>
                        <div className={`left-divider-line ${repeatFlag ? '' : 'left-bottom-line-on'}`}></div>
                        <div className="left-divider-right"></div>
                    </div>
                </div>
            )
        } else if (idx === 1) {
            // center render
            return (
                <div key={index} className="project-box">
                    <div className="top-of-project-box">
                        <div className="center-divider-left"></div>
                        <div className="center-divider-right"></div>
                    </div>
                    <div className="content-box">
                        <div className="anti-flex"></div>
                        <div className="content-center">
                            <div className="content-header-link">
                                <a target="_blank" rel="noreferrer" href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div className="content-description">
                                    {el.description}
                                </div>
                                <div className="content-link">
                                    <a target="_blank" rel="noreferrer" href={el.client_repo}>Client</a>
                                </div>
                                <div className="content-link"> 
                                    {el.server_repo === '' ? '' : <a rel="noreferrer" target="_blank" href={el.server_repo}>Server</a>}
                                </div>
                            </div>
                        </div>
                        <div className="anti-flex"></div>
                    </div>
                    <div className="bottom-of-project-box">
                        <div className="center-divider-left"></div>
                        <div className="center-divider-right"></div>
                    </div>
                </div>
            )
        } else {
            // right render 
            return (
                <div key={index} className="project-box">
                    <div className="top-of-project-box">
                        <div className="right-divider-left-top"></div>
                        <div className={`right-divider-line-top ${repeatFlag ? 'hide-top' : 'right-top-line-on'}`}></div>
                        <div className="right-divider-right"></div>
                    </div>
                    <div className="content-box">
                        <div className="anti-flex"></div>
                        <div className="anti-flex"></div>
                        <div className="content-right">
                            <div className="content-header-link">
                                <a target="_blank" rel="noreferrer" href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div className="content-description">
                                    {el.description}
                                </div>
                                <div className="content-link">
                                    <a target="_blank" rel="noreferrer" href={el.client_repo}>Client</a>
                                </div>
                                <div className="content-link">
                                    {el.server_repo === '' ? '' : <a rel="noreferrer" target="_blank" href={el.server_repo}>Server</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-of-project-box">
                        <div className="right-divider-left"></div>
                        <div className={`right-divider-line ${repeatFlag ? '' : 'right-bottom-line-on'}`}></div>
                        <div className="right-divider-right"></div>
                    </div>
                </div>
            )
        }
    }

    render() {
        let prev = -1;
        const projectsArr = DATASTORE.map((el, index) => {
            const randomIdx = Math.floor(Math.random() * 3);
            if (prev === randomIdx) {
                return this.makeSplitBox(el, index, randomIdx, true);
            } else {
                prev = randomIdx;
                return this.makeSplitBox(el, index, randomIdx, false);
            }

        })


        return (
            <div className="projects-outer" id="projects">
                <div className="projects-header">
                    <h2>Projects</h2>
                </div>
                <div className="projects-header-line">
                    <div className="projects-header-line-box-left"></div>
                    <div className="projects-header-line-box-right"></div>
                </div>
                <div>
                    <div className="projects-list">
                        {projectsArr}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;