import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {useSelector, TypedUseSelectorHook} from "react-redux"

interface AppState {
    sidebarShow: boolean
    sidebarUnfoldable: boolean
    asideShow: boolean
    asideShowTab?: number
    theme: string
}

const initialState: AppState = {
    sidebarShow: true,
    sidebarUnfoldable: false,
    asideShow: false,
    asideShowTab: 1,
    theme: "default",
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Partial<AppState>>) => {
            return {...state, ...action.payload}
        },
    },
})

export const {set} = appSlice.actions

const store = configureStore({
    reducer: appSlice.reducer,
})

export default store

// Typy dla TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Typed hooks
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector