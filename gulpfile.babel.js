// const gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     postcss = require('gulp-postcss'),
//     autoprefixer = require('autoprefixer'),
//     cleancss = require('gulp-clean-css')
//     // autoprefixer = require('gulp-autoprefixer'),
//     // imageMin = require('gulp-imagemin'),
//     // cssnano = require('gulp-cssnano'),
//     sourcemaps = require('gulp-sourcemaps'),
//     uglifyJs = require('gulp-uglify'),
//     concat = require ('gulp-concat'),
//     merge = require('merge-stream'),
//     htmlmin = require('gulp-htmlmin'),
//     htmlreplace = require('gulp-html-replace'),
//     browserSync = require('browser-sync').create(),
//     babel = require('gulp-babel'),
//     // server = browserSync.create();
//     reload = browserSync.reload
//     const del = require('del');

// //  Paths

// const paths = {
//   styles: {
//     src: 'assets/sass/**/*.scss',

//     dest: 'dist/css'
//   },
//   scripts: {
//       src: 'assets/js/**/*.js',

//       dest: 'dist/js'
//   },
//   images: {
//       src: 'src/img/**/*.{jpg,png,gif,svg}',

//       dest: 'dist/img'
//   },
//   html: {
//       src: 'src/**/*.html',

//       dest: 'dist/'
//   }
  
// }

// //  Shared Tasks

// const clean = () => del(['dist']);


// //  Development build specific tasks


//  function html() {
//      return gulp.src(paths.html.src)
//         .pipe(gulp.dest(paths.html.dest));
//  }

//  function scripts() {
//      return gulp.src(paths.scripts.src, {
//          sourcemaps:true })
//          .pipe(sourcemaps.init())
//          .pipe(babel({
//              presets: ['@babel/env']
//          }))
//          .pipe(uglifyJs())
//         //  .pipe(concat('index.min.js'))

//     .pipe(gulp.dest('./src/js'))
//  }

//  function styles() {
//      return gulp.src('assets/sass/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             outputStyle: 'compressed'
//         })
//         .on('error', sass.logError))
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }, cssnano()))
//         .pipe(sourcemaps.write())
//         // .pipe(uglify())
//         .pipe(gulp.dest('src/css'))
//         .pipe(browserSync.stream());
//  }

//  function images() {
//      return gulp.src(paths.images.src)
//         .pipe(gulp.dest('src/img'));
//  }
 

// //  function reload(done) {
// //      browserSync.reload();
// //      done();
// //  }

//  function serve(done) {
//      browserSync.init({
//          server: {
//              baseDir: "./src"
//          },
//          notify: true,
//          open: false
//      });

//      done();
//  }

//  gulp.task('app', gulp.parallel(html, styles, scripts, images));
//  gulp.task('build', gulp.series(clean, 'app'));


//  // Watch Tasks

//  function watchHtml() {
//     console.log("Watching: " + paths.html.src);
//     gulp.watch(paths.html.src, html).on('change', gulp.series('build', browserSync.reload))
//         // paths.images.src;
//  }

//  function watchStyles() {
//      console.log("Watching: " + paths.styles.src);
//      gulp.watch(paths.styles.src, styles).on('change', gulp.series(clean, styles, browserSync.reload))
//  }

//  function watchScripts() {
//      console.log("Watching: " + paths.scripts.src);
//      gulp.watch(paths.scripts.src, scripts).on('change', gulp.series(clean, scripts, browserSync.reload))
//  }

//  gulp.task('watch', gulp.parallel(clean, watchHtml, watchStyles, watchScripts, serve));

// //  var watcher = () => 
// //                         styles()
// //                         gulp.watch('./assets/js/**/*').on('change', gulp.series(scripts, reload, watcher, function (path, stats) {
// //                             console.log(path + ' has been changed');
// //                         }));

                       
                        
// //                         gulp.watch( './src/*').on('change', gulp.series( watchHtml, reload, watcher));
                        
