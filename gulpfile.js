const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require ('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// Compilando o sass

function styles() {
    return gulp.src('./src/styles/*.scss')              // recuperando os arquivos .scss
        .pipe(sass({ outputStyle: 'compressed' }))      // estilo de saída dos arquivos será comprimido
        .pipe(gulp.dest('./dist/css'));                 // enviando os arquivos comprimidos para a pasta de destino
}

function images() {
    return gulp.src('./src/images/**/*')                // ** para acessar as pastas e * para pegar os arquivos dentro da pasta
        .pipe(imagemin())                               // plugin imagemin
        .pipe(gulp.dest('./dist/images'));              // enviando os arquivos comprimidos para a pasta de destino
}


exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))       // parenteses com o nome das funções que serão executadas
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}