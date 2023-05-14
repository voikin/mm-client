import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { bindActionCreators } from '@reduxjs/toolkit'
import { authActions } from './auth.slice'


export const useActions = () => {
 const dispatch = useDispatch()

 return useMemo(() => bindActionCreators(authActions, dispatch), [dispatch])
}