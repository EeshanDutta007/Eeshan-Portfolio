import {EmpCard, HeaderText} from '../Components'
import './pages.scss'

const Employment = () => {

    const empValues = [
        {heading:'Flutter Developer at The Sparks Foundation', content:'Work as a Flutter Developer and do projects/tasks on Flutter.', duration:'Apr_2021 May_2021'},
        {heading:'Flutter App Developer at Mentor Match India', content:'Making the app with my team for this startup which will launch in both Google Play Store and Apple App Store.', duration:'Dec_2020 Mar_2021'},
        {heading:'Technical Lead at SRM Team Hackerearth', content:'Guide juniors in the club and do multiple projects and also organize events like hackathons, competitive coding events, quizes etc', duration:'Oct_2021 Present'},        
        {heading:'Block-chain Member at Next Tech Lab', content:'Work as a block-chain researcher and do projects on it', duration:'Sep_2020\nPresent'},
        {heading:'Block-chain researcher at Data Science Community SRM', content:'Work in development and research of Block-chain Projects', duration:'Aug_2020 Jan_2021'},
        {heading:'Work in development and research of Block-chain Projects', content:'Work in development and research of Block-chain Projects', duration:'Jul_2019 Oct_2020'}
    ]


    return (
        <div className='container emp_page_container' id='employment'>
            <div className='row'>
                <div className='col col-2'></div>
                <div className='col col-8'>
                    <HeaderText>EMPLOYMENT HISTORY</HeaderText>
                    {empValues.map(({heading, content, duration}) => <EmpCard heading={heading} content={content} vertical={duration} /> )}                    
                </div>
                <div className='col col-2'></div>
            </div>
        </div>
    )
}

export default Employment
