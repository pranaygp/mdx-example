import { Fragment } from 'react'
import Header from './header'

export default ({ children }) => (
  <Fragment>
    <Header />
    { children }
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-size: 62.5%;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-size: 1.6rem;
        line-height: 1.5em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
      }
    `}</style>
  </Fragment>
)
