<template>
  <div class="hello">
    <h1>我的第一个全局组件</h1>
    <ul>
      <li> 内容：{{ name }}</li>
      <li>{{ name.split('').reverse().join('') }}</li>
      <li>{{ result > 0 ? 'YES' : 'NO' }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      'name': '组件名称',
      result: 100,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<!--这是一个全局组件-->