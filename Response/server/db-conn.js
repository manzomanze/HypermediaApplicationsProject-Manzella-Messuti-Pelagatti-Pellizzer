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

  const BusinessSectorContent = db.define(
    'businesssectorcontent',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      order: DataTypes.INTEGER,
    },
    {
      underscored: true,
    }
  )

  const Image = db.define(
    'image',
    {
      path: DataTypes.TEXT,
      alt_description: DataTypes.TEXT,
      position: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const EmployeeImage = db.define(
    'employeeimage',
    {
      path: DataTypes.TEXT,
      alt_description: DataTypes.TEXT,
      position: DataTypes.STRING,
      portrait: DataTypes.BOOLEAN,
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

  BusinessSector.hasMany(BusinessSectorContent)
  BusinessSectorContent.belongsTo(BusinessSector)

  AreaContent.hasOne(Image)
  Image.belongsTo(AreaContent)

  ServicesContent.hasOne(Image)
  Image.belongsTo(ServicesContent)

  BusinessSectorContent.hasOne(Image)
  Image.belongsTo(BusinessSectorContent)

  CaseStudiesContent.hasOne(Image)
  Image.belongsTo(CaseStudiesContent)

  Employee.hasMany(EmployeeImage)
  EmployeeImage.belongsTo(Employee)

  Employee.belongsToMany(CaseStudies, { through: 'employeecasestudies' })
  CaseStudies.belongsToMany(Employee, { through: 'employeecasestudies' })

  Employee.belongsToMany(CaseStudies, { through: 'employeecasestudies' })
  CaseStudies.belongsToMany(Employee, { through: 'employeecasestudies' })

  Employee.belongsToMany(Service, { through: 'employeeservice' })
  Service.belongsToMany(Employee, { through: 'employeeservice' })

  BusinessSector.belongsToMany(Service, { through: 'businesssectorservice' })
  Service.belongsToMany(BusinessSector, { through: 'businesssectorservice' })

  db._tables = {
    Area,
    AreaContent,
    Service,
    ServicesContent,
    Employee,
    EmployeeImage,
    CaseStudies,
    CaseStudiesContent,
    BusinessSector,
    BusinessSectorContent,
    Career,
    Image,
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
