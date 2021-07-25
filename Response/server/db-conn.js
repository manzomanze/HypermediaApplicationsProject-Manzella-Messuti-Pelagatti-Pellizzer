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
  /* Employee Entity of the ORM */
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

  /* Area Entity of the ORM */

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

  /* Area content Entity of the ORM */
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

  /* Service Entity of the ORM */
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
  /* Case studies Entity of the ORM */
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
  /* Services Content Entity of the ORM */
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

  /* Case Studies Content Entity of the ORM */
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
  /* Business Sectors Entity of the ORM */
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

  /* Business Sectors Content Entity of the ORM */
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

  /* Image Content Entity of the ORM */
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

  // Creating the 1 -> N association between Service and Services Content
  Service.hasMany(ServicesContent)
  ServicesContent.belongsTo(Service)

  // Creating the 1 -> N association between CaseStudies and CaseStudies Content
  CaseStudies.hasMany(CaseStudiesContent)
  CaseStudiesContent.belongsTo(CaseStudies)

  // Creating the 1 -> N association between Area and Service
  Area.hasMany(Service)
  Service.belongsTo(Area)

  // Creating the 1 -> N association between Area and Employee Content
  Area.hasMany(Employee)
  Employee.belongsTo(Area)

  // Creating the 1 -> N association between Service and Services Content
  Area.hasMany(AreaContent)
  AreaContent.belongsTo(Area)

  // Creating the 1 -> N association between BusinessSector and CaseStudies Content
  BusinessSector.hasMany(CaseStudies)
  CaseStudies.belongsTo(BusinessSector)

  // Creating the 1 -> N association between BusinessSector and BusinessSector Content
  BusinessSector.hasMany(BusinessSectorContent)
  BusinessSectorContent.belongsTo(BusinessSector)

  // Creating the N -> N association between Employee and CaseStudies
  Employee.belongsToMany(CaseStudies, { through: 'employeecasestudies' })
  CaseStudies.belongsToMany(Employee, { through: 'employeecasestudies' })

  // Creating the N -> N association between Employee and CaseStudies
  Employee.belongsToMany(CaseStudies, { through: 'employeecasestudies' })
  CaseStudies.belongsToMany(Employee, { through: 'employeecasestudies' })

  // Creating the N -> N association between Employee and Service
  Employee.belongsToMany(Service, { through: 'employeeservice' })
  Service.belongsToMany(Employee, { through: 'employeeservice' })

  // Creating the N -> N association between BusinessSector and Service
  BusinessSector.belongsToMany(Service, { through: 'businesssectorservice' })
  Service.belongsToMany(BusinessSector, { through: 'businesssectorservice' })

  // Creating the N -> N association between Image and Area Content
  Image.hasMany(AreaContent)
  AreaContent.belongsTo(Image)

  // Creating the N -> N association between Image and Area
  Image.hasMany(Area)
  Area.belongsTo(Image)

  // Creating the N -> N association between Image and BusinessSector Content
  Image.hasMany(BusinessSectorContent)
  BusinessSectorContent.belongsTo(Image)

  // Creating the N -> N association between Image and BusinessSector
  Image.hasMany(BusinessSector)
  BusinessSector.belongsTo(Image)

  // Creating the N -> N association between Image and CaseStudies
  Image.hasMany(CaseStudies)
  CaseStudies.belongsTo(Image)

  // Creating the N -> N association between Image and CaseStudies Content
  Image.hasMany(CaseStudiesContent)
  CaseStudiesContent.belongsTo(Image)

  // Creating the N -> N association between Image headshot and Employee
  Image.hasMany(Employee, { foreignKey: 'main_image_id' })
  Employee.belongsTo(Image, {
    as: 'main_image',
    foreignKey: 'main_image_id',
  })

  // Creating the N -> N association between Image headshot and Employee
  Image.hasMany(Employee, { foreignKey: 'headshot_id' })
  Employee.belongsTo(Image, {
    as: 'image',
    foreignKey: 'headshot_id',
  })

  // Creating the N -> N association between Image and Service
  Image.hasMany(Service)
  Service.belongsTo(Image)

  // Creating the N -> N association between Image and Services Contents
  Image.hasMany(ServicesContent)
  ServicesContent.belongsTo(Image)

  db._tables = {
    Area,
    AreaContent,
    Service,
    ServicesContent,
    Employee,
    CaseStudies,
    CaseStudiesContent,
    BusinessSector,
    BusinessSectorContent,
    Image,
  }
}

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
