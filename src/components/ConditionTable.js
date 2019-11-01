import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Txt, Flex, Box, Card, Table, Heading } from 'rendition';
import Spinner from './Spinner';
import { formatDate } from '../utils';
import { getConditions } from '../api';

function ConditionTable({ patientId }) {
  const [conditions, setConditions] = useState();
  useEffect(() => {
    getConditions(patientId).then(setConditions);
  }, [patientId]);
  return (
    <Card ml={[0, 0, 10]} p={0} width="1">
      <Flex>
        <Box>
          <Heading ml={3} mt={2}>
            Conditions
          </Heading>
          <Txt ml={3} mb={2} color="#333">
            Click a row to search on PubMed
          </Txt>
          <Table
            data={conditions || [{}]}
            rowAnchorAttributes={{ target: '_ blank' }}
            getRowHref={cond => cond.pubmedUrl}
            columns={[
              {
                field: 'name',
                label: 'Condition',
                sortable: true,
                render: data => (data ? data : <Spinner />),
              },
              {
                field: 'dateRecorded',
                label: 'Date Recorded',
                sortable: true,
                render: datestr =>
                  datestr ? formatDate(datestr) : <Spinner />,
              },
            ]}
          />
        </Box>
      </Flex>
    </Card>
  );
}

ConditionTable.propTypes = {
  /** Patient ID */
  patientId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default ConditionTable;
