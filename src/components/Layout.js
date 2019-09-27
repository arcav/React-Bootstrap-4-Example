import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .container{
  background-color:# 222;
  }

`;


export const Layout = (props) => (
   <Styles> 
        <Container>
        {props.children}
    </Container>
   </Styles>
  
    
);