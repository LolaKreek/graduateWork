import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    user: object,
    token: string,
    expirationDate:string
}

const initialState: AuthState = {
    user: {
        name: '',
        surname: '',
        role: ''
    },
    token: '',
    expirationDate: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action: PayloadAction<{user: {}; token: string; expirationDate: string}>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.expirationDate = action.payload.expirationDate;
        },
        authLogout: (state) => {
            state.user = {},
            state.token = '',
            state.expirationDate = ''
        }
    }
})

export const {authLogin, authLogout} = authSlice.actions
export default authSlice.reducer