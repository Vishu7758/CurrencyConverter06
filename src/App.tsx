import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    // const inputAmount = parseFloat(inputValue);
    // if (!isNaN(inputAmount)) {
    //   const convertedValue = inputAmount * targetValue.value;
    //   const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`;
    //   setResultValue(result);
    //   setTargetCurrency(targetValue.name);
    // } else {
    //   return Snackbar.show({
    //     text: 'Not valid number to convert',
    //     backgroundColor: '#EA7773',
    //     textColor: '#000000',
    //   });
    // }
  };

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
