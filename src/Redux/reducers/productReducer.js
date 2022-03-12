import { TabActions } from '@react-navigation/core'
import React from 'react'
import * as types from '../types'

const initState = {
  data: {},
  error: false,
  loading: true,
}

export default function productsReducer (state = initState, action) {
  switch (action.type) {
    
    case types.LOAD_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      }

    case types.LOAD_PRODUCTS_SUCCESS:
      if (
        0 !== Object.keys(state.data).length &&
        JSON.stringify(state.data) !== JSON.stringify(action.payload)
      ) {
        const newData = Object.assign({}, state.data)
        newData.data = [ ...newData.data, action.payload.data, ]
        return {
          ...state,
          data: newData,
          loading: false,
        }  
      }
      return {
        ...state,
        data: action.payload,
        loading: false,
      }

    case types.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
