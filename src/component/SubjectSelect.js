import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';

const subjects = [
  { id: '1', name: 'Mathematics', icon: '📐' },
  { id: '2', name: 'Science', icon: '🔬' },
  { id: '3', name: 'English', icon: '📚' },
  { id: '4', name: 'History', icon: '🏛️' },
  { id: '5', name: 'Geography', icon: '🌍' },
  { id: '6', name: 'Physics', icon: '⚡' },
  { id: '7', name: 'Chemistry', icon: '🧪' },
  { id: '8', name: 'Biology', icon: '🧬' },
  { id: '9', name: 'Computer Science', icon: '💻' },
  { id: '10', name: 'Art', icon: '🎨' },
];

const SubjectSelect = ({ onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    onSelect(subject);
    setModalVisible(false);
  };

  const renderSubjectItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.subjectItem,
        selectedSubject?.id === item.id && styles.selectedSubject,
      ]}
      onPress={() => handleSubjectSelect(item)}
    >
      <Text style={styles.subjectIcon}>{item.icon}</Text>
      <Text style={styles.subjectName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectorButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorButtonText}>
          {selectedSubject ? selectedSubject.name : 'Select Subject'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <SafeAreaView style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select a Subject</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={subjects}
              renderItem={renderSubjectItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.subjectList}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  selectorButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectorButtonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#666',
  },
  subjectList: {
    padding: 10,
  },
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f8f8f8',
  },
  selectedSubject: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#2196f3',
  },
  subjectIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  subjectName: {
    fontSize: 16,
    color: '#333',
  },
});

export default SubjectSelect;