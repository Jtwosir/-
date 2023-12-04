Page({
  data: {
    inputTop: '25vh',
    inputContent: '',
    goodsList: [] ,
    test,
  },


  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
    };
  },

  sortinput(e) {
    console.log(e.detail.value);
  },

  onSearch(e) {
    this.setData({
      inputTop: '0',
    });
    const keyword = e.detail.value;
    // 实现搜索的逻辑，如发送网络请求或跳转到搜索结果页面等
    // ...
  },
});