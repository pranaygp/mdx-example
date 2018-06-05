import Link from 'next/link'

export default () => (
  <header>
    <Link href="/">
      <a className="logo">
        MDX
      </a>
    </Link>

    <style jsx>{`
      header {
        background: #000;
        height: 48px;
        display: flex;
        justify-content: center;
      }

      .logo {
        color: #FFF;
        text-decoration: none;
        width: 100%;
        height: 100%;
        line-height: 48px;
        text-align: center;
      }
    `}</style>
  </header>
)
