import React from 'react'
import Accordion from './Accoridon'
import '../../css/faq.css'
import { Container } from 'react-bootstrap';
import Heading from '../common/Heading';
import SlantDiv from "../common/SlantDiv";

function Faq() {
    const allFaq = [
        {
            id: 1,
            question: 'What is Model United Nations conference or MUN conference?',
            answer: "A Model United Nations conference is an educational activity in which participants role-play delegates of various countries to the United Nations and simulate various UN committees. The participants are referred to as delegates in  an MUN conference. Delegates are assigned countries and given agenda to debate upon with relevance to the committee they are in. The flow of debate is a simulation of a real United Nations discussion in which the Executive Board helps the delegates to learn and perform. At the end remarkable performances are rewarded."
        },
        {
            id: 2,
            question: 'I’ve never done MUN but I want to start. Can I?',
            answer: "Yes, absolutely! MUN is something that anyone can start at any point of time, there is no right or wrong time to start MUNing. SITMUN will be happy to host a large number of first timers and we will provide full support to them for a memorable experience."
        },
        {
            id: 3,
            question: 'What are the takeaways from SITMUN?',
            answer: "MUN involves participants speaking, debating and writing documents in addition to critical thinking, teamwork and leadership. Delegates critically analyze the given agenda from their assigned country’s perspective thus it helps to learn about international issues, international relations and diplomatic courtesy. Along with this the team of photographers clicks amazing pictures which can be used for Instagram stories, posts or as profile pictures. You can expect good socials from a conference too. Not to forget all the humble (men), beautiful (ladies) intelligent and kind people you get to meet."
        }
    ]
    return (
        <Container className='faq'>
            <Heading head="HAVE A QUESTION?" />
            <div className='faq-div'>
                <div>
                    {allFaq.map((faq)=>(
                        <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>  
            </div> 
        </Container>
    )
}

export default Faq
