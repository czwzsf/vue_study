<template>
  <div class="hello">
    <p>{{ price }}</p>
    <p>{{ price|priceFormat }}</p>
    <p>{{ price|priceFormat2 }}</p>
  </div>

</template>


<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      price: 35,
    }
  },
  methods: {},
  filters: {
    /**
     * 用来格式化价格显示-过滤器
     * @param price
     * @returns {string|*}
     */
    priceFormat: function (price) {
      if (price === undefined || price === null || isNaN(price)) {
        return price
      }
      return '$' + (price).toFixed(2)
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

  li {
    display: inline-block;
    margin: 0 10px;
  }
}

.text-danger {
  color: #f00;
}

.panel {
  background-color: aquamarine;
  padding: 50px;

  p {
    background-color: #fff;
    padding: 20px;
  }
}
</style>
