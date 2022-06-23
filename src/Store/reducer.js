import {ADD_CARD,REMOVE_CARD} from './type'
import {read_cookie, bake_cookie} from 'sfcookies'


const card = (state =[], action) => {
    let card = state
    bake_cookie('card', [])

    state = read_cookie('card');
    if (action.type === ADD_CARD){
        console.log('testttt', state, action.payload)
        if(state.length === 0){
            card = [...state, { ...action.payload }]
            bake_cookie('card', card)
            return card

        }else{
            for (const element of state) {
                if(element.id === action.payload.id){
                    alert('card is already added to cart')
                }
                else{
                    card = [...state, { ...action.payload }]
                    bake_cookie('card', card)
                     console.log('from reducer', card)
    
    
                
                }
                return card

            }
        }    
        

    }else if(action.type === REMOVE_CARD){
        card = state.filter(selected => selected.id !== action.payload.id)
        bake_cookie('card', card)
        return card
    }else{
        return state
    }
}

export default card




