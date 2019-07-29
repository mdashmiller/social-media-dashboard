import React from 'react'

import Loading from '../Loading'

import { headlines } from '../../store/fakeData'

const News = () => {
  return (
    <section data-testid="news">
      <h2>News</h2>
      {headlines.length ? (
        headlines.map(headline =>
          <p data-testid="headline" key={headline.uid}>
            <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">
              {headline.title}
            </a>
          </p>  
        )
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default News
