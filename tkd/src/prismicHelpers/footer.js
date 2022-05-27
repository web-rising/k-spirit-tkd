import prismic from '../prismic'

const data = await prismic.client.getSingle('footer')
const footer = data.data

export default footer