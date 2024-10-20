const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const {initRepo} = require('./controllers/init');
const {addRepo} = require('./controllers/add');
const {commitRepo} = require('./controllers/commit');
const {pushRepo} = require('./controllers/push');
const {pullRepo} = require('./controllers/pull');
const {revertRepo} = require('./controllers/revert');

yargs(hideBin(process.argv)).command("init" , "initialize a new repository",{}, initRepo)
  .command("add <file>" , "add a file to the repository",(yargs)=>{
    yargs.positional('file', {
      describe: 'file to add to the staging area',
      type: 'string'
    });
  },
  (argv)=>{
    addRepo(argv.file); 
  })
  .command("commit <message>" , "commit the staged files",(yargs)=>{
    yargs.positional('message', {
      describe: 'commit message',
      type: 'string'
    });
  },
  (argv)=>{
    commitRepo(argv.message);
  })
  .command("push" , "push the committed files to the repository",{},pushRepo)
  .command("pull" , "pull the committed files from the repository",{},pullRepo)
  .command("revert <commitID>" , "revert the last commit",(yargs)=>{
    yargs.positional('commitID', {
      describe: 'commit hash to revert to',
      type: 'string',
  });
  },revertRepo)
  .demandCommand(1,"You need at least one Command before moving on!")
  .help().argv;