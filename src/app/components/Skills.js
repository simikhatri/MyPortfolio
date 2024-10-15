import React from 'react'
import style from './Skill.module.css'

const Skills = () => {
    return (
        <>
            <div className={style.skills}>
                <h1>MY SKILLS</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className={style.skillcontainer}>
                            <div className={style.skil}>
                                <div className={style.subject}>HTML</div>
                                <div className={style.progressbar} value="95%">
                                    <div className={style.progressline} style={{ maxWidth: '95%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>CSS</div>
                                <div className={style.progressbar} value="88%">
                                    <div className={style.progressline} style={{ maxWidth: '88%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>JAVASCRIPT</div>
                                <div className={style.progressbar} value="85%">
                                    <div className={style.progressline} style={{ maxWidth: '85%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>BOOTSTRAP</div>
                                <div className={style.progressbar} value="95%">
                                    <div className={style.progressline} style={{ maxWidth: '95%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>Framer Motion</div>
                                <div className={style.progressbar} value="75%">
                                    <div className={style.progressline} style={{ maxWidth: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className={style.skillcontainer}>
                            <div className={style.skil}>
                                <div className={style.subject}>REACT</div>
                                <div className={style.progressbar} value="70%">
                                    <div className={style.progressline} style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>REACT BOOTSTRAP</div>
                                <div className={style.progressbar} value="60%">
                                    <div className={style.progressline} style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>MATERIAL UI</div>
                                <div className={style.progressbar} value="60%">
                                    <div className={style.progressline} style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>NEXTJS</div>
                                <div className={style.progressbar} value="70%">
                                    <div className={style.progressline} style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                            <div className={style.skil}>
                                <div className={style.subject}>Redux Toolkit</div>
                                <div className={style.progressbar} value="70%">
                                    <div className={style.progressline} style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
