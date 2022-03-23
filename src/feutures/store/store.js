import { configureStore } from '@reduxjs/toolkit'
import dataClientSlice from '../dataClientSlice/dataClientSlice'
import dataAdminSlice from '../DataAdminSlice/dataAdminSlice'

export const store = configureStore({
    reducer: {
        dataClient: dataClientSlice,
        dataAdmin: dataAdminSlice
    }
})
