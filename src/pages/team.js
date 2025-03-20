import React, { useEffect } from 'react';
import TeamLandingPage from '../components/team/TeamLandingPage';
import { container } from '../styles/styles';
import TeamRating from '../components/team/TeamRating';
import TeamTechnologies from '../components/team/TeamTechnologies';


const Team = () => {
    
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[])
    return (
        <div className={`${container} mt-[130px]`}>
            <TeamLandingPage/>
            <TeamTechnologies/>
            <TeamRating/>
        </div>
    );
};

export default Team;