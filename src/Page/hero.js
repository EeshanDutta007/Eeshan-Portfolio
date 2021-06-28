import {HeroText, LightBtn} from '../Components'
import './pages.scss'



const Hero = () => {
  return (
    <div className='container hero_container' id='hero'>
        <div className='row'>
            <div className='col col-2'></div>
            <div className='col col-8'>
                <h4 className='hero_pre_header'>This is</h4>
                <HeroText>EESHAN DUTTA</HeroText>
                <p className='hero_para'>I am a 3rd Year Computer Science Engineering student at SRM Institute of Science and Technology Kattankulathur having interest in Flutter App development, Competitive Programming ,Block-chain Technology , AR/VR tech and yes other interests include Debating, MUNing , watching Anime and playing Chess , BasketBall and Table Tennis. I have in-hand experience in Flutter App Development in the industry and have also participated in numerous hackathons and competitive programming events all across the globe and won laureals for the same.</p>
                <br/><LightBtn><a className='home_linkBtn' href='https://www.linkedin.com/in/eeshan-dutta-03508a1b5/'>Get In Touch</a></LightBtn>
            </div>
            <div className='col col-2'></div>
        </div>
    </div>
  )
}



export default Hero