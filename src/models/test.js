export default {
    state:'qaq',
    effects: {
        *exam({type,payload},{put,call}) {
           const addNum = payload.push(parseInt(Math.random()*10));
           yield put({
               type:'save',
               payload:addNum
           })
        }
    },
    reducers:{
        save(state,action){
            return {...state,value:action.payload}
        }
    }
}