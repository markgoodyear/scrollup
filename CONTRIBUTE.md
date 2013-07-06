#Contributing

Hi, if you are reading this you enjoy scroll up and want to contribute. If you really like it you can send some virtual beer to members.

##Team members

###Author

[![Mark Goodyear](http://gravatar.com/avatar/511fe713eb87c8fb068fc642c041aa70?s=70)](http://markgoodyear.com/) | 
--- | --- | --- | --- | --- | --- | ---
[Mark Goodyear](http://markgoodyear.com/) |  

###Contributors

[![Philip A Senger](http://gravatar.com/avatar/e33eebfa68659d4d6e8e9f014f1ed1fe?s=70)](http://www.cngrgroup.com) | [![Allyson Beckers](http://gravatar.com/avatar/07f40eac7279db3b8c1807a02b6ea232?s=70)](http://about.me/allysonbeckers)
--- | --- | --- | --- | --- | --- | ---
[Philip A Senger](http://www.cngrgroup.com) | [Allyson Beckers](http://about.me/allysonbeckers)

##Bugs

Add bugs to issues on the github page, make the issue clear, give an example. Mark has the final say on issues.

##Adding new features

Features need to be approved before they are accepted, they must be tracked as an issue, they must pass the build, you must provide a test and any documentation.

##Directory Structure
* css - obviously this is css for the plugin as well as the website
* img - images used for the plugin and website
* js - the distribution
** lib - any libraries
* node_modules - do **NOT CHECK IN** these files or directory. They are models needed to run node js and are automatically generated.
* report - we only update this on a release, please dont modify these files.
* test - modify the test.js to include some coverage.

##Node Js
This project uses [Node JS](http://nodejs.org/) and [Grunt](http://gruntjs.com/) please go read the wonderful documentation.

*Here are the steps needed to install all the modules*

    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install connect --save-dev
    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-qunit --save-dev
    npm install grunt-contrib-watch --save-dev
    npm install grunt-plato --save-dev

##Node/Grunt Targets

    test - runs the tests for all known versions of Jquery on a headless webkit server
    package - compress the pluggin and adds the banner.
    analysis - runs jshint and tells you how good you are.
    report - creates a plato report and adds to the history of the plugin
    default - runs clean, analysis, test, package.
    
