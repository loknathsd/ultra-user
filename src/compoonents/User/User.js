import React from 'react';
import './User.css';

const User = (props) => {
    // console.log(props.user.image)
    const handleAddParson = props.handleAddParson;
    const {name,image,email,phone} = props.user
    return (
        <div className="user-info">
            <img src={image} alt="" />
            <h1>Name : {name}</h1>
            <p>Email : {email}</p>
            <p>Phone No : {phone}</p>
            <button onClick={()=>handleAddParson(props.user)}>Add Person</button>
           
        </div>
    );
};

export default User;