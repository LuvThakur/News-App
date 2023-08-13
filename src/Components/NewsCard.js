import React, { Component } from 'react';

export default class NewsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    toggleExpansion = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };

    render() {
        let { title, description, imgurl, url, author, date, source } = this.props;
        const { expanded } = this.state;

        return (
            <div className="card" style={{ width: '300px', height: '400px', marginTop: '2rem' }}>
                <img src={imgurl} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '40%' }} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', height: '60%' }}>
                    <span className="position-absolute top-0 start-50 translate-middle badge bg-danger">
                        {source}
                    </span>
                    <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                        <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                            {title}
                        </h5>
                        <p className="card-text" style={{ fontSize: '1rem', marginBottom: '0.5rem', maxHeight: expanded ? 'none' : '5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {description}
                        </p>
                    </div>
                    <div>
                        {!expanded && (
                            <button onClick={this.toggleExpansion} className="btn btn-sm btn-danger">
                                Read More
                            </button>
                        )}
                        {expanded && (
                            <div>
                                <p className="card-text">{description}</p>
                                <h5 className="card-text">
                                    <small className='text-muted'> by {author ? author : 'Unknown'} Published on {new Date(date).toGMTString()} </small>
                                </h5>
                                <a href={url} target='_blank' className="btn btn-sm btn-primary">
                                    Read More..
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
