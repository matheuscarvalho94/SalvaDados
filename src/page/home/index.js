import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import styles from './styles';
import data from './list';

import MyPerfil from '../../components/myperfil';
import { AsyncStorage } from "react-native";

export default class Home extends React.Component {
    state = {
        modalVisible: false,
        modalPerfil: false,
        listmodal: data,
    };
    
    setModalPerfil = (condition) => {
        this.setState({ modalPerfil: condition });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    changeThisTitle = (titleText) => {
        this.setModalVisible(!this.state.modalVisible);
        this.props.navigation.navigate( 'Form', titleText );
    }

    verificaStorage = async () => {
        try {
          await AsyncStorage.setItem('@DadosSalvo', '[]');
        } catch (error) {
        }
      }

    componentDidMount(){
        this.verificaStorage()
        AsyncStorage.getItem('@DadosSalvo', (err, result) => {
            console.log(result, 'dados salvo')
        });
    }

    static navigationOptions = () => ({
        headerLeft:(
           <TouchableOpacity style={{margin: 20}} onPress={ () => { this._setModalHeader(true) }}>
            <Image source={require("../../../img/rectangle5.png")} style={styles.foto} />
          </TouchableOpacity>
        ),
        title: 'Nome da pessoa'
    });

    modalrender(){
        return(
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                <Text style={styles.titModal}> NOVO DOCUMENTO </Text>
                <FlatList
                    data={this.state.listmodal}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.list} onPress={ () => this.changeThisTitle(item.nome)  }>
                            <Image source={require("../../../img/icoHolerite.png")} style={styles.iconList} />
                            <Text> { item.nome } </Text>
                        </TouchableOpacity>
                    }
                    />
                </View>
            </View>
        )
    }

    render() {
        _setModalHeader = (condition) => {
            this.setState({modalPerfil: condition});
        }
        return (
            <View style={styles.container}>
                <MyPerfil
                    visible={this.state.modalPerfil}
                    setModalPerfil={ () => { this.setModalPerfil(false) }}
                />


                <Modal
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                            <StatusBar barStyle="dark-content" backgroundColor="#000"/>

                    {
                        this.modalrender()
                    }
                </Modal>
                <StatusBar barStyle="dark-content" backgroundColor="white"/>
                    <View style={styles.center}>
                        <Image source={require("../../../img/group3.png")} style={styles.iconImg} />
                        <Text style={styles.txt}>
                            Salve os seus documentos com segurança.
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {  this.props.navigation.navigate('DetailItem'); }}>
                            <Text>Detalhes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                            <Image source={require("../../../img/invalidName.png")} style={styles.plus}/>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}