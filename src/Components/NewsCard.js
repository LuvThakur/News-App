import React, { Component } from 'react'

export default class NewsBar extends Component {
    render() {
        let { title, description, imgurl, url, author, date, source } = this.props;
        return (
            <div className="card" style={{ marginTop: "5rem" }}>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 start-50 translate-middle badge  bg-danger">
                        {source}
                    </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h5 className="card-text"> <small className='text-muted'> by {author ? author : "Unknown"} Published on {new Date(date).toGMTString()} </small> </h5>
                    <a href={url} target='_blank' className="btn btn-sm btn-primary">Read More..</a>
                </div>
            </div>
        )
    }
}
