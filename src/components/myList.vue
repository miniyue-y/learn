<template>
    <div>
        <dl v-for="(item,index) in list" :key="index">
            <dt>
                <img :src="item.src" alt=""  @click="tolist(index,item)">
            </dt>
            <dd>
                <h4>产品：{{item.name}}</h4>
                <p>单价：{{item.price}}</p>
                <button @click="addList(item)">购买</button>
            </dd>
        </dl>
    </div>
</template> 
<script>
import {mapMutations} from 'vuex'

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{
        tolist(ind,item){
            this.$router.push(`/detail/${ind}`)
        },
        ...mapMutations(['addList'])
    },
    created(){
        this.$http.get('/api/list').then((res)=>{
            this.list = res.data.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    flex-wrap: wrap;
}
dt{
    width: 100%;
    height: 120px;

}
dt img{
    width: 130px;
    height: 100px;
}
button{
    width: 120px;
    height: 35px;
    margin-top:5px;
    margin-bottom:5px;
    background:orangered;
    border:1px solid #ccc;
    color:#fff;
}
</style>