import Post from '../../components/post'
import Markdown from './using-mdx.md'
import components from '../../lib/components'

export default () => (
  <Post post="using-mdx">
    <Markdown components={components}/>
  </Post>
)
