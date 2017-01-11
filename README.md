# Website_Optimization

*******WEBSITE OPTIMIZATION*******


****Using Gulp****

Step 1
Download Node.js from https://nodejs.org

Step 2
Open Command Line. (Windows: Windows+r -> Type "cmd" -> Enter).

Step 3
Type "node -v" in terminal to make sure node.js installed correctly.

Step 4
Type "npm install gulp -g" to install Gulp.

Step 5
Type "cd" (change folder) followed by which ever folder you want the project to be in.

Step 6
Type "npm install gulp --save-dev" to save locally for the project.

Step 7
Create a gulpfile.js in the texteditor to begin writing the Gulp code.



**Plugins**
If Gulp were a car, the plugins are the gasoline to make it run. There are many plugins available at http://gulpjs.com/plugins/


*Syntax*

// include gulp
var gulp = require('gulp'); 

// include plug-ins
var plugin = require('gulp-plugin');

// gulp task
gulp.task('name_of_task', function() {
  gulp.src('original_file_to_be_modified./src/scripts/*.js')
    .pipe(plugin())
    .pipe(gulp.dest('folder_to_output_new_code/dist'));
});

//call the tasks
gulp.task('default',["name_of_task1", "name_of_task2"])

*Syntax*



***Optimizations in index.html***

Added async attribute to script line 23, resulting in speed increase.

used @font-face in css instead of url for font, line 11 solving rendering block issue.

used gulp for rest of optimizations which include:

minifying css, which gets rid of whitespaces and increases speed
clean css, works in conjuction with and has similar functionality to minify css 
imagemin, which compresses images and allows faster rendering
cmq, which combines media queries

***Optimizations to pizza.html***

in views/js/main.js

Used 23 iterations instead of 200 in the loop for generating sliding pizzas, used for faster rendering without affecting functionality

Improved efficiency in the for-loop for updating pizza positions by separating for-loop into 3 components for more efficient calculations. See //code comments for more details. 
Reduced Image resize time from 100ms to .4 ms by implementing very efficient for-loop, see 
//code comments for more details.
