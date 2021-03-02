import React from 'react'
import Login from '../../../src/screens/auth/Login'
import ShallowRenderer from 'react-test-renderer/shallow';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {reducer} from '../../../src/store/reducers/User'

const initialState = {
  nome:'silas',
  email: 'silas@teste.com',
  isLoading: true,
  token:true
}

const store = createStore(reducer, initialState);

it('Renders the connected app with initialState', () => {
  
  const shallowRenderer = new ShallowRenderer();
  shallowRenderer.render(
    <Provider store={store}>
      <Login/>
    </Provider>
    );
  const result = shallowRenderer.getRenderOutput();
  expect(result.props.children.type.type).toBeTruthy()
})