import React from "react";
import Nav from 'react-bootstrap/Nav';

export default function VerticalNavbar(){
    return (
        <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="https://www.youtube.com/watch?v=-Afvtij-o2w&ab_channel=bigboxSWE">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      );
}