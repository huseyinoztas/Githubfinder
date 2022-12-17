import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class User extends Component {
    render() {
        const {login,avatar_url} = this.props.user;
        return (
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <NavLink to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</NavLink>
                        </div>
                    </div>
                </div>
        )
    }
}

export default User