import React from "react";
import Accordion from "./Accoridon";
import "../../css/faq.css";
import { Container } from "react-bootstrap";
import Heading from "../common/Heading";
import SlantDiv from "../common/SlantDiv";

function Faq() {
  const allFaq = [
    {
      id: 1,
      question: "What is Model United Nations conference or MUN conference?",
      answer:
        "Model United Nations is an academic simulation of the United Nations where students play the role of delegates from different countries and attempt to solve real-world issues with the policies and perspectives of their assigned country. Delegates are given agenda to debate upon with relevance to the committee they are in. The whole debate is overseen by the Executive Board, who help the delegate throughout the process of learning. At the end of the conference, remarkable performances are rewarded.",
    },
    {
      id: 2,
      question: "I’ve never done MUN but I want to start. Can I?",
      answer:
        "Yes, absolutely! MUN is something that anyone can start at any point in time, there is no right or wrong time to start MUNing. SITMUN will be happy to host a large number of first-timers and we will provide full support to them for a memorable experience.",
    },
    {
      id: 3,
      question: "What are the takeaways from SITMUN?",
      answer:
        "MUNs aim at sharpening the oratory, debating and writing skills of the participants, in addition to critical thinking, teamwork and leadership skills. Delegates critically analyze the given agenda from their assigned country’s perspective which helps them in learning about international issues, international relations and diplomatic courtesy. Along with this, the team of photographers clicks amazing pictures which can be used for Instagram stories, posts or as profile pictures. You can expect good socials at SITMUN 2022, not to forget all the humble (men), beautiful (ladies) intelligent and kind people you get to meet.",
    },
  ];
  return (
    <div style={{ position: "relative" }} id="faq">
      <SlantDiv alt={false} />
      <Container className="faq">
        <Heading head="HAVE A QUESTION?" col="light" />
        <div className="faq-div">
          <div>
            {allFaq.map((faq) => (
              <Accordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Faq;
