import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
    // we construct an empty News component using contructor
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0,
        };
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    // executes after component gets rendered on the screen
    componentDidMount = async () => {
        let pageSize = 6;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d69c4264e10745f6bb5bcf51c05b4561&pageSize=${pageSize}&page=${this.state.page}`;
        this.setState({ loading: true });
        console.log(url)
        let news = await fetch(url);
        let parsedNews = await news.json();
        this.setState({
            articles: parsedNews.articles,
            pageSize: pageSize,
            totalArticles: parsedNews.totalResults,
            loading: false,
        });
    };
    handlePreviousClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
            this.props.category
        }&apiKey=d69c4264e10745f6bb5bcf51c05b4561&pageSize=${this.state.pageSize}&page=${
            this.state.page - 1
        }`;
        this.setState({ loading: true }); // show spinner before fetching data
        let news = await fetch(url);
        let parsedNews = await news.json();
        this.setState({ articles: parsedNews.articles, page: this.state.page - 1, loading: false });
    };
    handleNextClick = async () => {
        console.log(this.state);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
            this.props.category
        }&apiKey=d69c4264e10745f6bb5bcf51c05b4561&pageSize=${this.state.pageSize}&page=${
            this.state.page + 1
        }`;
        this.setState({ loading: true }); // show spinner before fetching data
        let news = await fetch(url);
        let parsedNews = await news.json();
        this.setState({ articles: parsedNews.articles, page: this.state.page + 1, loading: false });
    };
    render() {
        return (
            <div className="container my-3">
                <h2 className="my-3">Top Headlines</h2>
                {/* show spinner when this.state.loading is true */}
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((elem) => {
                            return (
                                <div key={elem.url} className="col-md-4">
                                    <NewsItem
                                        title={elem.title}
                                        description={elem.description}
                                        imgURL={elem.urlToImage}
                                        newsURL={elem.url}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1 ? true : false}
                        className="btn btn-warning"
                        onClick={this.handlePreviousClick}
                    >
                        Previous
                    </button>
                    <button
                        disabled={
                            this.state.page >= Math.ceil(this.state.totalArticles / this.state.pageSize) ? true : false
                        }
                        className="btn btn-warning"
                        onClick={this.handleNextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};