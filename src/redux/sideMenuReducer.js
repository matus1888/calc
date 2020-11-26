const MENU_CLICKED='clickMenuButton';

let initialState= {
    activeMenu: false
}
let sideMenuReducer = (state=initialState, action) =>{
        switch (action.type) {
        case MENU_CLICKED:{
            return {
                ...state, activeMenu: !state.activeMenu
            }
    }
        default :  return state;
    }
}

export const actCrMenuActive=()=>({type: MENU_CLICKED})


export default sideMenuReducer;