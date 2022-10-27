import React  from 'react'

const NewsItem = (props)=> {
 
 
    let {title, description, imageUrl,newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
       <div className="card">

         <div style={
          {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
        }
         }>
         <span className="badge rounded-pill bg-danger">
        {source}
        </span>
         </div>

       
         <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/08/26/1600x900/Apple-Security-Update-Explainer-0_1661244583479_1661244583479_1661503773565_1661503773565.jpg":imageUrl} 
         className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
         <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} 
          on {new Date(date).toGMTString()}</small></p>
         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
       </div>
      </div>
    )
}

export default NewsItem
