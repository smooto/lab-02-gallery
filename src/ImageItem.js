import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <>
                <li 
                    className="card-wrapper"
                    key={this.props.imageObject.keyword}>
                    <img
                        className="card-img"
                        src={this.props.imageObject.url}
                        alt={this.props.imageObject.description} />
                    <p className="card-title">{this.props.imageObject.title}</p>
                    <p className="card-description">{this.props.imageObject.description}</p>
                </li>
            </>
        )
    }
}
