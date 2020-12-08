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
                            <div>
                                <a href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div>
                                    {el.description}
                                </div>
                                <div>
                                    <a href={el.client_repo}>Client</a>
                                </div>
                                <div>
                                    {el.server_repo === '' ? '' : <a href={el.server_repo}>Server</a>}
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
                            <div>
                                <a href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div>
                                    {el.description}
                                </div>
                                <div>
                                    <a href={el.client_repo}>Client</a>
                                </div>
                                <div>
                                    {el.server_repo === '' ? '' : <a href={el.server_repo}>Server</a>}
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
                            <div>
                                <a href={el.deploy_link}>{el.project_name}</a>
                            </div>
                            <ImageSlideshow name={el.project_name} />
                            <div>
                                <div>
                                    {el.description}
                                </div>
                                <div>
                                    <a href={el.client_repo}>Client</a>
                                </div>
                                <div>
                                    {el.server_repo === '' ? '' : <a href={el.server_repo}>Server</a>}
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
            <div>
                <div>
                    UNDER CONSTRUCTION:: Expected before 12/9
                </div>
                <div>
                    In the meantime, here are my recent projects:
                    <br />
                    <br />
                    <div className="projects-list">
                        {projectsArr}
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;