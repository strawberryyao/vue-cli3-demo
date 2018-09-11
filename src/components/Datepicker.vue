<template>
  <div class="hello">
    <el-form style="display:flex">
      <el-form-item>
        <el-select v-model="year" @change="getDay" placeholder="年">
          <el-option v-for="(item,index) in yearList" :key="index" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item ref="month" class="month input-item">
        <el-select v-model="month" placeholder="月" @change="getDay">
          <el-option v-for="(item,index) in monthList" :key="index" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item ref="day">
        <el-select v-model="day" class="day input-item" placeholder="日">
          <el-option v-for="(item,index) in dayList" :key="index" :value="item"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let getYearList = () => {
      const legalYear = new Date().getFullYear() - 18
      console.log(legalYear)
      let yearList = []
      for (let i = 0; i < 80; i++) {
        yearList.push(legalYear - i)
      }
      console.log(yearList)
      return yearList
    }
    let getMonthList = () => {
      let monthList = []
      for (let i = 0; i < 12; i++) {
        monthList.push(i + 1)
      }
      console.log(monthList)
      return monthList
    }
    /* let getDayList = (year, month) => {
      let dayList = []
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30
      }
      if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return d = 29
        } else {
          return d = 28
        }
      }
      return d=31
      for (let i = 0; i < d; i++) {
        dayList.push(i + 1)
      }
      console.log(dayList)

      return dayList
    } */
    return {
      day: '',
      month: '',
      year: '',
      yearList: getYearList(),
      monthList: getMonthList(),
      dayList: []
      /*  dayList: getDayList() */
    }
  },
  mounted() {},
  computed: {},
  methods: {
    getDay() {
      let d
      let year = this.year
      let month = this.month
      if (!year || !month) {
        return
      }
      let dayList = []
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        d = 30
      } else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          d = 29
        } else {
          d = 28
        }
      } else {
        d = 31
      }
      for (let i = 0; i < d; i++) {
        dayList.push(i + 1)
      }
      this.dayList = dayList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
