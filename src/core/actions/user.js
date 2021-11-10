import axios from 'axios'

import { baseUrl } from 'variables/addresses'
import types from 'variables/types'

export const fetchUserProfile = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_FETCH_PROFILE_START
    });
    axios({
      method: 'GET',
      url: `${baseUrl}/user`,
    }).then((response) => { 
      dispatch({
        type: types.USER_FETCH_PROFILE_SUCCESS,
        payload: {
          data: response.data
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.USER_FETCH_PROFILE_ERROR,
        payload: {
          error,
        },
      })
    });
  }
}

export const updateUserProfile = (params) => {
    return (dispatch) => {
      dispatch({
        type: types.USER_UPDATE_PROFILE_START
      });
      axios({
        method: 'PUT',
        url:  `${baseUrl}/user`,
        data: params
      }).then((response) => { 
        dispatch({
          type: types.USER_UPDATE_PROFILE_SUCCESS,
          payload: {
            data: response.data
          },
        });
      }).catch((error) => {
        dispatch({
          type: types.USER_UPDATE_PROFILE_ERROR,
          payload: {
            error,
          },
        })
      });
    }
  }

  export const clearUpdateUserProfile = () => {
    return (dispatch) => {
      dispatch({
        type: types.CLEAR_UPDATE_USER_PROFILE,
      })
    }
  }