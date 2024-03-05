import React, {useState, useEffect} from 'react';
import { SafeAreaView, View,StyleSheet,Dimensions,TouchableOpacity,Text, ScrollView, Button } from "react-native";
import { DataTable, TextInput } from "react-native-paper";
import Footer from '../../../Untils/Footer';
import HeaderBack from '../../../Untils/HeaderBack';
const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;
const soanhoso=()=>{
    return <SafeAreaView style={styles.container}>
         <HeaderBack
              title="SOẠN HỒ SƠ"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.body}>
              <ScrollView>
              <View style={[styles.viewngang]}>
                  <View style={{width: '40%'}}>
                    <Text style={styles.TextBold}>Tên thủ tục</Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row'}}>
                    <Text style={styles.TextBold}>: </Text>
                    <Text style={styles.TextNormal}>QUY TRÌNH NGHỈ THAI SẢN</Text>
                  </View>
                </View>
                <View style={[styles.viewngang]}>
                  <View style={{width: '40%'}}>
                    <Text style={styles.TextBold}>Đơn vị tiếp nhận</Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row'}}>
                    <Text style={styles.TextBold}>: </Text>
                    <Text style={styles.TextNormal}>Phòng tổ chức cán bộ</Text>
                  </View>
                </View>
                <View style={[styles.viewngang]}>
                  <View style={{width: '40%'}}>
                    <Text style={styles.TextBold}>Nơi trả kết quả</Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row'}}>
                    <Text style={styles.TextBold}>: </Text>
                    <Text style={styles.TextNormal}>1-Minh Khai</Text>
                  </View>
                </View>
                <View style={[styles.viewngang]}>
                  <View style={{width: '40%',justifyContent:'center'}}>
                    <Text style={styles.TextBold}>Email liên hệ</Text>
                  </View>
                  <View style={{justifyContent:'center'}}>
                  <Text style={styles.TextBold}>: </Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row'}}>
                    
                    <View style={{borderColor:'black',borderRadius:10,}}>
                      <TextInput  underlineColor="transparent"
                    style={styles.textInput}
                    onChangeText={text => {
                     
                    }}
                    placeholder="Ví dụ:example@gmail.com"
                    />
                    </View>
                  </View>
                </View>
                <View style={[styles.viewngang]}>
                  <View style={{width: '40%',justifyContent:'center'}}>
                    <Text style={styles.TextBold}>Số điện thoại liên hệ</Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row',justifyContent:'center'}}>
                   <View style={{justifyContent:'center'}}>
                   <Text style={styles.TextBold}>: </Text>
                   </View>
                    
                    <View style={{borderColor:'black',borderRadius:10}}>
                      <TextInput underlineColor="transparent"
                    style={styles.textInput}
                    onChangeText={text => {
                    }}
                    placeholder="0334350166 hoặc +8434350166"/>
                    </View>
                  </View>
                </View>
                <Text style={[styles.TextBold,{marginTop:10}]}>Nội dung yêu cầu:</Text>
                <TextInput underlineColor="transparent"
                    style={[styles.textInput,{width:'99%',height:90,justifyContent:''}]}
                    onChangeText={text => {
                    }}
                    multiline={true}
                    placeholder="Nhập nội dung"/>
                       <View style={[styles.viewngang]}>
                  <View style={{width: '40%',justifyContent:'center'}}>
                    <Text style={styles.TextBold}>Nhập số lượng bản</Text>
                  </View>
                  <View style={{justifyContent:'center'}}>
                  <Text style={styles.TextBold}>: </Text>
                  </View>
                  <View style={{width: '60%', flexDirection: 'row'}}>
                    <View style={{borderColor:'black',borderRadius:10,}}>
                      <TextInput  underlineColor="transparent"
                    style={[styles.textInput,{width:'200%'}]}
                    onChangeText={text => {
                     
                    }}
                    />
                    </View>
                  </View>
                </View>
                <Text style={[styles.TextBold,{marginTop:10}]}>Danh sách giấy tờ kèm theo:</Text>
                <ScrollView horizontal>
                <DataTable style={{width:1000,marginLeft:-15,marginRight:-200, marginBottom:10}}>
                      <DataTable.Header>
                        <DataTable.Title
                          style={[{
                            flex: 0.05,
                            borderTopLeftRadius:10
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                            STT
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title
                          style={[{
                            flex: 0.2,
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                           Tên giấy tờ
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title
                          style={[{
                            flex: 0.1,
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                            Bản chính
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title
                          style={[{
                            flex: 0.1,
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                           Bản sao
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title
                          style={[{
                            flex: 0.1,
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                           Bắt buộc
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title
                          style={[{
                            flex: 0.25,
                            
                          },styles.TitleTable]}>
                          <Text style={[styles.TextBold,{color:'white'}]}>
                          Tệp đính kèm
                          </Text>
                        </DataTable.Title>
                      </DataTable.Header>
                     
                      <DataTable.Row >
                      <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.05,
                            }]}>
                            <Text style={styles.TextNormal}>
                              1
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.2,
                            }]}>
                            <Text style={styles.TextNormal}>
                              Đơn xin nghỉ thai sản
                              Xem/tải mẫu: TCCB.M01 - Đơn xin nghỉ thai sản.docx
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                            23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                              23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                            23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTableFirst,{
                              flex: 0.25,
                            }]}>
                            <View style={{flexDirection:'column'}}>
                            <View>
                              <TouchableOpacity style={{borderRadius:5,borderWidth:1,width:'30%',marginLeft:5}}>
                                <Text style={{color:'black',fontSize:16}}>Chọn tệp</Text>
                              </TouchableOpacity>
                            </View>
                            <Text style={[styles.TextNormal,{textAlign:'left',marginLeft:5}]}>Các loại file tải lên phải có dạng PDF,PNG,JPG,JPEG hoặc GIF(Kích thước tối đa 5MB)</Text>
                            </View>
                            
                          </DataTable.Cell>
                         
                      </DataTable.Row>
                      <DataTable.Row >
                      <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.05,
                            }]}>
                            <Text style={styles.TextNormal}>
                              1
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.2,
                            }]}>
                            <Text style={styles.TextNormal}>
                              Đơn xin nghỉ thai sản
                              Xem/tải mẫu: TCCB.M01 - Đơn xin nghỉ thai sản.docx
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                            23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                              23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.1,
                            }]}>
                            <Text style={styles.TextNormal}>
                            23
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell
                            style={[styles.CellTable,{
                              flex: 0.25,
                            }]}>
                            <View style={{flexDirection:'column'}}>
                            <View>
                              <TouchableOpacity style={{borderRadius:5,borderWidth:1,width:'30%',marginLeft:5}}>
                                <Text style={{color:'black',fontSize:16}}>Chọn tệp</Text>
                              </TouchableOpacity>
                            </View>
                            <Text style={[styles.TextNormal,{textAlign:'left',marginLeft:5}]}>Các loại file tải lên phải có dạng PDF,PNG,JPG,JPEG hoặc GIF(Kích thước tối đa 5MB)</Text>
                            </View>
                            
                          </DataTable.Cell>
                         
                      </DataTable.Row>
                      </DataTable>
                </ScrollView>
              

              </ScrollView>
            </View>
            <View style={styles.footer}>
              <View style={[styles.buttonHuy, {marginLeft: 30}]}>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => {}}>
                  <Text style={{color: 'black', fontSize: 19}}>Hủy</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.buttonHuy, {marginRight: 30}]}>
                <TouchableOpacity
                  style={[
                    styles.touchableOpacity,
                    {backgroundColor: '#245d7c'},
                  ]}
                  onPress={() => {}}>
                  <Text style={{color: '#ffffff', fontSize: 19}}>
                    Gửi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Footer/>
    </SafeAreaView>
}
export default soanhoso
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      width: getWidth,
      height: getHeight,
    },
   body:{
        height:'67%',
        backgroundColor:'#ffffff',
        marginHorizontal:5,
        marginTop:10
   },
   footer:{
        height:'10%',
        flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
   },
   ViewBottom:{
    height:'%'
   },
   touchableOpacity:{
     width: '100%',
     height: '100%',
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 40,
   },
   containerTable:{
   marginTop:20
   }
   ,
   viewngang:{
     flexDirection:'row',
     width:'100%',
     height:'auto',
     marginTop:10
   }
   ,
   TitleTable:{
     backgroundColor: '#2e6b8b',
     justifyContent: 'center',
     marginLeft:1,
     justifyContent:'center',
     alignItems:'center',
     
     
   },
   CellTable:{
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#f7f9ff',
     marginLeft: 0.5,
     shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        marginTop:10
   },
   CellTableFirst:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f9ff',
    marginLeft: 0.5,
    shadowColor: 'black',
       shadowOffset: {
         width: 0,
         height: -5,
       },
       shadowOpacity: 1,
       shadowRadius: 5,
       elevation: 5,
      
  }
   ,
   buttonHuy: {
     width: '40%',
     height: 40,
     borderRadius: 40,
     backgroundColor: '#ffffff',
     shadowColor: 'black',
     shadowOpacity: 0.5,
     shadowRadius: 5,
     shadowOffset: {width: 0, height: 2},
     elevation: 5,
   },
   TextNormal:{
     fontSize:17,
     color:'black',
     textAlign:'center'
   }
   ,
   TextBold:{
     fontSize:17,
     fontWeight:'bold',
     color:'black'
   },
   textInput: {
    height: 20,
    width: '98%',
    fontSize: 17,
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 7,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#ffffff',
    
  },

  });
  