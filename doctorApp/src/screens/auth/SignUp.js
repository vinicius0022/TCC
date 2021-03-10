import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/User'


class SignUp extends Component {


  //componente de ciclo de vida da aplicação
  //a aplicação foi atualizada
  componentDidUpdate = prevProps => {

    if (prevProps.isLoading && !this.props.isLoading) {
      this.setState({

        name: '',
        sobrenome: '',
        email: '',
        cpf: '',
        rg: '',
        tel: '',
        crm: '',
        idade: '',
        endereco: '',
        senha: ''
      })
      this.props.navigation.navigate('Profile')
    }
  }

  state = {
    name: '',
    sobrenome: '',
    email: '',
    cpf: '',
    rg: '',
    tel: '',
    crm: '',
    idade: '',
    endereco: '',
    senha: ''
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect2}
            source={require("../../../assets/images/Gradient_AKqpKgP.png")}
          >
            <ScrollView style={styles.form}>
              <View style={styles.nameColumn}>

                <View style={styles.textInput}>
                  <TextInput
                    autoFocus={true}
                    value={this.state.name}
                    //o campo espera receber uma string
                    onChangeText={name => this.setState({ name })}
                    placeholder="Nome"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    value={this.state.sobrenome}
                    onChangeText={sobrenome => this.setState({ sobrenome })}
                    placeholder="Sobrenome"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"

                    keyboardType="email-address"
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={cpf => this.setState({ cpf })}
                    placeholder="CPF"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="RG"
                    placeholderTextColor="rgba(255,255,255,1)"
                    onChangeText={rg => this.setState({ rg })}
                    value={this.state.rg}
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="Telefone"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={this.state.tel}
                    onChangeText={tel => this.setState({ tel })}
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="CRM"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={this.state.crm}
                    onChangeText={crm => this.setState({ crm })}
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="Idade"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={this.state.idade}
                    onChangeText={idade => this.setState({ idade })}
                    style={styles.Input}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="Endereço"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={this.state.endereco}
                    onChangeText={endereco => this.setState({ endereco })}
                    style={styles.Input}
                  ></TextInput>
                </View>
                
                <View style={styles.nameColumnFiller}></View>

                <View style={styles.textInput}>
                  <TextInput
                    placeholder="Senha"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.Input}
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                  ></TextInput>
                </View>
                <View style={styles.nameColumnFiller}></View>

              </View>
              <View style={styles.emailColumnFiller}></View>
                <TouchableOpacity
                  onPress={() => { this.props.onCreateUser(this.state) }}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Cadastrar</Text>
                </TouchableOpacity>
              <Text style={styles.text4}>Termos &amp; Condições</Text>
            </ScrollView>

          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 3,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect2: {
    flex: 1
  },
  form: {
    flex: 1,
    marginTop: 10
  },
  textInput: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  Input: {
    height: 50,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
  },
  nameColumn: {
    marginHorizontal: 20,

  },
  nameColumnFiller: {
    flex: 1,
    marginTop: 20
  },
  button: {
    width: 150,
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center'
    
  },
  text2: {
    color: "rgba(255,255,255,255)",
    fontWeight: "bold",
    fontSize: 18
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center"
  },
  buttonColumn: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 50,
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: 'rgb(25,255,255)',
    borderRadius: 25,
    marginBottom: 15,
  }
});

const mapStateToProps = ({ user }) => {

  return {
    isLoading: user.isLoading
  }
}


const mapDispatchToProps = dispatch => {

  return {

    onCreateUser: user => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)