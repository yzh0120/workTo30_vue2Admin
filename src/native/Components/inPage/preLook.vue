<!--
 * @Author: yz
 * @Date: 2022-06-08 11:19:50
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\native\Components\inPage\preLook.vue
 * 
-->
<template>
  <div>
    <vxe-modal v-model="preLookC" title="预览文件" width="100%" height="100%" show-footer @close="cancel">



      <template v-if="fileType == `pdf`">
        <template v-if="numPages <= 10">
          <pdf ref="morePDF" :src="pdfSrc" :page="i" v-for="i in numPages" :key="i"></pdf>
        </template>

        <template v-else>
          <pdf :src="pdfSrc" :page="currentPage" @num-pages="pageCount = $event" @page-loaded="currentPage = $event"
            @error="loadError" />
        </template>
      </template>

      <template #footer>
        <div>
          <template v-if="fileType == `pdf`">
            <el-button @click.stop="prePage">上一页</el-button>
            <span>{{ currentPage }}/{{ numPages }}</span>
            <el-button @click.stop="nextPage">下一页</el-button>
          </template>
          <el-button type="primary" @click="cancel">确认</el-button>
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script>

import pdf from 'vue-pdf'

import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js';

import axios from 'axios';
import {
  Message,
  MessageBox
} from 'element-ui';
export default {
  components: { pdf },
  watch: {
    "$store.state.config.preLook": {
      handler() {
        if (this.$store.state.config.preLook) {
          this.preLookC = true
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      pdfSrc: "",
      currentPage: 1,//当前页
      numPages: 0,//总数
      preLookC: false,//控制弹窗
      fileName: '',//文件名字
      fileType: "",//文件类型
    }
  },
  mounted() {
    // this.$store.state.config.preLook = [{ fileId: item.id }, "filedownload",]
    this.download(...this.$store.state.config.preLook)
  },
  methods: {
    cancel() {
      this.$store.state.config.preLook = false
    },
    /**
     * 读取指定blob,返回转换为base64后的结果
     * @param blob
     * @returns {Promise<unknown>}
     */
    blobToDataURI(blob) {
      return new Promise((resolve) => {
        let reader = new FileReader()
        reader.onload = function (e) {
          resolve(e.target.result)
        }
        reader.readAsDataURL(blob)
      })
    },

    // 加载失败
    loadError(err) {
      console.log(err)
      // this.$toast.fail('加载pdf失败！')
    },
    //计算pdf页码总数
    getPDFnums(url) {
      // this.loading = true
      //let loadURL = pdf.createLoadingTask(url)
      let loadURL = pdf.createLoadingTask({
        url: url,//你的pdf地址
        CMapReaderFactory
      })

      loadURL.promise.then(pdf => {
        this.numPages = pdf.numPages
        this.currentPage = 1
        // this.$set(this, 'docsPDF.numPages', pdf.numPages)
        // this.loading = false
      }).catch(err => {
        // this.loading = false;
        // this.loadingError = true;
      })
    },
    // 上一页
    prePage() {
      var page = this.currentPage
      page = page > 1 ? page - 1 : this.numPages
      this.currentPage = page
    },

    // 下一页
    nextPage() {
      var page = this.currentPage
      page = page < this.numPages ? page + 1 : 1
      this.currentPage = page
    },
    download(params = {}, type) {
      let baseURL = process.env.VUE_APP_BASE_API;
      let headers = {
        // 'Authorization': "Bearer " + Cookie.get("token")
        "Authorization": Cookie.get("token") ? Cookie.get("token") : undefined,
      }

      let url = ""
      url = path //文件流

      let msg = Message({
        message: "正在下载文件，请稍等",
        type: 'warning',
        duration: 0
      })

      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url,
          baseURL: baseURL,
          params: params,
          responseType: 'blob',
          headers: headers
        })
          .then(response => {
            msg.close(); //关闭提示弹窗
            // 兼容blob下载出错json提示
            if (response.request.responseType === 'blob' && response.data instanceof Blob && response.data.type && response.data.type.toLowerCase().indexOf('json') != -1) {
              reject("blob下载出错json提示")
              // 兼容blob下载出错json提示
              let reader = new FileReader()
              reader.onload = () => {
                response.data = JSON.parse(reader.result);
                Message({
                  message: response.data.info,
                  type: 'warning',
                  duration: 2000
                })
              }
              reader.readAsText(response.data)
              return;
            }

            if (response.headers.filename) {
              this.fileName = decodeURIComponent(response.headers.filename);
            } else {
              this.fileName = decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]);
            }
            this.fileType = this.fileName.split(".").pop()
            //pdf
            if (this.fileType == "pdf") {
              let fileURL = null
              var blob = new Blob([response.data], { type: 'application/pdf' })
              if (window.createObjectURL != undefined) { // basic
                fileURL = window.createObjectURL(blob);
              } else if (window.webkitURL != undefined) { // webkit or chrome
                try {
                  fileURL = window.webkitURL.createObjectURL(blob);
                } catch (error) { console.log(error) }
              } else if (window.URL != undefined) { // mozilla(firefox)
                try {
                  fileURL = window.URL.createObjectURL(blob);
                } catch (error) { console.log(error) }
              }
              this.pdfSrc = fileURL
              this.getPDFnums(this.pdfSrc)
            }
          })
          .catch(err => {
            msg.close(); //关闭提示弹窗
            reject(err)
          })
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
<!---
vue-pdf 通过文件流预览pdf文件
https://blog.csdn.net/codingLeader/article/details/122967873

VUE-PDF 实现pdf在线预览
https://blog.csdn.net/codingLeader/article/details/122712566?spm=1001.2014.3001.5502

-->
