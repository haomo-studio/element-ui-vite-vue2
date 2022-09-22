<template>
  <el-upload
    :action="action"
    :multiple="multiple"
    :accept="accept"
    :file-list="fileList"
    :name="name"
    :headers="headers"
    :show-file-list="showFileList"
    :drag="drag"
    :list-type="listType"
    :disabled="disabled"
    :limit="limit"
    :on-preview="onPreview"
    :on-remove="onRemove"
    :on-success="onSuccess"
    :on-error="onError"
    :on-progress="onProgress"
    :on-change="onChange"
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :on-exceed="onExceed"
    :clearFiles="onClearFiles"
    :abort="onAbort"
    :submit="onSubmit"
  >
    <el-button size="small" type="primary">{{ text }}</el-button>
  </el-upload>
</template>

<script>
export default {
  name: "HmElementUpload",
  props: {
    /**
     * 标题
     */
    text: {
      type: String,
      default: "点击上传",
    },
    /**
     * 上传文件类型
     */
    accept: {
      type: String,
    },
    /**
     * 上传地址
     */
    action: {
      type: String,
    },
    /**
     * 支持多文件
     */
    multiple: {
      type: Boolean,
    },
    /**
     * 已上传文件
     */
    fileList: {
      type: Array,
    },
    /**
     * 文件参数名
     */
    name: {
      type: String,
      default: "file",
    },
    /**
     * 请求头
     */
    headers: {
      type: Object,
    },
    /**
     * 显示文件列表
     */
    showFileList: {
      type: Boolean,
      default: true,
    },
    /**
     * 启用拖拽上传
     */
    drag: {
      type: Boolean,
      default: false,
    },
    /**
     * 文件列表类型
     *  @type Enum
     * @options ["text", "picture", "picture-card"]
     */
    listType: {
      type: String,
      default: "text",
    },
    /**
     * 立即上传
     */
     autoUpload: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否禁用
     */
     disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 最大上传个数
     */
     limit: {
      type: Number,
    },
  },
  methods: {
    //点击文件列表中已上传的文件时的钩子
    onPreview: function (file) {
      this.$emit("onPreview", file);
    },
    //文件列表移除文件时的钩子
    onRemove: function (file, fileList) {
      this.$emit("onRemove", file, fileList);
    },
    //文件上传成功时的钩子
    onSuccess: function (response, file, fileList) {
      this.$emit("onSuccess", response, file, fileList);
    },
    //文件上传失败时的钩子
    onError: function (err, file, fileList) {
      this.$emit("onError", err, file, fileList);
    },
    //文件上传时的钩子
    onProgress: function (event, file, fileList) {
      this.$emit("onProgress", event, file, fileList);
    },
    //文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    onChange: function (file, fileList) {
      this.$emit("onChange", file, fileList);
    },
    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUpload: function (file) {
      this.$emit("beforeUpload", file);
    },
    beforeRemove: function (file, fileList) {
      this.$emit("beforeRemove", file, fileList);
    },
    //文件超出个数限制时的钩子
    onExceed: function (file, fileList) {
      this.$emit("onExceed", files, fileList);
    },
    onClearFiles: function (e) {
      this.$emit("clearFiles", e);
    },
    onAbort: function (file) {
      this.$emit("abort", file);
    },
    onSubmit: function (e) {
      this.$emit("submit", e);
    },
  },
};
</script>

<style scoped></style>