// //                         gulp.watch('./assets/sass/**/*').on('change', gulp.series(styles, reload, watcher, function (path, stats) {
// //                             return console.log(path);
// //                         }));
                        
// //                         // watcher.on('change', function(path) {
// //                         //     console.log("File " + path + " was changed")
// //                         // })
        

// //  const dev = gulp.series(clean, styles, scripts, serve, images, watcher);
// //  export default dev;


// //  Production Specific Tasks

// gulp.task('styles:prod', function () {
//     var sassStream = gulp.src(paths.styles.src)
//     .pipe(sass());

//     return merge (sassStream)
//         // .pipe(concat('all.min.css'))
//         .pipe(cleanCSS({ specialComments: 0 }))
//         .pipe(gulp.dest(paths.styles.dest));
// });

// gulp.task('scripts:prod', function() {
//     var jsStream = gulp.src(paths.scripts.src);
//     // let target = gulp.src(paths.html.dest);

//     // let sources = gulp.src([paths.scripts.src])
//     return merge (jsStream)
//         .pipe(concat('all.min.js'))
//         .pipe(uglifyJs())
//         // .pipe(inject(gulp.src('all.min.js', {read:false}), {relative:true}))
//         .pipe(gulp.dest(paths.scripts.dest));

// });

// gulp.task('images:prod', function() {
//     return gulp.src(paths.images.src)
//         .pipe(imageMin())
//         .pipe(gulp.dest(paths.images.dest));
// });

