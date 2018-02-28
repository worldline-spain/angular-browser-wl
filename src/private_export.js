"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var animation_1 = require("./dsl/animation");
exports.ɵAnimation = animation_1.Animation;
var animation_style_normalizer_1 = require("./dsl/style_normalization/animation_style_normalizer");
exports.ɵAnimationStyleNormalizer = animation_style_normalizer_1.AnimationStyleNormalizer;
exports.ɵNoopAnimationStyleNormalizer = animation_style_normalizer_1.NoopAnimationStyleNormalizer;
var web_animations_style_normalizer_1 = require("./dsl/style_normalization/web_animations_style_normalizer");
exports.ɵWebAnimationsStyleNormalizer = web_animations_style_normalizer_1.WebAnimationsStyleNormalizer;
var animation_driver_1 = require("./render/animation_driver");
exports.ɵNoopAnimationDriver = animation_driver_1.NoopAnimationDriver;
var animation_engine_next_1 = require("./render/animation_engine_next");
exports.ɵAnimationEngine = animation_engine_next_1.AnimationEngine;
var web_animations_driver_1 = require("./render/web_animations/web_animations_driver");
exports.ɵWebAnimationsDriver = web_animations_driver_1.WebAnimationsDriver;
exports.ɵsupportsWebAnimations = web_animations_driver_1.supportsWebAnimations;
var web_animations_player_1 = require("./render/web_animations/web_animations_player");
exports.ɵWebAnimationsPlayer = web_animations_player_1.WebAnimationsPlayer;
//# sourceMappingURL=private_export.js.map