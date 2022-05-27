<!--
 * @Author: yz
 * @Date: 2022-05-23 15:11:02
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\5-file\3-more.vue
 * 
-->
<template>
  <page>
    <!---:file-list="uploadJH.fileList"  这个根本不会获取用户选择的文件-->
    <el-upload class="i-upload" multiple :headers="uploadHeaders" :auto-upload="false" :on-change="handleFileChange"
      action="">
      <el-button size="mini" type="primary">点击选取文件准备上传台账</el-button>
    </el-upload>

    <el-button size="mini" type="primary" @@click="upJHFile">点击上传台账</el-button>
  </page>
</template>

<script>
/*
  elementui el-upload一次请求上传多个文件
  https://blog.csdn.net/weixin_52103939/article/details/122194542
  */
export default {
  data() {
    return {
      uploadJH: {
        fileList: [],
        fileName: []
      },
    }
  },
  methods: {
    handleFileChange(files, fileList) {
      this.uploadJH.fileList = fileList
    },
    //建行批量上传
    upJHFile() {
      // 创建新的数据对象
      let formData = new FormData();
      // 将上传的文件放到数据对象中
      this.uploadJH.fileList.forEach(file => {
        formData.append('file', file.raw);
        this.uploadJH.fileName.push(file.name);
      });
      // formData.append('fileName', this.uploadJH.fileName);

      /*
      // 自定义上传
            this.$api.uploadFile(formData).then(response => {
                console.log(response);
                // if(response.code == 200){
                //   this.$refs.upload.clearFiles();
                //   this.msgSuccess('上传成功！');
                // }else{
                //   this.$message.error(response.msg);
                // }
              })
              .catch(error => {
                this.$message.error('上传失败！');
              });
      
      // 封装的上传请求
        uploadFile(params) {
          return axios.post(`/shiro/swpe/permission/uploadOrStartProceBPS`, params,
           { headers: { 'Content-Type': 'multipart/form-data', token: window.localStorage.getItem('token')}})
        },
      
      */
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
