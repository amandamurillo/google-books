import React from 'react';
import "./style.css";


 const List = ({ children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

 function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}


export { List, ListItem };
