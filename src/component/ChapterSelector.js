// components/ChapterSelector.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';

// Sample chapters data - you can replace this with your actual data
const chapters = [
  {
    id: '1',
    name: 'Algebra',
    number: 1,
    totalTopics: 8,
    completed: true,
  },
  {
    id: '2',
    name: 'Linear Equ',
    number: 2,
    totalTopics: 12,
    completed: true,
  },
  {
    id: '3',
    name: 'Quadratic Equ',
    number: 3,
    totalTopics: 10,
    completed: false,
  },
  {
    id: '4',
    name: 'Polynomials',
    number: 4,
    totalTopics: 6,
    completed: false,
  },
  {
    id: '5',
    name: 'Trigonometry',
    number: 5,
    totalTopics: 15,
    completed: false,
  },
];

const ChapterSelector = ({ onSelect, subjectName }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    onSelect(chapter);
    setModalVisible(false);
  };

  const renderChapterItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chapterItem,
        selectedChapter?.id === item.id && styles.selectedChapter,
      ]}
      onPress={() => handleChapterSelect(item)}
    >
      <View style={styles.chapterHeader}>
        <View style={styles.chapterNumberContainer}>
          <Text style={styles.chapterNumber}>{item.number}</Text>
        </View>
        <View style={styles.chapterInfo}>
          <Text style={styles.chapterName}>{item.name}</Text>
          <Text style={styles.topicsCount}>{item.totalTopics} Topics</Text>
        </View>
        {item.completed && (
          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>✓</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectorButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorButtonText}>
          {selectedChapter ? selectedChapter.name : 'Select Chapter'}
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
              <Text style={styles.modalTitle}>
                {subjectName ? `${subjectName} Chapters` : 'Select Chapter'}
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={chapters}
              renderItem={renderChapterItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.chapterList}
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
  chapterList: {
    padding: 10,
  },
  chapterItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f8f8f8',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  selectedChapter: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#2196f3',
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chapterNumberContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  chapterNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chapterInfo: {
    flex: 1,
  },
  chapterName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  topicsCount: {
    fontSize: 14,
    color: '#666',
  },
  completedBadge: {
    backgroundColor: '#4CAF50',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  completedText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ChapterSelector;