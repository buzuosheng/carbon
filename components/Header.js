import React from 'react'
import { COLORS } from '../lib/constants'

const Header = ({ enableHeroText }) => (
  <header role="banner" className="mb4">
    <div className="header-content">
      <a id="link-home" href="/" aria-label="Home">
        {/* {<Logo />} */}
        公诸同好
      </a>
      {enableHeroText ? (
        <h2 className="mt3">
          你的代码很不错
          <br />
          但下一秒就是我的了
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content a {
          height: 64px;
          max-width: 96vw;
          font-family: 'Berkshire Swash', cursive;
          font-size: 3rem;
          color: ${COLORS.PRIMARY};
        }

        h2 {
          text-align: center;
        }

        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
)

export default Header
