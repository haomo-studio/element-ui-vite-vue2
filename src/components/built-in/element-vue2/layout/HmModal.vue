<template>
	<div class="hm-modal">
		<el-dialog
			visible="cVisible"
			:title="title"
			:width="cWidth"
      :fullscreen="fullscreen"
      :top="cTop"
      :center="center"
      :modal="modal"
      :modal-append-to-body="modalAppendToBody"
      :append-to-body="appendToBody"
      :lock-scroll="lockScroll"
      :close-on-click-modal="closeOnClickModal"
			:cancel-text="cancelText"
			:ok-text="okText"
			:show-close="showClose"
      :destroy-on-close="destroyOnClose"
			@ok="handleOk"
			@cancel="handleCancel"
			@close="afterClose"
		>
			<slot />
			<template #footer>
				<div class="dialog-footer">
					<el-button v-if="showCancelButton" @click="handleCancel">{{ cancelText }}</el-button>
					<el-button v-if="showOkButton" type="primary" @click="handleOk"
						>{{ okText }}</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: "HmModal",
	components: {},
	props: {
		/**
		 * 对话框标题
		 */
		title: {
			type: String,
			default: "对话框",
		},
		/**
		 * 是否可见
		 */
		visible: {
			type: Boolean,
			default: true,
		},
		/**
		 * 显示关闭按钮
		 */
		showClose: {
			type: Boolean,
			default: false,
		},
		/**
		 * 确认按钮文字
		 */
		okText: {
			type: String,
			default: "确定",
		},
		/**
		 * 显示确认按钮
		 */
		showOkButton: {
			type: Boolean,
			default: true,
		},
    /**
		 * 显示取消按钮
		 */
		showCancelButton: {
			type: Boolean,
			default: true,
		},
		/**
		 * 确认按钮类型
		 * @type Enum
		 * @default primary
		 * @options ["", "primary", "dashed", "danger", "link"]
		 */
		okType: {
			type: String,
		},
		/**
		 * 取消按钮文字
		 */
		cancelText: {
			type: String,
			default: "取消",
		},
		/**
		 * 显示取消按钮
		 */
		cancelButtonProps: {
			type: Boolean,
			default: true,
		},
    /**
     * 点击modal关闭
     */
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
		/**
		 * 宽度
		 */
		width: {
			type: String,
			default: "520px",
		},
		/**
		 * 内容高度
		 */
		height: {
			type: String,
			default: "320px",
		},
    /**
     * 顶部边距
     */
    top: {
      type: String,
      default: '15vh'
    },
    /**
     * 头部底部居中
     */
    center: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示遮罩层
     */
    modal: {
      type: Boolean,
      default: true,
    },
    /**
     * 遮罩插入body
     */
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    /**
     * 遮罩插入body
     */
    appendToBody: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止body滚动
     */
    lockScroll: {
      type: Boolean,
      default: true,
    },
    /**
     * 关闭销毁元素
     */
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否全屏
     */
    fullscreen: {
      type: Boolean,
      default: false,
    },
	},
	data() {
		return {
			cWidth: "520px",
      cTop: '15vh',
			cVisible: true,
		};
	},
	watch: {
		width(value) {
			this.cWidth = this.$getCssUnit(value);
		},
		visible(value) {
			this.cVisible = !!value;
		},
	},
	computed: {},
	mounted() {
		let self = this;
		this.cWidth = this.$getCssUnit(this.width);
		self.cVisible = !!self.visible;
		console.log(`self.cVisible: `, self.cVisible, self.visible);
	},
	methods: {
		handleOk(e) {
			this.cVisible = false;
			console.log(`ok: `, e);
			this.$emit("ok", e);
		},
		handleCancel(e) {
			this.cVisible = false;
			console.log(`cancel: `, e);
			this.$emit("cancel", e);
		},
		afterClose(e) {
			console.log(`afterClose: `, e);
			this.$emit("after-close", e);
		},
	},
};
</script>

<style scoped>
.hm-modal {
	min-width: 100px;
	width: 100%;
	min-height: 100px;
	height: 1px;
	height: 100%;
}

.modal-slot {
	min-height: 200px;
}
</style>
