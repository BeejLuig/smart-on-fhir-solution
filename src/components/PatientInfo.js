import React, { useEffect, useState } from 'react';
import { Card, Txt } from 'rendition';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { formatDate } from '../utils';
import { getPatient } from '../api';

function PatientInfo({ id }) {
  const [patient, setPatient] = useState();
  useEffect(() => {
    getPatient(id).then(setPatient);
  }, [id]);
  return (
    <Card
      style={{ boxSizing: 'border-box' }}
      width={[
        1, // 100% below the smallest breakpoint (all viewports)
        1,
        200,
      ]}
      rows={
        patient
          ? [
              <Txt.p>
                <b>Name</b>: {patient.name}
              </Txt.p>,
              <Txt.p>
                <b>Gender</b>: {patient.gender}
              </Txt.p>,
              <Txt.p>
                <b>Date of Birth</b>: {formatDate(patient.birthDate)}
              </Txt.p>,
            ]
          : [<Spinner />]
      }
    />
  );
}

PatientInfo.propTypes = {
  /** Patient ID */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default PatientInfo;
