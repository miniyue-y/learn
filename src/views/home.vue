<template>
    <div>
        <my-list></my-list>
    </div>
</template>
<script>
import myList from '../components/mylist.vue'
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['buyState'])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>