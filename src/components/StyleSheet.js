import React from 'react';
import Style from '../AppStyles.module.css';

function StyleSheet() {
     let heading = {
          fontSize: '72px',
          color: 'Orange'
     }
     return (
          <>
               <h1 style={heading}>StyleSheet</h1>
               <h1 className={`${Style.error} heading-xl`}>Error</h1>
          </>
     )
}
export default StyleSheet