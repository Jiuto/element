## PicturePreview 图片预览

### 基础用法

:::demo 传入图片`url`，使用`width`和`height`控制预览窗口宽高，默认为`width: 100%`和`height: 400px`。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" height="300px">
</el-picture-preview>
```
:::

### 按钮配置

:::demo 使用`layout`可以配置功能按钮，默认配置为`enlarge, lessen, reset, left, right`，对应功能分别为放大、缩小、还原、左旋转、右旋转。`step`配置缩放倍数，默认值为'20'，即缩放倍数为20%。注：缩小后的图片不得小于原图片的20%。
```html
<div style="margin: 10px">
    <p>这是一个完整用例</p>
    <el-picture-preview url="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" height="200px">
    </el-picture-preview>
</div>
<div style="margin: 10px">
    <p>只具备左右旋转功能的用例</p>
    <el-picture-preview url="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" height="200px" backgroundColor="#eee" layout="left, right">
    </el-picture-preview>
</div>
<div style="margin: 10px">
    <p>功能按钮的顺序可自行调整</p>
    <el-picture-preview url="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" height="200px" layout="reset, enlarge, lessen" step="50">
    </el-picture-preview>
</div>
```
:::

### 滚轮缩放

:::demo 使用`mousewheel`配置是否开启滚轮缩放功能，默认开启，设为`false`关闭。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" :mousewheel="false"></el-picture-preview>
```
:::

### 按钮位置

:::demo 使用`buttonAlign`配置按钮位置，默认`center`，可输入`left`、`right`。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" buttonAlign="left">
</el-picture-preview>
```
:::

### 固定按钮

:::demo 使用`fixed`固定按钮，默认`false`。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg" :fixed="true">
</el-picture-preview>
```
:::

### 按钮颜色

:::demo 使用`buttonColor`配置按钮颜色。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg" buttonColor="#2196f3">
</el-picture-preview>
```
:::

### 背景颜色

:::demo 使用`backgroundColor`配置背景颜色。
```html
<el-picture-preview url="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" backgroundColor="#eee">
</el-picture-preview>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  url              | 图片地址 | String | — | — |
|  height              | 高度 | String | — | 400px |
|  width              | 宽度 | String | — | 100% |
|  buttonAlign              | 按钮位置 | String | `left`, `center`, `right` | center |
|  fixed              | 固定按钮 | Boolean | — | false |
|  buttonColor              | 按钮颜色 | String | — | #606266 |
|  backgroundColor              | 背景颜色 | String | — | #fff |
|  layout              | 功能按钮布局，按钮名用逗号分隔 | String | — | enlarge, lessen, reset, left, right |
|  step              | 缩放倍数 | String | — | 20 |
|  mousewheel              | 滚轮缩放 | Boolean | — | true |
