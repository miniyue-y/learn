import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        buyList:[]                  //购物车的数组
    },
    getters: {
        getList(state, getters) {
            return state.buyList.reduce((prev, cur) => prev + cur.num, 0)
        },
        getCount(state, getters) {              //计算总价
            return state.buyList.reduce((prev, cur) => {
                let num = cur.flag ? cur.num * cur.price : 0;
                return prev + num;
            }, 0)
        }
    },
    mutations: {
        addList(state, obj) {               //点击购买  添加购物车
            let ind = state.buyList.findIndex(item => item.id == obj.id) 

            if (ind == -1) { 
                obj.num = 1;
                obj.flag = false; 
                state.buyList.push(obj);
            } else { 
                state.buyList[ind].num++;
            }
            console.log(state.buyList)
        },
        addCount(state, { num, index }) {               //点击+ - 触发addCount函数
            state.buyList[index].num = num;
        },
        allChange(state, flag) {                    //全选
            state.buyList.forEach(item => item.flag = flag); 
            state.buyList = state.buyList.concat([]); 
        }

    },
    action:{

    }
})