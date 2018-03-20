# Hi Interent, I'm DadBot

This is the source code and files for dadbot.xyz.

Feel free to use this code as inspiration for your own Bot landing page. Feel free to email me at hello@jamesbovis.com if you have any questions or would like to know more about the project.

Thanks,<br/>
James Bovis

## Getting started
You’ll see in this project that I have a number of Gulp tasks which help with the building and running of the DadBot website. Such features include, SASS compiling, cleaning up the CSS with UNCSS and image caching.

1. Clone the DadBot repro `git clone https://github.com/James-Bovis/DadBot.git` which will install the repro inside whichever directory you are currentlly in.

2. Install the dependencies `npm install` This will get everything installed that needs to run and build the site. This is providing you have NPM installed (https://www.npmjs.com/get-npm)[https://www.npmjs.com/get-npm]

3. Once this is completed, you will have Gulp installed and you can start running the tasks defined in `gulpfile.js`

4. If you simply type `gulp` into the command line, you will see the default task run and a local instance of the DadBot website will start on a localhost. The files will be sourced from the `src` folder and any changes you make inside the `src` folder will automatically refresh the browser and compile the SASS.

5. To create a version for distribution, you simply need to run `gulp build` this will then run the build task which includes cleaning and minifying the CSS, JS and images into  a `dist` folder which is ready to be placed onto your hosting platform.

This should be everything you need to get started with this project. Feel free to take and adapt my work here to your own usecase. This project has been really helpful to me as a frame of refrerence, I'm sure it will be useful for someone else too.
