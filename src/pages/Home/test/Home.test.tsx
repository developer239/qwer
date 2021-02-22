import React from 'react'
import 'jest-styled-components'
import { App } from 'App'
import { HOME_TEST_ID, HOME_ROUTE } from 'pages/Home'
import { renderPage } from 'testUtils/render'

describe('[pages] HomePage', () => {
  it('should render correctly', () => {
    const renderer = renderPage(<App />, HOME_ROUTE)
    const renderedElement = renderer.getByTestId(HOME_TEST_ID)

    expect(renderedElement).toBeTruthy()
  })
})
