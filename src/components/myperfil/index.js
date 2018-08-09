import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, Modal, StatusBar } from 'react-native';
import styles from './styles';

export default class MyPerfil extends React.Component {
    render() {
        const { visible, setModalPerfil} = this.props;
        if(!visible) return (<View/>)

        return (
            <Modal
                visible
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <StatusBar barStyle="light-content" backgroundColor="white"/>

                <ScrollView>
                    
                    <ImageBackground
                        style={styles.thumbnail}
                        source={require("../../../img/rectangle9.png")}>

                        <TouchableOpacity style={styles.closed} onPress={ () => { setModalPerfil(false) }}>
                            <Image source={require("../../../img/combinedShape.png")} style={styles.closedImg} />
                        </TouchableOpacity>

                        <View style={styles.thumbnailContent}>
                            <Text style={styles.title}>Nome da pessoa</Text>
                        </View>
                    
                    </ImageBackground>

                    <View style={styles.container}>

                        <View style={styles.subsTitle}>
                            <Text style={styles.txt2}>  Informações do documento </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.row}>
                                <Text style={styles.label}> NOME COMPLETO: </Text>
                                <Text style={styles.label2}> Nome da pessoa completo </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}> NÚMERO DO RG: </Text>
                                <Text style={styles.label2}> 44.123.234-77 </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}> DATA DE NASCIMENTO: </Text>
                                <Text style={styles.label2}> 12/01/1988 </Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </Modal>

        );
    }
}