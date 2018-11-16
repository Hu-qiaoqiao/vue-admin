<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <el-row>
    <el-col class="dia_box" :span="11">
      <p>基本用法</p><br>
      <span>Dialog 弹出一个对话框，适合需要定制性更大的场景。</span><br>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </el-col>
    <el-col class="dia_box" :span="11">
      <p>自定义内容</p><br>
      <span>Dialog 组件的内容可以是任意的，甚至可以是表格或表单</span><br>
      <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </el-dialog>

      <!-- Form -->
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="dia_box" :span="11">
      <p>嵌套的 Dialog</p><br>
      <span>在一个 Dialog 内部嵌套另一个 Dialog</span><br>
      <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
      <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <el-dialog
          width="30%"
          title="内层 Dialog"
          :visible.sync="innerVisible"
          append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
        </div>
      </el-dialog>
    </el-col>
    <el-col class="dia_box" :span="11">
      <p>居中布局</p><br>
      <span>标题和底部可水平居中</span><br>
      <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    cgWidth: String
  },
  data () {
    return {
      dialogVisible: false,
      gridData: [{
        date: '2018-11-15',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2018-11-15',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2018-11-15',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2018-11-15',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      outerVisible: false,
      innerVisible: false,
      centerDialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .el-row{
    margin: 0 !important;
  }
  .dia_box{
    margin: 20px 20px;
    border: 1px solid #949494;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: #e4e4e4;
  }
  .dia_box p,
  .dia_box span {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #adadad;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>
