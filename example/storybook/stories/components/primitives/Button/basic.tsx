import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button
      onPress={() => console.log('hello world')}
      _text={{ fontWeight: 700 }}
    >
      Button
    </Button>
  );
}
