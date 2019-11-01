import React from 'react';
import {
  Txt,
  Box,
  Flex,
  Navbar,
  Heading,
  Container,
  Provider as RenditionProvider,
} from 'rendition';
import PatientInfo from './components/PatientInfo';
import ConditionTable from './components/ConditionTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <RenditionProvider>
          <Heading>Something went wrong...</Heading>
          <Txt>
            Error: <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
          </Txt>
        </RenditionProvider>
      );
    }
    return (
      <RenditionProvider>
        <Navbar brand={<Heading ml={-2}>SMART on FHIR</Heading>} />
        <Container mt={[0, 0, 25]} px={[0, 0, 2]}>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Box>
              <PatientInfo id={4342011} />
            </Box>
            <Box>
              <ConditionTable patientId={4342011} />
            </Box>
          </Flex>
        </Container>
      </RenditionProvider>
    );
  }
}

export default App;
