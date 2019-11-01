import React from 'react';
import { HalfCircleSpinner } from 'react-epic-spinners';
import { Flex } from 'rendition';

export default function Spinner() {
  return (
    <Flex justifyContent="center">
      <HalfCircleSpinner color="#000" size={25} />
    </Flex>
  );
}
