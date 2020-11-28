import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

//Não possuem valor semântico (significado)
//Não possuem estilização própria
//Todos os componentes possuem por padrão "display: flex"

//VIEW: div, footer, header, main, aside, section
//TEXT: p, spam, strong, h1, h2, h3...


export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                {projects.map(project => <Text key={project.id} style={styles.project}>{project.title}</Text>)}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7159c1",
        justifyContent: "center",
        alignItems: "center",
    },
    project: {
        color: "#fff",
        fontSize: 20,
    }
});