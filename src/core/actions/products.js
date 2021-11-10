import axios from 'axios'

import { baseUrl } from 'variables/addresses'
import types from 'variables/types'

export const fetchShippedProducts = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_SHIPPED_PRODUCTS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/products`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_SHIPPED_PRODUCTS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_SHIPPED_PRODUCTS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchStockProducts = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_STOCK_PRODUCTS_START
        });
        axios({
            method: 'GET',
            url:`${baseUrl}/products`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_STOCK_PRODUCTS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_STOCK_PRODUCTS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchSalesProducts = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_SALES_PRODUCTS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/products`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_SALES_PRODUCTS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_SALES_PRODUCTS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}