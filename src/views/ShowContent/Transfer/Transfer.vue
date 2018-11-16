<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <el-row :gutter="0">
    <el-col class="transfer_box" :span="8">
      <p>基础用法</p>
      <template>
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </template>
    </el-col>
    <el-col class="transfer_box" :span="8">
      <p>可搜索</p>
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value2"
        :data="data2">
      </el-transfer>
    </el-col>
  </el-row>
  <el-row :gutter="0">
    <el-col class="transfer_box" :span="8">
      <p>使用 render-content 自定义数据项</p>
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value3"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['到左边', '到右边']"
          :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
          @change="handleChange"
          :data="data">
          <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </div>
    </el-col>
    <el-col class="transfer_box" :span="8">
      <p>使用 scoped-slot 自定义数据项</p>
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value4"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :titles="['Source', 'Target']"
          :button-texts="['到左边', '到右边']"
          :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
          @change="handleChange3"
          :data="data">
          <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
          <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="0">
    <el-col class="transfer_box" :span="8">
      <p>数据项属性别名</p>
      <el-transfer
        v-model="value5"
        :props="{
      key: 'value',
      label: 'desc'
    }"
        :data="data4">
      </el-transfer>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Transfer',
  props: {
    cgWidth: String
  },
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: '备选项 ' + i,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    const generateData3 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: '备选项 ' + i,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    const generateData4 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: '备选项 ' + i,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value1: [1, 4],
      data2: generateData2(),
      value2: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      },
      data3: generateData3(),
      value3: [1],
      value4: [1],
      renderFunc (h, option) {
        return h('span', `${option.key} - ${option.label} `)
      },
      data4: generateData4(),
      value5: []
    }
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    handleChange3 (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
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
  .transfer_box{
    margin: 20px 20px;
    border: 1px solid #949494;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: #e4e4e4;
  }
  .transfer_box p {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #adadad;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>
