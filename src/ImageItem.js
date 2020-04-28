import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <>
                <li className="card-wrapper">
                    <img className="card-img" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns" />
                    <p className="card-title">UniWhal</p>
                    <p className="card-description">A unicorn and a narwhal nuzzling their horns</p>
                </li>
            </>
        )
    }
}
