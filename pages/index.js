import Link from 'next/link'
import posts from '../content/posts.json'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    {posts.map((post, i) => (
      <Link key={i} href={`/post?id=${post.fileName}`} as={`/post/${post.filename}`}>
        <a className="post" >
          <span className="post-meta">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </span>
        </a>
      </Link>
    ))}

    <style jsx>{`
      .post {
        border-bottom: 1px solid #DDD;
        color: black;
        text-decoration: none;
        width: 100%;
        display: block;
        transition: background 0.2s ease;
      }

      .post:hover {
        background: #EFEFEF;
      }

      .post-meta {
        max-width: 100%;
        width: 900px;
        margin: 0 auto;
        padding: 32px 24px;
        display: block;
      }

      .post-meta h2, .post-meta p {
        margin: 0;
      }

      .post-meta h2 {
        margin-bottom: 16px;
      }
    `}</style>
  </Layout>
)
