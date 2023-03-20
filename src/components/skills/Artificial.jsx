import React from "react";

const Backend = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Artificial Intelligence</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Tensorflow</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                        
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Deep Learning</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Machine Leaning</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend;