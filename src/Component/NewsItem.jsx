import '../assets/CSS/NewsItem.css';
import React from 'react';
import imgNotFound from '../assets/Img/image not found.png';

function NewsItem (props) {
    let {date, title, imgUrl, description, newsURL, author, source} = props;
    return (
      <div className='card mt-4'>
        <div className='news_img'>
            <img src={imgUrl === null ? imgNotFound : imgUrl} className='card-img-top' alt="trg gfb gf " />
        </div>
        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left : '50%', zIndex : '1'}}>{source}</span>

        <div className="card-body">
            <p className='card-text'><small>By {!author ? "Unknow" : author} on </small>{new Date(date).toUTCString()}</p>
            <a href={newsURL} target='_blank'><h4 className='card-title'>{title}</h4></a>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-center">
              <a href={newsURL} target='-blank'><button className="btn btn-primary">View Details</button></a>
            </div>
        </div>
      </div>
    )
}
export default NewsItem;