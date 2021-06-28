import {HeaderText, ProjCard1} from '../Components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.scss'

const Marks = () => {

    const projValues = [
        {name: 'Btech in Computer Science Engineering - SRM University KTR' , content: 'Current Aggregate CGPA - 9.65'},
       {name: 'ISC Percentage (Class 12) - DPS Megacity Kolkata' , content: 'Secured percentage of 93.75% with 100/100 in Computer Science'},
       {name: 'ICSE Percentage (Class 10) - DPS Megacity Kolkata' , content: 'Secured percentage of 93.6% with 100/100 in Computer Science'},
    ]


    return (
        <div className='container proj1_page_container' id='marks'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <HeaderText>MARKS</HeaderText>
                    <div className='row'>
                        {projValues.map(({name, content}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjCard1 name={name}  content={content} /></div> )}                    
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Marks
