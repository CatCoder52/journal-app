import { types } from "../types/types";

export const setError = (err)=>({
    type: types.uiSetError,
    payload: err
});

export const removeError = ()=>({
    type: types.uiRemoveError
});

export const startLoading = ()=>{
    return {
        type: types.uiStartLoading,
        payload: {
            loading: true
        }
    }
}

export const finishLoading = ()=>{
    return {
        type: types.uiFinishLoading,
        payload: {
            loading: false
        }
    }
}