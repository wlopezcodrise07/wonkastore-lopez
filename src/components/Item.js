import React,{useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Item = ({name,img}) =>{


    const parametro = name.replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    return (
        <>
        <div className="row">
            <div className="col-12"> 
                <center>
                    <img src={img} 
                    width="300px" height="300px"/>
                <h4>{name}</h4>
                <Link to={"/item/"+parametro} className="btn btn-info detail"   >Detail</Link>
                </center>
            </div>
        </div>
        </>
        )
}
  export default Item