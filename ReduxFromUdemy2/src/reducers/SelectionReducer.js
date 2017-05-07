import { Set } from 'immutable';

export default (state = Set(), action) => {
    switch(action.type){
        case 'select_library':
            return state.add(action.payload);
        case 'deselect_library':
            return state.remove(action.payload);
        default:
            return state;
    }
}