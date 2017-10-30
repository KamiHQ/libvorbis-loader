libvorbis-loader is a webpack loader forked from script-loader

It's purpose is to load the emscripten compiled libvorbis.js which is very hard to load using existig webpack plugins

USAGE:

require('script-loader!path/to/libvorbis.js')

This will append libvorbis into the window scope and overwrite the webworker's url to a file-loader output of libvorbis.