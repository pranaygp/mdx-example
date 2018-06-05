import { Fragment } from 'react'

const getHeadingID = (children) => {
  let text = children

  // If there are sub components, convert them to text
  if (Array.isArray(children)) {
    text = children
      .map(child => {
        return typeof child === 'object' ? child.props.children : child
      })
      .join('')
  }

  return text.toLowerCase().replace(/\s/g, '-').replace(/[?!]/g, '')
}

export const H1 = ({ children }) => {
  const id = getHeadingID(children)

  return (
    <Fragment>
      <a href={`#${id}`}>
        <h1>{ children }</h1>
      </a>

      <style jsx>{`
        h1 {
          background: black;
          color: white;
          display: inline-block;
          padding: 16px 8px;
          margin: 0;
        }

        a {
          color: black;
          text-decoration: none;
          position: relative;
          display: block;
        }

        a:hover:before {
          content: '#';
          color: #BBB;
          position: absolute;
          left: -32px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 3.2rem;
        }
      `}</style>
  </Fragment>
  )
}

export const H2 = ({ children }) => {
  const id = getHeadingID(children)

  return (
    <Fragment>
      <a href={`#${id}`}>
        <h2>{ children }</h2>
      </a>

      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
          position: relative;
        }

        a:hover:before {
          content: '#';
          color: #BBB;
          position: absolute;
          left: -24px;
          top: 4px;
          font-size: 2.4rem;
        }
      `}</style>
    </Fragment>
  )
}

export const H3 = ({ children }) => {
  const id = getHeadingID(children)

  return (
    <Fragment>
      <a href={`#${id}`}>
        <h3>{ children }</h3>
      </a>

      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
          position: relative;
        }

        a:hover:before {
          content: '#';
          color: #BBB;
          position: absolute;
          left: -24px;
          top: 4px;
          font-size: 2rem;
        }
      `}</style>
  </Fragment>
  )
}

export const H4 = ({ children }) => {
  const id = getHeadingID(children)

  return (
    <Fragment>
      <a href={`#${id}`}>
        <h4>{ children }</h4>
      </a>

      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
          position: relative;
        }

        a:hover:before {
          content: '#';
          color: #BBB;
          position: absolute;
          left: -24px;
          top: 4px;
          font-size: 1.6rem;
        }
      `}</style>
  </Fragment>
  )
}
