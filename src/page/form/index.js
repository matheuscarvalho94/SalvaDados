import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';

import CameraView from '../../components/camera';

export default class Form extends React.Component {
    
    state={
        status: false,
        nome: '',
        rg: '',
        data: '',
        fotofrente: '',
        fotoverso: '',
    }

    openCamera(visible){
        this.setState({status: visible})
    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
            <Image source={require("../../../img/icoSearch.png")} style={styles.arrow} />
          </TouchableOpacity>
        ),
        title: `${navigation.state.params}`
    });

    render() {
        return (
           
            <View style={styles.container}>
                <CameraView 
                    visible={this.state.status}
                    openCamera={ () => this.openCamera(false)}
                    />
                    
                <ScrollView>
                <StatusBar barStyle="dark-content"/>
                <View style={styles.subsTitle}>
                    <Text style={styles.txt}> RG - Documento de identidade </Text>
                    <Text style={styles.txt2}> Insira as Informações do documento </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.row}>
                        <Text style={styles.label}> NOME COMPLETO: </Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                            />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}> NÚMERO DO RG: </Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            value={this.state.rg}
                            onChangeText={rg => this.setState({ rg })}
                            />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}> DATA DE NASCIMENTO: </Text>
                        <TextInput
                            style={styles.inputMini}
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                            value={this.state.data}
                            onChangeText={data => this.setState({ data })}
                            />
                    </View>

                </View>

                <Text style={styles.txt3}> Tire as fotos abaixo: </Text>

                <View style={styles.formFotos}>

                    <TouchableOpacity style={styles.rowFlex} onPress={() => { this.openCamera(!this.state.status); }}>
                        <Image source={require("../../../img/group.png")} style={styles.iconFoto} />
                        <Text style={styles.label}> FOTO FRENTE </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowFlex}>
                        <Image source={require("../../../img/group.png")} style={styles.iconFoto} />
                        <Text style={styles.label}> FOTO DO VERSO </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.buttonSave} onPress={ () => {
                        this._storeData()
                    }}>
                        <Text style={styles.textButton}> SALVAR DOCUMENTO </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
}