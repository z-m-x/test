/* 
http://www.form-create.com/v2/guide/demo.html#%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B 表单生成器
http://docs.form.xiaoyaoji.cn/guide.html#cdn
https://www.cnblogs.com/raind/p/10620454.html
    1：yarn add vuedraggable
    2：组件内引入
    1、简单用法

　　用draggable标签包住想要实现拖拽效果的范围，并且设置v-model的值与里边的循环数据一致即可

2、多个数组之间的拖拽

　　同样，将想拖拽内容用draggable标签包裹，并设置属性值group，一样的group代表为一个分组，可以彼此之间拖拽

　　主要用的三个事件，start、end，用@方式绑定

　　　　　　　　　　   :move用这个方式绑定，并且只有一个参数evt

　　　　　　　　　　　　　两边有两个主要的对象：draggedContext　　　　被拖拽元素的相关参数对象

　　　　　　　　　　　　　　　　　　　　　　　　　　　　index,element,futureIndex

　　　　　　　　　　　　　　　　　　　　　　　　relatedContext　　　　  被拖入区域的相关参数对象

　　　　　　　　　　　　　　　　　　　　　　　　　　　　index,element,list,components

更多的参数配置查看：https://blog.csdn.net/zjiang1994/article/details/79809687

tips:

　　问题：1）如果move方法报错，升一下draggable的版本，我的版本是2.21.0

　　　　　2）这种用move中的参数判断最终拖动位置的方法，在目标值为空的时候，会无法判断，可以添加一条假数据，拖动后再讲其删除

　　　　　3）还有一个很魔幻的问题，在我打开浏览器开发者模式时，拖动不生效，关闭后才生效。

　　　　　　  所以调试的时候，如果代码没问题但是拖动不生效，可以尝试将开发者模式关闭后再查看是否生效
 */
 <template>
  <vuedraggable class="wrapper" v-model="list">
    <transition-group>
      <div v-for="item in list" :key="item" class="item">
        <p>{{item}}</p>
      </div>
    </transition-group>
  </vuedraggable>
</template>

<script>
import vuedraggable from "vuedraggable";

export default {
  name: "HelloWorld",
  components: { vuedraggable },
  props: {},
  data() {
    return {
      list: [1, 2, 34, 4, 54, 5]
    };
  },
  updated() {
    console.log(this.list);
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>