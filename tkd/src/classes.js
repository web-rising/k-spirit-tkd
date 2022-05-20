import prismic from './prismic'

const data = await prismic.client.getSingle('classes')
const classes = data.data.body[0].items

const classRoutes = []
classes.forEach((classData) => {
	classRoutes.push({
		path:  classData.classroute[0].text,
        component: () => import("./components/Class.vue"),
        props: {
            data: classData
        }
	})
})

export default classRoutes