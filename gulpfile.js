"use strict";

const gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')(),
    config = require('./gulpfile.config.json');

function ENV(options = {}) {
  this.HOSTNAME = options.HOSTNAME || "";
  this.inspect = function() {
    console.log("Environment:", this.HOSTNAME);
  }
};

const env = new ENV(process.env);
env.inspect();

require(config.tasks.concat('clean'))(gulp, plugins, config);
require(config.tasks.concat('server'))(gulp, browserSync, config);
require(config.tasks.concat('copy'))(gulp, plugins, config);
require(config.tasks.concat('styles'))(gulp, plugins, browserSync, config);
require(config.tasks.concat('scripts'))(gulp, plugins, browserSync, config);
require(config.tasks.concat('html'))(gulp, plugins, browserSync, config);
require(config.tasks.concat('build'))(gulp, config);
require(config.tasks.concat('watch'))(gulp, config);
require(config.tasks.concat('start'))(gulp);
