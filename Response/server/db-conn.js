const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize('postgres://postgres:@127.0.0.1:5432/response')
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
      id_employee: { type: DataTypes.INTEGER, primaryKey: true },
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
      id_area: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
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
      id_service: { type: DataTypes.INTEGER, primaryKey: true },
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
      id_case_study: { type: DataTypes.INTEGER, primaryKey: true },
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
      id_service_content: { type: DataTypes.INTEGER, primaryKey: true },
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
      id_service_content: { type: DataTypes.INTEGER, primaryKey: true },
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
      id_business_sector: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html
  Service.hasMany(ServicesContent, { foreignKey: 'id_service' })
  CaseStudies.hasMany(CaseStudiesContent, { foreignKey: 'id_content' })
  Area.hasMany(Service, { foreignKey: 'id_area' })
  Area.hasMany(Employee, { foreignKey: 'id_area' })
  BusinessSector.hasMany(CaseStudies, { foreignKey: 'id_business_sector' })
  Employee.belongsToMany(CaseStudies, { through: 'EmployeeCaseStudies' })
  Employee.belongsToMany(Service, { through: 'EmployeeService' })
  BusinessSector.belongsToMany(Service, { through: 'BusinessSectorService' })

  db._tables = {
    Area,
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
