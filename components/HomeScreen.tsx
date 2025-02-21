import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from "react-native";
import { Switch } from "react-native-paper";
import styles from "../styles/style"; 

interface HomeScreenProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Skills List
const skills = ["React Native", "React", "Node.js", "JavaScript", "C++"];

// Projects List
const projects = [
  { id: "1", title: "React Portfolio", description: "A portfolio website I built during my first semester in web development." },
  { id: "2", title: "Todo App", description: "A responsive web app I developed during the same semester in web development." },
  { id: "3", title: "Inventory Management System", description: "My midterm project, built using React." },
  { id: "4", title: "Expense Tracker", description: "My final project from last semester." },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#111" : "#f9f9f9" }]}>
      {/* Profile Section */}
      <View style={styles.profile}>
        <Image source={require("../assets/aljo.jpg")} style={styles.profileImage} />
        <Text style={[styles.name, { color: isDarkMode ? "#fff" : "#000" }]}>Alfonso Jolie M. Castillo</Text>
        <Text style={[styles.bio, { color: isDarkMode ? "#aaa" : "#555" }]}>
          Hi! I'm a 3rd-year Computer Science student at De La Salle Lipa with a passion for tech and coding. 
          I'm eager to take on new challenges and improve my skills through projects, group work, and internships. 
          Outside of coding, I enjoy exploring tech trends, playing video games, and hanging out with friends.
          Excited to connect and grow in the world of CS!
        </Text>
      </View>

      {/* Theme Toggle */}
      <View style={styles.themeToggle}>
        <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* Skills List */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Expertise</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <Text style={[styles.skill, { backgroundColor: isDarkMode ? "#222" : "#ddd", color: isDarkMode ? "#aaa" : "#555" }]}>
            {item}
          </Text>
        )}
      />

      {/* Projects List */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectCard, { backgroundColor: isDarkMode ? "#222" : "#ddd" }]}>
            <Text style={[styles.projectTitle, { color: isDarkMode ? "#fff" : "#000" }]}>{item.title}</Text>
            <Text style={[styles.projectDescription, { color: isDarkMode ? "#aaa" : "#555" }]}>{item.description}</Text>
          </View>
        )}
      />

      {/* Contact Section */}
      <Text style={[styles.sectionTitle, { color: isDarkMode ? "#fff" : "#000" }]}>Contact</Text>
      <TouchableOpacity onPress={() => Linking.openURL("mailto:alfonso_jolie_castillo@dlsl.edu.ph")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>📧 alfonso_jolie_castillo@dlsl.edu.ph</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Alfonso-jolie")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>🔗 GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/samael-luck-040312328/")}>
        <Text style={[styles.contact, { color: "#1E90FF" }]}>💼 LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;