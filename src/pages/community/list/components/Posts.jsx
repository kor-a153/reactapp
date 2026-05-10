import React from 'react';
import styled from 'styled-components';
import { boxShadow, colorCSS } from '../../style';
import Post from './Post';
import PostListEmptyContainer from './PostListEmptyContainer';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px;
    ${boxShadow["boxBasic"]}
`

const Posts = ({postData}) => {

  return (
    <div>
      <myStyle.wrapper>
        { postData.length !== 0 ? 
        postData.map((post, i) => (
          <Post
            key={post.id}
            category={post.category}
            title={post.title}
            content={post.content}
            date={post.date}
            profile={post.profile}
            author={post.author}
            views={post.views}
            likes={post.likes}
            comments={post.comments}
            thumbnail={post.thumbnail}
            isHrHidden={(postData.length-1) === i}
          />
        )) 
        : <PostListEmptyContainer></PostListEmptyContainer>
      }
      </myStyle.wrapper>
    </div>
  );
};

export default Posts;
