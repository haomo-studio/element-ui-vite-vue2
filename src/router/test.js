const testRoutes = [
  {
    path: "/HmElementDivider",
    name: "HmElementDivider",
    component: () =>
      import("/@/components/built-in/element-vue2/HmElementDivider.vue")
  },
  {
    path: "/HmElementTimeline",
    name: "HmElementTimeline",
    component: () =>
      import("/@/components/built-in/element-vue2/HmElementTimeline.vue")
  },
  {
    path: "/TestHmElementTimeline",
    name: "TestHmElementTimeline",
    component: () =>
      import("/@/pages/test/TestHmElementTimeline.vue"),
  },
  {
    path: "/HmElementCard",
    name: "HmElementCard",
    component: () =>
      import("/@/components/built-in/element-vue2/HmElementCard.vue")
  },
  {
    path: "/HmElementPopconfirm",
    name: "HmElementPopconfirm",
    component: () =>
      import("/@/components/built-in/element-vue2/HmElementPopconfirm.vue")
  },
  {
    path: "/HmElementPopover",
    name: "HmElementPopover",
    component: () =>
      import("/@/components/built-in/element-vue2/HmElementPopover.vue")
  },
  {
    path: '/HmElementCarousel',
    name: 'HmElementCarousel',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCarousel.vue')
  },
  {
    path: "/TestHmElementCarousel",
    name: "TestHmElementCarousel",
    component: () =>
      import("/@/pages/test/TestHmElementCarousel.vue"),
  },
  {
    path: '/HmElementCollapse',
    name: 'HmElementCollapse',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementCollapse.vue')
  },
  {
    path: "/TestHmBlock",
    name: "TestHmBlock",
    component: () =>
      import("/@/pages/test/TestHmBlock.vue"),
  },
  {
    path: "/HmBgCard",
    name: "HmBgCard",
    component: () =>
      import("/@/components/built-in/element-vue2/layout/HmBgCard.vue"),
  },
  {
    path: '/HmElementTable',
    name: 'HmElementTable',
    component: () =>
      import('/@/components/built-in/element-vue2/HmElementTable.vue')
  },
  {
    path: '/TestHmElementTable',
    name: 'TestHmElementTable',
    component: () => import('/@/pages/test/TestHmElementTable.vue')
  },
  {
    path: '/TestHmElementFormily',
    name: 'TestHmElementFormily',
    component: () => import('/@/pages/test/TestHmElementFormily.vue')
  },
  {
    path: "/HmEchartsLineSimple",
    name: "HmEchartsLineSimple",
    component: () =>
      import("/@/pages/test/HmEchartsLineSimple.vue"),
  },
  {
    path: "/HmEchartsAreaStack",
    name: "HmEchartsAreaStack",
    component: () =>
      import("/@/pages/test/HmEchartsAreaStack.vue"),
  },
  {
    path: "/HmEchartsBoxplot",
    name: "HmEchartsBoxplot",
    component: () =>
      import("/@/pages/test/HmEchartsBoxplot.vue"),
  },
  {
    path: "/HmEchartsBar3DHistogram",
    name: "HmEchartsBar3DHistogram",
    component: () =>
      import("/@/pages/test/HmEchartsBar3DHistogram.vue"),
  },
  {
    path: "/HmEchartsBarSimple",
    name: "HmEchartsBarSimple",
    component: () =>
      import("/@/pages/test/HmEchartsBarSimple.vue"),
  },
  {
    path: "/HmEchartsGauge",
    name: "HmEchartsGauge",
    component: () =>
      import("/@/pages/test/HmEchartsGauge.vue"),
  },
  {
    path: "/HmEchartsPieSimple",
    name: "HmEchartsPieSimple",
    component: () =>
      import("/@/pages/test/HmEchartsPieSimple.vue"),
  },
  {
    path: "/HmEchartsBarStack",
    name: "HmEchartsBarStack",
    component: () =>
      import("/@/pages/test/HmEchartsBarStack.vue"),
  },
  {
    path: "/HmEchartsBarYCategoryStack",
    name: "HmEchartsBarYCategoryStack",
    component: () =>
      import("/@/pages/test/HmEchartsBarYCategoryStack.vue"),
  },
  {
    path: "/HmEchartsLineStack",
    name: "HmEchartsLineStack",
    component: () =>
      import("/@/pages/test/HmEchartsLineStack.vue"),
  },
  {
    path: "/HmEchartsGaugeStage",
    name: "HmEchartsGaugeStage",
    component: () =>
      import("/@/pages/test/HmEchartsGaugeStage.vue"),
  },
  {
    path: "/HmEchartsPieDoughnut",
    name: "HmEchartsPieDoughnut",
    component: () =>
      import("/@/pages/test/HmEchartsPieDoughnut.vue"),
  },
  {
    path: "/HmEchartsGeoMap",
    name: "HmEchartsGeoMap",
    component: () =>
      import("/@/pages/test/HmEchartsGeoMap.vue"),
  },
  {
    path: "/TestHmElementementButton",
    name: "TestHmElementementButton",
    component: () =>
      import("/@/pages/test/TestHmElementementButton.vue"),
  },
  {
    path: "/TestHmElementRadio",
    name: "TestHmElementRadio",
    component: () =>
      import("/@/pages/test/TestHmElementRadio.vue"),
  },
  {
    path: "/TestHmElementCheckbox",
    name: "TestHmElementCheckbox",
    component: () =>
      import("/@/pages/test/TestHmElementCheckbox.vue"),
  },
  {
    path: "/TestHmElementInput",
    name: "TestHmElementInput",
    component: () =>
      import("/@/pages/test/TestHmElementInput.vue"),
  }
]
export default testRoutes
