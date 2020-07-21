## GuidePage 引导页

### 基础用法

:::demo 通过content字段传入引导内容
```html
<template>
    <el-button type="text" @click="open">点击打开引导</el-button>
    <el-guide-page 
        :content="[
            {
                text: '卡片式引导说明，在主页弹出本次更新说明',
                url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
            },
            {
                text: '点下一步直到关闭按钮点亮',
                url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                color: '#409EFF',
                fontSize: '12px'
            },
            {
                template: `<ul style='list-style-type: none;color: grey;margin: 0;padding: 0;'>
                    <li>开箱即用，关联性低</li>
                    <li>可快速移出版本的引导功能</li>
                    <li>调用方式简单、统一、代码侵入性低</li>
                    <li>弹窗大小自己设置，图片占一半</li>
                </ul>`,
                url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            },
            {
                template: `
                  <div style='font-size: 12px; color: #ec0808;'>这么low的东西就很没技术含量了</div>
                  <div style='font-size: 13px; color: #f7802b;'>关于兼容问题,那就更敷衍了</div>
                  <div style='font-size: 14px; color: #34a94d;'>element-ui兼容啥我们就兼容啥</div>
                  <div style='font-size: 15px; color: #3482f7;'>现场教学花里胡哨不要搞</div>
                `,
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            }
        ]" 
        :visible="visible"
        @close="close"
        >
    </el-guide-page>
</template>

<script>
  export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      }
    }
  }
</script>

```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  height              | 高度 | String | — | 300px |
|  width              | 宽度 | String | — | 400px |
|  visible              | 控制显示 | Boolean | — | false |
|  content              | 引导内容 | Array | — |  |

### Content
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  text              | 文字内容 | String | — |  |
|  url              | 图片链接 | String | — |  |
|  template              | 可通过v-html解析的字符串 | String | — |  |
