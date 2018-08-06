import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default class DetailItem extends React.Component {
    state={
        status: false,
        nome: '',
        rg: '',
        data: '',
        fotofrente: '',
        fotoverso: '',
    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity style={{margin: 20}} onPress={() => navigation.goBack()}>
            <Image source={require("../../../img/icoSearch.png")} style={styles.arrow} />
          </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => {  navigation.navigate('Form'); }}>
              <Text style={styles.editarFont}> Editar </Text>
            </TouchableOpacity>
          )
    });

    render() {
        return (
           
            <View style={styles.container}>
            
                <ScrollView>
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

                    <View style={styles.subsTitle}>
                        <Text style={styles.txt2}> Fotos do documento </Text>
                    </View>
                    
                    <View style={styles.formFotos}>
                        <TouchableOpacity style={styles.rowFlex} onPress={() => { this.openCamera(!this.state.status); }}>
                            <Image source={require("../../../img/group.png")} style={styles.iconFoto} />
                            <Text style={styles.label}> FOTO FRENTE </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        );
    }
}