import { StyleSheet } from "react-native"

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      fontFamily: 'Roboto_300Light',
    },
    filterContainer: {
      padding: 16,
    },
    headerLogo:{
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 30,
      marginTop: 10
    },
    headerTextTasks:{
       backgroundColor: "#fff"
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 16,
    },
    input: {
      flex: 1,
      marginRight: 16,
      borderRadius: 5,
      backgroundColor: '#fff',
      padding: 10,
    },
    buttonSearch:{
      backgroundColor: '#fff',
      paddingLeft: 10,
      paddingRight: 50,
      borderRadius: 5,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems:'center'
    },

})