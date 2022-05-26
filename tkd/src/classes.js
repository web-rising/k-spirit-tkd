import prismic from './prismic'

const data = await prismic.client.getSingle('classes')
const classes = data.data.body[0].items

export default classes