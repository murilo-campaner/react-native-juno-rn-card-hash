import * as React from 'react';
import { StyleSheet, View, Text, Button, Clipboard } from 'react-native';

/** Necessary to encode ArrayBuffer */
import '@expo/browser-polyfill';

import JunoCardHash from 'react-native-juno-rn-card-hash';

/**
 * Create JunoCardHash Instace
 * @string publicToken
 * @string environment (sandbox|production)
 */
const Juno = new JunoCardHash(
  '74942A9C8B05F538EE9A389459CBFD285C578F73A65B7476D1E818A8D9F14E91',
  'sandbox'
);

export default function App() {
  const [hash, setHash] = React.useState<string | undefined>('');
  const [error, setError] = React.useState<any | undefined>();

  React.useEffect(() => {
    // Credit Card Data to be hashed
    const cardData = {
      cardNumber: '5207156147520886',
      holderName: 'Foo bar',
      securityCode: '265',
      expirationMonth: '11',
      expirationYear: '2021',
    };

    // Generate Card Hash
    Juno.getCardHash(cardData)
      .then(setHash)
      .catch((e) => setError(e));
  }, []);

  const handleCopy = React.useCallback((string?: string) => {
    if (!string) return;
    Clipboard.setString(string);
  }, []);

  return (
    <View style={styles.container}>
      {!error ? (
        <>
          <Text style={styles.text}>
            Card Hash: {`\n\n`} {hash}
          </Text>
          <Button title="Copy" onPress={() => handleCopy(hash)} />
        </>
      ) : (
        <Text style={styles.text}>
          An error ocurred: {'\n\n'}
          {error.message}
          {'\n\n'}
          {JSON.stringify(error.details)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
