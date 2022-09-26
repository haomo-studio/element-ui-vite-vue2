const testRoutes = [
  {
    path: '/HmElementTransfer',
    name: 'HmElementTransfer',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementTransfer.vue'),
  },
  {
    path: '/HmElementTag',
    name: 'HmElementTag',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementTag.vue'),
  },
  {
    path: '/TetHmElementTag',
    name: 'TestHmElementTag',
    component: () => import('/@/pages/test/TestHmElementTag.vue'),
  },
  {
    path: '/HmElementInputNumber',
    name: 'HmElementInputNumber',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementInputNumber.vue'),
  },
  {
    path: '/HmElementCascader',
    name: 'HmElementCascader',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCascader.vue'),
  },
  {
    path: '/HmElementSlider',
    name: 'HmElementSlider',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementSlider.vue'),
  },
  {
    path: '/HmElementDescriptions',
    name: 'HmElementDescriptions',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementDescriptions.vue'),
  },
  {
    path: '/TestHmElementDescriptions',
    name: 'TestHmElementDescriptions',
    component: () => import('/@/pages/test/TestHmElementDescriptions.vue'),
  },
  {
    path: '/HmElementEmpty',
    name: 'HmElementEmpty',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementEmpty.vue'),
  },
  {
    path: '/TestHmElementEmpty',
    name: 'TestHmElementEmpty',
    component: () => import('/@/pages/test/TestHmElementEmpty.vue'),
  },
  {
    path: '/HmElementDivider',
    name: 'HmElementDivider',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementDivider.vue'),
  },
  {
    path: '/HmElementBadge',
    name: 'HmElementBadge',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementBadge.vue'),
  },
  {
    path: '/TestHmElementBadge',
    name: 'TestHmElementBadge',
    component: () => import('/@/pages/test/TestHmElementBadge.vue'),
  },
  {
    path: '/HmElementProgress',
    name: 'HmElementProgress',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementProgress.vue'),
  },
  {
    path: '/TestHmElementProgress',
    name: 'TestHmElementProgress',
    component: () => import('/@/pages/test/TestHmElementProgress.vue'),
  },
  {
    path: '/HmElementRate',
    name: 'HmElementRate',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementRate.vue'),
  },
  {
    path: '/HmElementTooltip',
    name: 'HmElementTooltip',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementTooltip.vue'),
  },
  {
    path: '/TestHmElementooltip',
    name: 'TestHmElementooltip',
    component: () => import('/@/pages/test/TestHmElementooltip.vue'),
  },
  {
    path: '/TestHmElementSteps',
    name: 'TestHmElementSteps',
    component: () => import('/@/pages/test/TestHmElementSteps.vue'),
  },
  {
    path: '/HmElementSteps',
    name: 'HmElementSteps',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementSteps.vue'),
  },
  {
    path: '/TestHmElementTimeline',
    name: 'TestHmElementTimeline',
    component: () => import('/@/pages/test/TestHmElementTimeline.vue'),
  },
  {
    path: '/HmElementCard',
    name: 'HmElementCard',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCard.vue'),
  },
  {
    path: '/HmElementPopconfirm',
    name: 'HmElementPopconfirm',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementPopconfirm.vue'),
  },
  {
    path: '/HmElementPopover',
    name: 'HmElementPopover',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementPopover.vue'),
  },
  {
    path: '/HmElementCarousel',
    name: 'HmElementCarousel',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCarousel.vue'),
  },
  {
    path: '/TestHmElementCarousel',
    name: 'TestHmElementCarousel',
    component: () => import('/@/pages/test/TestHmElementCarousel.vue'),
  },
  {
    path: '/HmElementCollapse',
    name: 'HmElementCollapse',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCollapse.vue'),
  },
  {
    path: '/TestHmImportPage',
    name: 'TestHmImportPage',
    component: () => import('/@/pages/test/TestHmImportPage.vue'),
  },
  {
    path: '/TestHmBlock',
    name: 'TestHmBlock',
    component: () => import('/@/pages/test/TestHmBlock.vue'),
  },
  {
    path: '/HmBgCard',
    name: 'HmBgCard',
    component: () =>
      import('/@/components/built-in/element-vue2/layout/HmBgCard.vue'),
  },
  {
    path: '/HmElementTable',
    name: 'HmElementTable',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementTable.vue'),
  },
  {
    path: '/TestHmElementTable',
    name: 'TestHmElementTable',
    component: () => import('/@/pages/test/TestHmElementTable.vue'),
  },
  {
    path: '/TestHmElementFormily',
    name: 'TestHmElementFormily',
    component: () => import('/@/pages/test/TestHmElementFormily.vue'),
  },
  {
    path: '/HmEchartsLineSimple',
    name: 'HmEchartsLineSimple',
    component: () => import('/@/pages/test/HmEchartsLineSimple.vue'),
  },
  {
    path: '/HmEchartsAreaStack',
    name: 'HmEchartsAreaStack',
    component: () => import('/@/pages/test/HmEchartsAreaStack.vue'),
  },
  {
    path: '/HmEchartsBoxplot',
    name: 'HmEchartsBoxplot',
    component: () => import('/@/pages/test/HmEchartsBoxplot.vue'),
  },
  {
    path: '/HmEchartsBar3DHistogram',
    name: 'HmEchartsBar3DHistogram',
    component: () => import('/@/pages/test/HmEchartsBar3DHistogram.vue'),
  },
  {
    path: '/HmEchartsBarSimple',
    name: 'HmEchartsBarSimple',
    component: () => import('/@/pages/test/HmEchartsBarSimple.vue'),
  },
  {
    path: '/HmEchartsGauge',
    name: 'HmEchartsGauge',
    component: () => import('/@/pages/test/HmEchartsGauge.vue'),
  },
  {
    path: '/HmEchartsPieSimple',
    name: 'HmEchartsPieSimple',
    component: () => import('/@/pages/test/HmEchartsPieSimple.vue'),
  },
  {
    path: '/HmEchartsBarStack',
    name: 'HmEchartsBarStack',
    component: () => import('/@/pages/test/HmEchartsBarStack.vue'),
  },
  {
    path: '/HmEchartsBarYCategoryStack',
    name: 'HmEchartsBarYCategoryStack',
    component: () => import('/@/pages/test/HmEchartsBarYCategoryStack.vue'),
  },
  {
    path: '/HmEchartsLineStack',
    name: 'HmEchartsLineStack',
    component: () => import('/@/pages/test/HmEchartsLineStack.vue'),
  },
  {
    path: '/HmEchartsGaugeStage',
    name: 'HmEchartsGaugeStage',
    component: () => import('/@/pages/test/HmEchartsGaugeStage.vue'),
  },
  {
    path: '/HmEchartsPieDoughnut',
    name: 'HmEchartsPieDoughnut',
    component: () => import('/@/pages/test/HmEchartsPieDoughnut.vue'),
  },
  {
    path: '/HmEchartsGeoMap',
    name: 'HmEchartsGeoMap',
    component: () => import('/@/pages/test/HmEchartsGeoMap.vue'),
  },
  {
    path: '/TestHmElementButton',
    name: 'TestHmElementButton',
    component: () => import('/@/pages/test/TestHmElementButton.vue'),
  },
  {
    path: '/TestHmElementRadio',
    name: 'TestHmElementRadio',
    component: () => import('/@/pages/test/TestHmElementRadio.vue'),
  },
  {
    path: '/TestHmElementCheckbox',
    name: 'TestHmElementCheckbox',
    component: () => import('/@/pages/test/TestHmElementCheckbox.vue'),
  },
  {
    path: '/TestHmElementInput',
    name: 'TestHmElementInput',
    component: () => import('/@/pages/test/TestHmElementInput.vue'),
  },
  {
    path: '/TestHmElementText',
    name: 'TestHmElementText',
    component: () => import('/@/pages/test/TestHmElementText.vue'),
  },
  {
    path: '/testSelect',
    name: 'testSelect',
    component: () => import('/@/pages/test/testSelect.vue'),
  },
  {
    path: '/TestHmElementUpload',
    name: 'TestHmElementUpload',
    component: () => import('/@/pages/test/TestHmElementUpload.vue'),
  },
]
export default testRoutes

