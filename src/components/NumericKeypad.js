import React,{useState} from 'react'
import { NumbButton, Button,Evenbtn } from './Button'
import '../Css/Numbkey.css'

const NumericKeypad = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
        var popup = document.getElementsByClassName('pop-up');
        if( popup.length > 0 ) {
            if(isOpen){
                popup[0].classList.remove("display-none");
            } else {
                popup[0].classList.add("display-none");
            }
        }
    }
    

    return (
        <div className='numeric_keypad'>
            <div className='btn-row'>
                <NumbButton  numb_child='1' text_child='.?,!&'/>
                <NumbButton  numb_child='2' text_child='abc aбbг'/>
                <NumbButton  numb_child='3' text_child='def дeжз'/>
            </div>
            <div className='btn-row'>
                <NumbButton  numb_child='4' text_child='ghi ийkл'/>
                <NumbButton  numb_child='5' text_child='jkl мноп'/>
                <NumbButton  numb_child='6' text_child='mno рсty'/>
            </div>
            <div className='btn-row'>
                <NumbButton  numb_child='7' text_child='pqrs фхцч'/>
                <NumbButton  numb_child='8' text_child='tuv шщы'/>
                <NumbButton  numb_child='9' text_child='wxyz ьэюя'/>
            </div>
            <div className='btn-row'>
                <Button path="/">ESC</Button>
                <NumbButton  numb_child='0' text_child=''/>
                <Evenbtn path="/" onClick={toggle}>+/-</Evenbtn>
            </div>
        </div>
    )
}

export default NumericKeypad
