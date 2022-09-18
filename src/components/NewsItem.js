import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        const { title, description, newsURL, imgURL } = this.props;
        return (
            <div className="card">
                <img src={imgURL} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}...</h5>
                    <p className="card-text">{description.slice(0, 120)}...</p>
                    <a href={newsURL} target="_blank" className="btn btn-sm btn-warning">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}
