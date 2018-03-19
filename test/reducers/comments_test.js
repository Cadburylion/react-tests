import { expect } from '../test_helper.js';
import { SAVE_COMMENT } from '../../src/actions/types.js';
import commentReducer from '../../src/reducers/comments.js';

describe('Comments Reducers', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
