import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const {
    Area,
    Service,
    ServicesContent,
    Employee,
    CaseStudies,
    CaseStudiesContent,
    Career,
  } = db._tables
  // API to get all the articles
  app.get('/career', async (req, res) => {
    const articles = await Career.findAll()
    return res.json(articles)
  })
  app.get('/services', async (req, res) => {
    const articles = await Service.findAll()
    return res.json(articles)
  })
  app.get('/services/:id', async (req, res) => {
    const { id } = req.params
    const article = await Service.findOne({
      where: { id },
      include: { model: ServicesContent }, // -> this is the way we "include" also comments inside Articles
    })
    return res.json(article)
  })
  app.get('/casestudies', async (req, res) => {
    const articles = await CaseStudies.findAll()
    return res.json(articles)
  })
  app.get('/casestudies/:id', async (req, res) => {
    const { id } = req.params
    const article = await CaseStudies.findOne({
      where: { id },
      include: { model: CaseStudiesContent }, // -> this is the way we "include" also comments inside Articles
    })
    return res.json(article)
  })
  app.get('/areas', async (req, res) => {
    const articles = await Area.findAll()
    return res.json(articles)
  })
  app.get('/areas/:id', async (req, res) => {
    const { id } = req.params
    const article = await Area.findOne({
      where: { id },
    })
    return res.json(article)
  })

  // This one is just an example
}

init()

export default app
