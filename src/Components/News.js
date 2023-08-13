import React, { Component } from 'react'
import NewsBar from './NewsCard'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const MAX_REQUEST_TIME = 5000; // Maximum time for a request in milliseconds

export class News extends Component {

    CapitalFirstLetter(input) {

        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    constructor(props) {
        super();
        this.state =
        {
            articles: [],
            totalResults: 0,
            page: 1,
            loading: false

        }
        document.title = this.CapitalFirstLetter(props.category);
    }

    static defaultProps = {
        countryName: "in",
        pageSize: '6',
        category: 'general'
    }

    static propTypes = {
        countryName: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    async updateNews() {

        this.props.setoogle(true);
        this.props.setProgress(0);
        this.props.seTime(0);

        const startTime = new Date(); // Record start time

        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        const response = await fetch(url);
        const endTime = new Date(); // Record end time
        const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
        const timetaken = Math.min((elapsedTime / MAX_REQUEST_TIME) * 100, 100);

        const contentLength = Number(response.headers.get('content-length'));

        if (!contentLength) {
            console.warn('Content length header missing. Cannot track progress.');
        } else {
            const reader = response.body.getReader();
            let receivedLength = 0;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                receivedLength += value.length;
                const progress = Math.round((receivedLength / contentLength) * 100);
                this.props.setProgress(progress);
            }
        }

        const parsedata = await response.json();
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false,
        });

        this.props.setProgress(100);
        this.props.seTime(timetaken);

    }

    handleprevclick = async () => {
        this.setState({ page: this.state.page - 1 }, () => {
            this.updateNews(this.state.page);
        });

    }

    handlenextclick = async () => {

        this.setState({ page: this.state.page + 1 }, () => {
            this.updateNews(this.state.page);
        });
    }


    async componentDidMount() {
        this.updateNews(this.state.page);
    }


    render() {
        return (
            <div className='container my-5 '>

                {this.state.loading && <Spinner />}
                <h2 className='text-center bg-black text-white'>Latest News  </h2>

                <div className="row">
                    {!this.state.loading && this.state.articles.map((Element) => {
                        return (<div className='col-md-4 d-flex justify-content-center' key={Element.url}>
                            <NewsBar title={Element.title} description={Element.description} imgurl={Element.urlToImage} url={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name} />
                        </div>)
                    }
                    )}
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end my-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handleprevclick} >&larr; Previous </button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-secondary " onClick={this.handlenextclick}>Next &rarr; </button>
                </div>
            </div >


        )
    }
}
