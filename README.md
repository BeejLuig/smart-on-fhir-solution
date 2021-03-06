# SMART on FHIR UI Coding Exercise (Solution)

## Get Started

```sh
npm install
npm start
```

See the app at https://localhost:3000

## Challenge

Using Cerner’s open sandbox at http://fhir.cerner.com/millennium/dstu2/#open-sandbox - create a web application that:

- [x] reads and displays a given patient’s demographic data (name, gender, date of birth)
- [x] displays a sortable table of active conditions that the patient currently has, including 
  - condition name
  - date first recorded, if available
  - link to search for this condition on PubMed (URL takes format https://www.ncbi.nlm.nih.gov/pubmed/?term=[condition name] )
