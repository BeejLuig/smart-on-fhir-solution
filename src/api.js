const FHIR_OPEN_URL =
  'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca';

const normalizePatient = data => ({
  name: data.name[0].text,
  gender: data.gender,
  birthDate: data.birthDate,
});

const normalizeConditions = data =>
  data.entry.map(({ resource }) => ({
    id: resource.id,
    dateRecorded: resource.dateRecorded,
    name: resource.code.text,
    pubmedUrl: `https://www.ncbi.nlm.nih.gov/pubmed/?term=${encodeURIComponent(
      resource.code.text
    )}`,
  }));

const get = (path, options = {}) =>
  fetch(`${FHIR_OPEN_URL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      Accept: 'application/json+fhir',
    },
  })
    .then(r => r.json())
    .catch(console.error);

export function getPatient(id) {
  return get(`/Patient/${id}`).then(normalizePatient);
}

export function getConditions(patientId) {
  return get(
    `/Condition/?patient=${encodeURIComponent(patientId)}&category=problem`
  ).then(normalizeConditions);
}
