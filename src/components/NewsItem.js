import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        const { title, description, newsURL, imgURL } = this.props;
        return (
            <div className="card my-3">
                <img src={imgURL?imgURL:"https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg"} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 data-bs-toggle="tooltip" data-bs-title="Default tooltip" className="card-title">{title.slice(0,120)}...</h5>
                    <p className="card-text">{description.slice(0,150)}...</p>
                    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}