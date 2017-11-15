import testDrive from '../../modules/test-drive.js'


const app=getApp()

Page({
  data: {
    entity:null
  },
testDrive,

preview(event){
  const slidesName = event.target.dataset.sliders
const index = event.target.dataset.index
 const slides=this.data.entity.meta[slidesName]
 const images=[]
 slides.map((item) => {
   images.push(item.image)
 })

 wx.previewImage({
   urls:image,
   current:images[index]
 })
},


  onLoad(options){
    const id = options.id
    const entity = app.globalData.vehicles.filter((item)=>{return item.id == id
})

this.setData({
  entity: entity[0]
})

wx.setNavigationBarTitle({
  title: this.data.entity.header
})
  }
})