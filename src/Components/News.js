import React, { Component } from 'react'
import NewsBar from './NewsCard'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
        this.props.setProgress(0);
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=30c05f2607374e07b664f83ea0e3a1c8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        })
        this.props.setProgress(100);

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
                <h2> News Item</h2>

                <div className="row">
                    {!this.state.loading && this.state.articles.map((Element) => {
                        return (<div className='col-md-4' key={Element.url}>
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
