import React from 'react'
import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';

interface Characters {
    publishingHouse: string;
    data: string[];
}

const DATA: Characters[] = [
    {
      publishingHouse: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      publishingHouse: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      publishingHouse: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

const Item = ({ title }: {title: string}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

export const SectionListScreen = () => {
    return (
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            stickySectionHeadersEnabled
            style={{padding: 10}}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
                <Text style={styles.header}>Title List</Text>
            )}
            ListFooterComponent={() => (
                <Text style={styles.header}>total: {DataView.length}</Text>
            )}
            renderSectionHeader={({ section: { publishingHouse } }) => (
                <Text style={styles.header}>{publishingHouse}</Text>
            )}
            renderSectionFooter={({section}) => (
                <Text style={styles.footerSection}>total characters: {section.data.length}</Text>
            )}
        />
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#e3f2fd",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    },
    footerSection: {
        backgroundColor: '#e0f2f1',
        padding: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 16
    }
  });