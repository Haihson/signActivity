<template>
<div id="div-show" class="div_container">
  <!--头部提示-->
  <div class="div_head_tip">已连续签到<label class="l_sign_day">{{ continuousSignDay }}</label>天，还需签到<label class="l_sy_day">{{ remainingSignDay }}</label>天即可领券
  </div>

  <!--日历控件-->
  <div class="div_grid" id="grid">
    <!-- <calendar-week v-bind:my-weeks="weeks"></calendar-week> -->
    <!--日历星期-->
    <div class="div_row">
        <div class="div_cell" v-for="(item, index) in weeks" v-bind:class="weekStyle(index)">{{ item.name }}</div>
    </div>
    <!--日历数据-->
    <div class="div_row" v-for=""></div>
    <div class="div_row">
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day cell_0">
                <label>26</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>27</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>28</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>29</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>30</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>31</label>
            </div>
        </div>
        <div class="div_cell  cell_have_signed_day">
            <div class="cell_day cell_6">
                <label>4月</label>
            </div>
        </div>
    </div>
    <div class="div_row">
        <div class="div_cell  cell_change_city_day">
            <div class="cell_day cell_0">
                <label>2</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>3</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>4</label>
            </div>
        </div>
        <div class="div_cell  cell_have_signed_day">
            <div class="cell_day ">
                <label>5</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>6</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>7</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day cell_6">
                <label>8</label>
            </div>
        </div>
    </div>
    <div class="div_row">
        <div class="div_cell ">
            <div class="cell_day cell_0">
                <label>9</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>10</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>11</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>12</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>13</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>14</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day cell_6">
                <label>15</label>
            </div>
        </div>
    </div>
    <div class="div_row">
        <div class="div_cell ">
            <div class="cell_day cell_0">
                <label>16</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>17</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>18</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>19</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>20</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>21</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day cell_6">
                <label>22</label>
            </div>
        </div>
    </div>
    <div class="div_row">
        <div class="div_cell ">
            <div class="cell_day cell_0">
                <label>23</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>24</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>25</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>26</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>27</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day ">
                <label>28</label>
            </div>
        </div>
        <div class="div_cell ">
            <div class="cell_day cell_6">
                <label>29</label>
            </div>
        </div>
    </div>
    <div class="div_row">
        <div class="div_cell ">
            <div class="cell_day cell_0">
                <label>30</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>5月</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>2</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>3</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>4</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day ">
                <label>5</label>
            </div>
        </div>
        <div class="div_cell cell_not_currt_month_day ">
            <div class="cell_day cell_6">
                <label>6</label>
            </div>
        </div>
    </div>
  </div>

  <div class="div_select_month">
    <span class="span_select_month"><label v-on:click="clickSwitchMonth('prev')" class="m_span_pre"
                                                 v-bind:class="{m_currt_normal: isCurrtHovr,m_currt_hovr: !isCurrtHovr}">上月</label><label
                  v-on:click="clickSwitchMonth('currt')" class="m_span_next"
                  v-bind:class="{m_currt_hovr: isCurrtHovr,m_currt_normal: !isCurrtHovr}">当月</label></span>
  </div>

  <div class="div_desc">
    <p>活动规则：</p>

    <p>1.上传行驶证并通过审核的用户可参与</p>

    <p>2.同一账号和设备号连续签到<label class="p_sign_date">{{ cycleSign }}</label>天，即可随机获得1分钱洗车券、5折洗车券和门店优惠券</p>

    <p>3.更换设备、签到中断或成功领券后，会重新开始计数</p>

    <p>4.活动截止日期为 {{ endDate }}，活动期内，同一用户可重复参与，不限次数</p>

    <p>5.擎天助保留法律允许范围内的最终解释权</p>
  </div>

  <!-- loading toast -->
  <div id="loadingToast" class="weui_loading_toast" style="display:none;">
    <div class="weui_mask_transparent" style="background: rgba(0, 0, 0, .6);"></div>
    <div class="weui_toast" style="width: 8.6em;">
      <div class="weui_loading">
        <div class="weui_loading_leaf weui_loading_leaf_0"></div>
        <div class="weui_loading_leaf weui_loading_leaf_1"></div>
        <div class="weui_loading_leaf weui_loading_leaf_2"></div>
        <div class="weui_loading_leaf weui_loading_leaf_3"></div>
        <div class="weui_loading_leaf weui_loading_leaf_4"></div>
        <div class="weui_loading_leaf weui_loading_leaf_5"></div>
        <div class="weui_loading_leaf weui_loading_leaf_6"></div>
        <div class="weui_loading_leaf weui_loading_leaf_7"></div>
        <div class="weui_loading_leaf weui_loading_leaf_8"></div>
        <div class="weui_loading_leaf weui_loading_leaf_9"></div>
        <div class="weui_loading_leaf weui_loading_leaf_10"></div>
        <div class="weui_loading_leaf weui_loading_leaf_11"></div>
      </div>
      <p class="weui_toast_content">数据处理中...</p>
    </div>
  </div>

  <!--BEGIN dialog1-->
  <div class="weui_dialog_alert" id="dialogTip" style="display: none;">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">擎天助提示</strong></div>
      <div id="dialogTipSign" class="weui_dialog_bd weui_tip">{{ tipStrModel1 }}</div>
      <div class="weui_dialog_ft">
        <a href="javascript:;" v-on:click="clickIKnow()" class="weui_btn_dialog primary">知道了</a>
      </div>
    </div>
  </div>
  <!--END dialog1-->

  <!--BEGIN dialog2-->
  <div class="weui_dialog_confirm" id="div_sign_dialog" style="display: none;">
    <div class="weui_mask" style="z-index: 9;"></div>
    <div class="weui_dialog" style="z-index: 10;">
      <div class="weui_dialog_hd"><strong class="weui_dialog_title">擎天助提示</strong></div>
      <div class="weui_dialog_bd">{{ tipStrModel2 }}</div>
      <div class="weui_dialog_ft">
        <a id="a_sign_cancel" v-on:click="clickSignCancle()" href="javascript:;" class="weui_btn_dialog default">取消</a>
        <a id="a_sign_sure" v-on:click="signSure()" href="javascript:;" class="weui_btn_dialog primary">确定签到</a>
      </div>
    </div>
  </div>
  <!--END dialog2-->

  <!--领券弹窗-->
  <div class="div_t_dialog" style="display: none;" v-show="isShowLingQuanDialog">
    <div class="div_t_bg"></div>

    <div class="div_t_body">
      <img class="div_t_close" v-on:click="dialogClose()" src="./../assets/logo.png" />

      <div class="body_title">恭喜您获得<span class="span_money">{{ quanItemNum }}</span>张优惠券</div>
      <div class="body_desc">继续签到还可以获得更多哦！</div>
      <div class="body_line"></div>
      <div class="body_ticket_list">
        <div style="height: 265px;overflow: scroll;">
          <div class="ticket_item" v-for="item in quanItems">
            <div class="item_money">
              <sub class="item_sub" v-if="item.couponType!=='1'">￥</sub>
              <span>{{ item.couponValue }}</span>
              <sub class="item_sub" v-if="item.couponType=='1'">折</sub>
            </div>
            <div class="item_desc">
              <div class="item_desc_title">{{ item.couponName }}</div>
              <div class="item_desc_desc">{{ item.couponDesc }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="body_footer">优惠券已放入账户中，请在［我的］页查看</div>
      <div class="body_share" v-on:click="clickShare()">
        <img src="./../assets/icon_share.png" />
      </div>
    </div>
  </div>

</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'div_container',
  props: {
    SIGN_SUCCESS: {
      type: Number,
      default: 1
    },
    SIGN_FAIED: {
      type: Number,
      default: 2
    },
    SIGN_LINGQUAN: {
      type: Number,
      default: 3
    },
    weekNum: {
      type: Number,
      default: 7
    },
    tipMoreDeviesStr: {
      type: String,
      default: '亲，同一设备（手机）不支持用于多个账号签到哦'
    },
    tipNoneCouponStr: {
      type: String,
      default: '亲，悄悄的告诉你，本次没有抽到券哦！'
    },
    tipChangDeviesSignStr: {
      type: String,
      default: '亲，更换设备（手机）签到累计天数会清零哦，您确认要签到吗？'
    },
    tipChangCitySignStr: {
      type: String,
      default: '亲，更换城市签到累计天数会清零哦，您确认要签到吗？'
    }
  },
  data () {
    return {
      continuousSignDay: 0,
      remainingSignDay: 0,
      lingQuanDay: 0,
      cycleSign: 0,
      currtYear: 0,
      currtMonth: 0,
      currtDay: 0,
      totalWeekNum: 42,
      currtSwitchParam: 'currt',
      isShowLingQuanDialog: false,
      quanItems: '',
      quanItemNum: 0,
      isCurrtHovr: true,
      endDate: '',
      weeks: [{
        name: '日'
      }, {
        name: '一'
      }, {
        name: '二'
      }, {
        name: '三'
      }, {
        name: '四'
      }, {
        name: '五'
      }, {
        name: '六'
      }],
      tipStrModel1: this.tipMoreDeviesStr,
      tipStrModel2: this.tipChangDeviesSignStr,
      daysList: [],
      signData: {
        code: 0,
        data: {
          date: '2017-04-05',
          endDate: '2017.05.01',
          signCount: 0,
          cunponCount: 75,
          lastCity: 14340,
          monthList: {
            changeDeviceList: [],
            changeCityList: [],
            signNotCouponList: [],
            receivedList: [{
              date: '2017-03-31 14:29:31'
            }],
            signedList: [{
              date: '2017-01-05 14:24:06'
            }, {
              date: '2017-01-06 15:28:40'
            }, {
              date: '2017-01-07 17:30:44'
            }, {
              date: '2017-01-08 10:09:05'
            }, {
              date: '2017-03-09 15:01:57'
            }, {
              date: '2017-03-25 10:31:36'
            }, {
              date: '2017-03-26 11:18:41'
            }, {
              date: '2017-03-27 18:36:06'
            }, {
              date: '2017-03-28 18:38:22'
            }, {
              date: '2017-03-29 18:39:18'
            }, {
              date: '2017-03-30 18:44:10'
            }, {
              date: '2017-03-31 14:29:31'
            }]
          },
          cycleNumber: 7,
          mobilePhoneCode: '30062186-1E2E-4CF4-B912-08D8D36F2A2D'
        },
        massage: '成功！'
      },
      shareData: {
        code: 0,
        data: {
          icon: '',
          title: '分享一个养车神器给你',
          url: '',
          content: '快来跟我一起签到吧，我已经领了好多洗车、美容、保养优惠券了'
        },
        massage: '成功！'
      },
      currtMobilePhoneCode: '30062186-1E2E-4CF4-B912-08D8D36F2A2D',
      currtCity: 14340
    }
  },
  methods: {
    formatDate: function (theDate) {
      var temp = theDate.split(' ')
      return temp[0]
    },
    getLastDayInMonth: function (year, month) {
      // 获取月份的最大天数
      var newYear = year
      var newMonth = month++
      if (month > 12) {
        newMonth -= 12
        newYear++
      }
      var newDate = new Date(newYear, newMonth, 1)
      var lastDay = (new Date(newDate.getTime() - 1000 * 60 * 60 * 24)).getDate()
      return lastDay
    },
    getWeek: function (year, month, day) {
      // 根据年月日判断是星期几
      var dayNum = new Date(year + '/' + month + '/' + day).getDay()
      return dayNum
    },
    init: function () {
      if (this.signData.code === 0) {
        var currtDate = new Date(this.signData.data.date)
        this.currtYear = currtDate.getFullYear()
        this.currtMonth = currtDate.getMonth() + 1
        this.currtDay = currtDate.getDate()

        this.cycleSign = this.signData.data.cycleNumber
        this.continuousSignDay = this.signData.data.signCount
        this.remainingSignDay = this.cycleSign - this.continuousSignDay

        this.endDate = this.signData.data.endDate

        this.lingQuanDay = this.currtDay + this.remainingSignDay
        if (!this.isSameMobileCode()) {
          this.lingQuanDay = this.currtDay + this.cycleSign - 1
        }

        this.initShareInfo()

        this.switchMonth(this.currtYear, this.currtMonth, this.currtDay)
      } else {
        console.log('数据返回错误')
      }
    },
    initShareInfo: function () {
      if (this.shareData.code !== 0) {
        this.shareData = "{'code':'0','data':{'icon':'','title':'分享一个养车神器给你','url':'https://sitweixin.bojuecar.com/weixin/app/v2/23/signShare','content':'快来跟我一起签到吧，我已经领了好多洗车、美容、保养优惠券了'},'massage':'成功！'}"
      }
    },
    clickSwitchMonth: function (param) {
      if (param === this.currtSwitchParam) {
        return
      }

      this.flushSignData()

      if (param === 'prev') {
        this.currtSwitchParam = 'prev'
        this.isCurrtHovr = false
        var tempMonth = this.currtMonth - 1
        var tempYear = this.currtYear
        if (this.currtMonth === 1) {
          tempMonth = 12
          tempYear = this.currtYear - 1
        }
        this.switchMonth(tempYear, tempMonth, 1)
      } else if (param === 'currt') {
        this.currtSwitchParam = 'currt'
        this.isCurrtHovr = true
        this.switchMonth(this.currtYear, this.currtMonth, this.currtDay)
      }
      // console.log(this.currtYear + " " + this.currtMonth + " " + this.currtDay)
    },
    switchMonth: function (gCurrtYear, gCurrtMonth, gCurrtDay) {
      var weekIndexStart = this.getWeek(gCurrtYear, gCurrtMonth, 1)
      var currtMonthMaxDays = this.getLastDayInMonth(gCurrtYear, gCurrtMonth)
      // var weekIndexEnd = this.getWeek(gCurrtYear, gCurrtMonth, currtMonthMaxDays)
      var prevMonthMaxDays = 0
      var weekDay = 1
      var rowWeek = weekIndexStart
      var cellClassName = ''

      // console.log(weekIndexStart + " " + weekIndexEnd)
      // 当月1日 是否为星期日
      var tempCurrtYear = gCurrtYear
      var tempCurrtMonth = gCurrtMonth
      if (weekIndexStart > 0) {
        if (--tempCurrtMonth <= 0) {
          tempCurrtMonth = 12
          tempCurrtYear -= 1
        }
        prevMonthMaxDays = this.getLastDayInMonth(tempCurrtYear, tempCurrtMonth)
      }

      var strHtml = ''
      // 前一个月
      tempCurrtYear = gCurrtYear
      tempCurrtMonth = gCurrtMonth - 1
      if (tempCurrtMonth <= 0) {
        tempCurrtMonth = 12
        tempCurrtYear -= 1
      }
      var rowTempIndex = 0
      strHtml += "<div class='div_row'>"
      for (var i = prevMonthMaxDays - weekIndexStart + 1; i <= prevMonthMaxDays; i++) {
        cellClassName = ''
        switch (this.signDateStatus(tempCurrtYear, tempCurrtMonth, i)) {
          case 0:
            cellClassName += 'cell_change_device_day'
            break
          case 1:
            cellClassName += ' cell_change_city_day'
            break
          case 2:
            cellClassName += ' cell_none_coupons_day'
            break
          case 3:
            cellClassName += ' cell_coupons_day img_opacity'
            break
          case 4:
            cellClassName += ' cell_have_signed_day'
            break
          case 5:
            break
        }
        strHtml += "<div class='div_cell cell_not_currt_month_day " + cellClassName + "'><div class='cell_day "
        if (rowTempIndex === 0) {
          strHtml += 'cell_0'
        }
        strHtml += '><label>' + i + '</label></div></div>'
        rowTempIndex++
      }

      // 当前月
      while ((this.weekNum - rowWeek) > 0) {
        cellClassName = ''
        switch (this.signDateStatus(gCurrtYear, gCurrtMonth, weekDay)) {
          case 0:
            cellClassName += 'cell_change_device_day'
            break
          case 1:
            cellClassName += ' cell_change_city_day'
            break
          case 2:
            cellClassName += ' cell_none_coupons_day'
            break
          case 3:
            cellClassName += ' cell_coupons_day img_opacity'
            break
          case 4:
            cellClassName += ' cell_have_signed_day'
            break
          case 5:
            if (gCurrtDay === weekDay && weekDay === this.lingQuanDay) {
              cellClassName += ' cell_sign_coupons_day'
            } else if (gCurrtDay === weekDay && this.currtMonth === gCurrtMonth && this.currtYear === gCurrtYear) {
              // 是否是当前签到操作日，只限在当月或当月的下一个月
              cellClassName = ' cell_currt_day'
            }
            break
        }
        strHtml += "<div class='div_cell " + cellClassName + "'><div class='cell_day "
        if (rowTempIndex === (this.weekNum - 1)) {
          strHtml += 'cell_6'
        }
        strHtml += '><label>' + (weekDay === 1 ? gCurrtMonth + '月' : weekDay) + '</label></div></div>'
        weekDay++
        rowWeek++
        rowTempIndex++
      }
      strHtml += '</div>'
      rowTempIndex = 0
      strHtml += "<div class='div_row'>"
      for (weekDay; weekDay <= currtMonthMaxDays; weekDay++) {
        if (rowTempIndex === this.weekNum) {
          strHtml += "</div><div class='div_row'>"
          rowTempIndex = 0
        }
        cellClassName = ''
        switch (this.signDateStatus(gCurrtYear, gCurrtMonth, weekDay)) {
          case 0:
            cellClassName += 'cell_change_device_day'
            break
          case 1:
            cellClassName += ' cell_change_city_day'
            break
          case 2:
            cellClassName += ' cell_none_coupons_day'
            break
          case 3:
            cellClassName += ' cell_coupons_day img_opacity'
            break
          case 4:
            cellClassName += ' cell_have_signed_day'
            break
          case 5:
            if (gCurrtDay === weekDay && weekDay === this.lingQuanDay) {
              cellClassName += ' cell_sign_coupons_day'
            } else if (gCurrtDay === weekDay && this.currtMonth === gCurrtMonth && this.currtYear === gCurrtYear) {
              cellClassName = ' cell_currt_day'
            }
            break
        }
        strHtml += "<div class='div_cell " + cellClassName + "'><div class='cell_day "
        if (rowTempIndex === 0) {
          strHtml += 'cell_0'
        } else if (rowTempIndex === (this.weekNum - 1)) {
          strHtml += 'cell_6'
        }
        strHtml += '><label>' + weekDay + '</label></div></div>'
        rowTempIndex++
      }
      if (rowTempIndex === this.weekNum) {
        strHtml += '</div>'
      }

      // 后一个月
      tempCurrtYear = gCurrtYear
      tempCurrtMonth = gCurrtMonth + 1
      if (tempCurrtMonth > 12) {
        tempCurrtMonth = 1
        tempCurrtYear += 1
      }
      if (this.lingQuanDay > currtMonthMaxDays) {
        this.lingQuanDay = this.lingQuanDay - currtMonthMaxDays - 1
      }
      if (weekIndexStart + currtMonthMaxDays < 35) {
        this.totalWeekNum = 35
      } else {
        this.totalWeekNum = 42
      }
      for (weekDay = 1; weekDay <= this.totalWeekNum - currtMonthMaxDays - weekIndexStart; weekDay++) {
        if (rowTempIndex === this.weekNum) {
          strHtml += "</div><div class='div_row'>"
          rowTempIndex = 0
        }
        cellClassName = ''
        switch (this.signDateStatus(tempCurrtYear, tempCurrtMonth, weekDay)) {
          case 0:
            cellClassName += 'cell_change_device_day'
            break
          case 1:
            cellClassName += ' cell_change_city_day'
            break
          case 2:
            cellClassName += ' cell_none_coupons_day'
            break
          case 3:
            cellClassName += ' cell_coupons_day img_opacity'
            break
          case 4:
            cellClassName += ' cell_have_signed_day'
            break
          case 5:
            if (weekDay === this.lingQuanDay && this.currtMonth === gCurrtMonth && this.currtYear === gCurrtYear) {
              // 是否是下一个周期的领券标识日，只在当月的或当月的下一个月显示标记
              // cellClassName += ' cell_next_coupons_day';
            }
            break
        }
        strHtml += "<div class='div_cell cell_not_currt_month_day " + cellClassName + "'><div class='cell_day "
        if (rowTempIndex === 0) {
          strHtml += 'cell_0'
        } else if (rowTempIndex === (this.weekNum - 1)) {
          strHtml += 'cell_6'
        }
        strHtml += '><label>' + (weekDay === 1 ? (gCurrtMonth === 12 ? 1 : gCurrtMonth + 1) + '月' : weekDay) + '</label></div></div>'
        rowTempIndex++
      }
      strHtml += '</div>'
      // document.getElementById('grid').innerHTML = strHtml
      console.log(strHtml)
      bindEvent()
    },
    signDateStatus: function (year, month, day) {
      var currtDate = year + '-' + (month > 9 ? month : ('0' + month)) + '-' + (day > 9 ? day : ('0' + day))
      var monthList = this.signData.data.monthList
      var changeDeviceList = monthList.changeDeviceList
      var changeCityList = monthList.changeCityList
      var signNotCouponList = monthList.signNotCouponList
      var receivedList = monthList.receivedList
      var signedList = monthList.signedList
      var tempDate = null
      var i = 0
      // 0 更换设备、1 更换城市、2 没有领到券、3 领券日期、4 签到日期、5 正常日期
      for (i = 0; i < changeDeviceList.length; i++) {
        tempDate = this.formatDate(changeDeviceList[i].date)
        if (tempDate === currtDate) {
          return 0
        }
      }
      for (i = 0; i < changeCityList.length; i++) {
        tempDate = this.formatDate(changeCityList[i].date)
        if (tempDate === currtDate) {
          return 1
        }
      }
      for (i = 0; i < signNotCouponList.length; i++) {
        tempDate = this.formatDate(signNotCouponList[i].date)
        if (tempDate === currtDate) {
          return 2
        }
      }
      for (i = 0; i < receivedList.length; i++) {
        tempDate = this.formatDate(receivedList[i].date)
        if (tempDate === currtDate) {
          return 3
        }
      }
      for (i = 0; i < signedList.length; i++) {
        tempDate = this.formatDate(signedList[i].date)
        if (tempDate === currtDate) {
          return 4
        }
      }
      return 5
    },
    isSameMobileCode: function () {
      if (this.signData.data.mobilePhoneCode === null) {
        return true
      }
      return this.currtMobilePhoneCode === this.signData.data.mobilePhoneCode
    },
    isSameCity: function () {
      if (this.signData.data.lastCity === null) {
        return true
      }
      return this.currtCity === this.signData.data.lastCity
    },
    isCurrtSignEqualCycle: function () {
      // 是否是签到领券日
      return (this.continuousSignDay + 1) === this.cycleSign
    },
    dialogClose: function () {
      this.isShowLingQuanDialog = false
    },
    clickSign: function () {
      // 是否和上次签到是同一设备
      if (!this.isSameMobileCode()) {
        this.tipStrModel2 = this.tipChangDeviesSignStr
        $('#div_sign_dialog').show()
        return
      }
      // 是否和上次签到是同一城市
      if (!this.isSameCity()) {
        this.tipStrModel2 = this.tipChangCitySignStr
        $('#div_sign_dialog').show()
        return
      }
      this.signSure()
    },
    clickSignCancle: function () {
      $('#div_sign_dialog').hide()
    },
    clickIKnow: function () {
      $('#dialogTip').hide()
    },
    signSure: function () {
      // 签到操作处理
    },
    clickShare: function () {
      // 点击分享处理
    },
    flushSignData: function () {
      // 刷新数据处理
    },
    weekStyle: function (week) {
      switch (week) {
        case 0:
          return {'cell_0': true}
        case 1:
          return {'cell_1': true}
        case 2:
          return {'cell_2': true}
        case 3:
          return {'cell_3': true}
        case 4:
          return {'cell_4': true}
        case 5:
          return {'cell_5': true}
        case 6:
          return {'cell_6': true}
        default:

      }
    }
  },
  computed: {

  }
}
function bindEvent () {
    // 签到
  $('.cell_currt_day .cell_day,.cell_sign_coupons_day .cell_day').bind('click', function () {})
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.div_container {
  max-width: 640px;
  margin: 0 auto;
}


/*头部提示*/

.div_head_tip {
  background-color: rgba(237, 237, 237, 1);
  color: rgba(84, 105, 121, 1);
  font-size: 1.2rem;
  text-align: center;
  padding: 0.5rem 0.2rem;
}

.div_head_tip .l_sign_day {
  font-size: 2rem;
  padding: 0rem 0.2rem;
  font-weight: 900;
}

.div_head_tip .l_sy_day {
  font-size: 1.5rem;
  padding: 0rem 0.2rem;
}


/*日历列表*/

.div_grid {
  display: table;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  padding: 0.5rem 0rem;
  border-bottom: 1px solid rgba(84, 105, 121, 0.1);
  background: rgba(255, 255, 255, 1);
}

.div_row {
  display: table-row;
  height: 3rem;
}

.cell_1,
.cell_2,
.cell_3,
.cell_4,
.cell_5 {
  color: rgba(48, 48, 48, 1);
}

.cell_6,
.cell_0 {
  color: rgba(105, 195, 255, 1);
}

.div_cell {
  display: table-cell;
  width: 14.28%;
  padding: 0.5rem 0.5rem;
}

.cell_day {
  min-height: 32px;
  line-height: 32px;
}


/*换设备标识*/

.cell_change_device_day .cell_day {
  background-size: 100% 100%;
  background-image: url("./../assets/icon_change_devie.png");
  background-repeat: space;
}


/*换城市标识*/

.cell_change_city_day .cell_day {
  background-size: 100% 100%;
  background-image: url("./../assets/icon_change_city.png");
  background-repeat: space;
}


/*没有领到券的标识*/

.cell_none_coupons_day .cell_day {
  background-size: 80% 100%;
  background-position-x: center;
  background-image: url("./../assets/icon_none_quan.png");
  background-repeat: space;
  min-height: 36px;
  line-height: 36px;
}


/*已签到*/

.cell_have_signed_day .cell_day {
  background-size: 100% 100%;
  background-image: url("./../assets/icon_sign_circle.png");
  background-repeat: space;
}


/*领券的标识*/

.cell_coupons_day .cell_day {
  background-size: 80% 100%;
  background-position-x: center;
  background-image: url("./../assets/icon_sign_quan.png");
  background-repeat: space;
  min-height: 36px;
  line-height: 36px;
}


/*下一个周期的领券标识*/

.cell_next_coupons_day .cell_day {
  background-size: 80% 100%;
  background-position-x: center;
  background-image: url("./../assets/icon_sign_quan.png");
  background-repeat: space;
  min-height: 36px;
  line-height: 36px;
  opacity: 1 !important;
}


/*签到领券的标志*/

.cell_sign_coupons_day .cell_day {
  background-size: 80% 100%;
  background-position-x: center;
  background-image: url("./../assets/icon_sign_click.png");
  background-repeat: space;
  min-height: 36px;
  line-height: 36px;
}


/*今天签到标识*/

.cell_currt_day .cell_day {
  background-size: 100% 100%;
  background-image: url("./../assets/icon_sign_click.png");
  background-repeat: space;
  min-height: 36px;
  line-height: 36px;
}

.img_opacity .cell_day {
  opacity: 0.6;
}

.cell_coupons_day .cell_day label,
.cell_currt_day .cell_day label,
.cell_sign_coupons_day .cell_day label,
.cell_next_coupons_day .cell_day label,
.cell_none_coupons_day .cell_day label {
  visibility: hidden;
}


/*当月的标记*/

.cell_currt_month_day .cell_day {
  opacity: 1;
}


/*不是当月的标记*/

.cell_not_currt_month_day .cell_day {
  opacity: 0.6;
}


/*月份切换*/

.div_select_month {
  text-align: right;
  padding: 1.4rem 1.4rem 1.4rem 0rem;
  background: rgba(255, 255, 255, 1);
}

.div_select_month .span_select_month {
  background-color: rgba(105, 195, 255, 1);
  padding: 0.5rem 0.1rem;
  font-size: 1.4rem;
  box-shadow: 2px 2px 5px rgba(105, 195, 255, 1);
  border-radius: 0.2rem;
}

.m_span_pre {
  padding: 0.4rem 1rem;
}

.m_span_next {
  padding: 0.4rem 1rem;
}

.m_currt_hovr {
  background-color: rgba(105, 195, 255, 1);
  color: #FFFFFF;
}

.m_currt_normal {
  background-color: #FFFFFF;
  color: rgba(105, 195, 255, 1);
  border-radius: 0.2rem;
}


/*规则*/

.div_desc {
  padding: 0.5rem 1.2rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
}

.div_desc p {
  padding: 0.3rem 0rem;
}

.div_desc .p_sign_date {
  font-size: 1.5rem;
  padding: 0rem 0.2rem;
}


/*领券弹窗*/

.div_t_dialog {}

.div_t_dialog .div_t_bg {
  position: fixed;
  z-index: 11;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
}

.div_t_dialog .div_t_body {
  position: fixed;
  z-index: 14;
  width: 85%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  /*overflow: hidden;*/
  background: #FC7B53;
  border-radius: 0.5rem;
  padding: 3%;
}

.div_t_body .body_title {
  font-size: 2rem;
  color: #FFFFFF;
  padding: 1rem 0.1rem 0.4rem 0.1rem;
}

.div_t_body .body_title .span_money {
  font-size: 2.2rem;
  color: #FFFFFF;
  font-weight: 900;
  padding: 0rem 0.2rem;
}

.div_t_body .body_desc {
  font-size: 1.4rem;
  color: #FFFFFF;
  padding: 0.6rem 0.1rem 1rem 0.1rem;
}

.div_t_body .body_line {
  width: 100%;
  background: #FFC636;
  border-radius: 10px;
  height: 0.6rem;
}

.div_t_body .body_ticket_list {
  background: #FBF2D1;
  /*box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);*/
  margin: 0% 1.4%;
  padding: 3% 3% 6% 3%;
  background-image: -webkit-gradient(linear, 50% 0, 0 100%, from(transparent), color-stop(.5, transparent), color-stop(.5, #FC7B53), to(#FC7B53)), -webkit-gradient(linear, 50% 0, 100% 100%, from(transparent), color-stop(.5, transparent), color-stop(.5, #FC7B53), to(#FC7B53));
  background-image: -moz-linear-gradient(50% 0 45deg, transparent, transparent 50%, #d86707 50%, #FC7B53), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #FC7B53 50%, #FC7B53);
  background-size: 16px 5px;
  background-repeat: repeat-x;
  background-position: 0 100%;
}

::-webkit-scrollbar {
  width: 0px;
  display: none;
}

.body_ticket_list .ticket_item {
  display: flex;
  width: 100%;
  background: #FFFFFF;
  height: 75px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 5px #DDDDDD;
  border-radius: 0.4rem;
  margin-bottom: 3%;
  background-image: url(./../assets/icon_bg_ticket.png);
  background-size: 8px 18px;
  background-repeat: repeat-y;
  background-position: 0 100%;
}

.body_ticket_list .ticket_item:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 10px;
  z-index: -1;
}

.body_ticket_list .ticket_item:nth-last-child(1) {
  margin-bottom: 0%;
}

.body_ticket_list .ticket_item .item_money {
  flex: 1;
  -webkit-flex: 1;
  color: #FC7B53;
  height: 70px;
  line-height: 70px;
  padding: 0rem 0.8rem 0rem 0.5rem;
  min-width: 100px;
  border-right: 2px dotted #FBF2D1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.body_ticket_list .ticket_item .item_money .item_sub {
  font-size: 1.6rem;
}

.body_ticket_list .ticket_item .item_money span {
  font-size: 3rem;
}

.body_ticket_list .ticket_item .item_desc {
  flex: 2;
  -webkit-flex: 2;
  padding: 1.2rem 0.5rem 0.5rem 1rem;
  text-align: left;
}

.body_ticket_list .ticket_item .item_desc .item_desc_title {
  font-size: 1.6rem;
  color: #FFC636;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 110px;
}

.body_ticket_list .ticket_item .item_desc .item_desc_desc {
  font-size: 1.2rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 110px;
}

.div_t_body .body_footer {
  font-size: 1.2rem;
  color: #FFFFFF;
  padding: 3% 0% 0% 0%;
  position: relative;
}

.div_t_body .body_footer:before {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDCE94;
  width: 6%;
  left: 8%;
  bottom: 25%;
}

.div_t_body .body_footer:after {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDCE94;
  width: 6%;
  right: 8%;
  bottom: 25%;
}

.div_t_body .body_share {
  padding-top: 2%;
  height: 40px;
}

.div_t_body .body_share img {
  width: 200px;
  height: 40px;
}

.div_t_dialog .div_t_close {
  position: fixed;
  z-index: 13;
  right: 0%;
  top: 0%;
  width: 10%;
}
</style>
