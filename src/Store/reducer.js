import {ADD_CARD} from './type'
import {read_cookie, bake_cookie} from 'sfcookies'


const card = (state =[], action) => {
    let card = state
    // bake_cookie('card', [])

    state = read_cookie('card');
    if (action.type === ADD_CARD){
        console.log('testttt', state, action.payload)
        card = [...state, { ...action.payload }]
        bake_cookie('card', card)
        return card
        

    }
}

export default card




