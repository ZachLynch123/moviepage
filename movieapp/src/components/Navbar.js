import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { value, handleSearch, handleSubmit} = props;
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li> 
        </ul>
    </div>
    <div className="mx-auto order-0">
    <form className="mt-4" onSubmit={handleSubmit}>
        <div className="input-group">
            <input type="text" className="form-control" id="search" placeholder="Search.." value={value} onChange={handleSearch}></input>
            <div className="input-group-append">
                <button type="submit" className="input-group-text bg-secondary text-white"><i className="fas fa-search"></i></button>
                </div>
        </div>
        </form>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#"></a>
            </li>
        </ul>
    </div>
</nav>
    )
}

export default Navbar