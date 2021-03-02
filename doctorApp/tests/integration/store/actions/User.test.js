import nock from 'nock';
import {reducer as userReducer} from './../../../../src/store/reducers/User'
import loginExpectedData from '../../../../tests/fixtures/Responses/Login'
import {USER_LOADED} from '../../../../src/store/actions/ActionTypes'

const user = {
  email: "silas.henrique99@outlook.com",
  password: "123",
  returnSecureToken: true
}

describe('Login', () => {
  describe('.post', () => {
    it('returns the data from the http endpoint',() => {
      // given
      nock('http://mock-api.com.br')
        .post('/accounts:signInWithPassword')
        .reply(200, loginExpectedData);
      // when
      const data = userReducer(user, USER_LOADED);
      // then
      expect(data).toEqual(loginExpectedData);
        });
    });
});