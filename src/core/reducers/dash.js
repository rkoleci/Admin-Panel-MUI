import types from 'config/types'

export function insights(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_INSIGHTS_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_INSIGHTS_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_INSIGHTS_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
} 

export function dailySales(state = {
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.FETCH_DAILY_SALES_START:
        return { ...state, fetching: true, error: '', errored: false }
      case types.FETCH_DAILY_SALES_SUCCESS:
        return {
          ...state, fetching: false, fetched: true, data: action.payload,
        }
      case types.FETCH_DAILY_SALES_ERRORED:
        return {
          ...state, fetching: false, fetched: false, errored: true, error: action.payload,
        }
      default:
        return state;
    }
  } 

  export function emailSubs(state = {
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.FETCH_EMAIL_SUBS_START:
        return { ...state, fetching: true, error: '', errored: false }
      case types.FETCH_EMAIL_SUBS_SUCCESS:
        return {
          ...state, fetching: false, fetched: true, data: action.payload,
        }
      case types.FETCH_EMAIL_SUBS_ERRORED:
        return {
          ...state, fetching: false, fetched: false, errored: true, error: action.payload,
        }
      default:
        return state;
    }
  } 

  export function completedTasks(state = {
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.FETCH_COMPLETED_TASKS_START:
        return { ...state, fetching: true, error: '', errored: false }
      case types.FETCH_COMPLETED_TASKS_SUCCESS:
        return {
          ...state, fetching: false, fetched: true, data: action.payload,
        }
      case types.FETCH_COMPLETED_TASKS_ERRORED:
        return {
          ...state, fetching: false, fetched: false, errored: true, error: action.payload,
        }
      default:
        return state;
    }
  } 

  export function tasks(state = {
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.FETCH_TASKS_START:
        return { ...state, fetching: true, error: '', errored: false }
      case types.FETCH_TASKS_SUCCESS:
        return {
          ...state, fetching: false, fetched: true, data: action.payload,
        }
      case types.FETCH_TASKS_ERRORED:
        return {
          ...state, fetching: false, fetched: false, errored: true, error: action.payload,
        }
      default:
        return state;
    }
  } 

  export function employeeStats(state = {
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    errored: false,
  }, action) {
    switch (action.type) {
      case types.FETCH_EMPLOYEE_STATS_START:
        return { ...state, fetching: true, error: '', errored: false }
      case types.FETCH_EMPLOYEE_STATS_SUCCESS:
        return {
          ...state, fetching: false, fetched: true, data: action.payload,
        }
      case types.FETCH_EMPLOYEE_STATS_ERRORED:
        return {
          ...state, fetching: false, fetched: false, errored: true, error: action.payload,
        }
      default:
        return state;
    }
  } 