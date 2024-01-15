import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import '../assets/CSS/News.css';
import Spinner from './Spinner';


function News (props) {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(3);


// -----------text capitilize start ------------------------
  const CapitilizeLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 
  document.title = CapitilizeLetter(props.category) + ' || NewsLine-BD';
// -----------text capitilize end ------------------------


// -------- main function for get data from api --------
const updateNews = async() =>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=33e07335c19e41a681c36ce029ebf4fa&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true) // loading start
    let data = await fetch(url)
    let parsData = await data.json()
    setarticles(parsData.articles)
    setTotalResults(parsData.totalResults)
    setLoading(false)  // loading end
}
useEffect(()=>{
  updateNews();
}, [])
// -------- main function for get data from api -------- ***


// ---------- faceMoreData function start -------------------
const fetchMoreData = async () =>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=33e07335c19e41a681c36ce029ebf4fa&page=${page + 1}&pageSize=${props.pageSize}`;
  setLoading(true) // loading start
  let data = await fetch(url)
  let parsData = await data.json()
  setarticles(articles.concat(parsData.articles));
  setTotalResults(parsData.totalResults)
  setLoading(false)  // loading end
  setPage(page + 1);
}
// ---------- faceMoreData function end -------------------
// const PrevClick = () =>{
//   updateNews()
//   setPage(page - 1);
// }
// const NextClick = () =>{
//   updateNews()
//   setPage(page + 1);
// }
  
return (
      <div className='container' style={{minHeight : '100vh'}}>
{/* ------- headling and next button start ----- */}
          <div className="headLineBar">
              <h1 id='ReturnUpper'>NewsLine_BD top <span>"{CapitilizeLetter(props.category)}"</span> headline</h1>
              {/* <div className="btn-group">
                <button disabled={page <= 1} className="btn btn-danger" onClick={PrevClick}> <span>&larr;</span> Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-success" onClick={NextClick}>Next <span>&rarr;</span></button>
              </div> */}
          </div>
          <div className="return_btn_aria">
            <a href="#ReturnUpper" className='ReturnBtn'><i class="fa-solid fa-arrow-up"></i></a>
          </div>
{/* --------- headling and next button end------ *** */}

{/* ----------------- infinite scroll start ------------------- */}
          <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
          >
              {loading && <Spinner/>}
              <div className="container">
                  <div className="row">
{/* ------------------ items boxs start ------------------- */}
                    {articles.map((element)=>{
                        return <div key={element.url} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title? element.title.slice(0, 30) + '...' : 'Sorry! title is not found'} description={ element.description ? element.description.slice(0, 90) + '...' : 'Sorry! description is not found'} imgUrl={element.urlToImage} newsURL={element.url}/>
                        </div>
{/* ------------------ items boxs end ------------------- ***/}
                    })}
                  </div>
              </div>
          </InfiniteScroll>
{/* ----------------- infinite scroll end ------------------- ***/}
      </div>
    )
  }

News.defaultProps = {
  pageSize : 18,
  category : 'general',
}
News.prototype = {
  pageSize : PropTypes.number,
  category : PropTypes.string,
}
export default News;