import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';

import CameraView from '../../components/camera';

import store from 'react-native-simple-store';
import DatePicker from 'react-native-datepicker';

export default class Form extends React.Component {
    
    state = {
        status: false,
        title: this.props.navigation.state.params,
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
        title: navigation.state.params.item.title,
    });

    componentDidMount() {
        const { item } = this.props.navigation.state.params;
        console.log('dadoos formularios', item)

        if(item) {
          this.setState({
            title: item.title,
            nome: item.nome,
            rg: item.rg,
            data: item.data,
            fotofrente: item.fotofrente,
            fotoverso: item.fotoverso
          })
          
        }else{
            console.log('dadoos')
        }
      }

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
                        <DatePicker
                            customStyles={{
                            dateInput:{
                                height: 50,
                                width: '60%',
                                backgroundColor: '#eef5fd',
                                borderRadius: 6,
                                paddingLeft: 5,
                                paddingRight: 35,
                                borderWidth: 0,
                                marginTop: 10,
                            },
                            placeholderText: {
                                color: '#363d4f',
                                fontWeight: '600',
                            },
                            dateText:{
                              color: '#363d4f',
                              fontSize: 17,
                            }
                            }}
                            date={this.state.data}
                            mode="date"
                            placeholder=""
                            format="DD/MM/YYYY"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            showIcon = {false}
                            onDateChange={(data) => {this.setState({data: data})}}
                            
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
                        this.setAsyncStorage(this.state)
                    }}>
                        <Text style={styles.textButton}> SALVAR DOCUMENTO </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
    
    setAsyncStorage() {
        store.push('@DadosSalvo', this.state)
        this.props.navigation.navigate('Home')
    }

    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri);
        }
    };
}