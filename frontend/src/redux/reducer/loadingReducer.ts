import { SET_AUTH_LOADING, SET_CREATE_POST_LOADING } from "~/constants/actionType";
import { TLoadingActionType } from "../action/loadingActions";

const initState = {
    isLoadingAuth: false,
    isLoadingCreatePost: false
}

const loadingReducer = (state = initState, action: TLoadingActionType) => {
    switch (action.type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                isLoadingAuth: action.payload
            }
        case SET_CREATE_POST_LOADING:
            return {
                ...state,
                isLoadingCreatePost: action.payload
            }
        default:
            return state;
    }
};

export default loadingReducer;
