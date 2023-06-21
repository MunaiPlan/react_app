import React, { useState } from 'react';
import './Sidebar.css';

// interface ISidebarProps {}

function Sidebar(/* props: ISidebarProps */) {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false]);

  function toggle(index: number): void {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  }

  const sidebarItems = ['Home', 'About', 'Contact'];

  return (
    <div className="sidebar">
      <button type="button" className="create-btn">
        Create Company
      </button>
      {sidebarItems.map((item, index) => (
        <div key={item}>
          <button type="button" onClick={() => toggle(index)} className="sidebar-item">
            {item}
          </button>
          {isOpen[index] && (
            <div className="dropdown">
              <div className="dropdown-item">Sub item 1</div>
              <div className="dropdown-item">Sub item 2</div>
              <button type="button" className="create-btn">
                Create Sub Item
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
