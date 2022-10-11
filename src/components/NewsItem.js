import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        const { title, description, newsURL, imgURL, time, author } = this.props;
        return (
            <div className="card my-3">
                <img
                    src={
                        imgURL
                            ? imgURL
                            : "https://www.sportsdestinations.com/themes/custom/dnc_theme/images/default_img.jpg"
                    }
                    className="card-img-top"
                    alt="thumbnail"
                />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 120) : "null"}...</h5>
                    <p className="card-text">{description ? description.slice(0, 150) : "null"}...</p>
                    <p className="card-text">
                        <small class="text-muted">{`By ${author ? author : "Unknown"} on ${new Date(
                            time
                        ).toUTCString()}`}</small>
                    </p>
                    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}
