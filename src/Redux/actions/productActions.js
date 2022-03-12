import React from 'react'
import * as types from '../types'
import axios from 'axios'
import { API, } from '../../Utils/config'
import { PRODUCT_SEARCH, } from '../../Utils/apiRoutes'

export function getProducts(page) {
  try {
    return async dispatch => {
      dispatch({
        type: types.LOAD_PRODUCTS_PENDING,
        payload: true,
      })
      let url = `${API}/${PRODUCT_SEARCH}/`
      if (page) {
        url = `${url}?page=${page}`
      }
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data, }) => {
          dispatch(response(types.LOAD_PRODUCTS_SUCCESS, data))
        }, err => {
          dispatch(response(types.LOAD_PRODUCTS_ERROR, err))
        })
    }
  } catch (err) {
    dispatch(response(types.LOAD_PRODUCTS_ERROR, err))
  }
}

const response = (type, payload) => ({ type, payload, })
