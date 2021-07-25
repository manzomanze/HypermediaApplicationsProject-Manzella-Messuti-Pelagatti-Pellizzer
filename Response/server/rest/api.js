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
    AreaContent,
    Service,
    ServicesContent,
    Employee,
    CaseStudies,
    CaseStudiesContent,
    BusinessSector,
    BusinessSectorContent,
    Career,
    Image,
  } = db._tables
  // API to get all the articles

  // Employees
  // gets all employees
  app.get('/employees', async (req, res) => {
    const articles = await Employee.findAll({
      include: {
        model: Image,
        as: 'image',
      },
    })
    return res.json(articles)
  })
  // gets an employee by ID
  app.get('/employees/:id', async (req, res) => {
    const { id } = req.params
    const article = await Employee.findOne({
      where: { id },
      include: [
        {
          model: Image,
          as: 'image',
        },
        {
          model: Image,
          as: 'main_image',
        },
        {
          model: Service,
          include: { model: Image },
        },
        {
          model: CaseStudies,
          include: { model: Image },
        },
        {
          model: Area,
          include: { model: Image },
        },
      ],
    })
    return res.json(article)
  })
  app.get('/career', async (req, res) => {
    const articles = await Career.findAll()
    return res.json(articles)
  })

  // CaseStudies & CaseStudiesContents
  // gets all case studies
  app.get('/casestudies', async (req, res) => {
    const articles = await CaseStudies.findAll({
      include: {
        model: Image,
      },
    })
    return res.json(articles)
  })
  // gets an casestudies by ID
  app.get('/casestudies/:id', async (req, res) => {
    const { id } = req.params
    const article = await CaseStudies.findOne({
      where: { id },
      include: [
        {
          model: Image,
          as: 'image',
        },
        {
          model: CaseStudiesContent,
          separate: true,
          order: [['order', 'asc']],
          include: {
            model: Image,
            as: 'image',
          },
        },
        {
          model: Employee,
          include: {
            model: Image,
            as: 'image',
          },
        },
      ], // -> this is the way we "include" also comments inside Articles
    })
    return res.json(article)
  })

  // get all values of case studies from area by id join Employees an area
  // and Image
  app.get('/casestudiesfromarea/:id', async (req, res) => {
    const { id } = req.params
    const article = await CaseStudies.findAll({
      include: [
        {
          model: Employee,
          required: true,
          include: {
            model: Area,
            order: [['order', 'asc']],
            where: { id },
          },
        },
        {
          model: Image,
        },
      ],
    })
    return res.json(article)
  })

  // Areas & AreasContents
  // gets all areas
  app.get('/areas', async (req, res) => {
    const articles = await Area.findAll({
      include: {
        model: Image,
      },
    })
    return res.json(articles)
  })
  // gets all areas by id join with Area content image employee and service
  app.get('/areas/:id', async (req, res) => {
    const { id } = req.params
    const article = await Area.findOne({
      where: { id },
      include: [
        {
          model: AreaContent,
          separate: true,
          order: [['order', 'asc']],
          include: { model: Image },
        },
        {
          model: Image,
        },
        {
          model: Employee,
          include: { model: Image, as: 'image' },
        },
        {
          model: Service,
          include: { model: Image },
        },
      ],
    })
    return res.json(article)
  })

  // BusinessSector & BusinessSectorContents
  // gets all businesssectors join Image
  app.get('/businesssectors', async (req, res) => {
    const articles = await BusinessSector.findAll({
      include: {
        model: Image,
      },
    })
    return res.json(articles)
  })
  // gets all businesssectors by id join with businesssectorcontent  and Image and Servvice
  app.get('/businesssectors/:id', async (req, res) => {
    const { id } = req.params
    const article = await BusinessSector.findOne({
      where: { id },
      include: [
        {
          model: BusinessSectorContent,
          separate: true,
          order: [['order', 'asc']],
          include: { model: Image },
        },
        {
          model: Image,
        },
        {
          model: Service,
          include: { model: Image },
        },
      ],
    })
    return res.json(article)
  })

  // Services & ServicesContents
  // gets all services
  app.get('/services', async (req, res) => {
    const articles = await Service.findAll({
      include: {
        model: Image,
      },
    })
    return res.json(articles)
  })
  // get a service by id and joins Service Content, Image, BusinessSector
  // Employee and Area
  app.get('/services/:id', async (req, res) => {
    const { id } = req.params
    const article = await Service.findOne({
      where: { id },
      include: [
        {
          model: ServicesContent,
          separate: true,
          order: [['order', 'asc']],
          include: { model: Image },
        },
        {
          model: Image,
        },
        {
          model: BusinessSector,
          include: { model: Image },
        },
        {
          model: Employee,
          include: { model: Image, as: 'image' },
        },
        {
          model: Area,
          include: { model: Image },
        },
      ],
    })
    return res.json(article)
  })

  // This one is just an example
}

init()

export default app
