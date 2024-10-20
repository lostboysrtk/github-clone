const fs=require('fs').promises;
const path=require('path');

async function initRepo(){
  const repoPath=path.resolve(process.cwd(),'.apnaGit');
  const commitsPath=path.resolve(repoPath,'commits');

  try{
    await fs.mkdir(repoPath,{recursive:true});  
    await fs.mkdir(commitsPath,{recursive:true});
    await fs.writeFile(
      path.join(repoPath,'config.json'),
      JSON.stringify({bucket: process.env.S3_BUCKET_NAME})
    );
    console.log('repository is initiated');
  }catch(err){
    console.log('Error:',err);
  }
  console.log('init repo is called');
}

module.exports = {initRepo};