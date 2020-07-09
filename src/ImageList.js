import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <>
                <ImageItem></ImageItem>
                <ImageItem></ImageItem>
                <ImageItem></ImageItem>
            </>
        )
    }
}
