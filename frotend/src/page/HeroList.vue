<template>
  <div id="HeroList">
    <div class="container">
      <h2>召唤师峡谷</h2>
      <div class="search">
        <el-input placeholder="英雄名称" clearable size="small" debounce="500" suffix-icon="el-icon-search" v-model.trim="filter.searchKey"></el-input>
        <el-button type="primary" size="small" @click="addOrEditHero('add')">添加</el-button>
      </div>
      <div class="hero-list">
        <el-table :data="tableData" border max-height="500" size="small">
          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button class="look" type="text" size="mini" @click="$router.push({
                path: '/hero-detail',
                query: {id: scope.row.name}
              })">查看</el-button>
              <el-button class="look" type="text" size="mini" @click="addOrEditHero('edit')">编辑</el-button>
              <el-button class="look" type="text" size="mini" @click="deleteHero(scope.row._id)">删除</el-button>
              <!-- <el-button class="look" type="text" size="mini" @click="$router.push({
                path: '/hero-detail',
                query: {id: scope.row.name}
              })">添加</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination class="pagination"
        background
        @current-change="changeNum"
        :current-page.sync="filter.pageNum"
        :page-size="filter.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="filter.totalSize">
      </el-pagination>
    </div>

    <!-- 添加英雄弹窗 -->
    <el-dialog
      class="dialog"
      title="添加英雄"
      :visible.sync="showDialog"
      width="600px"
      top="0"
      :show-close="false"
      :close-on-click-modal="false">
      <el-row :gutter="20" class="dialog-container">
        <el-form ref="addForm" :model="addForm" size="mini" label-width="80px">
          <el-col :span="12">
            <el-form-item label="英雄名称">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="英雄别名">
              <el-input v-model="addForm.subname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="英雄属性">
              <el-select multiple :multiple-limit="2" v-model="addForm.properties" placeholder="请选择">
                <el-option label="战士" value="战士"></el-option>
                <el-option label="法师" value="法师"></el-option>
                <el-option label="刺客" value="刺客"></el-option>
                <el-option label="坦克" value="坦克"></el-option>
                <el-option label="射手" value="射手"></el-option>
                <el-option label="辅助" value="辅助"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="英雄性别">
              <el-select v-model="addForm.sex" placeholder="请选择">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="A被动">
              <el-input v-model="addForm.skill.a"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Q技能">
              <el-input v-model="addForm.skill.q"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="W技能">
              <el-input v-model="addForm.skill.w"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="E技能">
              <el-input v-model="addForm.skill.e"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="R技能">
              <el-input v-model="addForm.skill.r"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="背景介绍">
              <el-input type="textarea" v-model="addForm.introduce"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="自己使用">
              <el-input type="textarea" v-model="addForm.usage.self"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="敌方使用">
              <el-input type="textarea" v-model="addForm.usage.other"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="上传皮肤">
              <el-upload class="avatar-uploader"
                action="/leagueOfLegends/upload"
                list-type="picture-card"
                :file-list="this.addForm.images"
                :on-success="handleAvatarSuccess"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <!-- <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog> -->
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="showDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // dialogImageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
				// dialogVisible: false,
        filter: {
          searchKey: '',
          totalSize: 0,
          pageNum: 1,
          pageSize: 10
        },
        tableData: [],
        // 弹窗
        showDialog: false,
        addForm: {
          name: '',
          subname: '',
          properties: [],
          sex: '',
          skill: {
            a: '',
            q: '',
            w: '',
            e: '',
            r: ''
          },
          usage: {
            self: '',
            other: ''
          },
          introduce: '',
          // images: [],
          images: [/* {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          } */],
        }
      }
    },
    created () {
      this.getDatas();
    },
    methods: {
      getDatas () {
        const reqData = {
          searchKey: this.filter.searchKey,
          pageNum: this.filter.pageNum,
          pageSize: this.filter.pageSize
        }
        this.api.hero.getHeroList(reqData).then(res => {
          console.log(res);
          this.tableData = res.data.resData.heroList;
          this.filter.totalSize = res.data.resData.pagination.totalSize;
        })
      },
      // 改变分页
      changeNum (val) {
        this.filter.pageNum = val;
        this.getDatas();
      },
      addOrEditHero (type) {
        if (type === "add") {}
      },
      // 确认添加英雄
      addConfirm () {
        const postData = {
          name: this.addForm.name,
          subname: this.addForm.subname,
          properties: this.addForm.properties,
          sex: this.addForm.sex,
          a: this.addForm.skill.a,
          q: this.addForm.skill.q,
          w: this.addForm.skill.w,
          e: this.addForm.skill.e,
          r: this.addForm.skill.r,
          self: this.addForm.usage.self,
          other: this.addForm.usage.other,
          introduce: this.addForm.introduce,
          images: this.addForm.images
        };
        console.log(postData);
        this.api.hero.addHero(postData).then(res => {
          console.log(res);
        });
      },
      // 删除
      deleteHero (heroId) {
        console.log(heroId);
        this.api.hero.deleteHero(heroId).then(res => {
          console.log(res);
        })
      },
      handleRemove(file, fileList) {
				console.log(file, fileList);
				this.addForm.images = fileList;
      },
			// 上传成功的回显方法
      handleAvatarSuccess (res, file, fileList) {
				// console.log(res, file, fileList);
        // this.imageUrl = URL.createObjectURL(file.raw);
				// this.imageUrl = res.filePath;
				this.addForm.images = fileList;
				console.log("this.fileList>>>>>>", this.addForm.images);
      },
    }
  }
</script>

<style lang="sass" scoped>
  #HeroList {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    .container {
      width: 100%;
      max-width: 1200px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      & > h2 {
        text-align: center;
        line-height: 50px;
      }
      .search {
        display: flex;
        justify-content: flex-end;
        padding: 0 20px 10px;
        .el-input {
          width: 220px;
          margin-right: 20px;
        }
      }
      .hero-list {
        padding: 0 20px;
        .look {
          padding: 0;
        }
      }
      .pagination {
        text-align: center;
        padding: 15px 0;
      }
    }
    .dialog {
      display: flex;
      align-items: center;
      justify-content: center;
      /deep/.el-dialog {
        border-radius: 10px;
        margin: 0;
        .el-dialog__header {
          padding: 10px 20px;
          border-bottom: 1px solid #dcdfe6;
          .el-dialog__title {
            font-size: 16px;
          }
        }
        .el-dialog__body {
          padding: 10px 20px;
          .dialog-container {
            border: 1px solid red;
            .el-upload-list__item {
              width: 80px;
              height: 80px;
            }
            .el-upload--picture-card {
              width: 80px;
              height: 80px;
              line-height: 80px;
              & > i {
                font-size: 20px;
              }
            }
          }
        }
        .el-dialog__footer {
          padding: 10px 20px;
          border-top: 1px solid #dcdfe6;
        }
      }
    }
  }
</style>

