<template>
  <el-dialog
    title="导入模型"
    :visible.sync="show"
    :modal-append-to-body="false"
    width="400px"
    :close-on-click-modal="false"
  >
    <el-upload
      drag
      accept=".glb, .gltf"
      action="1"
      :multiple="false"
      :limit="1"
      :http-request="uploadModel"
      ref="uploadFile"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处,或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传gltf/glb文件</div>
    </el-upload>
  </el-dialog>
</template>

<script>
import { GUID } from "../whayer/Uitls";
import API from "../http/api";
export default {
  name: "UploadModel",//上传模型组件
  props:{
      show:Boolean,//是否显示
      rootDir:String,//根目录
      childDir:String,//子目录
      uploadComplete:Function
  },
  methods:{
    uploadModel(request) {
      let fileName = GUID();
      let formData = new FormData();
      formData.append("funid", this.rootDir);
      formData.append("objid", this.childDir);
      formData.append("img", request.file);
      formData.append(
        "filename",
        fileName.substring(0, 10) + request.file.name
      );

      this.axios({
        url:
          "http://" +
          this.$store.state.cfgInfo.serverCfg.dataServer +
          ":" +
          this.$store.state.cfgInfo.serverCfg.dataPort +API.uploadPic,
        method: "post",
        data: formData,
        //上传进度
        onUploadProgress: progressEvent => {
          let num = ((progressEvent.loaded / progressEvent.total) * 100) | 0; //百分比
          request.onProgress({ percent: num }); //进度条
        }
      }).then(req => {
        if (req.data.code != 200) {
          this.$message({
            type: "error",
            message: req.data.errdes
          });
          request.onError();
          return;
        }
        request.onSuccess();       
        this.$refs["uploadFile"].clearFiles();
        if(this.uploadModel){
          this.uploadModel();
        }
      });
    }
  },
  destroyed(){
      this.uploadModel=null;
  }
};
</script>