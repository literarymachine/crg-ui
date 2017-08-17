import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'
import testdata from './resources/WebPage.json'

import WebPage from '../src/components/WebPage'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

describe('<WebPage />', () => {
  it('can be instantiated', () => {
    const wrapper = mount(
      <I18nProvider locales={['en']}>
        <EmittProvider emitter={{}}>
          <WebPage {...testdata} />
        </EmittProvider>
      </I18nProvider>
    )
    assert.equal(wrapper.find('h1').length, 1)
  })
})
