/*
 * @Description:
 * @Author: leek
 * @Date: 2020-01-03 10:37:11
 * @LastEditors: leek
 * @LastEditTime: 2020-01-03 10:37:11
 */
var fs = require("fs");
var path = require('path');

var base_path = '/www/web'

readdir(base_path, function (base_files) {


    base_files.forEach(function (item) {
        let base_files_path = path.join(base_path, item)
        console.log(base_files_path)

        var base_files_path_stats = getFsStats(base_files_path)
        console.log(base_files_path_stats)

        if (!isDic(base_files_path_stats)) {
            console.log('not is dic')
            return false;
        }

        // let artisan_path = path.join(base_files_path, 'artisan')
        let artisan_path = path.join(base_files_path, 'public_html/artisan')
        console.log(artisan_path)

        if (!isExists(artisan_path)) {
            console.log('not is exists artisan')
            return false;
        }

        // let laravel_log_path = path.join(base_files_path, 'storage/logs/laravel.log')
        let laravel_log_path = path.join(base_files_path, 'public_html/storage/logs/laravel.log')
        console.log(laravel_log_path)

        if (!isExists(laravel_log_path)) {
            console.log('not is exists laravel.log')
            return false;
        }

        writeFile(laravel_log_path, '')
    })
})

function readdir (path, callback) {
    fs.readdir(path, 'utf8', function (err, files) {
        if (err) throw err;
        callback(files);
    });
}

function getFsStats (path) {
    return fs.statSync(path)
}

function isDic (path) {
    return path.isDirectory()
}

function isExists (path) {
    return fs.existsSync(path)
}

function writeFile (path, data) {
    fs.writeFileSync(path, data);
}










