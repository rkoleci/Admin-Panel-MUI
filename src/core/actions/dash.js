import axios from 'axios'

import { baseUrl } from 'variables/addresses'
import types from 'variables/types'

export const fetchInsights = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_INSIGHTS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/insights`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_INSIGHTS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_INSIGHTS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchDailySales = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_DAILY_SALES_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/daily`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_DAILY_SALES_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_DAILY_SALES_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchEmailSubs = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_EMAIL_SUBS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/email_subs`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_EMAIL_SUBS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_EMAIL_SUBS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchCompletedTasks = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_COMPLETED_TASKS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/completed_tasks`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_COMPLETED_TASKS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_COMPLETED_TASKS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchTasks = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_TASKS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/tasks`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_TASKS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_TASKS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}


export const fetchEmployeeStats = (params) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_EMPLOYEE_STATS_START
        });
        axios({
            method: 'GET',
            url: `${baseUrl}/dash/emp`,
        }).then((response) => {
            dispatch({
                type: types.FETCH_EMPLOYEE_STATS_SUCCESS,
                payload: {
                    data: response.data
                },
            });
        }).catch((error) => {
            dispatch({
                type: types.FETCH_EMPLOYEE_STATS_ERRORED,
                payload: {
                    error,
                },
            })
        });
    }
}