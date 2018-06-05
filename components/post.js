import { Component } from 'react'
import postsMeta from '../content/posts.json'
import Layout from './layout'

export default class Post extends Component {
  componentDidMount() {
    const post = postsMeta.find(post => post.filename === this.props.post);
    this.setState({
      post
    })
  }

  render() {
    if (!this.state) return null

    const { children } = this.props
    const { post } = this.state

    const date = new Date(Date(post.published)).toLocaleDateString();

    return (
      <Layout>
        <div className="post-header">
          <div className="post-header__content">
            <h1>{post.title}</h1>
            <p>{post.description} <span className="date">- {date}</span></p>
          </div>
        </div>

        <div className="post-content">
          { children }
        </div>

        <style jsx>{`
          .post-header {
            border-bottom: 1px solid #DDD;
            text-align: center;
          }

          .post-header__content, .post-content {
            max-width: 900px;
            margin: 0 auto;
            padding: 48px 24px;
          }

          .date {
            color: #999;
          }
        `}</style>
      </Layout>
    )
  }
}
