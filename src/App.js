import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
    pageSize = 12
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<News pageSize={this.pageSize} key="general" category="general" country="in" />} />
                            <Route path="/business" element={<News pageSize={this.pageSize} key="business" category="business" country="in" />} />
                            <Route path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" category="entertainment" country="in" />} />
                            <Route path="/health" element={<News pageSize={this.pageSize} key="health" category="health" country="in" />} />
                            <Route path="/science" element={<News pageSize={this.pageSize} key="science" category="science" country="in" />} />
                            <Route path="/sports" element={<News pageSize={this.pageSize} key="sports" category="sports" country="in" />} />
                            <Route path="/technology" element={<News pageSize={this.pageSize} key="technology" category="technology" country="in" />} />
                        </Routes>
                    </div>
                </Router>
            </>
        );
    }
}
