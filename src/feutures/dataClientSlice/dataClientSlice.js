import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    dataClient: []
}
const dataClientSlice = createSlice({
    name: "dataClient",
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.dataClient =action.payload.tasks
        },
        getData: (state) => {
            console.log('enviando datos')

            return state.dataClient
        },
        limpiarData: (state, action) => {
            state.dataClient = []
        },
    }
})

export const  {updateData,limpiarData, getData} =  dataClientSlice.actions
export default dataClientSlice.reducer