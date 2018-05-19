import { combineReducers } from 'redux';

const inputText = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_TEXT':
      return action.payload.inputText;
    case 'FEED_ADD_SUCCESS':
      return '';
    default:
      return state;
  }
};

const urls = (state = {}, action) => {
  switch (action.type) {
    case 'FEED_ADD_SUCCESS': {
      const { feedAtributes } = action.payload;
      const newUrl = feedAtributes.url;
      const id = feedAtributes.feedId;
      return { ...state, [id]: newUrl };
    }
    default:
      return state;
  }
};

const formStatus = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_STATUS':
      return action.payload.formStatus;
    case 'FEED_ADD_SUCCESS': {
      return { ...state, status: false };
    }
    case 'FEED_ADD_ERROR': {
      return { ...state, status: true };
    }
    default:
      return state;
  }
};

const alertStatus = (state = {}, action) => {
  switch (action.type) {
    case 'FEED_ADD_REQUEST':
      return { err: false, show: true, message: 'adding...' };
    case 'FEED_ADD_ERROR': {
      const { message } = action.payload.error;
      return { err: true, show: true, message };
    }
    case 'FEED_ADD_SUCCESS': {
      return { err: false, show: false, message: 'feed added' };
    }
    case 'ALERT_CLOSE':
      return { show: false };
    default:
      return state;
  }
};

const feeds = (state = {}, action) => {
  switch (action.type) {
    case 'FEED_ADD_SUCCESS': {
      const { feedAtributes } = action.payload;
      const newFeed = feedAtributes.feed;
      const id = feedAtributes.feedId;
      return { ...state, [id]: newFeed };
    }
    default:
      return state;
  }
};

const feedsItems = (state = {}, action) => {
  switch (action.type) {
    case 'FEED_ADD_SUCCESS': {
      const { feedAtributes } = action.payload;
      const newFeedItems = feedAtributes.feedChildren;
      const id = feedAtributes.feedId;
      return { ...state, [id]: newFeedItems };
    }
    default:
      return state;
  }
};

const modalStatus = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      const { text } = action.payload.modalInfo;
      return { show: true, text };
    }
    case 'CLOSE_MODAL': {
      return { show: false };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  inputText,
  urls,
  formStatus,
  alertStatus,
  feeds,
  feedsItems,
  modalStatus,
});

export default rootReducer;
