import React from 'react';
import {Link} from 'react-router-dom';

import './PostMini.css';

const PostMini = props => {
  return(
    <>
    <div className="post-mini border rounded text-dark bg-light container d-flex flex-row align-items-center justify-content-center m-2">
      <div className="container col-sm-3 d-flex flex-column align-items-center jutify-content-center">
        <img className="rounded border post-mini-img" src="https://images.unsplash.com/photo-1570432871838-d61aed09f144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      </div>
      <div className="col-sm-9 d-flex flex-column align-items-center jutify-content-center">
        <div className="bg-dark m-2 p-2 rounded container row-sm-2 d-flex flex-column align-items-center jutify-content-center">
          <Link to="/post/detail" className="d-flex align-self-start post-mini-title ">
            <h4 className="d-flex align-self-start post-mini-title text-light">Title</h4>
            <h4 className="d-flex align-self-start post-mini-title text-light">{props.postData.title}</h4>
          </Link>
          {/* <small className="d-flex align-self-start text-light">by Author</small> */}
          <small className="d-flex align-self-start text-light">by {props.postData.author}</small>
        </div>
        <div className="row-sm-2 d-flex flex-column align-items-center jutify-content-center">
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ullam hic eligendi pariatur quam quasi recusandae sapiente molestiae ea laborum facilis, neque voluptatibus soluta reiciendis corporis vero asperiores eveniet, omnis blanditiis modi provident. Quisquam rem dolores reprehenderit explicabo?</p> */}
          <p>{props.postData.content}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PostMini;
