
var cp = require ( 'child_process' );
var fs = require ( 'fs-extra' );
var path = require ( 'path' );

var GITREPO = path.resolve ( __dirname, '..', '..', 'git', 'name-gen' );

/**
cp.execSync ( 'git pull', {
    cwd: GITREPO
} );
*/

fs.copySync ( path.resolve ( __dirname, '..', 'ng', 'dist' ),
     GITREPO );

cp.execSync ( 'git init', {
    cwd: GITREPO
} );
cp.execSync ( 'git add .', {
    cwd: GITREPO
} );
cp.execSync ( 'git commit -m "update"', {
    cwd: GITREPO
} );
try
{
    cp.execSync ( 'git remote add origin https://github.com/jfmario-aws-name-gen/jfmario-aws-name-gen.github.io', {
        cwd: GITREPO
    } );
}
catch (e) {}
cp.execSync ( 'git push -u origin master', {
    cwd: GITREPO
} );