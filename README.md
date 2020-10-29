# react-native-juno-rn-card-hash

SDK de integração com o gateway de pagamentos JUNO para ReactNative (Pode ser usado com Expo)

## Installation

```sh
npm install react-native-juno-rn-card-hash
```

## Usage

```js
import JunoCardHash from 'react-native-juno-rn-card-hash';

// ...

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
  .then(console.log)
  .catch(console.error);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
