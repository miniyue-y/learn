<template>
    <div>
        我是购物车
        <div class="tip" v-for="(item,index) in buyList" :key='index'>
            <span @click="check(item)" :class="{'bg':item.flag}"></span>
            <dl>
                <dt>
                    <img :src="item.src" alt="">
                </dt>
                <dd>
                    <h4>{{item.name}}</h4>
                    <p>价格：{{item.price}}</p>
                    <!-- 点击-  通过mapGetters调用getCount函数 -->
                    <p><span @click="addCount({num:item.num>1?item.num-1:item.num=1,index:index})">-</span>
                    <span>{{item.num}}</span>
                    <!-- 点击+  通过mapGetters调用getCount函数 -->

                    <span @click="addCount({num:item.num+1,index:index})">+</span></p>
                </dd>
            </dl>
        </div>
        <div class="allCount">
            <span :class="{'bg':allFlag}" @click="allCheck()"></span>
            <b>全选</b>
            <b>总价：{{getCount}}</b>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            allFlag:false
        }
    },
    computed:{
        ...mapState(['buyList']),
        ...mapGetters(['getCount'])
    },
    methods:{
        ...mapMutations(['addCount','allChange']),
        allCheck(){//全选调用该函数
            this.allFlag=!this.allFlag;
            this.allChange(this.allFlag)
        }
    },

    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
div>span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 10px;
}
.tip{
    width: 100%;
    display: flex;
    align-items: center;
}
dl{
    width: 80%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
}
dt{
    width: 30%;
    height: 80px;
}
img{
    width:80%;
    height: 80px;
    border: 1px solid #ccc;
    
}
dd{
    width: 70%;
}
dd span{
    padding: 1px 6px;
    border: 1px solid #ccc;
}
.bg{
    background: orange;
}
</style>