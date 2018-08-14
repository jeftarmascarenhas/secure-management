import App from '../App'

describe('App Container', () => {
  const initialState = 'Defatul Text'
  const mockStore = configureStore()
  let wrapper
  let store

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<App store={store} />)
  })

  it('Render correctly <App /> width redux connected', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
