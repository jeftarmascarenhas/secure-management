import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('Test <Header />', () => {
  it('Should Title', () => {
    const wrapper = shallow(<Header title="Secure Management" />)
    expect(wrapper.find('h1').text()).toEqual('Secure Management')
  })

  it('Should SubTitle', () => {
    const wrapper = shallow(<Header subtitle="Subtitle Secure" />)
    expect(wrapper.find('h3').text()).toEqual('Subtitle Secure')
  })
})
