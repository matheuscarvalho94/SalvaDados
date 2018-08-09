import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';


const DetailItem = ({ navigation }) => {
    
    const { item } = navigation.state.params;
    console.log(item, 'teetetete')

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
                        <Text style={styles.label2}> {item.date} </Text>
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

DetailItem.navigationOptions = ({ navigation }) => ({
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

export default DetailItem;
