import {HeaderText, ProjCard} from '../Components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.scss'

const Projects = () => {

    const projValues = [
        {name:'ScholarAid', duration:'May 2021', content:'Student help using AI and AR and parent notifications', skillsArr:['FLUTTER', 'FIREBASE', 'ECHO AR' , 'ANDROID' , 'AI']},
        {name:'ThinkArt', duration:'May 2021', content:'Online Art gallery using AR , AI and Blockchain', skillsArr:['FLUTTER', 'FIREBASE', 'ECHO AR' , 'ANDROID' , 'AI']},
        {name:'StudBud', duration:'March 2021', content:'Student Help using AR and AI', skillsArr:['FLUTTER', 'FIREBASE', 'ECHO AR' , 'ANDROID']},
        {name:'SafeLink', duration:'Jan 2021', content:'App on Women Safety.', skillsArr:['FLUTTER', 'FIREBASE', 'IBM WATSON' , 'ANDROID']},
        {name:'SaferX', duration:'Dec 2020', content:'App on Women Safety.', skillsArr:['FLUTTER', 'FIREBASE', 'IBM WATSON' , 'ANDROID']},
        {name:'MedWatch', duration:'Nov 2020', content:'Updated Elixir. Won Best Mobile/Web Application - Codestellation 2020 (organized by Brandeis University at Waltham, Massachusetts)', skillsArr:['FLUTTER', 'FIREBASE','ANDROID']},
        {name:'Elixir', duration:'Dec 2020', content:'Health Application', skillsArr:['FLUTTER','FIREBASE','ANDROID']},
        {name:'HealthX', duration:'Oct 2020', content:'Application for the pressing issue of breast cancer worldwide', skillsArr:['FLUTTER', 'FIREBASE','ANDROID']},
    ]

    return (
        <div className='container proj_page_container' id='projects'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <HeaderText>PROJECTS</HeaderText>
                    <div className='row'>
                        {projValues.map(({name, duration, content, skillsArr}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjCard name={name} duration={duration} content={content}  skillsArr={skillsArr} /></div> )}                    
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Projects
