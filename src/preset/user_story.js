const { Project } = require('../db');
const { User_story } = require('../db');

async function presetUserStories() {
  try {
    const ecommerce = await Project.findOne({ where: { name: 'e-commerce' } });
    const jobcrawler = await Project.findOne({ where: { name: 'jobcrawler' } });
    const usertrends = await Project.findOne({ where: { name: 'usertrends' } });
    const allUserStories = await User_story.findAll();

    await ecommerce.addUser_stories([allUserStories[0], allUserStories[1], allUserStories[2]]);
    await jobcrawler.addUser_stories([allUserStories[3], allUserStories[4], allUserStories[5]]);
    await usertrends.addUser_stories([allUserStories[6], allUserStories[7], allUserStories[8]]);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = presetUserStories;