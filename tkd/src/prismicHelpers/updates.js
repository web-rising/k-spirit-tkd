import prismic from '../prismic'

const data = await prismic.client.getSingle("updates")
const updatesData = data.data.body

function limitUpdates(limit) {
    return updatesData.slice(0, limit)
}

export default limitUpdates