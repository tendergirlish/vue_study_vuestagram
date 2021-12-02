import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            name:'kwon',
            age:'20',
        }
    },
    mutations:{
        //state 값변경
        changename(state){
            state.name = 'tendergirl'
        },
        plusAge(state){
            state.age++
        }
    }
})

export default store;