import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import CheckBox from 'react-native-check-box';

import {DataTable} from 'react-native-paper';
import HeaderBack from '../../../Untils/HeaderBack';
import Footer from '../../../Untils/Footer';
const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;
const Chitietthutuc = (props) => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const [checkboxColor, setCheckboxColor] = useState('#245d7c');
  const [checkboxUncheckedColor, setCheckboxUncheckedColor] = useState('gray');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        title="CHI TIẾT THỦ TỤC"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={styles.body}>
        <ScrollView>
          <Text
            style={[
              styles.TextBold,
              {textDecorationLine: 'underline', fontSize: 18, marginTop: 15},
            ]}>
            Thông tin thủ tục
          </Text>
          <View style={[styles.viewngang]}>
            <View style={{width: '40%'}}>
              <Text style={styles.TextBold}>Lĩnh vực</Text>
            </View>
            <View style={{width: '60%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={styles.TextNormal}>TTCB</Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '40%'}}>
              <Text style={styles.TextBold}>Mã thủ tục</Text>
            </View>
            <View style={{width: '60%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={styles.TextNormal}>TTHC-TCCB-01</Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '40%'}}>
              <Text style={styles.TextBold}>Tên thủ tục</Text>
            </View>
            <View style={{width: '60%', flexDirection: 'row'}}>
              <Text style={styles.TextNormal}>: QUY TRÌNH NGHỈ THAI SẢN</Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '40%'}}>
              <Text style={styles.TextBold}>Thủ tục liên thông</Text>
            </View>
            <View style={{width: '60%', flexDirection: 'row'}}>
              <Text>: </Text>
              <CheckBox
                value={isChecked}
                onValueChange={() => {
                  setChecked(!isChecked);
                }}
                tintColors={{
                  true: checkboxColor,
                  false: checkboxUncheckedColor,
                }}
              />
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '65%'}}>
              <Text style={styles.TextBold}>
                Thủ tục không áp dụng trực tuyến
              </Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text>: </Text>
              <CheckBox
                value={isChecked1}
                onValueChange={() => {
                  setChecked1(!isChecked1);
                }}
                tintColors={{
                  true: checkboxColor,
                  false: checkboxUncheckedColor,
                }}
              />
            </View>
          </View>

          <View style={styles.containerTable}>
            <Text style={[styles.TextBold]}>Thành phần hồ sơ đề nghị:</Text>
            <ScrollView horizontal>
              <DataTable
                style={{
                  width: 1000,
                  marginLeft: -15,
                  marginRight: -350,
                  marginBottom: 10,
                }}>
                <DataTable.Header>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.05,
                        borderTopLeftRadius: 10,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>STT</Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.1,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Tên giấy tờ
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.2,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Mẫu hồ sơ/Hướng dẫn
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.1,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Bản chính
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.1,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Bản sao
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.1,
                        borderTopRightRadius: 10,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Bắt buộc
                    </Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.05,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Đơn xin nghỉ thai sản</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      Xem mẫu hướng dẫn: (TCCB.M01 - Đơn xin nghỉ thai sản.doc)
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>23</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      <CheckBox
                        value={isChecked2}
                        onValueChange={() => {
                          setChecked2(!isChecked2);
                        }}
                        tintColors={{
                          true: checkboxColor,
                          false: checkboxUncheckedColor,
                        }}
                      />
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      <CheckBox
                        value={isChecked3}
                        onValueChange={() => {
                          setChecked3(!isChecked3);
                        }}
                        tintColors={{
                          true: checkboxColor,
                          false: checkboxUncheckedColor,
                        }}
                      />
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.05,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Đơn xin nghỉ thai sản</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      Xem mẫu hướng dẫn: (TCCB.M01 - Đơn xin nghỉ thai sản.doc)
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>23</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      <CheckBox
                        value={isChecked2}
                        onValueChange={() => {
                          setChecked2(!isChecked2);
                        }}
                        tintColors={{
                          true: checkboxColor,
                          false: checkboxUncheckedColor,
                        }}
                      />
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      <CheckBox
                        value={isChecked3}
                        onValueChange={() => {
                          setChecked3(!isChecked3);
                        }}
                        tintColors={{
                          true: checkboxColor,
                          false: checkboxUncheckedColor,
                        }}
                      />
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </ScrollView>
          </View>
          <View style={[styles.viewngang, {marginTop: 20}]}>
            <View style={{width: '50%'}}>
              <Text style={styles.TextBold}>Số bộ hồ sơ</Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text style={styles.TextNormal}>: 1 bộ</Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '50%'}}>
              <Text style={styles.TextBold}>Tổng thời gian giải quyết</Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={[styles.TextNormal, {textAlign: 'left'}]}>
                0.5 ngày kể từ khi nhận đủ hồ sơ hợp lệ
              </Text>
            </View>
          </View>

          <View style={[styles.containerTable, {marginTop: 10}]}>
            <Text style={styles.TextBold}>Mô tả trình tự thực hiện:</Text>
            <ScrollView horizontal flexGrow={1} flexShrink={1}>
              <DataTable
                style={{
                  width: 1300,
                  marginLeft: -15,
                  marginRight: -15,
                  marginBottom: 10,
                }}>
                <DataTable.Header>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.1,
                        borderTopLeftRadius: 10,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Bước
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.2,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Tên công việc
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.27,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Cách thức thực hiện
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.35,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Địa chỉ tiếp nhận, trả hồ sơ
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.5,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Đơn vị thực hiện được ủy quyền thực hiện
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.2,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Đơn vị phối hợp
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.2,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Thời gian(ngày)
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={[
                      {
                        flex: 0.2,
                        borderTopRightRadius: 10,
                      },
                      styles.TitleTable,
                    ]}>
                    <Text style={[styles.TextBold, {color: 'white'}]}>
                      Kết quả
                    </Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Tiếp nhận hồ sơ</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.27,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      Nộp trực tuyến truyền thông qua Web/App
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.35,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1-Minh Khai</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.5,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Phòng Tổ Chức Cán Bộ</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Đơn vị phối hợp</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>0.5</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTableFirst,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      - Nộp bản scan đơn xin nghỉ TS; - Thông báo xác nhận đã
                      gửi đề nghị
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.1,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Tiếp nhận hồ sơ</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.27,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      Nộp trực tuyến truyền thông qua Web/App
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.35,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>1-Minh Khai</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.5,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Phòng Tổ Chức Cán Bộ</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>Đơn vị phối hợp</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>0.5</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={[
                      styles.CellTable,
                      {
                        flex: 0.2,
                      },
                    ]}>
                    <Text style={styles.TextNormal}>
                      - Nộp bản scan đơn xin nghỉ TS; - Thông báo xác nhận đã
                      gửi đề nghị
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </ScrollView>
          </View>
          <View style={[styles.viewngang, {marginTop: 20}]}>
            <View style={{width: '50%'}}>
              <Text style={styles.TextBold}>Phí, lệ phí</Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={[styles.TextNormal, {textAlign: 'left'}]}>
                Không tính phí
              </Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '50%'}}>
              <Text style={styles.TextBold}>Căn cứ pháp lý của TTHC</Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={[styles.TextNormal, {textAlign: 'left'}]}></Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '80'}}>
              <Text style={styles.TextBold}>
                Yêu cầu hoặc điều kiện để thực hiện TTHC
              </Text>
            </View>
            <View style={{width: '20%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={[styles.TextNormal, {textAlign: 'left'}]}></Text>
            </View>
          </View>
          <View style={styles.viewngang}>
            <View style={{width: '50%'}}>
              <Text style={styles.TextBold}>Tệp thủ tục</Text>
            </View>
            <View style={{width: '50%', flexDirection: 'row'}}>
              <Text>: </Text>
              <Text style={[styles.TextNormal, {textAlign: 'left'}]}>
                Không tính phí
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={[styles.buttonHuy, {marginLeft: 30}]}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => {}}>
            <Text style={{color: 'black', fontSize: 19}}>Hủy</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonHuy, {marginRight: 30}]}>
          <TouchableOpacity
            style={[styles.touchableOpacity, {backgroundColor: '#245d7c'}]}
            onPress={() => {props.navigation.navigate('SoanHoSo')}}>
            <Text style={{color: '#ffffff', fontSize: 19}}>Soạn hồ sơ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};
export default Chitietthutuc;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: getWidth,
    height: getHeight,
  },
  body: {
    height: '67%',
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  footer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  ViewBottom: {
    height: '%',
  },
  touchableOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  containerTable: {
    marginTop: 20,
  },
  viewngang: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    marginTop: 10,
  },
  TitleTable: {
    backgroundColor: '#2e6b8b',
    justifyContent: 'center',
    marginLeft: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CellTable: {
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
    marginTop: 10,
  },
  CellTableFirst: {
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
  },
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
  TextNormal: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  TextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
