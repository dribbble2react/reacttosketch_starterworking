import React, { Fragment, useReducer } from 'react'
import sketch from 'sketch'
import users from './data'
import { View, Text, render, Artboard, Image, StyleSheet, Document, Page } from 'react-sketchapp'
import styles from './styles'
import Icon from './icon'

const App = props => (
  <Document>
   <Page name="mocks">
  <Artboard name="Mad Men App" style={{
    
    width: 414,
    height: 896
  }}>
  <View >

  </View>
  <Image style={{
    width: 414,
    height: 235
  }} 
  source="https://l1-cms-2.images.lexus-europe.com/lexusone/lexesesv11/Exposicion-Mad-Men-1920x1080_tcm-3153-1232032.jpg"
  resizeMode="contain"
  />
  <View name="Characters" style={{
   justifyContent: "center",
   alignItems: "center"
  }}>
    {users.map((user) => {
      return (
        <View key={user.name} style={{

          width: 200,
          height:120,
          shadowColor: '#D8D8D8',
          backgroundColor: 'white',
          shadowOffset: { width:0, height:2},
          shadowSpread:2,
          shadowOpacity: 0.4,
          marginTop:40,
          padding: 40,
          justifyContent: "center",
          alignContent: "center",
          alignItems:"center"
        }}>
        <Image style={styles.charPic} source={user.photoUrl} />
        <Text style={styles.cardTitle} name="testing">{user.name} {user.lastName}</Text>
        <Text style={styles.cardText}>{user.role}</Text>
        <Icon />
        </View>
      )
    })}
    </View>
  </Artboard>
</Page>
<Page name="wires">
</Page>
</Document>
  )

  export default () => {
    const documents = sketch.getDocuments();
    const document =
      sketch.getSelectedDocument() || new sketch.Document(); // get the current document // or create a new document
      render(<App/>, document);

  };