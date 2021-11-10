import types from 'config/types'

export function shippedProducts(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_SHIPPED_PRODUCTS_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_SHIPPED_PRODUCTS_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_SHIPPED_PRODUCTS_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
} 

export function stockProducts(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_STOCK_PRODUCTS_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_STOCK_PRODUCTS_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_STOCK_PRODUCTS_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function salesProducts(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_SALES_PRODUCTS_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_SALES_PRODUCTS_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_SALES_PRODUCTS_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}