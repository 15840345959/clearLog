/*
 * @Description:
 * @Author: leek
 * @Date: 2020-01-03 10:37:11
 * @LastEditors: leek
 * @LastEditTime: 2020-01-03 10:37:11
 */
var fs = require("fs");
var path = require('path');

var base_path = '/Applications/MAMP/htdocs'

readdir(base_path, function (base_files) {

    base_files.forEach(function (item) {
        let base_files_path = path.join(base_path, item)

        var base_files_path_stats = getFsStats(base_files_path)

        if (!isDic(base_files_path_stats)) {
            return false;
        }

        let artisan_path = path.join(base_files_path, 'artisan')

        if (!isExists(artisan_path)) {
            return false;
        }

        let laravel_log_path = path.join(base_files_path, 'storage/logs/laravel.log')

        if (!isExists(laravel_log_path)) {
            return false;
        }

        writeFile(laravel_log_path, '')
        console.log(laravel_log_path)
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










