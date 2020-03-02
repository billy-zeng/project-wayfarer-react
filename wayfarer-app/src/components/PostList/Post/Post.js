import React from 'react';
import {Link} from 'react-router-dom';

import './Post.css';

const Post = props => {
  return(
    <>
    <div className="d-flex flex-column m-3">
      <img id="post-img" src="https://images.unsplash.com/photo-1574403647206-a2eb688580a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
      <div className="d-flex flex-column">
        <h3>Seattle &mdash; Portland</h3>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
        <Link className="align-self-end" to="/post/detail">
        <button className="btn btn-dark align-self-end">Read More</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Post;