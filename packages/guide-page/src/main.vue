<template>
  <div class="el-guide-page">
    <div class="el-guide-page__warp" v-if="show">
      <div class="el-guide-page__content" :style="{width: width+'px', height: height+'px'}">
        <div class="el-guide-page__img" :style="{width: width+'px', height: parseInt(height) / 2 + 'px'}">
          <img :src="content[index] ? content[index].url : 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'">
        </div>
        <div class="el-guide-page__text">
          <div v-if="content[index] && content[index].template" v-html="content[index].template">
          </div>
          <div v-else :style="{fontSize: content[index] && content[index].fontSize || '14px', color: content[index] && content[index].color || '#3a3838'}">
            {{content[index] ? content[index].text : '请设置您的引导文字'}}
          </div>
        </div>
        <div class="el-guide-page__footer">
          <el-button type="text" :disabled="index !== content.length - 1" @click="close">close</el-button>
          <el-button type="text" @click="next">next</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElGuidePage',
  props: {
    height: {
      type: String,
      default: '300'
    },
    width: {
      type: String,
      default: '400'
    },
    content: {
      type: Array,
      default: []
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.show = this.visible;
  },
  data() {
    return {
      show: true,
      index: 0
    };
  },
  methods: {
    next() {
      if (this.index < this.content.length - 1) {
        this.index++;
      }
    },
    close() {
      this.show = false;
      this.index = 0;
      this.$emit('close');
    }
  },
  watch: {
    visible(val) {
      this.show = val;
    }
  }
};
</script>
