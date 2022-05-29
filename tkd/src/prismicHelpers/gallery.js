import prismic from '../prismic'

const data = await prismic.client.getSingle("gallery")
const images = data.data.body[0].items

function limitImages(limit) {
    return images.slice(0, limit)
}

export default limitImages