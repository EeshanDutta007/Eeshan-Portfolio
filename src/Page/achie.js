import {EmpCard, HeaderText} from '../Components'
import './pages.scss'

const Achie = () => {

    const empValues = [
        {heading:'Special Mention Award in SRM Hackathon 2021', content:'Project Name - StudBud'},
        {heading:'Honourable Mention Award in Hacktrix Hackathon 2021', content:'Project Name - ThinkArt', },
        {heading:'EchoAR track prize in Hacktrix Hackathon and project displayed in EchoAr Inspiration Page', content:'Project Name - ThinkArt',},        
        {heading:'Top 10 in IIIT Lucknow Hackathon', content:'Project Name - ScholarAid', },
        {heading:'Winners of Geekathon Hackathon 2020', content:'Project Name - SafeLink', },
        {heading:'Best Mobile/Web App in Codestellation 2020', content:'Project Name - MedWatch',},
        {heading:'Best Health Application in SyntHacks 2020', content:'Project Name - Elixir',},
        {heading:'Winners of HackYuva Hackathon 2020', content:'Project Name - Elixir',}
    ]


    return (
        <div className='container emp_page_container' id='achie'>
            <div className='row'>
                <div className='col col-2'></div>
                <div className='col col-8'>
                    <HeaderText>ACHIEVEMENTS</HeaderText>
                    {empValues.map(({heading, content}) => <EmpCard heading={heading} content={content} /> )}                    
                </div>
                <div className='col col-2'></div>
            </div>
        </div>
    )
}

export default Achie
