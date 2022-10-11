import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        const { title, description, newsURL, imgURL } = this.props;
        return (
            <div className="card my-3">
                <img src={imgURL?imgURL:"https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg"} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0,120):"null"}...</h5>
                    <p className="card-text">{description?description.slice(0,150):"null"}...</p>
                    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}