const { Company } = require('../db');
const { Project } = require('../db');
const { Op } = require("sequelize");

async function presetProjects() {
  try {
    const fusepong = await Company.findOne({ where: { name: 'fusepong' } });
    const globant = await Company.findOne({ where: { name: 'globant' } });
    const projectsForFusepong = await Project.findAll({
      where: {
        [Op.or]: [
          { name: 'e-commerce' },
          { name: 'jobcrawler' }
        ]
      }
    });
    const projectForGlobant = await Project.findOne({ where: { name: 'usertrends' } });
    await fusepong.addProjects(projectsForFusepong);
    await globant.addProject(projectForGlobant);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = presetProjects;