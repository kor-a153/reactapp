import React from 'react';
import { Link } from 'react-router-dom';

const dummy = [
  {
    id: 1,
    title: '게시글 제목1',
    content: '게시글 내용1'
  },
  {
    id: 2,
    title: '게시글 제목2',
    content: '게시글 내용2'
  },
  {
    id: 3,
    title: '게시글 제목3',
    content: '게시글 내용3'
  },
]

const MyTestParameterContainer = () => {

  const posts = dummy.map(({id, title}, i) => (
    <li key={i}>
      <Link to={`/docs/url-parameter/${id}`}>{title}</Link>
    </li>
  ))

  return (
    <ul>
      {posts}
    </ul>
  );
};

export default MyTestParameterContainer;