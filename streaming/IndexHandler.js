﻿/*
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * copyright Digital Primates 2012
 */
Stream.modules.IndexHandler = (function () {
    "use strict";

    var Constr;

    Constr = function (data, streamItems) {
        this.data = null;
        this.items = null;
        this.ready = false;
        this.onReady = null;
    };

    Constr.prototype = {
        constructor: Stream.modules.IndexHandler,

        getBandwidthForIndex: function (quality) {
            return 0;
        },

        getMaxQuality: function () {
            return 0;
        },

        getInitRequest: function (quality) {
            return null;
        },

        getSegmentRequestForTime: function (time, quality) {
            return null;
        },

        getNextSegmentRequest: function (quality) {
            return null;
        }
    };

    return Constr;
}());