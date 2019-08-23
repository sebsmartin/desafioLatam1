import React from 'react';
import './Table.css';

const Table = (props) => (
    <table className="characters-table">{props.children}</table>
);

export default Table;