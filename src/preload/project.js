const { Project } = require('../db');

function preloadProjects() {
  const projects = [{
    name: 'E-commerce'
  }, {
    name: 'JobCrawler'
  }, {
    name: 'UserTrends'
  }]
  try {
    const newProjects = projects.map(async (project) => {
      return Project.create({
        name: project.name.toLowerCase()
      })
    })

    return Promise.all(newProjects)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = preloadProjects;