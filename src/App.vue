<template>
  <div id="app">
    <header>
      <p>这是购物车哦</p>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <router-link to="/">主页面</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  *{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  width:100%;
  height:100%;
}
#app{
  display: flex;
  flex-direction: column;
  header{
    // width:100%;
    height:44px;
    border:1px solid #ccc;
    background:orangered;
    p{
      color:#fff;
      line-height:44px;
      text-align: center;
    }
  }
  main{
    // width:100%;
    // height:573px;
    flex:1;
    overflow: scroll;
  }
  footer{
    // width:100%;
    height:50px;
    border:1px solid #ccc;
    a{
      line-height:50px;
      margin-left:55px;
      color:#000;
      font-weight: bold
    }
    a:nth-child(1):active{
      color:orangered;
    };
    a:nth-child(2):active{
      color:orangered;
    };
    a:nth-child(3):active{
      color:orangered;
    }
  }
}
</style>

