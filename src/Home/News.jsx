import React, { useState } from 'react';
import './news.css'
import { useSelector } from 'react-redux';


function News(props) {
    const theme = useSelector((state) => state.theme.mode);
    return (
        <>
            <div>
                <div className="container">
                    <div className={`card bg-${theme === "dark" ? "light" : "dark"}`} style={{ width: "16rem" }}>
                        <img src={props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text">Author Name : {props.author} </p>
                            <p className="card-text">PublishedAT : {props.published}</p>
                            <a href={props.url} target='_blank' className={`btn btn-${theme === "dark" ? "light" : "dark"}`}>Read More </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default News

