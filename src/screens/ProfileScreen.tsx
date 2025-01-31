import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Student Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/image/momo1.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Devesh kumar singh</Text>
        <Text style={styles.email}>devesh@example.com</Text>
      </View>

      {/* Student Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Student Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Roll Number:</Text>
          <Text style={styles.value}>123456</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>B.Tech in Computer Science</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.value}>3rd Year</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>CGPA:</Text>
          <Text style={styles.value}>8.5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  infoSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default ProfileScreen;
