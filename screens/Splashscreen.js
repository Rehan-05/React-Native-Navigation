import React,{Component} from 'react';
import { View, ImageBackground, Image } from 'react-native';


var bg= require('../assets/splash_scr.png');
var logo  = require('../assets/logo-white.png');

export default class Splashscreen extends Component {

      constructor(props){
                     super(props)
                    setTimeout(()=>
                   {
                      this.props.navigation.navigate('Home');
                        },1000);
                    };            
    render()
    { 
       return(
              <ImageBackground source={bg}
              style={ {height:'100%',width:'100%'}}>
                
              <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>

              <Image style={{height:'100',width:'100'}}
                  source={logo}> </Image>
              </View>

               </ImageBackground>
             );
       }
    
}