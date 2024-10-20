const fs=require('fs').promises;
const path=require('path');

async function addRepo(filePath){
  //console.log('add command is called');
  const repoPath=path.resolve(process.cwd(),'.apnaGit');
  const stagingPath=path.join(repoPath,'staging');

  try{
    await fs.mkdir(stagingPath,{recursive:true});
    const fileName=path.basename(filePath);
    await fs.copyFile(filePath,path.join(stagingPath,fileName));
    console.log(`File ${fileName} is added to staging area`);
  }catch(err){
    console.log('Error:',err);
  } 
}

module.exports = {addRepo};