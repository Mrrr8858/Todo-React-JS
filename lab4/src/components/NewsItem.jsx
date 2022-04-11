import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { likesNewsThunkCreator } from '../redusers/news-reduser';
import { useDispatch } from 'react-redux';

function NewsItem(props) {

  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch(likesNewsThunkCreator(props.id));
  }
  return (
    <Card className="mb-2" id={props.id}>
      <Card.Header>
        <div class="d-flex justify-content-between">
          <h5 class="mb-0 news-title"> {props.title} </h5>
          <p class="text-muted mb-0 news-tags">{props.tags}</p>
        </div></Card.Header>
      <Card.Body className="p-0">
        <p class="m-2 font-weight-normal news-content">{props.content}</p>
        <img src={props.img} alt="" />
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <p class="mb-0 font-weight-bold p-1">Date: </p>
            <p class="mb-0 p-1 news-date">{props.date}</p>
          </div>
          <div class="d-flex p-1">
            <i class="news-likes text-muted">{props.likes}</i><FontAwesomeIcon icon={faHeart} className="text-danger mx-2 mt-1" onClick={handleClick} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}


export default NewsItem;