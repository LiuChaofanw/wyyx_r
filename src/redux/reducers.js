import {combineReducers} from 'redux'
import {
  RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS,
  SWITCH_HEADER
} from './action-types'

//导航数据
const initHeadCates=[]
function headCates(state=initHeadCates, action) {
  if(action.type === RECEIVE_HEADCATES){
    return action.data
  }else {
    return state
  }
}

//首页轮播数据
const initFocusLists=[]
function focusLists(state = initFocusLists, action) {
  if(action.type === RECEIVE_FOCUSLISTS){
    return action.data
  }else {
    return state
  }
}

//品牌制造商数据
const initTagLists =[]
function tagLists(state = initTagLists, action) {
  if(action.type === RECEIVE_TAGLISTS){
    return action.data
  }else {
    return state
  }
}

//新品首发数据
const initNewItemLists = []
function newItemLists(state = initNewItemLists, action) {
  if(action.type === RECEIVE_NEWITEMLISTS){
    return action.data
  }else {
    return state
  }
}

//人气推荐列表
const initPopularItemLists = []
function popularItemLists(state = initPopularItemLists, action) {
  if (action.type === RECEIVE_POPULARITEMLISTS){
    return action.data
  }else {
    return state
  }
}

//限时购图片和福利社
const initFlashSaleIndexVO = {}
function flashSaleIndexVO(state=initFlashSaleIndexVO,action) {
  if(action.type === RECEIVE_FLASHSALEINDEXVO){
    return action.data
  }else {
    return state
  }
}

const initTopicLists = []
function topicLists(state = initTopicLists, action) {
  if (action.type === RECEIVE_TOPICLISTS){
    return action.data
  }else {
    return state
  }
}

function cateLists(state = [], action) {
  if(action.type === RECEIVE_CATELISTS){
    return action.data
  }else {
    return state
  }
}

//识物banner
function banners(state = [], action) {
  if(action.type === RECEIVE_BANNERS){
    return action.data
  }else {
    return state
  }
}

//banner下面的channel
function columns(state = [], action) {
  if (action.type === RECEIVE_COLUMNS){
    return action.data
  }else {
    return state
  }
}

//为你推荐
function recommend(state = {}, action) {
  if(action.type === RECEIVE_RECOMMEND){
    return action.data
  }else {
    return state
  }
}

//十点一刻
function tenfifteens(state = [], action) {
  if(action.type === RECEIVE_TENFIFTEENS){
    return action.data
  }else {
    return state
  }
}

//严选甄品
function zhenpin(state = {}, action) {
  if (action.type === RECEIVE_ZHENPIN){
    return action.data
  }else {
    return state
  }
}

//严选LOOK
function yxLook(state = {},action) {
  if (action.type === RECEIVE_YXLOOK){
    return action.data
  }else {
    return state
  }
}

//更多精选
function findMores(state = [],action) {
  if(action.type === RECEIVE_FINDMORES){
    return action.data
  }else {
    return state
  }
}

//分类页数据
function categorys(state = [],action) {
  if (action.type === RECEIVE_CATEGORYS){
    return action.data
  }else {
    return state
  }
}

//头部
function isClose(state = false, action) {
  if(action.type === SWITCH_HEADER){
    return true
  }else {
    return state
  }
}




export default combineReducers({
  headCates,
  focusLists,
  tagLists,
  newItemLists,
  popularItemLists,
  flashSaleIndexVO,
  topicLists,
  cateLists,
  banners,
  columns,
  recommend,
  tenfifteens,
  zhenpin,
  yxLook,
  findMores,
  categorys,
  isClose
})