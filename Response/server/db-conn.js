const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:postgres@127.0.0.1:5432/response2'
)
// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

/**
 * Function to define the structure of the database
 */

function defineDatabaseStructure() {
  const Employee = db.define(
    'employee',
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      location: DataTypes.STRING,
      role: DataTypes.STRING,
      what_i_do: DataTypes.TEXT,
      daily_life: DataTypes.TEXT,
      expert_advice: DataTypes.TEXT,
    },
    {
      underscored: true,
    }
  )

  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
    },
    {
      underscored: true,
    }
  )

  const AreaContent = db.define(
    'areacontent',
    {
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      order: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  )

  const Career = db.define(
    'career',
    {
      title: DataTypes.STRING,
      introduction: DataTypes.TEXT,
      requirements: DataTypes.TEXT,
      location: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      underscored: true,
    }
  )

  const Service = db.define(
    'service',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
    },
    {
      underscored: true,
    }
  )

  const CaseStudies = db.define(
    'casestudies',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
    },
    {
      underscored: true,
    }
  )

  const ServicesContent = db.define(
    'servicescontent',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      order: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  )

  const CaseStudiesContent = db.define(
    'casestudiescontent',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      order: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  )

  const BusinessSector = db.define(
    'businesssector',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html
  Service.hasMany(ServicesContent)
  ServicesContent.belongsTo(Service)

  CaseStudies.hasMany(CaseStudiesContent)
  CaseStudiesContent.belongsTo(CaseStudies)

  Area.hasMany(Service)
  Service.belongsTo(Area)

  Area.hasMany(Employee)
  Employee.belongsTo(Area)

  Area.hasMany(AreaContent)
  AreaContent.belongsTo(Area)

  BusinessSector.hasMany(CaseStudies)
  CaseStudies.belongsTo(BusinessSector)

  Employee.belongsToMany(CaseStudies, { through: 'EmployeeCaseStudies' })
  CaseStudies.belongsToMany(Employee, { through: 'EmployeeCaseStudies' })

  Employee.belongsToMany(Service, { through: 'EmployeeService' })
  Service.belongsToMany(Employee, { through: 'EmployeeService' })

  BusinessSector.belongsToMany(Service, { through: 'BusinessSectorService' })
  Service.belongsToMany(BusinessSector, { through: 'BusinessSectorService' })

  db._tables = {
    Area,
    AreaContent,
    Service,
    ServicesContent,
    Employee,
    CaseStudies,
    CaseStudiesContent,
    Career,
  }
}

/**
 * Function to insert some fake info in the database
 */
// async function insertFakeData() {
//   const { Career } = db._tables
//   await Career.create({
//     title: title,
//     introduction: introduction,
//     requirements: requirements,
//     location: location,
//   })
//   const comment1 = await Comment.create({
//     content: 'Great article! Keep posting',
//   })
//   const comment2 = await Comment.create({
//     content: 'Such Doge.',
//   })
//   // Adding the first comment to the first article
//   await firstArticle.addComment(comment1.id)
//   // Adding the second comment to the first article
//   await firstArticle.addComment(comment2.id)
// }
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync()
  // Call the function to insert some fake data
  // await insertFakeData()
  return db
}

export default initializeDatabase
