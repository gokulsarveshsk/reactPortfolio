import React from "react";

const Info =()=>{
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award'></i>
                <h3 className="about__title">Degree</h3>
                    <span className="about__subtitle">B.E CSE</span>
            </div>
            <div className="about__box">
            <i class='bx bx-code-block'></i>
                <h3 className="about__title">Projects</h3>
                    <span className="about__subtitle">10 + Projects</span> 
            </div>
            <div className="about__box">
                <i class='bx bx-support'></i>
                <h3 className="about__title">Support</h3>
                    <span className="about__subtitle"> Online 24/7</span>
            </div>
        </div>
    );
}
export default Info;