import {ADD_CARD, REMOVE_CARD} from './type'

export const add_card = (id,firstName,lastName,gender, age,email) =>{
    const action ={
        type: ADD_CARD,
        payload: {
            id,firstName,lastName,gender, age,email
        }
    }
    console.log('add', action)
   return action
}

export const remove_card = (id) =>{
    const action ={
        type: REMOVE_CARD,
        payload:{
            id
        }
        
    }
    console.log('remove', action)
   return action
}


