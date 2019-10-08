export const initialState = [{
       item: 'Learn about reducers',
       id: 1,
       completed: false,
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                { item: action.payload,
                  id: Date.now(),
                  completed: false
            }];
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {...item, completed: !item.completed}
                }
                return item
                })
                
            case "REMOVE_COMPLETED":
                return state.filter(item => !item.completed)
        default:
            return state;
    }
};