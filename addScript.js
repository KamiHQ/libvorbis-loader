/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src, libvorbisScriptUrl) {

	// KAMI: modified to code split libvorbis properly
	extendFunction = function(){
		VorbisWorkerScript.getCurrentScriptURL = function () { return '$$libvorbisScriptUrl$$'; };
	}

	var extension = "(" + extendFunction.toString().replace("$$libvorbisScriptUrl$$", libvorbisScriptUrl) + ")();";

	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src + extension);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src + extension);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}
