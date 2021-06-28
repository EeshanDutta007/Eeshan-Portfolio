import {HeaderTextLine, SkillsBtn} from '..'
import './projCard1.scss'



const ProjCard1 = ({name, duration, content, skillsArr}) => {
  return (
    <div className='proj_container'>
      <HeaderTextLine>{name}</HeaderTextLine>
      <p className='proj_duration'>{duration}</p>
      <p className='proj_content'>{content}</p>
    </div>
  )
}



export default ProjCard1