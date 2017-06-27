import * as actions from '../../src/js/actions';
import * as types from '../../src/js/actions/types';

describe('actions', () => {

  it('should create an action to signout a user', () => {
    const expectedAction = {
      type: types.UNAUTH_USER
    }
    expect(actions.signoutUser()).toEqual(expectedAction);
  });

});
