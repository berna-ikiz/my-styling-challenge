import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

const cardLayout = () => {
  const cardValues = {
    image: "cac67dcda90f61e2cc35bf8382c7198b",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nulla elementum, eleifend lorem ac, consequat felis. Sed ut nisl id leo vulputate volutpat. Vestibulum vehicula odio sed pretium aliquet. Proin vitae elit nisl. Vestibulum faucibus sit amet eros quis varius. Integer sit amet velit velit. Mauris nec risus sed dolor porta porttitor. Quisque semper quam fermentum nisi auctor rhoncus nec at risus. Aliquam volutpat elit ut fringilla luctus. Aenean eleifend, tortor id pharetra posuere, ligula purus placerat odio, non porttitor massa leo sed est. Curabitur eget turpis a magna consequat rutrum et vel eros. Pellentesque scelerisque ante sit amet dictum porta.",
    title: "Lorem ipsum dolar sit amet",
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Card
          cardDescription={cardValues.description}
          cardTitle={cardValues.title}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE8D6",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default cardLayout;
