import {HeaderText, ProjCard1} from '../Components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.scss'

const Cocum = () => {

    const projValues = [
        {name:'Winner of Codestruck 2019', content: "Competetive Coding Event by Microsoft Developer Club with over 200+ participants"},
        {name:'Winner of Codigo 2020h', content: 'Competitive Coding Event by Aakash Research Lab with over 100+ participants from all colleges' },
        {name:'3rd in Bug Crush 2020', content: 'Error Solving in code competition by Codechef SRM Club with participation of over 400+ participants from all colleges' },
        {name:'Winner of Coder\'s Hunt 2020', content: 'Technical Treasure Hunt Event by GeekForGeeks SRM' },
        {name:'Winner of Pirates of Codebbean 2021', content: 'Technical Treasure Hunt Event by GuviCodeCamp SRM'},
        {name: 'Several awards in Debating/Munning' , content: 'Have Been a delegate/judge in several Debating competitions and MUNS and have won 10+ awards as a delegate all over India.'},
    ]


    return (
        <div className='container proj1_page_container' id='cocum'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <HeaderText>CO-CURRICULARS</HeaderText>
                    <div className='row'>
                        {projValues.map(({name, content}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjCard1 name={name}  content={content} /></div> )}                    
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Cocum
