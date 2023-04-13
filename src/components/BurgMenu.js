import React, {useState} from 'react';
import {Button, Image, NavLink, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";
import calendar from "../assets/calendar.png"
import projectReport from "../assets/projectReport.png"
import totalContacts from "../assets/totalContacts.png"

const BurgMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="m-lg-auto" variant="info" onClick={handleShow}>
                Menu
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>LOGO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className="p-2 d-flex align-items-center" >
                        <Image width={20} height={20} src={totalContacts}/>
                        <Link onClick={handleClose} to="/home" className="text-decoration-none" style={{color: "black", marginLeft: 9}}>Total Contacts</Link>
                    </div>
                    <div className="p-2 d-flex align-items-center" >
                        <Image width={20} height={20} src={calendar}/>
                        <Link onClick={handleClose} to="/calendar" className="text-decoration-none" style={{color: "black", marginLeft: 9}}>Calendar</Link>
                    </div>
                    <div className="p-2 d-flex align-items-center" >
                        <Image width={20} height={20} src={projectReport}/>
                        <Link onClick={handleClose} to="/report" className="text-decoration-none" style={{color: "black", marginLeft: 9}}>Project Report</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default BurgMenu;