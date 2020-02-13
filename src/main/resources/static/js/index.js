 let id = 0;
let  baseURL="/citycascade/";
let    tempDataList={};
 var vm=new Vue({
      el: '#cityCascade_id',
      data:  {
loading:true,
       options: []
       ,
       childrenList:[],

                formShipAddress:{
                        addressee:'',//收件人
                    ship_address:'',//收件地址（行政地址）
                    ship_address_detail:'',//详细地址
                    ship_addressee_mobile_phone:'',//收件人手机
                    ship_addressee_email:'',//收件人邮箱
                    ship_address_fixed_phone:''//固话
                },
                shipAddressEntity:{
                    addressee:'',//收件人
                ship_address:'',//收件地址（行政地址）
                ship_address_detail:'',//详细地址
                ship_addressee_mobile_phone:'',//收件人手机
                ship_addressee_email:'',//收件人邮箱
                ship_address_fixed_phone:''//固话
                },
                 formLabelWidth: '120px',
                 tempValue:[],
                 tempName:'',
                 charConn:'/',
                 rules:{
                     addressee: [
                                 { required: true, message: '请输入收件人', trigger: 'blur' }
                               ],
                      ship_address:[
                          { required: true, message: '请选择所在地区', trigger: 'change' }
                      ],

                      ship_address_detail:[
                          { required: true, message: '请输入详细地址', trigger: 'blur' }
                      ],

                      ship_addressee_mobile_phone:[
                          { required: true, message: '请输入收件人手机', trigger: 'blur' }
                      ]
                 }
      },
      created: function () {
                      this.getAreaParentList();
                      },
      methods :{
            doEnsureAddShipAddress: function (formName){
                        this.$refs[formName].validate((valid) => {
                          if (valid) {
                       this.shipAddressEntity.addressee =this.formShipAddress.addressee;
                                     this.shipAddressEntity.ship_address_detail=this.formShipAddress.ship_address_detail;
                                     this.shipAddressEntity.ship_addressee_mobile_phone=this.formShipAddress.ship_addressee_mobile_phone;
                                     this.shipAddressEntity.ship_addressee_email=this.formShipAddress.ship_addressee_email;
                                     this.shipAddressEntity.ship_address_fixed_phone=this.formShipAddress.ship_address_fixed_phone;


                                        $.ajax({url: baseURL+"area/area", async: true, type: "POST", dataType: "json",
                                                                 data: {'m':JSON.stringify(vm.tempValue)},
                                                                success: function (results) {
                                                                 var resultCode=results.code;
                                                                 var i=0;
                                                                if(resultCode==0){
                                                                    for(let a of results.result){
                                                                        i++;
                                                                        if(i>2){
                                                                               vm.tempName= vm.tempName.concat(a.name);
                                                                        }else{
                                                                              vm.tempName= vm.tempName.concat(a.name+ vm.charConn);
                                                                        }

                                                                    }

                                              vm.shipAddressEntity.ship_address=vm.tempName;
                                                                    }
                                                             }
                                                             });
                                                             vm.tempName='';
                          } else {
                            return false;
                          }
                        });



                },
                 handleChange :function(node) {
                     vm.tempValue=node;
                      }
                ,
                getAreaParentList:function(){
                    //初始
                    let pid =0;
                    var areaEntity ={};
                    areaEntity.pid=pid;
                    $.ajax({url: baseURL+"area/list", async: true, type: "POST", dataType: "json",
                            data: areaEntity,
                           success: function (results) {
                            var resultCode=results.code;
                           if(resultCode==0){
                               tempDataList=results.result;
                                   vm.options= Array.from(tempDataList)
                                                    .map(
                                                        item => ({value:item.cid,
                                                                  label:item.name,
                                                                  leaf:0,
                                                                  children:vm.childrenList
                                                                   })
                                                    );

                               }
                        }
                        });

                },
                handleLeafChange:function(value){
                    if(value.length===1){
                          var areaEntity ={};
                           areaEntity.pid=value[0];
                            $.ajax({url: baseURL+"area/list", async: true, type: "POST", dataType: "json",
                                                    data: areaEntity,
                                                   success: function (results) {
                                                    var resultCode=results.code;
                                                   if(resultCode==0){
                                                       let  tempDataList={};
                                                        tempDataList=results.result;
                                                           for(let a of vm.options){
                                                               if(value[0]===a.value){
                                                                     a.children=  Array.from(tempDataList).map(item => ({value:item.cid,
                                                                                                                       label:item.name,
                                                                                                                      leaf:1,
                                                                                                                      children:vm.childrenList
                                                                                                                      })
                                                                                                                );
                                                               }

                                                           }

//

                                                       }
                                                }
                                                });




                    }
                    if(value.length===2){
                                 var areaEntity ={};
                                  areaEntity.pid=value[1];
                                  $.ajax({url: baseURL+"area/list", async: true, type: "POST", dataType: "json",
                                   data: areaEntity,
                                  success: function (results) {
                                   var resultCode=results.code;
                                    if(resultCode==0){
                                    let  tempDataList={};
                                    tempDataList=results.result;

                                    for(let a of vm.options){
                                  if(value[0]===a.value){
                                      for(let b of a.children){
                                          if(value[1]===b.value){
                                              b.children=  Array.from(tempDataList).map(item => ({value:item.cid,
                                                                                                  label:item.name,
                                                                                                  leaf:2,
                                                                                                   })
                                                                                            );
                                          }
                                      }


                                  }

                                                            }











                                                           }
                                                                 }
                                           });
                    }
                }


      }

    });