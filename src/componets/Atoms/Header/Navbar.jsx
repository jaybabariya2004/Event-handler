import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ data }) => {
    console.log(data, "data");
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand ml-5" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {data?.map((val, ind) => {
                        return (
                            <li>
                                <li class="nav-item active" key={ind}>
                                    <Link to={`${val.path}`} class="nav-link">{val.name}</Link>
                                </li>
                            </li>
                        )
                    })}
                </ul>
                <button class="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Login</button>
            </div>
        </nav>
    )
}

export default Navbar
