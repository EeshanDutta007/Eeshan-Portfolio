import {HeaderTextLine, SkillsBtn} from '../../Components'
import GithubLogo from '../../Images/githubLogo'
import VideoLogo from '../../Images/videoLogo'
import './projCard.scss'



const ProjCard = ({name, duration, content, skillsArr}) => {
  return (
    <div className='proj_container'>
      <HeaderTextLine>{name}</HeaderTextLine>
      <p className='proj_duration'>{duration}</p>
      <p className='proj_content'>{content}</p>
      {skillsArr.map(skill => <SkillsBtn>{skill}</SkillsBtn>)}
      <br/><br/><GithubLogo/><VideoLogo/>
    </div>
  )
}


export default ProjCard