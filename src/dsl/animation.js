"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var animation_ast_builder_1 = require("./animation_ast_builder");
var animation_timeline_builder_1 = require("./animation_timeline_builder");
var element_instruction_map_1 = require("./element_instruction_map");
var Animation = (function () {
    function Animation(_driver, input) {
        this._driver = _driver;
        var errors = [];
        var ast = animation_ast_builder_1.buildAnimationAst(input, errors);
        if (errors.length) {
            var errorMessage = "animation validation failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    Animation.prototype.buildTimelines = function (element, startingStyles, destinationStyles, options, subInstructions) {
        var start = Array.isArray(startingStyles) ? util_1.normalizeStyles(startingStyles) :
            startingStyles;
        var dest = Array.isArray(destinationStyles) ? util_1.normalizeStyles(destinationStyles) :
            destinationStyles;
        var errors = [];
        subInstructions = subInstructions || new element_instruction_map_1.ElementInstructionMap();
        var result = animation_timeline_builder_1.buildAnimationTimelines(this._driver, element, this._animationAst, start, dest, options, subInstructions, errors);
        if (errors.length) {
            var errorMessage = "animation building failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        return result;
    };
    return Animation;
}());
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map