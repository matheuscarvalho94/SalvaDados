import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Modal, StatusBar } from 'react-native';
import styles from './styles';

export default class DetailItem extends React.Component {
// const DetailItem = ({ navigation }) => {
    state = {
        modalVisible: false,
        imagem: ''
    };
    
    render(){
        const { item } = this.props.navigation.state.params;;
        console.log(item)
        if(!item) return (<View/>)
        return (
            <View style={styles.container}>
                
                <ScrollView>
                    <View style={styles.subsTitle}>
                        <Text style={styles.txt2}>  Informações do documento </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.label}> NOME COMPLETO: </Text>
                            <Text style={styles.label2}> {item.nome} </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}> NÚMERO DO RG: </Text>
                            <Text style={styles.label2}> {item.rg} </Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={styles.label}> DATA DE NASCIMENTO: </Text>
                            <Text style={styles.label2}> {item.data} </Text>
                        </View>

                    </View>

                    <View style={styles.subsTitle}>
                        <Text style={styles.txt2}> Fotos do documento </Text>
                    </View>
                    
                    <View style={styles.formFotos}>
                    

                        {
                            item.fotofrente
                            ? <TouchableOpacity style={styles.rowFlex}>
                                <Image source={require("../../../img/group.png")} style={styles.iconFoto} />
                                <Text style={styles.label}> FOTO FRENTE </Text>
                            </TouchableOpacity>
                            :<View/>
                        }
                        {
                            item.fotoverso
                            ? <TouchableOpacity style={styles.rowFlex}>
                                <Image source={require("../../../img/group.png")} style={styles.iconFoto} />
                                <Text style={styles.label}> FOTO VERSO </Text>
                            </TouchableOpacity>
                            :<View/>
                        }
                    </View>
                </ScrollView>

            </View>

        );
    }
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
            <Image source={require("../../../img/icoSearch.png")} style={styles.arrow} />
          </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => {  navigation.navigate({ routeName: 'Form', params: navigation.state.params } ); }}>
              <Text style={styles.editarFont}> Editar </Text>
            </TouchableOpacity>
        ),
        title: `${navigation.state.params.item.title}`,
    });
}



