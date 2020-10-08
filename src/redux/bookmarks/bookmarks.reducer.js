import { addBookmark, removeBookmark } from './bookmarks.utils';

const INITIAL_STATE = {
  selectedBookmarks: [],
};

const bookmarksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        selectedBookmarks: addBookmark(state.selectedBookmarks, action.payload),
      };

    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        selectedBookmarks: removeBookmark(
          state.selectedBookmarks,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default bookmarksReducer;
