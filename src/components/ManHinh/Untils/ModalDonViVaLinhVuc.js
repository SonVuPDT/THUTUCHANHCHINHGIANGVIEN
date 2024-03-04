import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';

const ModalDonViVaLinhVuc = props => {
  const {visible, onClose, message} = props;
  const [checked, unchecked] = useState('false');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.viewContainer}>
        <View style={styles.viewModal}></View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },

  viewModal: {
    width: 280,
    margin: 20,
    backgroundColor: 'black',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 8,
    shadowRadius: 4,
    elevation: 10,
  },

  modalText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
});
export default ModalDonViVaLinhVuc;
