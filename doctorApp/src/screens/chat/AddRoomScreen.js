// import React, { useState } from 'react'
// import { SafeAreaView, StyleSheet } from 'react-native'
// import { IconButton, Title } from 'react-native-paper';
// import FormButton from '../components/FormButton'
// import FormInput from '../components/FormInput'
// import { firebase } from '../firebase'
// import useStatsBar from '../utils/useStatusBar';

// export default function AddRoomScreen({ navigation }) {
//     useStatsBar('dark-content');
//     const [roomName, setRoomName] = useState('')
    
//     function handleButtonPress() {
//         if (roomName.length > 0) {
//             firebase.firestore()
//               .collection('THREADS')
//               .add({
//                 name: roomName,
//                 latestMessage: {
//                   text: `Você entrou na sala ${roomName}.`,
//                   createdAt: new Date().getTime()
//                 }
//               })
//               .then(docRef => {
//                 docRef.collection('MESSAGES').add({
//                   text: `Você entrou na sala ${roomName}.`,
//                   createdAt: new Date().getTime(),
//                   system: true
//                 });
//                 navigation.navigate('Home');
//               });
//           }
//     }
    
//     return(
//         <SafeAreaView style={styles.rootContainer}>
//             <SafeAreaView style={styles.closeButtonContainer}>
//                 <IconButton icon='close-circle' size={36} color='#6646ee' onPress={() => navigation.goBack()} />
//             </SafeAreaView>
//             <SafeAreaView style={styles.innerContainer}>
//                 <Title styles={styles.title}>Criar uma nova sala de chat</Title>
//                 <FormInput labelName='Nome da sala' value={roomName} onChangeText={(text) => setRoomName(text)} clearButtonMode='while-editing' />
//                 <FormButton style={styles.buttonLabel} mode='contained' title='Criar' onPress={() => handleButtonPress()} disabled={roomName.length === 0} />
//             </SafeAreaView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     rootContainer: { 
//         flex: 1,
//     },
//     closeButtonContainer: {
//         position: 'absolute',
//         top: 30,
//         right: 0,
//         zIndex: 1,
//     },
//     innerContainer: {
//         flex: 1,
//         justifyContent: 'center', 
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 10,
//     },
//     buttonLabel: {
//         fontSize: 22
//     },
// })