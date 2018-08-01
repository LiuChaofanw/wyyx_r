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

import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData
} from '../api'

//获取导航条数据的同步action
const receiveHeadCateList = (data) => ({type: RECEIVE_HEADCATES, data})

export const getHeadCateList = () => {
  return async dispatch => {
    const result=await reqHeadCateList()
    if(result.code===0){
      const data=result.data
      dispatch(receiveHeadCateList(data))
    }
  }
}

//获取首页轮播图的同步action
const receiveFocusLists = (data) => ({type: RECEIVE_FOCUSLISTS,data})

export const getFocusLists = () => {
  return async dispatch => {
    const result = await reqFocusList()
    if (result.code === 0){
      const data=result.data
      dispatch(receiveFocusLists(data))
    }
  }

}

//获取品牌制造商
const receiveTagLists = (data) => ({type:RECEIVE_TAGLISTS, data})
export const getTagLists = () => {
  return async dispatch => {
    const result = await reqTagList()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveTagLists(data))
    }
  }
}

//获取新品首发数据
const receiveNewItemLists = (data) => ({type: RECEIVE_NEWITEMLISTS, data})
export const getNewItemLists = () => {
  return async dispatch => {
    const result = await reqNewItemList()
    if (result.code === 0){
      const data = result.data
      dispatch(receiveNewItemLists(data))
    }
  }
}

//人气推荐数据
const receivePopularItemLists = (data) => ({type: RECEIVE_POPULARITEMLISTS,data})
export const getPopularItemLists = () => {
  return async dispatch => {
    const result = await reqPopularItemList()
    if (result.code === 0){
      const data = result.data
      dispatch(receivePopularItemLists(data))
    }
  }
}

//限时购图片和福利社
const receiveFlashSaleIndexVO = (data) => ({type:RECEIVE_FLASHSALEINDEXVO,data})
export const getFlashSaleIndexVO = () => {
  return async dispatch => {
    const result = await reqFlashSaleIndexVO()
    if(result.code === 0) {
      const data = result.data
      dispatch(receiveFlashSaleIndexVO(data))
    }
  }
}

//专题精选数据
const receiveTopicLists = (data) => ({type:RECEIVE_TOPICLISTS, data})
export const getTopicLists = () => {
  return async dispatch => {
    const result = await reqTopicList()
    if (result.code === 0){
      const data = result.data
      dispatch(receiveTopicLists(data))
    }
  }
}

//居家及以下所有
const receiveCateLists = (data) => ({type:RECEIVE_CATELISTS,data})
export const getCateLists = () => {
  return async dispatch => {
    const result = await reqCateList()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveCateLists(data))
    }
  }
}

//识物banner
const receiveBanners = (data) => ({type:RECEIVE_BANNERS, data})
export const getBanners = () => {
  return async dispatch => {
    const result = await reqBanner()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveBanners(data))
    }
  }
}

//banner下面的channel
const receiveColumns = (data) => ({type:RECEIVE_COLUMNS, data})
export const getColumns = () => {
  return async dispatch => {
    const result = await reqColumn()
    if (result.code === 0){
      const data = result.data
      dispatch(receiveColumns(data))
    }
  }
}

//为你推荐
const receiveRecommend = (data) => ({type: RECEIVE_RECOMMEND, data})
export const getRecommend = () => {
  return async dispatch => {
    const result = await reqRecommend()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveRecommend(data))
    }
  }
}

//十点一刻
const receiveTenfifteens = (data) => ({type: RECEIVE_TENFIFTEENS, data})
export const getTenfifteens = () => {
  return async dispatch => {
    const result = await reqTenfifteen()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveTenfifteens(data))
    }
  }
}

//严选甄品
const receiveZhenpin = (data) => ({type:RECEIVE_ZHENPIN, data})
export const getZhenpin = () => {
  return async dispatch => {
    const result = await reqZhenpin()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveZhenpin(data))
    }
  }
}

//严选LOOK
const receiveYxLook = (data) => ({type:RECEIVE_YXLOOK,data})
export const getYxLook = () => {
  return async dispatch => {
    const result = await reqYxLook()
    if (result.code === 0){
      const data = result.data
      dispatch(receiveYxLook(data))
    }
  }
}

//更多精选
const receiveFindMores = (data) => ({type:RECEIVE_FINDMORES,data})
export const getFindMores = () => {
  return async dispatch => {
    const result = await reqFindMore()
    if(result.code === 0){
      const data = result.data
      dispatch(receiveFindMores(data))
    }
  }
}

//分类页数据
const receiveCategorys = (data) => ({type: RECEIVE_CATEGORYS,data})
export const getCategorys = () => {
  return async dispatch => {
    const result = await reqCategoryData()
    if (result.code === 0){
      const data = result.data
      dispatch(receiveCategorys(data))
    }
  }
}

export const switchHeader = () => ({type: SWITCH_HEADER})