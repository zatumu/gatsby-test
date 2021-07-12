import * as React from "react"
import {Link} from "gatsby";
import {graphql} from  "gatsby";

const PostItem = (props) =>{
  const {title, link, pubDate}= props.post;
  return(
    <li>
      <a href={link}>
        <small>{pubDate}</small>{title}
      </a>
    </li>
  );
};

const IndexPage = (props) =>{
  return (
  <div>
    <pre>{JSON.stringify(props.data, null,2)}</pre>
  <p>HelLo Gatsby</p>
  <ul>
    {props.data.allFeedQiita.nodes.map((post)=>{
      return <PostItem post={post} key={post.link}/ >
    })}
  </ul>
  <Link to="/about">Link to About</Link>
  </div>
  )
}

export const query =graphql`
query IndexPageQuery{
  allFeedQiita{
    nodes{
      title
      link
      pubDate
    }
  }
}
`;

export default IndexPage