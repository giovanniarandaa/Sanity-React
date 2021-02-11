import sanityClient from '@sanity/client'

const { REACT_APP_SANITY_PROJECTID, REACT_APP_SANITY_DATASET } = process.env;

export default sanityClient({
  projectId: REACT_APP_SANITY_PROJECTID,
  dataset: REACT_APP_SANITY_DATASET,
  useCdn: true
})