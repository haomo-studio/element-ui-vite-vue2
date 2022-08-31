<template>
	<div class="hm-modal">
		<el-dialog
			v-model="cVisible"
			:title="title"
			:width="cWidth"
			:cancel-text="cancelText"
			:ok-text="okText"
			:show-close="showClose"
			:bodyStyle="{
				height: cHeight,
				padding: '24px',
			}"
			:ok-button-props="{
				style: okButtonBoole ? '' : { display: 'none' },
			}"
			:cancel-button-props="{
				style: cancelButtonProps ? '' : { display: 'none' },
			}"
			:footer="okButtonBoole || cancelButtonProps ? undefined : null"
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
	},
	data() {
		return {
			cWidth: "520px",
			cHeight: "320px",
			cVisible: false,
		};
	},
	watch: {
		width(value) {
			this.cWidth = this.getCssUnit(value);
		},
		height(value) {
			this.cHeight = this.getCssUnit(value);
		},
		visible(value) {
			this.cVisible = !!value;
		},
	},
	computed: {},
	mounted() {
		let self = this;
		this.cWidth = this.getCssUnit(this.width);
		this.cHeight = this.getCssUnit(this.height);
		self.cVisible = !!self.visible;
		console.log(`self.cVisible: `, self.cVisible, self.visible);
	},
	methods: {
		getCssUnit(value) {
			if (isNaN(Number(value))) {
				return value;
			}
			return `${value}px`;
		},
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
