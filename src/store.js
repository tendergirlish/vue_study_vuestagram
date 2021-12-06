import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state(){
        return {
            name:'kwon',
            age:20,
            likes: 20,
            likesOn:false,
            more :{},
        }
    },
    mutations:{
        //state 값변경
        changename(state){
            state.name = 'tendergirl'
        },
        plusAge(state, payload ){
            state.age += payload
        },
        likescore(state){
            if( state.likesOn == false ){
                state.likes++;
                state.likesOn = true;
            }else{
                state.likes--;
                state.likesOn = false;
            }
        },
        setMore(state, data) {
            state.more = data
        }
    },
    actions:{ //ajax요청 또는 오래 걸리는 작업 작성 : actions
        //데이터 가져오기 = get
        getData( context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
                .then((a) =>{
                    console.log( a.data );
                   context.commit('setMore', a.data);
            })
        }

    }
})

export default store;