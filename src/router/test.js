const testRoutes = [
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
]
export default testRoutes
