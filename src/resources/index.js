import localforage from 'localforage';
import projectsData from './projects.json'

export async function getProjects() {
  await fakeNetwork(`getProjects`);
  let initProjects = await localforage.getItem("projects");
  for (const key in initProjects) {
    delete initProjects[key];
  }
  let projects = setItems()
  if (!projects) projects = [];
  return projects;
}

export async function setItems() {
  await fakeNetwork('setProjects');
  let projects = projectsData?.projects;
  return localforage.setItem('projects', projects).then(function (value) {
      // Do other things once the value has been saved.
      // console.log(value);
      return value;
  }).catch(function(err) {
      // This code runs if there were any errors
      console.log(err);
  });
}

export async function getProject(slug) {
  await fakeNetwork(`/project-details/${slug}`);
  let projects = await localforage.getItem("projects");
  let project = projects.find(project => project.slug === slug);
  return project ?? null;
}

let fakeCache = {}

async function fakeNetwork(key) {
    if (!key) {
      fakeCache = {};
    }
  
    if (fakeCache[key]) {
      return;
    }
  
    fakeCache[key] = true;
    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
}