import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  profile: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 10, marginTop: 30 },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 14, textAlign: "center", marginVertical: 5 },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  skill: { padding: 8, marginRight: 8, borderRadius: 5, color: "#000" },
  projectCard: { padding: 15, borderRadius: 10, marginBottom: 10 },
  projectTitle: { fontSize: 16, fontWeight: "bold" },
  projectDescription: { fontSize: 14 },
  contact: { fontSize: 16, marginVertical: 5 },
});

export default styles;