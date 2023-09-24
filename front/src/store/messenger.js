import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const messenger = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        getUsers(state, { payload: users }) {
            state.users = users
        }
    }
})

export const { getUsers } = messenger.actions

export default messenger.reducer