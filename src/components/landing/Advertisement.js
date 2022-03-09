import React,{useState} from "react";
import unhrc_agenda from "../../img/koc.jpeg";
import { Modal } from "react-bootstrap";


function Advertisement() {
    const [unhrc_Agenda, setUnhrc_Agenda] = useState(true);

    return (
        <>
            <Modal
                size="md"
                show={unhrc_Agenda}
                onHide={() => {
                    setUnhrc_Agenda(false);
                }}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img className="agenda_img" src={unhrc_agenda} alt="" />
                </Modal.Body>
            </Modal></>
    );
}

export default Advertisement;