// gulp.task('html:prod', function() {
//     return gulp.src(paths.html.src)
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(htmlreplace({
//             'js': 'js/all.min.js'
//         }))
//         .pipe(gulp.dest(paths.html.dest));
// });

// gulp.task('all:prod', gulp.parallel(
//     'styles:prod', 'scripts:prod', 'html:prod', 'images:prod'
// ));

// gulp.task('build:prod', gulp.series(clean, 'all:prod'));

// //  Default Task
// gulp.task('default', gulp.series('build', serve, 'watch'))

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    // autoprefixer = require('gulp-autoprefixer'),
    // cssnano = require('gulp-cssnano'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    gulpCopy = require('gulp-copy'),
    // imageMin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJs = require('gulp-uglify'),
    concat = require ('gulp-concat'),
    merge = require('merge-stream'),
    htmlmin = require('gulp-htmlmin'),
    htmlreplace = require('gulp-html-replace'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel'),
    // server = browserSync.create();
    reload = browserSync.reload
    const del = require('del');

//  Paths

const paths = {
  styles: {
    src: 'assets/sass/**/*.scss',

    dest: 'dist/css'
  },
  scripts: {
      src: 'assets/js/**/*.js',

      dest: 'dist/js'
  },
  images: {
      src: 'src/img/**/*.{jpg,png,gif,svg}',

      dest: 'dist/img'
  },
  html: {
      src: 'src/**/*.html',

      dest: 'dist/'
  },
  video: {
        src: 'src/video/**',

        dest: 'dist/video/'
  },
  pdf: {
        src: 'src/*.pdf',

        dest: 'dist/'
  }
  
}

//  Shared Tasks

const clean = () => del(['dist']);


//  Development build specific tasks


 function html() {
     return gulp.src([paths.html.src, 'src/*.php'])
        .pipe(gulp.dest(paths.html.dest));
 }

 function video() {
     return gulp.src(paths.video.src)
        .pipe(gulp.dest(paths.video.dest))
 }

 function pdf() {
     return gulp.src(paths.pdf.src)
        .pipe(gulp.dest(paths.pdf.dest))
 }

 function scripts() {
     return gulp.src(paths.scripts.src, {
         sourcemaps:true })
         .pipe(sourcemaps.init())
         .pipe(babel({
             presets: ['@babel/preset-env']
         }))
         .pipe(uglifyJs())
        //  .pipe(concat('index.min.js'))

    .pipe(gulp.dest('./src/js'))
 }

 function styles() {
     var plugins = [
         autoprefixer({browsers: ['last 2 version']})
     ]
     return gulp.src('assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        // .pipe(uglify())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
 }

 function images() {
     return gulp.src(paths.images.src)
        .pipe(gulp.dest('src/img'));
 }
 

//  function reload(done) {
//      browserSync.reload();
//      done();
//  }

 function serve(done) {
     browserSync.init({
         server: {
             baseDir: "./src"
         },
         notify: true,
         open: false
     });

     done();
 }

 gulp.task('app', gulp.parallel(html, styles, scripts, images, video, pdf));
 gulp.task('build', gulp.series(clean, 'app'));


 // Watch Tasks

 function watchHtml() {
    
    console.log("Watching: " + paths.html.src);
    console.log("Watching: " + 'src/*.php')
    gulp.watch(paths.html.src, html).on('change', gulp.series('build', browserSync.reload))
    gulp.watch('src/*.php').on('change', gulp.series('build', browserSync.reload))
    gulp.watch('src/video').on('change', gulp.series('build', browserSync.reload))
    // gulp.watch()
        // paths.images.src;
 }

 function watchStyles() {
     console.log("Watching: " + paths.styles.src);
     gulp.watch(paths.styles.src, styles).on('change', gulp.series(clean, styles, browserSync.reload))
 }

 function watchScripts() {
     console.log("Watching: " + paths.scripts.src);
     gulp.watch(paths.scripts.src, scripts).on('change', gulp.series(clean, scripts, browserSync.reload))
 }

 gulp.task('watch', gulp.parallel(clean, watchHtml, watchStyles, watchScripts, serve));


//  Production Specific Tasks

gulp.task('styles:prod', function () {
    var sassStream = gulp.src(paths.styles.src)
    .pipe(sass());

    return merge (sassStream)
        // .pipe(concat('all.min.css'))
        .pipe(cleanCSS({ specialComments: 0 }))
        .pipe(gulp.dest(paths.styles.dest));
});

// gulp.task('scripts:prod', function() {
//     var jsStream = gulp.src(paths.scripts.src);
//     // let target = gulp.src(paths.html.dest);

//     // let sources = gulp.src([paths.scripts.src])
//     return merge (jsStream)
//         .pipe(concat('all.min.js'))
//         .pipe(uglifyJs())
//         // .pipe(inject(gulp.src('all.min.js', {read:false}), {relative:true}))
//         .pipe(gulp.dest(paths.scripts.dest));

// });

gulp.task('scripts:prod', function() {
    var jsStream = gulp.src(paths.scripts.src);

    return merge(jsStream) 
        .pipe(sourcemaps.init())
        // .pipe(concat('all.min.js'))
        
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('all.min.js'))             //  Makes all JavaScript files into one
        .pipe(uglifyJs())                       //  Minify all JavaScript Files
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.scripts.dest))
})

/*
 *  This is going off until i find fix for JPEG output error
*/

gulp.task('images:prod', function() {
    return gulp.src(paths.images.src)
        // .pipe(cache(imageMin()))
        .on('error', function(e) { console.log(e); })
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('html:prod', function() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ 
            collapseWhitespace: true,
            ignoreCustomFragments: [ /<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/ ] 
        }))
        .pipe(htmlreplace({
            'js': 'js/all.min.js'
        }))
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task('video:prod', function() {
    return gulp.src(paths.video.src)
        .pipe(gulp.dest(paths.video.dest))
})

gulp.task('php:prod', function() {
    return gulp.src('src/*.php')
        // .pipe(gulpCopy('dist/'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('pdf:prod', function() {
    return gulp.src(paths.pdf.src)
       .pipe(gulp.dest(paths.pdf.dest))
});

gulp.task('all:prod', gulp.parallel(
    'styles:prod', 'scripts:prod', 'html:prod', 
    'images:prod', 'pdf:prod', 'php:prod', 'video:prod'
));

gulp.task('build:prod', gulp.series(clean, 'all:prod'));

//  Default Task
gulp.task('default', gulp.series('build', serve, 'watch'))