const getRelPath = path => __dirname + path

export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', 
      {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-structure',
      dll: false,
      routes: {
        exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /models\//, /components\//, /services\//]
      },
    }],
  ],
  disableCSSModules: true,
  alias: {
    components: getRelPath('/src/components'),
    config: getRelPath('/src/config'),
    images: getRelPath('/src/images'),
    pages: getRelPath('/src/pages'),
    utils: getRelPath('/src/utils'),
    services: getRelPath('/src/services'),
    layouts: getRelPath('/src/layouts')
  }
}
