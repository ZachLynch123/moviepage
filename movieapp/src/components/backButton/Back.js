import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Back = () => {
    return (
        <Link to="/" className="back-button"><i className="fas fa-arrow-left"></i></Link>
    )
}

export default Back;