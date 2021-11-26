import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {

  return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'white', justifyContent:'center', alignItems:'center', flex:1}}>
      
      <Appbar.Content title="All" />
      
    </Appbar.Header>
  );
};

export default Header;