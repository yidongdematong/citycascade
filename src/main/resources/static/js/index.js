 let id = 0;
let  baseURL="/citycascade/";

 var vm=new Vue({
      el: '#cityCascade_id',
      data:  {
        props: {
                  lazy: true,
                  lazyLoad (node, resolve) {
                    const { level } = node;
                    setTimeout(() => {
                      const nodes = Array.from({ length: level + 1 })
                        .map(item => ({
                          value: ++id,
                          label: `选项${id}`,
                          leaf: level >= 2
                        }));
                      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                      resolve(nodes);
                    }, 1000);
                  }
                },
                formShipAddress:{
                        addressee:'',//收件人
                        ship_address_mobile_phone:'',//收件人手机
                    ship_address:'',//收件地址（行政地址）
                    ship_address_detail:'',//详细地址
                    ship_addressee_mobile_phone:'',//收件人手机
                    ship_addressee_email:'',//收件人邮箱
                    ship_address_fixed_phone:''//固话
                },
                 formLabelWidth: '120px',
      },
      created: function () {
                      this.getAreaParentList();
                      },
      methods :{
            doEnsureAddShipAddress: function (){
                    console.log("保存");
                },
                getAreaParentList:function(){
                    //初始
                    let pid =0;
                    var areaEntity ={};
                    areaEntity.pid=pid;
                    $.ajax({url: baseURL+"area/list", async: true, type: "POST", dataType: "json",
                            data: areaEntity,
                           success: function (results) {
                            var resultCode=results.code;
                           console.log(results);
                           if(resultCode==0){
                                    console.log("code");
                               }
                        }
                        });

                }
      }

    });