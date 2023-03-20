import React from "react";
import "./Skills.css";
import Frontend from "./Fullstack";
import Backend from "./Artificial";
import Languages from "./Languages";
const Skills=()=>{
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Techinical level</span>
            <div className="skills__container container grid">
            <Languages/>
            <Frontend/>
            <Backend/>
            </div>
        </section>
    )
}

export default Skills;