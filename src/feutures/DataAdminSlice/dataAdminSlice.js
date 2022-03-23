import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    dataAdmin: []
}
const dataAdminSlice = createSlice({
    name: "dataAdmin",
    initialState,
    reducers: {
        updateDataAdmin: (state, action) => {
            state.dataAdmin.push(action.payload)
            
        },
        getDataAdmin: (state) => {
            return state.dataAdmin
        }
    }
})

export const  {updateDataAdmin, getDataAdmin} =  dataAdminSlice.actions
export default dataAdminSlice.reducer