// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }

module.exports = {
  presets: ["@vue/app"],
  plugins: [
    //vue中使用es6的链判断符
    //npm install --save-dev @babel/plugin-proposal-optional-chaining
    "@babel/plugin-proposal-optional-chaining",
    // element官方教程
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
	,[
	  'import',
	  {
		libraryName: 'vxe-table',
		style: true // 是否按需加载样式
	  }
	]
  ]
};

// module.exports = {
//   presets: ["@vue/app"],
//   plugins: [
// 	[
// 	  'import',
// 	  {
// 		libraryName: 'vxe-table',
// 		style: true // 是否按需加载样式
// 	  }
// 	]
//   ]
// };

