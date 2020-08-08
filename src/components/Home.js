import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Header.css";
import JSON from "../db.json";
import NewsList from "./NewsList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      news: JSON,
      filtered: JSON,
    };
  }

  filterNews(userInput) {
    const filterList = this.state.news.filter((data) => {
      return (
        data.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        data.feed.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    });

    this.setState({ filtered: filterList });
  }

  render() {
    return (
      <>
        <Header
          userText={(data) => {
            this.filterNews(data);
          }}
        />
        <NewsList newsdata={this.state.filtered} />
        <Footer month="July" year="2020" />
      </>
    );
  }
}
export default Home;
