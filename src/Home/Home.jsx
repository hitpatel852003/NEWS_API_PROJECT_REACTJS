import React, { useEffect } from 'react'
import News from './News'
import { useState } from 'react';

function Home(props) {
    // const [value, setValue] = useState();
    const [articles, setArticles] = useState([]);
    const [imagearticles1, setImagearticles1] = useState([]);
    const [imagearticles2, setImagearticles2] = useState([]);
    const [imagearticles3, setImagearticles3] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState();
    const [pagesize, setPagesize] = useState(15);
    const [category, setCategory] = useState(props.category ? props.category : 'general')
    const [headline, setHeadline] = useState(props.headlines)

    async function api() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1d77c45b6bb24bb6bd5a05d2491c8e4d&pagesize=${pagesize}`
        const respones = await fetch(url);
        const data = await respones.json();
        setArticles(data.articles);
        // console.log("this is a data",data.articles);
        setImagearticles1(data.articles[0]);
        // console.log("this is a image 0",data.articles[0].urlToImage);
        setImagearticles2(data.articles[1].urlToImage);
        // console.log("this is a image 1",data.articles[1].urlToImage);
        setImagearticles3(data.articles[2].urlToImage);
        // console.log("this is a image 2",data.articles[2].urlToImage);

        setTotalResult(data.totalResults);
        // setPagesize(10);


    }

    useEffect(() => {
        api();
    }, [])
    // console.log(articles);



    async function handleNextClick() {
        // you can fetch more data so change the page like page=2,page=3
        if (page + 1 > Math.ceil(totalResults / pagesize)) {
        }
        else {
            console.log("next");
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1d77c45b6bb24bb6bd5a05d2491c8e4d&page=${page + 1}&pagesize=${pagesize}`;
            const respones = await fetch(url);
            const data = await respones.json();
            setPage(page + 1);
            setArticles(data.articles);
            // setTotalResult(data.totalResults);
            // console.log(data.articles);
            // setPagesize(10);
        }
        // setPage({page:page+1});

    }

    async function handlePreviousClick() {
        console.log("previous");
        // console.log("next");
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1d77c45b6bb24bb6bd5a05d2491c8e4d&page=${page - 1}&pagesize=${pagesize}`;
        const respones = await fetch(url);
        const data = await respones.json();
        setPage(page - 1);
        setArticles(data.articles);
        // console.log(data.articles);
        // setTotalResult(data.totalResults);
        // setPagesize(10);

    }

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagearticles3 ? imagearticles3 : "https://picsum.photos/1400/800?newsphotos"} alt="News Image" className="d-block w-100" height={'580px'} />
                    </div>
                    <div className="carousel-item">
                        <img src={imagearticles2 ? imagearticles2 : "https://picsum.photos/1400/800?newsphotos"} alt="News Image" className="d-block w-100" height={'580px'} />
                    </div>
                    <div className="carousel-item">
                        <img src={imagearticles1.urlToImage ? imagearticles1.urlToImage : "https://picsum.photos/1400/800?newsphotos"} alt="News Image" className="d-block w-100" height={'580px'} />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <h1 className='d-flex justify-content-center'>{headline ? headline : "News headlines"}</h1>
            <br />
            <div>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-4" key={element.url}>
                                <News image={element.urlToImage ? element.urlToImage : "https://picsum.photos/1400/800?newsphotos"} author={element.author} title={element.title} description={element.description} published={element.publishedAt} url={element.url}></News>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-between">
                <button type="button" disabled={page <= 1} className="btn btn-brown" onClick={handlePreviousClick}> &larr;
                    Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil(totalResults)} className="btn btn-brown" onClick={handleNextClick}>Next &rarr;</button>
            </div>
            <hr />
            {/* <div className="container">
                <div className="card" style={{width: "16rem"}}>
                    <img src={articles.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{articles.title}</h5>
                            <p className="card-text">{articles.description}</p>
                            <p className="card-text">Author Name : {articles.author} </p>
                            <p className="card-text">PublishedAT : {articles.publishedAt}</p>
                            <a href={articles.url} className="btn btn-light">Read More </a>
                        </div>
                </div>
            </div> */}
        </div>

    )
}

export default Home
