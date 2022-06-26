import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="News Img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  - By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} 
                </small>
              </p>
              <a
                href={`${newsUrl}`}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark btn-sn"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
