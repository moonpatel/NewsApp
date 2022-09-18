import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    articles = [
        {
            source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
            author: "Joseph De Avila and Alyssa Lukpat",
            title: "Adderall Shortages Push ADHD Patients to Make Adjustments - The Wall Street Journal",
            description:
                "A labor shortage at a pharmaceutical company along with increased demand left Adderall on back-order at many pharmacies across the country.",
            url: "https://www.wsj.com/articles/adderall-shortages-push-adhd-patients-to-make-adjustments-11663362272",
            urlToImage: "https://images.wsj.net/im-624803/social",
            publishedAt: "2022-09-16T21:04:00Z",
            content:
                "Patients with attention-deficit hyperactivity disorder are having trouble filling prescriptions of Adderall and generic versions of the drug\r\n amid growing demand and a shortage of the medication, ac… [+415 chars]",
        },
        {
            source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
            author: "Joseph Walker",
            title: "Crispr Gene-Editing Drugs Show Promise in Preliminary Study - The Wall Street Journal",
            description:
                "Intellia Therapeutics said two of its experimental Crispr treatments produced positive results in early-stage trials.",
            url: "https://www.wsj.com/articles/crispr-gene-editing-drugs-show-promise-in-preliminary-study-11663327063",
            urlToImage: "https://images.wsj.net/im-624113/social",
            publishedAt: "2022-09-16T21:03:00Z",
            content:
                "Intellia Therapeutics Inc. reported encouraging early-stage study results for its Crispr gene-editing treatments, the latest sign that \r\nthe pathbreaking technology could result in commercially avail… [+266 chars]",
        },
        {
            source: { id: "cnn", name: "CNN" },
            author: "Sean Lyngaas, CNN",
            title: "Uber investigating 'cybersecurity incident' after hacker claims to access internal systems - CNN",
            description:
                'Uber said Thursday that it was investigating a "cybersecurity incident" after a hacker shared evidence that they had breached the ride-hailing giant\'s computer systems with journalists and security researchers.',
            url: "https://www.cnn.com/2022/09/15/tech/uber-cybersecurity-incident/index.html",
            urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220915222040-02-uber-file-super-tease.jpg",
            publishedAt: "2022-09-16T20:54:00Z",
            content: null,
        },
    ];
    constructor(props) {
        super(props);
        console.log("Contructor of News component");
        this.state = {
            articles: this.articles,
            loading: false,
        };
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="my-3">Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((elem) => {
                        return (
                            <div key={elem.url} className="col-md-4">
                                <NewsItem title={elem.title} description={elem.description} imgURL={elem.urlToImage} newsURL={elem.url} />
                            </div>
                        );
                    })}
                    {/* <div className="col-md-4">
                        <NewsItem
                            title="Billionaire Ray Dalio warns stocks could plunge 20% if interest rates rise to 4.5% - Fox Business"
                            description="Ray Dalio, the founder of Bridgewater Associates, said in a post this week that interest rates will need to rise substantially in order to fight inflation."
                            imgURL="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/GettyImages-1140767704.jpg?ve=1&tl=1"
                        />
                    </div>
                    <div className="col-md-4">
                        <NewsItem
                            title="Billionaire Ray Dalio warns stocks could plunge 20% if interest rates rise to 4.5% - Fox Business"
                            description="Ray Dalio, the founder of Bridgewater Associates, said in a post this week that interest rates will need to rise substantially in order to fight inflation."
                            imgURL="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/GettyImages-1140767704.jpg?ve=1&tl=1"
                        />
                    </div>
                    <div className="col-md-4">
                        <NewsItem
                            title="Billionaire Ray Dalio warns stocks could plunge 20% if interest rates rise to 4.5% - Fox Business"
                            description="Ray Dalio, the founder of Bridgewater Associates, said in a post this week that interest rates will need to rise substantially in order to fight inflation."
                            imgURL="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/0/0/GettyImages-1140767704.jpg?ve=1&tl=1"
                        />
                    </div> */}
                </div>
            </div>
        );
    }
}
