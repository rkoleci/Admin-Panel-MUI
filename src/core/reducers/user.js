import types from 'config/types'

export function userProfile(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.USER_FETCH_PROFILE_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.USER_FETCH_PROFILE_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.USER_FETCH_PROFILE_ERROR:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function updateUserProfile(state = {
    updating: false,
    updated: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.USER_UPDATE_PROFILE_START:
        return { ...state, updating: true, error: '', errored: false }
      case types.USER_UPDATE_PROFILE_SUCCESS:
        return {
          ...state, updating: false, updated: true, data: action.payload,
        }
      case types.USER_UPDATE_PROFILE_ERROR:
        return {
          ...state, updating: false, updated: false, errored: true, error: action.payload,
        }
      case: types.CLEAR_UPDATE_USER_PROFILE: 
        return {
            ...state, updating: false,updated: false, data: {}, error: null, errored: false
        }
      default:
        return state;
    }
  }