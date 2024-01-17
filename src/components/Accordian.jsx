import React, { useRef } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Accordian = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper p-1" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content font-display p-3 text-lg font-semibold px-4'>{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
       </button>
   
        <div ref={contentHeight} className="answer-container" style={
             isOpen
             ? { height: contentHeight.current.scrollHeight }
             : { height: "0px" }
            }>
         <p className="answer-content font-display text-md">{answer}</p>
        </div>
      </div>
  )
}
