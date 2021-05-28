const uniqueId = () => '_' + Math.random().toString(36).substr(2, 9);


const initialState = [
    {
        text: "Learn Redux",
        id: uniqueId(),
        checked: false,
    },
    {
        text: "Learn Context",
        id: uniqueId(),
        checked: false,
    },
    {
        text: "Learn Hooks",
        id: uniqueId(),
        checked: false,
    }
]

export default function reducer (state = initialState, action) {
    switch( action.type ){
        case "ADD_TODO":
            return [
                 {
                    text: action.payload,
                    id:uniqueId(),
                    checked:false,
                  } ,
                ...state,
                              
            ];
        case "TOGGLE_TODO":
            return state.map(item => item.id === action.payload? 
                            {...item, checked: !item.checked}: item );
        case "REMOVE_TODO":
            return state.filter(item => item.id !== action.payload );
         
        default:
            return state;
    }

}