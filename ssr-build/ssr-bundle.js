module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NJC":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("ajCz");

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var timeLeft = dateLeft.getTime();
  var dateRight = parse(dirtyDateRight);
  var timeRight = dateRight.getTime();

  if (timeLeft < timeRight) {
    return -1;
  } else if (timeLeft > timeRight) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = compareAsc;

/***/ }),

/***/ "/PLn":
/***/ (function(module, exports) {

module.exports = {"all":{"540134d0e8f8a09b42cbf3d6":{"active":2,"cured":0,"died":0,"date":"2014-08-29T00:00:00.000Z","total":2,"modified":"2014-08-30T02:21:37.266Z","city":"Al Jubail","state":"Eastern Province","country":"Saudi Arabia","note":"","lat":27,"lng":49.66666699999996,"gid":"32690662f60657818a8dbd39730ce9de280b9150","geo":[49.66666699999996,27]},"53933b1ee8f8a09b42cbf348":{"active":4,"cured":0,"died":2,"date":"2014-08-28T00:00:00.000Z","total":6,"modified":"2014-08-30T02:32:54.473Z","city":"Dammam","state":"Eastern Province","country":"Saudi Arabia","note":"","lat":26.3926665,"lng":49.977713600000016,"gid":"8b930ed4080562c5c92bcd374f24b966a1e345de","geo":[49.977713600000016,26.3926665]},"53600dfa102aa00f4025423a":{"active":0,"cured":4,"died":2,"date":"2014-08-24T00:00:00.000Z","total":6,"modified":"2014-08-30T02:27:47.581Z","__v":1,"city":"Wadi Addawasir","country":"Saudi Arabia","geo":[44.787222199999974,20.4644444],"gid":"3b28762670ea4a8a9eb902aa0389deab1feaf797","lat":20.4644444,"lng":44.787222199999974,"note":"","records":["5360e66131445a3c48c5c4c6"],"state":"Riyadh Province"},"53600d93659e620d400ed260":{"active":4,"cured":10,"died":4,"date":"2014-08-18T00:00:00.000Z","total":18,"modified":"2014-08-30T02:30:17.850Z","__v":8,"city":"Hafar Al Batin","country":"Saudi Arabia","geo":[45.942011800000046,28.3595215],"gid":"1b4d667222a9352deadb9a984d2fc748079961b0","lat":28.3595215,"lng":45.942011800000046,"note":"","records":["5360ed13cc11723e4875b70c","5360f01dcc11723e4875b719","5360f0bfcc11723e4875b71c","5360f0d831445a3c48c5c4dc","5361fdf30bd333f56cad39fc","5361febb0bd333f56cad3a04"],"state":"Eastern Province"},"53600714659e620d400ed259":{"active":138,"cured":154,"died":138,"date":"2014-08-17T00:00:00.000Z","total":430,"modified":"2014-08-30T02:31:33.417Z","__v":41,"city":"Riyadh","country":"Saudi Arabia","geo":[46.72416670000007,24.7116667],"gid":"e3bdcf038b9378042607c1a17742b4968b8d7d9a","lat":24.7116667,"lng":46.72416670000007,"note":"","records":["536011f0659e620d400ed26d","5360e69acc11723e4875b705","5360e727cc11723e4875b707","5360e78acc11723e4875b70a","5360edda31445a3c48c5c4d2","5360eedacc11723e4875b714","5360ef8c31445a3c48c5c4d5","5360f045cc11723e4875b71a","5360f09331445a3c48c5c4da","5360f125cc11723e4875b71e","5360f147cc11723e4875b71f","5360f15c31445a3c48c5c4df","5360f190cc11723e4875b721","5360f238cc11723e4875b725","5360f25231445a3c48c5c4e5","5360f39731445a3c48c5c4e8","5360f4a031445a3c48c5c4ea","5360f64fcc11723e4875b72a","5360f711cc11723e4875b72c","5360f734cc11723e4875b72d","5360f779cc11723e4875b72f","5360f7a9cc11723e4875b731","5360f7e031445a3c48c5c4f1","5360f806cc11723e4875b733","5360f81e31445a3c48c5c4f3","5360f83dcc11723e4875b735","5360f85831445a3c48c5c4f5","5360f86ecc11723e4875b737","5360f88331445a3c48c5c4f7","5361fe3d0bd333f56cad39fe","5361ff7f4c0807f36cbc7675","5362026f0bd333f56cad3a0b","536204a64c0807f36cbc767e","536206b00bd333f56cad3a15","536207810bd333f56cad3a17","53620f094c0807f36cbc7687","5362108d0bd333f56cad3a1f","536211700bd333f56cad3a23","536215390bd333f56cad3a2e","5363ba788d93a1540225e2a5","5364e8e735536d021037d046"],"state":"Riyadh Province"},"53600d25102aa00f40254235":{"active":8,"cured":34,"died":28,"date":"2014-07-29T00:00:00.000Z","total":70,"modified":"2014-08-02T01:05:15.662Z","__v":6,"city":"Medina","country":"Saudi Arabia","geo":[39.60000000000002,24.4666667],"gid":"8249b9f1219a614a848a73b5275b67726c69ef7c","lat":24.4666667,"lng":39.60000000000002,"note":"","records":["5360efef31445a3c48c5c4d7","5360f1bf31445a3c48c5c4e1","5361fe890bd333f56cad3a02","53620f210bd333f56cad3a1c","536210734c0807f36cbc768a","5364e8cb35536d021037d045"],"state":"Al Madinah Province"},"53b031eae8f8a09b42cbf398":{"active":0,"cured":0,"died":2,"date":"2014-07-17T00:00:00.000Z","total":2,"modified":"2014-07-17T15:14:44.125Z","city":"Bishah","state":"Asir Province","country":"Saudi Arabia","note":"","lat":20,"lng":42.60000000000002,"gid":"dd1475584ee8b6aa73c16e35ee2243f00662d8ca","geo":[42.60000000000002,20]},"5360043e102aa00f4025422a":{"active":124,"cured":152,"died":114,"date":"2014-07-14T00:00:00.000Z","total":390,"modified":"2014-07-17T14:35:15.665Z","__v":39,"city":"Jeddah","country":"Saudi Arabia","geo":[39.17277779999995,21.5433333],"gid":"b173e88b3a7c84f0325aae1c4a3c56b65c63428f","lat":21.5433333,"lng":39.17277779999995,"note":"1st case was diagnosed on 17th of April, 2013","records":["536004f2659e620d400ed24f","5360053a659e620d400ed250","536005b4659e620d400ed252","536005e0659e620d400ed254","53600609659e620d400ed255","5361fe094c0807f36cbc7670","5361ff980bd333f56cad3a07","536201fd4c0807f36cbc767a","536203ea0bd333f56cad3a0f","5362048c4c0807f36cbc767d","5362068b0bd333f56cad3a13","536207654c0807f36cbc7683","53620ef84c0807f36cbc7686","536210a00bd333f56cad3a20","536211274c0807f36cbc768e","536211d70bd333f56cad3a24","5362120a0bd333f56cad3a26","536212534c0807f36cbc7691","536212a74c0807f36cbc7692","5362131f0bd333f56cad3a29","536213754c0807f36cbc7694","536214650bd333f56cad3a2c","5362148e0bd333f56cad3a2d","536215804c0807f36cbc7697","536216294c0807f36cbc7698","536219364c0807f36cbc76a1","53636e3c13c44c7379b722f2","5363ba848d93a1540225e2a6","5364e8836e069f1810b44ced"],"state":"Makkah Province"},"538362bde8f8a09b42cbf2de":{"active":8,"cured":0,"died":0,"date":"2014-07-12T00:00:00.000Z","total":8,"modified":"2014-07-25T03:48:28.223Z","city":"Kerman","state":"Kerman","country":"Iran","note":"","lat":30.2833333,"lng":57.08333330000005,"gid":"c82752c941a2abca6f2970f6ba690168a7ce127f","geo":[57.08333330000005,30.2833333]},"53bff0b0e8f8a09b42cbf3bd":{"active":2,"cured":0,"died":0,"date":"2014-07-10T00:00:00.000Z","total":2,"modified":"2014-07-11T14:12:18.721Z","city":"Al Hofuf","state":"Eastern Province","country":"Saudi Arabia","note":"","lat":25.3141558,"lng":49.62990769999999,"gid":"890ae833277006b418e4b22d1858e886d84184df","geo":[49.62990769999999,25.3141558]},"5360083f102aa00f40254233":{"active":10,"cured":4,"died":12,"date":"2014-07-10T00:00:00.000Z","total":26,"modified":"2014-07-11T14:11:29.394Z","__v":2,"city":"Taif","country":"Saudi Arabia","geo":[40.41666669999995,21.2666667],"gid":"bc7c45c95c1006fc8ae5f501f47be31d145fc297","lat":21.2666667,"lng":40.41666669999995,"note":"","records":["5360e64acc11723e4875b702","5360e70231445a3c48c5c4cb"],"state":"Makkah Province"},"53600ed6102aa00f40254242":{"active":92,"cured":28,"died":10,"date":"2014-07-09T00:00:00.000Z","total":130,"modified":"2014-07-09T19:34:56.462Z","__v":15,"city":"Abu Dhabi","country":"United Arab Emirates","geo":[54.366666699999996,24.4666667],"gid":"7dee37c103c46581028051d5c25db43d7c29d8a6","lat":24.4666667,"lng":54.366666699999996,"note":"","records":["5360102b102aa00f40254247","53601040659e620d400ed26c","536013ec102aa00f40254250","5360144c102aa00f40254252","53601602659e620d400ed279","53601761659e620d400ed27b","53601776659e620d400ed27d","53601797102aa00f40254254","536017b8659e620d400ed27f","536017e2102aa00f40254256","53601ae6102aa00f40254259","53601b0e659e620d400ed285","53601b31102aa00f4025425b","53601b4f659e620d400ed287","53601b87102aa00f4025425d"],"state":"Abu Dhabi"},"5361fca00bd333f56cad39fa":{"active":4,"cured":2,"died":2,"date":"2014-07-08T00:00:00.000Z","total":8,"modified":"2014-07-09T19:39:14.974Z","__v":2,"city":"Najran","country":"Saudi Arabia","geo":[44.1322222,17.4916667],"gid":"9557dd2d57d2f5af737d289557ee6419e193f95b","lat":17.4916667,"lng":44.1322222,"note":"","records":["5361fe720bd333f56cad3a00","536210b90bd333f56cad3a21"],"state":"Najran"},"53bafe69e8f8a09b42cbf3af":{"active":2,"cured":0,"died":2,"date":"2014-07-06T00:00:00.000Z","total":4,"modified":"2014-07-07T20:09:44.013Z","city":"Arar","state":"Northern Borders Province","country":"Saudi Arabia","note":"","lat":30.983333,"lng":41.016666999999984,"gid":"0baeeb2d4803c8f163ba790631a29421566bddc3","geo":[41.016666999999984,30.983333]},"538cf481e8f8a09b42cbf320":{"active":-8,"cured":10,"died":2,"date":"2014-06-25T00:00:00.000Z","total":4,"modified":"2014-06-26T13:12:57.675Z","city":"Al Jowf","state":"Al Jowf","country":"Saudi Arabia","note":"","lat":29.784722,"lng":40.10138899999993,"gid":"28d506121e77d7b185a1ff78593fd36dcad4465e","geo":[40.10138899999993,29.784722]},"536006da659e620d400ed258":{"active":-4,"cured":48,"died":20,"date":"2014-06-18T00:00:00.000Z","total":64,"modified":"2014-06-21T03:25:14.560Z","__v":8,"city":"Mecca","country":"Saudi Arabia","geo":[39.81666670000004,21.4166667],"gid":"60fc8bf25384cdba276d52578da1bcae4eb74397","lat":21.4166667,"lng":39.81666670000004,"note":"","records":["536011cd102aa00f4025424a","5360f8dbcc11723e4875b739","5361fea14c0807f36cbc7672","5361ffac4c0807f36cbc7677","536203d90bd333f56cad3a0d","536204bb4c0807f36cbc767f","536206974c0807f36cbc7681","5364e9196e069f1810b44cf0"],"state":"Makkah Province"},"538fae6fe8f8a09b42cbf32e":{"active":0,"cured":0,"died":2,"date":"2014-06-15T00:00:00.000Z","total":2,"modified":"2014-06-15T16:06:17.266Z","city":"Dhahran","state":"Eastern Province","country":"Saudi Arabia","note":"","lat":26.2666667,"lng":50.14999999999998,"gid":"7fc1c6d33f4ca008e840a87bf5c9aadd9966bc0b","geo":[50.14999999999998,26.2666667]},"539dc776e8f8a09b42cbf374":{"active":2,"cured":0,"died":0,"date":"2014-06-15T00:00:00.000Z","total":2,"modified":"2014-06-17T21:05:54.902Z","city":"Dhaka","state":"Dhaka Division","country":"Bangladesh","note":"Bangladesh-born US resident was admitted to hospital days after returning home via Abu Dhabi","lat":23.810332,"lng":90.41251809999994,"gid":"01cebe0dae9e6c104cd27c6fcd299b513a6affad","geo":[90.41251809999994,23.810332]},"537e26dee8f8a09b42cbf2b6":{"active":-2,"cured":14,"died":0,"date":"2014-06-13T00:00:00.000Z","total":12,"modified":"2014-06-14T17:41:31.248Z","city":"Al Qunfudhah","state":"Makkah Province","country":"Saudi Arabia","note":"","lat":19.1281398,"lng":41.07873919999997,"gid":"1cdea243e5a273a8cec981e0e94a9344ede5d454","geo":[41.07873919999997,19.1281398]},"539ac5bde8f8a09b42cbf360":{"active":2,"cured":0,"died":0,"date":"2014-06-12T00:00:00.000Z","total":2,"modified":"2014-06-13T09:38:14.838Z","__v":1,"city":"Al-Bahah","country":"Saudi Arabia","geo":[41.474209984374966,20.045381143636373],"gid":"95b6095886338e9b5e879aa77dec32cea3edbd31","lat":20.045381143636373,"lng":41.474209984374966,"note":"","state":"Al Bahah Province"},"538b46d9e8f8a09b42cbf30c":{"active":0,"cured":0,"died":2,"date":"2014-06-10T00:00:00.000Z","total":2,"modified":"2014-06-10T22:59:49.241Z","city":"Tlemcen","state":"Tlemcen","country":"Algeria","note":"","lat":34.8827758,"lng":-1.3166696000000684,"gid":"3b35d112439fb1145dc75894c4dcf60717c6ab48","geo":[-1.3166696000000684,34.8827758]},"5390abfae8f8a09b42cbf343":{"active":2,"cured":0,"died":0,"date":"2014-06-05T00:00:00.000Z","total":2,"modified":"2014-06-05T17:42:39.336Z","city":"Dilam","state":"Riyadh Province","country":"Saudi Arabia","note":"","lat":23.976619,"lng":47.15570869999999,"gid":"9d98f47980582f84c48709601e99116988f08968","geo":[47.15570869999999,23.976619]},"538fb0b4e8f8a09b42cbf333":{"active":42,"cured":0,"died":184,"date":"2014-06-03T00:00:00.000Z","total":226,"modified":"2014-06-04T23:51:49.380Z","city":"Unknown city","country":"Saudi Arabia","geo":[45.36735517656257,24.616818410787804],"gid":"e3bdcf038b9378042607c1a17742b4968b8d7d9a","lat":24.616818410787804,"lng":45.36735517656257,"note":"The Saudi Ministry of Health  announced +113 cases (+92 deaths) which were previously unreported without any more details. ","state":"Unknown"},"53600f59102aa00f40254246":{"active":10,"cured":2,"died":8,"date":"2014-06-01T00:00:00.000Z","total":20,"modified":"2014-06-12T10:56:07.298Z","__v":4,"city":"Amman","country":"Jordan","geo":[35.945695099999966,31.9565783],"gid":"a4ff0f6ed8f20eeb7549112acb42e9c1d1fc9260","lat":31.9565783,"lng":35.945695099999966,"note":"","records":["5360d3d331445a3c48c5c494","5360dfdf31445a3c48c5c4b1","5360e01f31445a3c48c5c4b3","5364cfc5cbececad0c305ef0"],"state":"Amman"},"538b468ae8f8a09b42cbf30a":{"active":0,"cured":0,"died":0,"date":"2014-06-01T00:00:00.000Z","total":0,"modified":"2014-06-01T15:30:08.382Z","city":"Koléa","state":"Tipasa","country":"Algeria","note":"","lat":36.639,"lng":2.7730000000000246,"gid":"06c4f29c272e02e4963b8a165698a63f8a92303e","geo":[2.7730000000000246,36.639]},"5361fcb40bd333f56cad39fb":{"active":-2,"cured":16,"died":2,"date":"2014-05-19T00:00:00.000Z","total":16,"modified":"2014-05-20T02:36:35.936Z","__v":3,"city":"Tabuk","country":"Saudi Arabia","geo":[36.58333330000005,28.3833333],"gid":"593e069a1d77e198521533a3dcc96dcd3cd6e79f","lat":28.3833333,"lng":36.58333330000005,"note":"","records":["5361ffc60bd333f56cad3a09","536202460bd333f56cad3a0a","53620f3a0bd333f56cad3a1d"],"state":"Tabuk Province"},"53711fa0e8f8a09b42cbf227":{"active":0,"cured":2,"died":0,"date":"2014-05-19T00:00:00.000Z","total":2,"modified":"2014-05-20T02:41:00.722Z","city":"Orlando","country":"United States","geo":[-81.37923649999999,28.5383355],"gid":"98bebc18d5ef864781247d14becb4481c72446c6","lat":28.5383355,"lng":-81.37923649999999,"note":"2nd U.S. Case, he is a health worker in Jeddah, Saudi Arabia","state":"Florida"},"5373985de8f8a09b42cbf241":{"active":4,"cured":0,"died":0,"date":"2014-05-15T00:00:00.000Z","total":4,"modified":"2014-05-15T15:43:11.047Z","city":"The Hague","state":"South Holland","country":"The Netherlands","note":"","lat":52.0704978,"lng":4.3006999000000405,"gid":"8c334f7bd9f0476cd8ec7e6bf608fbc578c21929","geo":[4.3006999000000405,52.0704978]},"5363f508941359520274612a":{"active":0,"cured":2,"died":0,"date":"2014-05-15T00:00:00.000Z","total":2,"modified":"2014-05-15T16:06:06.137Z","__v":2,"city":"Munster","country":"United States","geo":[-87.51254119999999,41.5644798],"gid":"44409cc0d2d9c1ce6e76a3f58a83b059609f3f03","lat":41.5644798,"lng":-87.51254119999999,"note":"First confirmed case in US, coming from Saudi Arabia","records":["5363f5338d93a1540225e2a9"],"state":"Indiana"},"5361018331445a3c48c5c4f9":{"active":0,"cured":2,"died":0,"date":"2014-05-11T00:00:00.000Z","total":2,"modified":"2014-05-12T17:38:12.535Z","__v":1,"city":"Cairo","country":"Egypt","geo":[31.23571160000006,30.0444196],"gid":"a0e1b9bbf82400da1813eb0880ebc39efd3ad15a","lat":30.0444196,"lng":31.23571160000006,"note":"","records":["536101ae31445a3c48c5c4fa"],"state":"Cairo Governorate"},"53601298659e620d400ed26e":{"active":8,"cured":0,"died":0,"date":"2014-05-11T00:00:00.000Z","total":8,"modified":"2014-05-16T00:03:48.516Z","__v":3,"city":"Zarqa","country":"Jordan","geo":[36.86807909999993,31.7515118],"gid":"307ec12db56e7beb15d5661734fd150e7a4a5bc4","lat":31.7515118,"lng":36.86807909999993,"note":"","records":["5360e0a531445a3c48c5c4b9"],"state":"Zarqa"},"536bc2000216333621229536":{"active":0,"cured":2,"died":0,"date":"2014-05-08T00:00:00.000Z","total":2,"modified":"2014-05-08T17:43:00.845Z","city":"Beirut","country":"Lebanon","geo":[35.49547940000002,33.8886289],"gid":"72e073241cf405f7888dc2792e848fbc8146dfbf","lat":33.8886289,"lng":35.49547940000002,"note":"First case was diagnosed on 8th of May, he was treated & discharged home","state":"Beirut"},"5360135f102aa00f4025424f":{"active":2,"cured":0,"died":0,"date":"2014-04-18T00:00:00.000Z","total":2,"modified":"2014-04-30T08:17:43.486Z","__v":4,"city":"Athens","country":"Greece","geo":[23.729359899999963,37.983917],"gid":"c8508d6ddd870b013d19ad5de44ee7f5058ad098","lat":37.983917,"lng":23.729359899999963,"note":"They are Greek citizens residing in Jeddah, Saudi Arabia","records":[],"state":"Attica"},"53601413659e620d400ed274":{"active":0,"cured":0,"died":2,"date":"2014-04-17T00:00:00.000Z","total":2,"modified":"2014-04-29T15:54:57.248Z","__v":3,"city":"Kuala Lumpur","country":"Malaysia","geo":[101.68685499999992,3.139003],"gid":"fcac8d5159b2c9f45a200b98c5e647cc538a7dd0","lat":3.139003,"lng":101.68685499999992,"note":"","records":["5360143a659e620d400ed276"],"state":"Federal Territory of Kuala Lumpur"},"5364898ccdffa6e2099d54ea":{"active":2,"cured":0,"died":0,"date":"2014-04-13T00:00:00.000Z","total":2,"modified":"2014-05-03T06:19:07.265Z","__v":5,"city":"Sana'a","country":"Yemen","geo":[44.19100660000004,15.3694451],"gid":"384e4fc96be5290ec8b581f853bc39d7c47c32c6","lat":15.3694451,"lng":44.19100660000004,"note":"","records":["53648a5b9c8bb4e409d4f1f5"],"state":"Amanat Al Asimah"},"53600f2d102aa00f40254244":{"active":4,"cured":0,"died":2,"date":"2014-03-20T00:00:00.000Z","total":6,"modified":"2014-04-30T07:10:18.815Z","__v":2,"city":"Kuwait City","country":"Kuwait","geo":[47.97833330000003,29.36972219999999],"gid":"26d7ce1b05e8e160c868090eb3b6c1a084ae99e3","lat":29.36972219999999,"lng":47.97833330000003,"note":"","records":["5360ded0cc11723e4875b6f0","5360e004cc11723e4875b6f4"],"state":"Al Asimah"},"53600f47659e620d400ed269":{"active":0,"cured":0,"died":2,"date":"2013-12-31T00:00:00.000Z","total":2,"modified":"2014-04-29T21:32:19.800Z","__v":1,"city":"Dubai","country":"United Arab Emirates","geo":[55.18174069999998,25.0476643],"gid":"4517501182432a6539985e4dbd00278179f70a98","lat":25.0476643,"lng":55.18174069999998,"note":"","records":["53601a40659e620d400ed281"],"state":"Dubai"},"53600f3b659e620d400ed267":{"active":2,"cured":0,"died":0,"date":"2013-12-31T00:00:00.000Z","total":2,"modified":"2014-04-29T15:54:57.248Z","__v":1,"city":"Sharjah","country":"United Arab Emirates","geo":[55.39186480000001,25.3575224],"gid":"1922ae5cea23f2d84d7335f494758e0b34292637","lat":25.3575224,"lng":55.39186480000001,"note":"","records":["53601abf659e620d400ed282"],"state":"Sharjah"},"53600d7c102aa00f40254237":{"active":4,"cured":0,"died":0,"date":"2013-12-17T00:00:00.000Z","total":4,"modified":"2014-04-30T07:10:18.815Z","__v":2,"city":"Sakaka","country":"Saudi Arabia","geo":[39.32062410000003,29.887356],"gid":"ecbb8124bb4c5f23bb357c54149a4a50eed9fb2a","lat":29.887356,"lng":39.32062410000003,"note":"","records":["5360f2e231445a3c48c5c4e6","5360f30bcc11723e4875b728"],"state":"Al Jowf"},"53600e23659e620d400ed264":{"active":8,"cured":0,"died":8,"date":"2013-11-29T00:00:00.000Z","total":16,"modified":"2014-04-30T07:10:18.746Z","__v":9,"city":"Doha","country":"Qatar","geo":[51.53333329999998,25.2866667],"gid":"d4e554095c89cc0488a74052db942e9d9077452b","lat":25.2866667,"lng":51.53333329999998,"note":"","records":["5360d227cc11723e4875b6d2","5360dac8cc11723e4875b6e2","5360db3bcc11723e4875b6e3","5360dbae31445a3c48c5c4a2","5360dbd9cc11723e4875b6e6","5360dc0431445a3c48c5c4a4","5360de8fcc11723e4875b6ee","5360dea3cc11723e4875b6ef","5360df0431445a3c48c5c4ac"],"state":"Doha"},"5360ddd2cc11723e4875b6ec":{"active":0,"cured":0,"died":2,"date":"2013-10-31T00:00:00.000Z","total":2,"modified":"2014-04-30T07:10:18.746Z","__v":1,"city":"Ad Dakhiliyah","country":"Oman","geo":[57.28186249999999,22.3476325],"gid":"fc1a2d3882cdde16ae948dabaf38e11d0f2a2932","lat":22.3476325,"lng":57.28186249999999,"note":"","records":["5360de0431445a3c48c5c4a8"],"state":"Ad Dakhiliyah"},"53600e43102aa00f4025423e":{"active":0,"cured":4,"died":2,"date":"2013-09-06T00:00:00.000Z","total":6,"modified":"2014-04-30T07:10:18.746Z","__v":2,"city":"Tunis","country":"Tunisia","geo":[10.181531599999971,36.8064948],"gid":"40daaf34c5111164f4d4c6da75cc0cf2f14ea1eb","lat":36.8064948,"lng":10.181531599999971,"note":"","records":["5360d93e31445a3c48c5c499","5360db7e31445a3c48c5c4a1"],"state":"Tunis"},"53600db1659e620d400ed261":{"active":12,"cured":0,"died":2,"date":"2013-08-28T00:00:00.000Z","total":14,"modified":"2014-04-30T07:10:18.815Z","__v":5,"city":"Abha","country":"Saudi Arabia","geo":[42.5072222,18.2233333],"gid":"8328871353ef2e02515e0bf5c4ee6a35ae3cd35c","lat":18.2233333,"lng":42.5072222,"note":"","records":["5360ed5531445a3c48c5c4d0","5360ed91cc11723e4875b70e","5360ee97cc11723e4875b712","5360ef3e31445a3c48c5c4d4","5360efcdcc11723e4875b717"],"state":"Asir Province"},"5360081f659e620d400ed25c":{"active":38,"cured":10,"died":70,"date":"2013-06-14T00:00:00.000Z","total":118,"modified":"2014-05-01T09:49:05.140Z","__v":29,"city":"Al-Hasa","country":"Saudi Arabia","geo":[50.67937589999997,22.2954496],"gid":"f78a63e67efefda1b9a24f70055400c6687be340","lat":22.2954496,"lng":50.67937589999997,"note":"","records":["5360e1b2cc11723e4875b6f7","5360e25831445a3c48c5c4bb","5360e2a5cc11723e4875b6f9","5360e32ccc11723e4875b6fa","5360e3fccc11723e4875b6fb","5360e43231445a3c48c5c4c0","5360e51ccc11723e4875b6fc","5360e56331445a3c48c5c4c2","5360e60931445a3c48c5c4c4","5360e624cc11723e4875b700","5360e675cc11723e4875b704","5360e6d931445a3c48c5c4c9","5360e74031445a3c48c5c4cd","5360e76acc11723e4875b709","5360ee36cc11723e4875b710","5360f203cc11723e4875b723","5360f22331445a3c48c5c4e3","5360f76631445a3c48c5c4ed","5360f78e31445a3c48c5c4ef","536217a30bd333f56cad3a31","536217c14c0807f36cbc769a","536217f00bd333f56cad3a33","5362180d0bd333f56cad3a34","5362182f4c0807f36cbc769d","5362184b4c0807f36cbc769e","536218790bd333f56cad3a37","536218914c0807f36cbc76a0"],"state":"Eastern Province"},"5360d99731445a3c48c5c49c":{"active":2,"cured":0,"died":0,"date":"2013-06-02T00:00:00.000Z","total":2,"modified":"2014-04-30T07:10:18.815Z","__v":2,"city":"Rome","country":"Italy","geo":[12.48018019999995,41.8723889],"gid":"c201ff6d6339dac3b34184b3972b232aa097ff8a","lat":41.8723889,"lng":12.48018019999995,"note":"","records":["5360da2bcc11723e4875b6e0","5360daa1cc11723e4875b6e1"],"state":"Lazio"},"5360086a102aa00f40254234":{"active":0,"cured":0,"died":2,"date":"2013-05-23T00:00:00.000Z","total":2,"modified":"2014-04-30T07:10:18.815Z","__v":1,"city":"Al-Qassim","country":"Saudi Arabia","geo":[42.863787499999944,25.8274886],"gid":"6ec7650b2dba593a004d45e9b6aef616e1bfe042","lat":25.8274886,"lng":42.863787499999944,"note":"","records":["5360e535cc11723e4875b6fe"],"state":"Al Qassim"},"53600e17659e620d400ed263":{"active":2,"cured":0,"died":2,"date":"2013-05-12T00:00:00.000Z","total":4,"modified":"2014-04-30T07:10:18.815Z","__v":2,"city":"Paris","country":"France","geo":[2.3522219000000177,48.856614],"gid":"691b237b0322f28988f3ce03e321ff72a12167fd","lat":48.856614,"lng":2.3522219000000177,"note":"","records":["5360d8d0cc11723e4875b6dc","5360d908cc11723e4875b6de"],"state":"Île-de-France"},"53600e32102aa00f4025423d":{"active":0,"cured":0,"died":2,"date":"2013-03-26T00:00:00.000Z","total":2,"modified":"2014-04-30T07:10:18.815Z","__v":1,"city":"Munich","country":"Germany","geo":[11.581980599999952,48.1351253],"gid":"412a4fdf5226b5e184d846ee48628269c86a5afe","lat":48.1351253,"lng":11.581980599999952,"note":"","records":["5360d88ccc11723e4875b6da"],"state":"Bavaria"},"5365049c5f0a12f512280ce7":{"active":2,"cured":0,"died":4,"date":"2013-02-16T00:00:00.000Z","total":6,"modified":"2014-05-03T15:10:19.988Z","__v":4,"city":"London","country":"United Kingdom","geo":[-0.12548719999995228,51.508515],"gid":"b1a8b96daab5065cf4a08f953e577c34cdf769c0","lat":51.508515,"lng":-0.12548719999995228,"note":"","records":["536505ca08364df312008def","5365068308364df312008df0","536506db08364df312008df1"],"state":"London"},"5360df6ecc11723e4875b6f2":{"active":0,"cured":0,"died":2,"date":"2013-01-09T00:00:00.000Z","total":2,"modified":"2014-04-30T07:10:18.746Z","__v":1,"city":"Muscat","country":"Oman","geo":[58.539999999999964,23.61],"gid":"beb06d4e6fe8a781a89ed84c5a52f5f331c1fcde","lat":23.61,"lng":58.539999999999964,"note":"","records":["5360dfaa31445a3c48c5c4af"],"state":"Muscat"}},"cities":[{"id":"53600714659e620d400ed259","percentage":25.8},{"id":"5360043e102aa00f4025422a","percentage":23.4},{"id":"53600ed6102aa00f40254242","percentage":7.8},{"id":"538fb0b4e8f8a09b42cbf333","percentage":13.5},{"id":"5360081f659e620d400ed25c","percentage":7.1},{"id":"53600db1659e620d400ed261","percentage":0.8},{"id":"5360083f102aa00f40254233","percentage":1.6},{"id":"53600f59102aa00f40254246","percentage":1.2},{"id":"53600e23659e620d400ed264","percentage":1},{"id":"53600d25102aa00f40254235","percentage":4.2},{"id":"53601298659e620d400ed26e","percentage":0.5},{"id":"538362bde8f8a09b42cbf2de","percentage":0.5},{"id":"53600d7c102aa00f40254237","percentage":0.2},{"id":"53600d93659e620d400ed260","percentage":1.1},{"id":"5361fca00bd333f56cad39fa","percentage":0.5},{"id":"53933b1ee8f8a09b42cbf348","percentage":0.4},{"id":"5373985de8f8a09b42cbf241","percentage":0.2},{"id":"53600f2d102aa00f40254244","percentage":0.4},{"id":"53600e17659e620d400ed263","percentage":0.2},{"id":"540134d0e8f8a09b42cbf3d6","percentage":0.1},{"id":"539dc776e8f8a09b42cbf374","percentage":0.1},{"id":"5360135f102aa00f4025424f","percentage":0.1},{"id":"5390abfae8f8a09b42cbf343","percentage":0.1},{"id":"5360d99731445a3c48c5c49c","percentage":0.1},{"id":"539ac5bde8f8a09b42cbf360","percentage":0.1},{"id":"53bff0b0e8f8a09b42cbf3bd","percentage":0.1},{"id":"53bafe69e8f8a09b42cbf3af","percentage":0.2},{"id":"53600f3b659e620d400ed267","percentage":0.1},{"id":"5365049c5f0a12f512280ce7","percentage":0.4},{"id":"5364898ccdffa6e2099d54ea","percentage":0.1},{"id":"538fae6fe8f8a09b42cbf32e","percentage":0.1},{"id":"5363f508941359520274612a","percentage":0.1},{"id":"536bc2000216333621229536","percentage":0.1},{"id":"53711fa0e8f8a09b42cbf227","percentage":0.1},{"id":"5361018331445a3c48c5c4f9","percentage":0.1},{"id":"5360086a102aa00f40254234","percentage":0.1},{"id":"53600dfa102aa00f4025423a","percentage":0.4},{"id":"538b468ae8f8a09b42cbf30a","percentage":0},{"id":"538b46d9e8f8a09b42cbf30c","percentage":0.1},{"id":"53b031eae8f8a09b42cbf398","percentage":0.1},{"id":"53600e32102aa00f4025423d","percentage":0.1},{"id":"5360ddd2cc11723e4875b6ec","percentage":0.1},{"id":"53601413659e620d400ed274","percentage":0.1},{"id":"53600f47659e620d400ed269","percentage":0.1},{"id":"53600e43102aa00f4025423e","percentage":0.4},{"id":"5360df6ecc11723e4875b6f2","percentage":0.1},{"id":"5361fcb40bd333f56cad39fb","percentage":1},{"id":"537e26dee8f8a09b42cbf2b6","percentage":0.7},{"id":"536006da659e620d400ed258","percentage":3.8},{"id":"538cf481e8f8a09b42cbf320","percentage":0.2}],"countries":[{"id":"Saudi Arabia","active":382,"cured":458,"died":590,"total":1430,"date":"2013-05-23T00:00:00.000Z","lat":24.076920660601004,"lng":43.7818514358724,"modified":"2014-08-30T02:32:54.473Z","country":"Saudi Arabia","count":24,"percentage":85.7},{"id":"Bangladesh","active":2,"cured":0,"died":0,"total":2,"date":"2014-06-15T00:00:00.000Z","lat":23.810332,"lng":90.41251809999994,"modified":"2014-06-17T21:05:54.902Z","country":"Bangladesh","count":1,"percentage":0.1},{"id":"Qatar","active":8,"cured":0,"died":8,"total":16,"date":"2013-11-29T00:00:00.000Z","lat":25.2866667,"lng":51.53333329999998,"modified":"2014-04-30T07:10:18.746Z","country":"Qatar","count":1,"percentage":1},{"id":"Germany","active":0,"cured":0,"died":2,"total":2,"date":"2013-03-26T00:00:00.000Z","lat":48.1351253,"lng":11.581980599999952,"modified":"2014-04-30T07:10:18.815Z","country":"Germany","count":1,"percentage":0.1},{"id":"Tunisia","active":0,"cured":4,"died":2,"total":6,"date":"2013-09-06T00:00:00.000Z","lat":36.8064948,"lng":10.181531599999971,"modified":"2014-04-30T07:10:18.746Z","country":"Tunisia","count":1,"percentage":0.4},{"id":"United Arab Emirates","active":94,"cured":28,"died":12,"total":134,"date":"2013-12-31T00:00:00.000Z","lat":24.957284466666664,"lng":54.98009073333333,"modified":"2014-07-09T19:34:56.462Z","country":"United Arab Emirates","count":3,"percentage":8},{"id":"Kuwait","active":4,"cured":0,"died":2,"total":6,"date":"2014-03-20T00:00:00.000Z","lat":29.36972219999999,"lng":47.97833330000003,"modified":"2014-04-30T07:10:18.815Z","country":"Kuwait","count":1,"percentage":0.4},{"id":"Jordan","active":18,"cured":2,"died":8,"total":28,"date":"2014-05-11T00:00:00.000Z","lat":31.85404505,"lng":36.40688709999995,"modified":"2014-06-12T10:56:07.298Z","country":"Jordan","count":2,"percentage":1.7},{"id":"Greece","active":2,"cured":0,"died":0,"total":2,"date":"2014-04-18T00:00:00.000Z","lat":37.983917,"lng":23.729359899999963,"modified":"2014-04-30T08:17:43.486Z","country":"Greece","count":1,"percentage":0.1},{"id":"Malaysia","active":0,"cured":0,"died":2,"total":2,"date":"2014-04-17T00:00:00.000Z","lat":3.139003,"lng":101.68685499999992,"modified":"2014-04-29T15:54:57.248Z","country":"Malaysia","count":1,"percentage":0.1},{"id":"France","active":2,"cured":0,"died":2,"total":4,"date":"2013-05-12T00:00:00.000Z","lat":48.856614,"lng":2.3522219000000177,"modified":"2014-04-30T07:10:18.815Z","country":"France","count":1,"percentage":0.2},{"id":"Oman","active":0,"cured":0,"died":4,"total":4,"date":"2013-01-09T00:00:00.000Z","lat":22.97881625,"lng":57.910931249999976,"modified":"2014-04-30T07:10:18.746Z","country":"Oman","count":2,"percentage":0.2},{"id":"Egypt","active":0,"cured":2,"died":0,"total":2,"date":"2014-05-11T00:00:00.000Z","lat":30.0444196,"lng":31.23571160000006,"modified":"2014-05-12T17:38:12.535Z","country":"Egypt","count":1,"percentage":0.1},{"id":"United States","active":0,"cured":4,"died":0,"total":4,"date":"2014-05-15T00:00:00.000Z","lat":35.05140765,"lng":-84.44588884999999,"modified":"2014-05-20T02:41:00.722Z","country":"United States","count":2,"percentage":0.2},{"id":"Yemen","active":2,"cured":0,"died":0,"total":2,"date":"2014-04-13T00:00:00.000Z","lat":15.3694451,"lng":44.19100660000004,"modified":"2014-05-03T06:19:07.265Z","country":"Yemen","count":1,"percentage":0.1},{"id":"United Kingdom","active":2,"cured":0,"died":4,"total":6,"date":"2013-02-16T00:00:00.000Z","lat":51.508515,"lng":-0.12548719999995228,"modified":"2014-05-03T15:10:19.988Z","country":"United Kingdom","count":1,"percentage":0.4},{"id":"Lebanon","active":0,"cured":2,"died":0,"total":2,"date":"2014-05-08T00:00:00.000Z","lat":33.8886289,"lng":35.49547940000002,"modified":"2014-05-08T17:43:00.845Z","country":"Lebanon","count":1,"percentage":0.1},{"id":"The Netherlands","active":4,"cured":0,"died":0,"total":4,"date":"2014-05-15T00:00:00.000Z","lat":52.0704978,"lng":4.3006999000000405,"modified":"2014-05-15T15:43:11.047Z","country":"The Netherlands","count":1,"percentage":0.2},{"id":"Iran","active":8,"cured":0,"died":0,"total":8,"date":"2014-07-12T00:00:00.000Z","lat":30.2833333,"lng":57.08333330000005,"modified":"2014-07-25T03:48:28.223Z","country":"Iran","count":1,"percentage":0.5},{"id":"Algeria","active":0,"cured":0,"died":2,"total":2,"date":"2014-06-01T00:00:00.000Z","lat":35.7608879,"lng":0.7281651999999781,"modified":"2014-06-10T22:59:49.241Z","country":"Algeria","count":2,"percentage":0.1},{"id":"Italy","active":2,"cured":0,"died":0,"total":2,"date":"2013-06-02T00:00:00.000Z","lat":41.8723889,"lng":12.48018019999995,"modified":"2014-04-30T07:10:18.815Z","country":"Italy","count":1,"percentage":0.1}],"new":[{"id":"540134d0e8f8a09b42cbf3d6","percentage":0.1},{"id":"53933b1ee8f8a09b42cbf348","percentage":0.4},{"id":"53600dfa102aa00f4025423a","percentage":0.4},{"id":"53600d93659e620d400ed260","percentage":1.1},{"id":"53600714659e620d400ed259","percentage":25.8},{"id":"53600d25102aa00f40254235","percentage":4.2},{"id":"53b031eae8f8a09b42cbf398","percentage":0.1},{"id":"5360043e102aa00f4025422a","percentage":23.4},{"id":"538362bde8f8a09b42cbf2de","percentage":0.5},{"id":"53bff0b0e8f8a09b42cbf3bd","percentage":0.1},{"id":"5360083f102aa00f40254233","percentage":1.6},{"id":"53600ed6102aa00f40254242","percentage":7.8},{"id":"5361fca00bd333f56cad39fa","percentage":0.5},{"id":"53bafe69e8f8a09b42cbf3af","percentage":0.2},{"id":"538cf481e8f8a09b42cbf320","percentage":0.2},{"id":"536006da659e620d400ed258","percentage":3.8},{"id":"538fae6fe8f8a09b42cbf32e","percentage":0.1},{"id":"539dc776e8f8a09b42cbf374","percentage":0.1},{"id":"537e26dee8f8a09b42cbf2b6","percentage":0.7},{"id":"539ac5bde8f8a09b42cbf360","percentage":0.1},{"id":"538b46d9e8f8a09b42cbf30c","percentage":0.1},{"id":"5390abfae8f8a09b42cbf343","percentage":0.1},{"id":"538fb0b4e8f8a09b42cbf333","percentage":13.5},{"id":"53600f59102aa00f40254246","percentage":1.2},{"id":"538b468ae8f8a09b42cbf30a","percentage":0},{"id":"5361fcb40bd333f56cad39fb","percentage":1},{"id":"53711fa0e8f8a09b42cbf227","percentage":0.1},{"id":"5373985de8f8a09b42cbf241","percentage":0.2},{"id":"5363f508941359520274612a","percentage":0.1},{"id":"5361018331445a3c48c5c4f9","percentage":0.1},{"id":"53601298659e620d400ed26e","percentage":0.5},{"id":"536bc2000216333621229536","percentage":0.1},{"id":"5360135f102aa00f4025424f","percentage":0.1},{"id":"53601413659e620d400ed274","percentage":0.1},{"id":"5364898ccdffa6e2099d54ea","percentage":0.1},{"id":"53600f2d102aa00f40254244","percentage":0.4},{"id":"53600f47659e620d400ed269","percentage":0.1},{"id":"53600f3b659e620d400ed267","percentage":0.1},{"id":"53600d7c102aa00f40254237","percentage":0.2},{"id":"53600e23659e620d400ed264","percentage":1},{"id":"5360ddd2cc11723e4875b6ec","percentage":0.1},{"id":"53600e43102aa00f4025423e","percentage":0.4},{"id":"53600db1659e620d400ed261","percentage":0.8},{"id":"5360081f659e620d400ed25c","percentage":7.1},{"id":"5360d99731445a3c48c5c49c","percentage":0.1},{"id":"5360086a102aa00f40254234","percentage":0.1},{"id":"53600e17659e620d400ed263","percentage":0.2},{"id":"53600e32102aa00f4025423d","percentage":0.1},{"id":"5365049c5f0a12f512280ce7","percentage":0.4},{"id":"5360df6ecc11723e4875b6f2","percentage":0.1}],"world":{"total":1668,"active":530,"cured":500,"died":638,"date":"2014-08-29T00:00:00.000Z","modified":"2014-08-30T02:32:54.473Z","risk":38.2}}

/***/ }),

/***/ "5KzI":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("ajCz");
var differenceInCalendarMonths = __webpack_require__("mgfB");
var compareAsc = __webpack_require__("+NJC");

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var dateRight = parse(dirtyDateRight);

  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
  return sign * (difference - isLastMonthNotFull);
}

module.exports = differenceInMonths;

/***/ }),

/***/ "C2lg":
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name CSS3 InfoBubble with tabs for Google Maps API V3
 * @version 0.8
 * @author Luke Mahe
 * @fileoverview
 * This library is a CSS Infobubble with tabs. It uses css3 rounded corners and
 * drop shadows and animations. It also allows tabs
 */

/*
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
 */

/**
 * A CSS3 InfoBubble v0.8
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
function InfoBubble(opt_options) {
  this.extend(InfoBubble, google.maps.OverlayView);
  this.tabs_ = [];
  this.activeTab_ = null;
  this.baseZIndex_ = 100;
  this.isOpen_ = false;

  var options = opt_options || {};

  if (options['backgroundColor'] == undefined) {
    options['backgroundColor'] = this.BACKGROUND_COLOR_;
  }

  if (options['borderColor'] == undefined) {
    options['borderColor'] = this.BORDER_COLOR_;
  }

  if (options['borderRadius'] == undefined) {
    options['borderRadius'] = this.BORDER_RADIUS_;
  }

  if (options['borderWidth'] == undefined) {
    options['borderWidth'] = this.BORDER_WIDTH_;
  }

  if (options['padding'] == undefined) {
    options['padding'] = this.PADDING_;
  }

  if (options['arrowPosition'] == undefined) {
    options['arrowPosition'] = this.ARROW_POSITION_;
  }

  if (options['disableAutoPan'] == undefined) {
    options['disableAutoPan'] = false;
  }

  if (options['disableAnimation'] == undefined) {
    options['disableAnimation'] = false;
  }

  if (options['minWidth'] == undefined) {
    options['minWidth'] = this.MIN_WIDTH_;
  }

  if (options['shadowStyle'] == undefined) {
    options['shadowStyle'] = this.SHADOW_STYLE_;
  }

  if (options['arrowSize'] == undefined) {
    options['arrowSize'] = this.ARROW_SIZE_;
  }

  if (options['arrowStyle'] == undefined) {
    options['arrowStyle'] = this.ARROW_STYLE_;
  }

  this.buildDom_();

  this.setValues(options);
}
if (typeof window !== 'undefined') {
  window['InfoBubble'] = InfoBubble;
}

/**
 * Default arrow size
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_SIZE_ = 15;

/**
 * Default arrow style
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_STYLE_ = 0;

/**
 * Default shadow style
 * @const
 * @private
 */
InfoBubble.prototype.SHADOW_STYLE_ = 1;

/**
 * Default min width
 * @const
 * @private
 */
InfoBubble.prototype.MIN_WIDTH_ = 50;

/**
 * Default arrow position
 * @const
 * @private
 */
InfoBubble.prototype.ARROW_POSITION_ = 50;

/**
 * Default padding
 * @const
 * @private
 */
InfoBubble.prototype.PADDING_ = 10;

/**
 * Default border width
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_WIDTH_ = 1;

/**
 * Default border color
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_COLOR_ = '#ccc';

/**
 * Default border radius
 * @const
 * @private
 */
InfoBubble.prototype.BORDER_RADIUS_ = 10;

/**
 * Default background color
 * @const
 * @private
 */
InfoBubble.prototype.BACKGROUND_COLOR_ = '#fff';

/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
InfoBubble.prototype.extend = function (obj1, obj2) {
  return function (object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }.apply(obj1, [obj2]);
};

/**
 * Builds the InfoBubble dom
 * @private
 */
InfoBubble.prototype.buildDom_ = function () {
  var bubble = this.bubble_ = document.createElement('DIV');
  bubble.style['position'] = 'absolute';
  bubble.style['zIndex'] = this.baseZIndex_;

  var tabsContainer = this.tabsContainer_ = document.createElement('DIV');
  tabsContainer.style['position'] = 'relative';

  // Close button
  var close = this.close_ = document.createElement('IMG');
  close.style['position'] = 'absolute';
  close.style['width'] = this.px(36);
  close.style['height'] = this.px(36);
  close.style['border'] = 0;
  close.style['zIndex'] = this.baseZIndex_ + 1;
  close.style['cursor'] = 'pointer';
  close.src = './assets/close-button.svg';

  var that = this;
  google.maps.event.addDomListener(close, 'click', function () {
    that.close();
    google.maps.event.trigger(that, 'closeclick');
  });

  // Content area
  var contentContainer = this.contentContainer_ = document.createElement('DIV');
  contentContainer.style['overflowX'] = 'auto';
  contentContainer.style['overflowY'] = 'auto';
  contentContainer.style['cursor'] = 'default';
  contentContainer.style['clear'] = 'both';
  contentContainer.style['position'] = 'relative';

  var content = this.content_ = document.createElement('DIV');
  contentContainer.appendChild(content);

  // Arrow
  var arrow = this.arrow_ = document.createElement('DIV');
  arrow.style['position'] = 'relative';

  var arrowOuter = this.arrowOuter_ = document.createElement('DIV');
  var arrowInner = this.arrowInner_ = document.createElement('DIV');

  var arrowSize = this.getArrowSize_();

  arrowOuter.style['position'] = arrowInner.style['position'] = 'absolute';
  arrowOuter.style['left'] = arrowInner.style['left'] = '50%';
  arrowOuter.style['height'] = arrowInner.style['height'] = '0';
  arrowOuter.style['width'] = arrowInner.style['width'] = '0';
  arrowOuter.style['marginLeft'] = this.px(-arrowSize);
  arrowOuter.style['borderWidth'] = this.px(arrowSize);
  arrowOuter.style['borderBottomWidth'] = 0;

  // Shadow
  var bubbleShadow = this.bubbleShadow_ = document.createElement('DIV');
  bubbleShadow.style['position'] = 'absolute';

  // Hide the InfoBubble by default
  bubble.style['display'] = bubbleShadow.style['display'] = 'none';

  bubble.appendChild(this.tabsContainer_);
  bubble.appendChild(close);
  bubble.appendChild(contentContainer);
  arrow.appendChild(arrowOuter);
  arrow.appendChild(arrowInner);
  bubble.appendChild(arrow);

  var stylesheet = document.createElement('style');
  stylesheet.setAttribute('type', 'text/css');

  /**
   * The animation for the infobubble
   * @type {string}
   */
  this.animationName_ = '_ibani_' + Math.round(Math.random() * 10000);

  var css = '.' + this.animationName_ + '{\n' + '-webkit-animation-name:' + this.animationName_ + ';\n' + 'animation-name:' + this.animationName_ + ';\n' + '-webkit-animation-duration:0.2s;\n' + 'animation-duration:0.2s;\n' + '-webkit-animation-timing-function:cubic-bezier(0, 0, 0.58, 1);\n' + 'animation-timing-function:cubic-bezier(0, 0, 0.58, 1);\n' + '-webkit-transform-origin: 50% 100%;\n' + 'transform-origin: 50% 100%;\n' + '-webkit-animation-iteration-count:1;\n' + 'animation-iteration-count:1;}\n' + '@-webkit-keyframes ' + this.animationName_ + ' {from {' + '-webkit-transform: scale(0)}0 to {-webkit-transform: scale(1)}}\n' + '@keyframes ' + this.animationName_ + ' {from {' + 'transform: scale(0)}0 to {transform: scale(1)}}';

  stylesheet.textContent = css;
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
};

/**
 * Sets the background class name
 *
 * @param {string} className The class name to set.
 */
InfoBubble.prototype.setBackgroundClassName = function (className) {
  this.set('backgroundClassName', className);
};
InfoBubble.prototype['setBackgroundClassName'] = InfoBubble.prototype.setBackgroundClassName;

/**
 * changed MVC callback
 */
InfoBubble.prototype.backgroundClassName_changed = function () {
  this.content_.className = this.get('backgroundClassName');
};
InfoBubble.prototype['backgroundClassName_changed'] = InfoBubble.prototype.backgroundClassName_changed;

/**
 * Sets the class of the tab
 *
 * @param {string} className the class name to set.
 */
InfoBubble.prototype.setTabClassName = function (className) {
  this.set('tabClassName', className);
};
InfoBubble.prototype['setTabClassName'] = InfoBubble.prototype.setTabClassName;

/**
 * tabClassName changed MVC callback
 */
InfoBubble.prototype.tabClassName_changed = function () {
  this.updateTabStyles_();
};
InfoBubble.prototype['tabClassName_changed'] = InfoBubble.prototype.tabClassName_changed;

/**
 * Gets the style of the arrow
 *
 * @private
 * @return {number} The style of the arrow.
 */
InfoBubble.prototype.getArrowStyle_ = function () {
  return parseInt(this.get('arrowStyle'), 10) || 0;
};

/**
 * Sets the style of the arrow
 *
 * @param {number} style The style of the arrow.
 */
InfoBubble.prototype.setArrowStyle = function (style) {
  this.set('arrowStyle', style);
};
InfoBubble.prototype['setArrowStyle'] = InfoBubble.prototype.setArrowStyle;

/**
 * Arrow style changed MVC callback
 */
InfoBubble.prototype.arrowStyle_changed = function () {
  this.arrowSize_changed();
};
InfoBubble.prototype['arrowStyle_changed'] = InfoBubble.prototype.arrowStyle_changed;

/**
 * Gets the size of the arrow
 *
 * @private
 * @return {number} The size of the arrow.
 */
InfoBubble.prototype.getArrowSize_ = function () {
  return parseInt(this.get('arrowSize'), 10) || 0;
};

/**
 * Sets the size of the arrow
 *
 * @param {number} size The size of the arrow.
 */
InfoBubble.prototype.setArrowSize = function (size) {
  this.set('arrowSize', size);
};
InfoBubble.prototype['setArrowSize'] = InfoBubble.prototype.setArrowSize;

/**
 * Arrow size changed MVC callback
 */
InfoBubble.prototype.arrowSize_changed = function () {
  this.borderWidth_changed();
};
InfoBubble.prototype['arrowSize_changed'] = InfoBubble.prototype.arrowSize_changed;

/**
 * Set the position of the InfoBubble arrow
 *
 * @param {number} pos The position to set.
 */
InfoBubble.prototype.setArrowPosition = function (pos) {
  this.set('arrowPosition', pos);
};
InfoBubble.prototype['setArrowPosition'] = InfoBubble.prototype.setArrowPosition;

/**
 * Get the position of the InfoBubble arrow
 *
 * @private
 * @return {number} The position..
 */
InfoBubble.prototype.getArrowPosition_ = function () {
  return parseInt(this.get('arrowPosition'), 10) || 0;
};

/**
 * arrowPosition changed MVC callback
 */
InfoBubble.prototype.arrowPosition_changed = function () {
  var pos = this.getArrowPosition_();
  this.arrowOuter_.style['left'] = this.arrowInner_.style['left'] = pos + '%';

  this.redraw_();
};
InfoBubble.prototype['arrowPosition_changed'] = InfoBubble.prototype.arrowPosition_changed;

/**
 * Set the zIndex of the InfoBubble
 *
 * @param {number} zIndex The zIndex to set.
 */
InfoBubble.prototype.setZIndex = function (zIndex) {
  this.set('zIndex', zIndex);
};
InfoBubble.prototype['setZIndex'] = InfoBubble.prototype.setZIndex;

/**
 * Get the zIndex of the InfoBubble
 *
 * @return {number} The zIndex to set.
 */
InfoBubble.prototype.getZIndex = function () {
  return parseInt(this.get('zIndex'), 10) || this.baseZIndex_;
};

/**
 * zIndex changed MVC callback
 */
InfoBubble.prototype.zIndex_changed = function () {
  var zIndex = this.getZIndex();

  this.bubble_.style['zIndex'] = this.baseZIndex_ = zIndex;
  this.close_.style['zIndex'] = zIndex + 1;
};
InfoBubble.prototype['zIndex_changed'] = InfoBubble.prototype.zIndex_changed;

/**
 * Set the style of the shadow
 *
 * @param {number} shadowStyle The style of the shadow.
 */
InfoBubble.prototype.setShadowStyle = function (shadowStyle) {
  this.set('shadowStyle', shadowStyle);
};
InfoBubble.prototype['setShadowStyle'] = InfoBubble.prototype.setShadowStyle;

/**
 * Get the style of the shadow
 *
 * @private
 * @return {number} The style of the shadow.
 */
InfoBubble.prototype.getShadowStyle_ = function () {
  return parseInt(this.get('shadowStyle'), 10) || 0;
};

/**
 * shadowStyle changed MVC callback
 */
InfoBubble.prototype.shadowStyle_changed = function () {
  var shadowStyle = this.getShadowStyle_();

  var display = '';
  var shadow = '';
  var backgroundColor = '';
  switch (shadowStyle) {
    case 0:
      display = 'none';
      break;
    case 1:
      shadow = '40px 15px 10px rgba(33,33,33,0.3)';
      backgroundColor = 'transparent';
      break;
    case 2:
      shadow = '0 0 2px rgba(33,33,33,0.3)';
      backgroundColor = 'rgba(33,33,33,0.35)';
      break;
  }
  this.bubbleShadow_.style['boxShadow'] = this.bubbleShadow_.style['webkitBoxShadow'] = this.bubbleShadow_.style['MozBoxShadow'] = shadow;
  this.bubbleShadow_.style['backgroundColor'] = backgroundColor;
  if (this.isOpen_) {
    this.bubbleShadow_.style['display'] = display;
    this.draw();
  }
};
InfoBubble.prototype['shadowStyle_changed'] = InfoBubble.prototype.shadowStyle_changed;

/**
 * Show the close button
 */
InfoBubble.prototype.showCloseButton = function () {
  this.set('hideCloseButton', false);
};
InfoBubble.prototype['showCloseButton'] = InfoBubble.prototype.showCloseButton;

/**
 * Hide the close button
 */
InfoBubble.prototype.hideCloseButton = function () {
  this.set('hideCloseButton', true);
};
InfoBubble.prototype['hideCloseButton'] = InfoBubble.prototype.hideCloseButton;

/**
 * hideCloseButton changed MVC callback
 */
InfoBubble.prototype.hideCloseButton_changed = function () {
  this.close_.style['display'] = this.get('hideCloseButton') ? 'none' : '';
};
InfoBubble.prototype['hideCloseButton_changed'] = InfoBubble.prototype.hideCloseButton_changed;

/**
 * Set the background color
 *
 * @param {string} color The color to set.
 */
InfoBubble.prototype.setBackgroundColor = function (color) {
  if (color) {
    this.set('backgroundColor', color);
  }
};
InfoBubble.prototype['setBackgroundColor'] = InfoBubble.prototype.setBackgroundColor;

/**
 * backgroundColor changed MVC callback
 */
InfoBubble.prototype.backgroundColor_changed = function () {
  var backgroundColor = this.get('backgroundColor');
  this.contentContainer_.style['backgroundColor'] = backgroundColor;

  this.arrowInner_.style['borderColor'] = backgroundColor + ' transparent transparent';
  this.updateTabStyles_();
};
InfoBubble.prototype['backgroundColor_changed'] = InfoBubble.prototype.backgroundColor_changed;

/**
 * Set the border color
 *
 * @param {string} color The border color.
 */
InfoBubble.prototype.setBorderColor = function (color) {
  if (color) {
    this.set('borderColor', color);
  }
};
InfoBubble.prototype['setBorderColor'] = InfoBubble.prototype.setBorderColor;

/**
 * borderColor changed MVC callback
 */
InfoBubble.prototype.borderColor_changed = function () {
  var borderColor = this.get('borderColor');

  var contentContainer = this.contentContainer_;
  var arrowOuter = this.arrowOuter_;
  contentContainer.style['borderColor'] = borderColor;

  arrowOuter.style['borderColor'] = borderColor + ' transparent transparent';

  contentContainer.style['borderStyle'] = arrowOuter.style['borderStyle'] = this.arrowInner_.style['borderStyle'] = 'solid';

  this.updateTabStyles_();
};
InfoBubble.prototype['borderColor_changed'] = InfoBubble.prototype.borderColor_changed;

/**
 * Set the radius of the border
 *
 * @param {number} radius The radius of the border.
 */
InfoBubble.prototype.setBorderRadius = function (radius) {
  this.set('borderRadius', radius);
};
InfoBubble.prototype['setBorderRadius'] = InfoBubble.prototype.setBorderRadius;

/**
 * Get the radius of the border
 *
 * @private
 * @return {number} The radius of the border.
 */
InfoBubble.prototype.getBorderRadius_ = function () {
  return parseInt(this.get('borderRadius'), 10) || 0;
};

/**
 * borderRadius changed MVC callback
 */
InfoBubble.prototype.borderRadius_changed = function () {
  var borderRadius = this.getBorderRadius_();
  var borderWidth = this.getBorderWidth_();

  this.contentContainer_.style['borderRadius'] = this.contentContainer_.style['MozBorderRadius'] = this.contentContainer_.style['webkitBorderRadius'] = this.bubbleShadow_.style['borderRadius'] = this.bubbleShadow_.style['MozBorderRadius'] = this.bubbleShadow_.style['webkitBorderRadius'] = this.px(borderRadius);

  this.tabsContainer_.style['paddingLeft'] = this.tabsContainer_.style['paddingRight'] = this.px(borderRadius + borderWidth);

  this.redraw_();
};
InfoBubble.prototype['borderRadius_changed'] = InfoBubble.prototype.borderRadius_changed;

/**
 * Get the width of the border
 *
 * @private
 * @return {number} width The width of the border.
 */
InfoBubble.prototype.getBorderWidth_ = function () {
  return parseInt(this.get('borderWidth'), 10) || 0;
};

/**
 * Set the width of the border
 *
 * @param {number} width The width of the border.
 */
InfoBubble.prototype.setBorderWidth = function (width) {
  this.set('borderWidth', width);
};
InfoBubble.prototype['setBorderWidth'] = InfoBubble.prototype.setBorderWidth;

/**
 * borderWidth change MVC callback
 */
InfoBubble.prototype.borderWidth_changed = function () {
  var borderWidth = this.getBorderWidth_();

  this.contentContainer_.style['borderWidth'] = this.px(borderWidth);
  this.tabsContainer_.style['top'] = this.px(borderWidth);

  this.updateArrowStyle_();
  this.updateTabStyles_();
  this.borderRadius_changed();
  this.redraw_();
};
InfoBubble.prototype['borderWidth_changed'] = InfoBubble.prototype.borderWidth_changed;

/**
 * Update the arrow style
 * @private
 */
InfoBubble.prototype.updateArrowStyle_ = function () {
  var borderWidth = this.getBorderWidth_();
  var arrowSize = this.getArrowSize_();
  var arrowStyle = this.getArrowStyle_();
  var arrowOuterSizePx = this.px(arrowSize);
  var arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth));

  var outer = this.arrowOuter_;
  var inner = this.arrowInner_;

  this.arrow_.style['marginTop'] = this.px(-borderWidth);
  outer.style['borderTopWidth'] = arrowOuterSizePx;
  inner.style['borderTopWidth'] = arrowInnerSizePx;

  // Full arrow or arrow pointing to the left
  if (arrowStyle == 0 || arrowStyle == 1) {
    outer.style['borderLeftWidth'] = arrowOuterSizePx;
    inner.style['borderLeftWidth'] = arrowInnerSizePx;
  } else {
    outer.style['borderLeftWidth'] = inner.style['borderLeftWidth'] = 0;
  }

  // Full arrow or arrow pointing to the right
  if (arrowStyle == 0 || arrowStyle == 2) {
    outer.style['borderRightWidth'] = arrowOuterSizePx;
    inner.style['borderRightWidth'] = arrowInnerSizePx;
  } else {
    outer.style['borderRightWidth'] = inner.style['borderRightWidth'] = 0;
  }

  if (arrowStyle < 2) {
    outer.style['marginLeft'] = this.px(-arrowSize);
    inner.style['marginLeft'] = this.px(-(arrowSize - borderWidth));
  } else {
    outer.style['marginLeft'] = inner.style['marginLeft'] = 0;
  }

  // If there is no border then don't show thw outer arrow
  if (borderWidth == 0) {
    outer.style['display'] = 'none';
  } else {
    outer.style['display'] = '';
  }
};

/**
 * Set the padding of the InfoBubble
 *
 * @param {number} padding The padding to apply.
 */
InfoBubble.prototype.setPadding = function (padding) {
  this.set('padding', padding);
};
InfoBubble.prototype['setPadding'] = InfoBubble.prototype.setPadding;

/**
 * Set the padding of the InfoBubble
 *
 * @private
 * @return {number} padding The padding to apply.
 */
InfoBubble.prototype.getPadding_ = function () {
  return parseInt(this.get('padding'), 10) || 0;
};

/**
 * padding changed MVC callback
 */
InfoBubble.prototype.padding_changed = function () {
  var padding = this.getPadding_();
  this.contentContainer_.style['padding'] = this.px(padding);
  this.updateTabStyles_();

  this.redraw_();
};
InfoBubble.prototype['padding_changed'] = InfoBubble.prototype.padding_changed;

/**
 * Add px extention to the number
 *
 * @param {number} num The number to wrap.
 * @return {string|number} A wrapped number.
 */
InfoBubble.prototype.px = function (num) {
  if (num) {
    // 0 doesn't need to be wrapped
    return num + 'px';
  }
  return num;
};

/**
 * Add events to stop propagation
 * @private
 */
InfoBubble.prototype.addEvents_ = function () {
  // We want to cancel all the events so they do not go to the map
  var events = ['mousedown', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchend', 'touchmove', 'dblclick', 'contextmenu', 'click'];

  var bubble = this.bubble_;
  this.listeners_ = [];
  for (var i = 0, event; event = events[i]; i++) {
    this.listeners_.push(google.maps.event.addDomListener(bubble, event, function (e) {
      e.cancelBubble = true;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
    }));
  }
};

/**
 * On Adding the InfoBubble to a map
 * Implementing the OverlayView interface
 */
InfoBubble.prototype.onAdd = function () {
  if (!this.bubble_) {
    this.buildDom_();
  }

  this.addEvents_();

  var panes = this.getPanes();
  if (panes) {
    panes.floatPane.appendChild(this.bubble_);
    panes.floatShadow.appendChild(this.bubbleShadow_);
  }
};
InfoBubble.prototype['onAdd'] = InfoBubble.prototype.onAdd;

/**
 * Draw the InfoBubble
 * Implementing the OverlayView interface
 */
InfoBubble.prototype.draw = function () {
  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  var latLng = /** @type {google.maps.LatLng} */this.get('position');

  if (!latLng) {
    this.close();
    return;
  }

  var tabHeight = 0;

  if (this.activeTab_) {
    tabHeight = this.activeTab_.offsetHeight;
  }

  var anchorHeight = this.getAnchorHeight_();
  var arrowSize = this.getArrowSize_();
  var arrowPosition = this.getArrowPosition_();

  arrowPosition = arrowPosition / 100;

  var pos = projection.fromLatLngToDivPixel(latLng);
  var width = this.contentContainer_.offsetWidth;
  var height = this.bubble_.offsetHeight;

  if (!width) {
    return;
  }

  // Adjust for the height of the info bubble
  var top = pos.y - (height + arrowSize);

  if (anchorHeight) {
    // If there is an anchor then include the height
    top -= anchorHeight;
  }

  var left = pos.x - width * arrowPosition;

  this.bubble_.style['top'] = this.px(top);
  this.bubble_.style['left'] = this.px(left);

  var shadowStyle = parseInt(this.get('shadowStyle'), 10);

  switch (shadowStyle) {
    case 1:
      // Shadow is behind
      this.bubbleShadow_.style['top'] = this.px(top + tabHeight - 1);
      this.bubbleShadow_.style['left'] = this.px(left);
      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] = this.px(this.contentContainer_.offsetHeight - arrowSize);
      break;
    case 2:
      // Shadow is below
      width = width * 0.8;
      if (anchorHeight) {
        this.bubbleShadow_.style['top'] = this.px(pos.y);
      } else {
        this.bubbleShadow_.style['top'] = this.px(pos.y + arrowSize);
      }
      this.bubbleShadow_.style['left'] = this.px(pos.x - width * arrowPosition);

      this.bubbleShadow_.style['width'] = this.px(width);
      this.bubbleShadow_.style['height'] = this.px(2);
      break;
  }
};
InfoBubble.prototype['draw'] = InfoBubble.prototype.draw;

/**
 * Removing the InfoBubble from a map
 */
InfoBubble.prototype.onRemove = function () {
  if (this.bubble_ && this.bubble_.parentNode) {
    this.bubble_.parentNode.removeChild(this.bubble_);
  }
  if (this.bubbleShadow_ && this.bubbleShadow_.parentNode) {
    this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
  }

  for (var i = 0, listener; listener = this.listeners_[i]; i++) {
    google.maps.event.removeListener(listener);
  }
};
InfoBubble.prototype['onRemove'] = InfoBubble.prototype.onRemove;

/**
 * Is the InfoBubble open
 *
 * @return {boolean} If the InfoBubble is open.
 */
InfoBubble.prototype.isOpen = function () {
  return this.isOpen_;
};
InfoBubble.prototype['isOpen'] = InfoBubble.prototype.isOpen;

/**
 * Close the InfoBubble
 */
InfoBubble.prototype.close = function () {
  if (this.bubble_) {
    this.bubble_.style['display'] = 'none';
    // Remove the animation so we next time it opens it will animate again
    this.bubble_.className = this.bubble_.className.replace(this.animationName_, '');
  }

  if (this.bubbleShadow_) {
    this.bubbleShadow_.style['display'] = 'none';
    this.bubbleShadow_.className = this.bubbleShadow_.className.replace(this.animationName_, '');
  }
  this.isOpen_ = false;
};
InfoBubble.prototype['close'] = InfoBubble.prototype.close;

/**
 * Open the InfoBubble (asynchronous).
 *
 * @param {google.maps.Map=} opt_map Optional map to open on.
 * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.
 */
InfoBubble.prototype.open = function (opt_map, opt_anchor) {
  var that = this;
  window.setTimeout(function () {
    that.open_(opt_map, opt_anchor);
  }, 0);
};

/**
 * Open the InfoBubble
 * @private
 * @param {google.maps.Map=} opt_map Optional map to open on.
 * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.
 */
InfoBubble.prototype.open_ = function (opt_map, opt_anchor) {
  this.updateContent_();

  if (opt_map) {
    this.setMap(opt_map);
  }

  if (opt_anchor) {
    this.set('anchor', opt_anchor);
    this.bindTo('anchorPoint', opt_anchor);
    this.bindTo('position', opt_anchor);
  }

  // Show the bubble and the show
  this.bubble_.style['display'] = this.bubbleShadow_.style['display'] = '';
  var animation = !this.get('disableAnimation');

  if (animation) {
    // Add the animation
    this.bubble_.className += ' ' + this.animationName_;
    this.bubbleShadow_.className += ' ' + this.animationName_;
  }

  this.redraw_();
  this.isOpen_ = true;

  var pan = !this.get('disableAutoPan');
  if (pan) {
    var that = this;
    window.setTimeout(function () {
      // Pan into view, done in a time out to make it feel nicer :)
      that.panToView();
    }, 200);
  }
};
InfoBubble.prototype['open'] = InfoBubble.prototype.open;

/**
 * Set the position of the InfoBubble
 *
 * @param {google.maps.LatLng} position The position to set.
 */
InfoBubble.prototype.setPosition = function (position) {
  if (position) {
    this.set('position', position);
  }
};
InfoBubble.prototype['setPosition'] = InfoBubble.prototype.setPosition;

/**
 * Returns the position of the InfoBubble
 *
 * @return {google.maps.LatLng} the position.
 */
InfoBubble.prototype.getPosition = function () {
  return (/** @type {google.maps.LatLng} */this.get('position')
  );
};
InfoBubble.prototype['getPosition'] = InfoBubble.prototype.getPosition;

/**
 * position changed MVC callback
 */
InfoBubble.prototype.position_changed = function () {
  this.draw();
};
InfoBubble.prototype['position_changed'] = InfoBubble.prototype.position_changed;

/**
 * Pan the InfoBubble into view
 */
InfoBubble.prototype.panToView = function () {
  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  if (!this.bubble_) {
    // No Bubble yet so do nothing
    return;
  }

  var anchorHeight = this.getAnchorHeight_();
  var height = this.bubble_.offsetHeight + anchorHeight;
  var map = this.get('map');
  var mapDiv = map.getDiv();
  var mapHeight = mapDiv.offsetHeight;

  var latLng = this.getPosition();
  var centerPos = projection.fromLatLngToContainerPixel(map.getCenter());
  var pos = projection.fromLatLngToContainerPixel(latLng);

  // Find out how much space at the top is free
  var spaceTop = centerPos.y - height;

  // Fine out how much space at the bottom is free
  var spaceBottom = mapHeight - centerPos.y;

  var needsTop = spaceTop < 0;
  var deltaY = 0;

  if (needsTop) {
    spaceTop *= -1;
    deltaY = (spaceTop + spaceBottom) / 2;
  }

  pos.y -= deltaY;
  latLng = projection.fromContainerPixelToLatLng(pos);

  if (map.getCenter() != latLng) {
    map.panTo(latLng);
  }
};
InfoBubble.prototype['panToView'] = InfoBubble.prototype.panToView;

/**
 * Converts a HTML string to a document fragment.
 *
 * @param {string} htmlString The HTML string to convert.
 * @return {Node} A HTML document fragment.
 * @private
 */
InfoBubble.prototype.htmlToDocumentFragment_ = function (htmlString) {
  htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
  var tempDiv = document.createElement('DIV');
  tempDiv.innerHTML = htmlString;
  if (tempDiv.childNodes.length == 1) {
    return (/** @type {!Node} */tempDiv.removeChild(tempDiv.firstChild)
    );
  } else {
    var fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};

/**
 * Removes all children from the node.
 *
 * @param {Node} node The node to remove all children from.
 * @private
 */
InfoBubble.prototype.removeChildren_ = function (node) {
  if (!node) {
    return;
  }

  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};

/**
 * Sets the content of the infobubble.
 *
 * @param {string|Node} content The content to set.
 */
InfoBubble.prototype.setContent = function (content) {
  this.set('content', content);
};
InfoBubble.prototype['setContent'] = InfoBubble.prototype.setContent;

/**
 * Get the content of the infobubble.
 *
 * @return {string|Node} The marker content.
 */
InfoBubble.prototype.getContent = function () {
  return (/** @type {Node|string} */this.get('content')
  );
};
InfoBubble.prototype['getContent'] = InfoBubble.prototype.getContent;

/**
 * Sets the marker content and adds loading events to images
 */
InfoBubble.prototype.updateContent_ = function () {
  if (!this.content_) {
    // The Content area doesnt exist.
    return;
  }

  this.removeChildren_(this.content_);
  var content = this.getContent();
  if (content) {
    if (typeof content == 'string') {
      content = this.htmlToDocumentFragment_(content);
    }
    this.content_.appendChild(content);

    var that = this;
    var images = this.content_.getElementsByTagName('IMG');
    for (var i = 0, image; image = images[i]; i++) {
      // Because we don't know the size of an image till it loads, add a
      // listener to the image load so the marker can resize and reposition
      // itself to be the correct height.
      google.maps.event.addDomListener(image, 'load', function () {
        that.imageLoaded_();
      });
    }
    google.maps.event.trigger(this, 'domready');
  }
  this.redraw_();
};

/**
 * Image loaded
 * @private
 */
InfoBubble.prototype.imageLoaded_ = function () {
  var pan = !this.get('disableAutoPan');
  this.redraw_();
  if (pan && (this.tabs_.length == 0 || this.activeTab_.index == 0)) {
    this.panToView();
  }
};

/**
 * Updates the styles of the tabs
 * @private
 */
InfoBubble.prototype.updateTabStyles_ = function () {
  if (this.tabs_ && this.tabs_.length) {
    for (var i = 0, tab; tab = this.tabs_[i]; i++) {
      this.setTabStyle_(tab.tab);
    }
    this.activeTab_.style['zIndex'] = this.baseZIndex_;
    var borderWidth = this.getBorderWidth_();
    var padding = this.getPadding_() / 2;
    this.activeTab_.style['borderBottomWidth'] = 0;
    this.activeTab_.style['paddingBottom'] = this.px(padding + borderWidth);
  }
};

/**
 * Sets the style of a tab
 * @private
 * @param {Element} tab The tab to style.
 */
InfoBubble.prototype.setTabStyle_ = function (tab) {
  var backgroundColor = this.get('backgroundColor');
  var borderColor = this.get('borderColor');
  var borderRadius = this.getBorderRadius_();
  var borderWidth = this.getBorderWidth_();
  var padding = this.getPadding_();

  var marginRight = this.px(-Math.max(padding, borderRadius));
  var borderRadiusPx = this.px(borderRadius);

  var index = this.baseZIndex_;
  if (tab.index) {
    index -= tab.index;
  }

  // The styles for the tab
  var styles = {
    'cssFloat': 'left',
    'position': 'relative',
    'cursor': 'pointer',
    'backgroundColor': backgroundColor,
    'border': this.px(borderWidth) + ' solid ' + borderColor,
    'padding': this.px(padding / 2) + ' ' + this.px(padding),
    'marginRight': marginRight,
    'whiteSpace': 'nowrap',
    'borderRadiusTopLeft': borderRadiusPx,
    'MozBorderRadiusTopleft': borderRadiusPx,
    'webkitBorderTopLeftRadius': borderRadiusPx,
    'borderRadiusTopRight': borderRadiusPx,
    'MozBorderRadiusTopright': borderRadiusPx,
    'webkitBorderTopRightRadius': borderRadiusPx,
    'zIndex': index,
    'display': 'inline'
  };

  for (var style in styles) {
    tab.style[style] = styles[style];
  }

  var className = this.get('tabClassName');
  if (className != undefined) {
    tab.className += ' ' + className;
  }
};

/**
 * Add user actions to a tab
 * @private
 * @param {Object} tab The tab to add the actions to.
 */
InfoBubble.prototype.addTabActions_ = function (tab) {
  var that = this;
  tab.listener_ = google.maps.event.addDomListener(tab, 'click', function () {
    that.setTabActive_(this);
  });
};

/**
 * Set a tab at a index to be active
 *
 * @param {number} index The index of the tab.
 */
InfoBubble.prototype.setTabActive = function (index) {
  var tab = this.tabs_[index - 1];

  if (tab) {
    this.setTabActive_(tab.tab);
  }
};
InfoBubble.prototype['setTabActive'] = InfoBubble.prototype.setTabActive;

/**
 * Set a tab to be active
 * @private
 * @param {Object} tab The tab to set active.
 */
InfoBubble.prototype.setTabActive_ = function (tab) {
  if (!tab) {
    this.setContent('');
    this.updateContent_();
    return;
  }

  var padding = this.getPadding_() / 2;
  var borderWidth = this.getBorderWidth_();

  if (this.activeTab_) {
    var activeTab = this.activeTab_;
    activeTab.style['zIndex'] = this.baseZIndex_ - activeTab.index;
    activeTab.style['paddingBottom'] = this.px(padding);
    activeTab.style['borderBottomWidth'] = this.px(borderWidth);
  }

  tab.style['zIndex'] = this.baseZIndex_;
  tab.style['borderBottomWidth'] = 0;
  tab.style['marginBottomWidth'] = '-10px';
  tab.style['paddingBottom'] = this.px(padding + borderWidth);

  this.setContent(this.tabs_[tab.index].content);
  this.updateContent_();

  this.activeTab_ = tab;

  this.redraw_();
};

/**
 * Set the max width of the InfoBubble
 *
 * @param {number} width The max width.
 */
InfoBubble.prototype.setMaxWidth = function (width) {
  this.set('maxWidth', width);
};
InfoBubble.prototype['setMaxWidth'] = InfoBubble.prototype.setMaxWidth;

/**
 * maxWidth changed MVC callback
 */
InfoBubble.prototype.maxWidth_changed = function () {
  this.redraw_();
};
InfoBubble.prototype['maxWidth_changed'] = InfoBubble.prototype.maxWidth_changed;

/**
 * Set the max height of the InfoBubble
 *
 * @param {number} height The max height.
 */
InfoBubble.prototype.setMaxHeight = function (height) {
  this.set('maxHeight', height);
};
InfoBubble.prototype['setMaxHeight'] = InfoBubble.prototype.setMaxHeight;

/**
 * maxHeight changed MVC callback
 */
InfoBubble.prototype.maxHeight_changed = function () {
  this.redraw_();
};
InfoBubble.prototype['maxHeight_changed'] = InfoBubble.prototype.maxHeight_changed;

/**
 * Set the min width of the InfoBubble
 *
 * @param {number} width The min width.
 */
InfoBubble.prototype.setMinWidth = function (width) {
  this.set('minWidth', width);
};
InfoBubble.prototype['setMinWidth'] = InfoBubble.prototype.setMinWidth;

/**
 * minWidth changed MVC callback
 */
InfoBubble.prototype.minWidth_changed = function () {
  this.redraw_();
};
InfoBubble.prototype['minWidth_changed'] = InfoBubble.prototype.minWidth_changed;

/**
 * Set the min height of the InfoBubble
 *
 * @param {number} height The min height.
 */
InfoBubble.prototype.setMinHeight = function (height) {
  this.set('minHeight', height);
};
InfoBubble.prototype['setMinHeight'] = InfoBubble.prototype.setMinHeight;

/**
 * minHeight changed MVC callback
 */
InfoBubble.prototype.minHeight_changed = function () {
  this.redraw_();
};
InfoBubble.prototype['minHeight_changed'] = InfoBubble.prototype.minHeight_changed;

/**
 * Add a tab
 *
 * @param {string} label The label of the tab.
 * @param {string|Element} content The content of the tab.
 */
InfoBubble.prototype.addTab = function (label, content) {
  var tab = document.createElement('DIV');
  tab.innerHTML = label;

  this.setTabStyle_(tab);
  this.addTabActions_(tab);

  this.tabsContainer_.appendChild(tab);

  this.tabs_.push({
    label: label,
    content: content,
    tab: tab
  });

  tab.index = this.tabs_.length - 1;
  tab.style['zIndex'] = this.baseZIndex_ - tab.index;

  if (!this.activeTab_) {
    this.setTabActive_(tab);
  }

  tab.className = tab.className + ' ' + this.animationName_;

  this.redraw_();
};
InfoBubble.prototype['addTab'] = InfoBubble.prototype.addTab;

/**
 * Update a tab at a speicifc index
 *
 * @param {number} index The index of the tab.
 * @param {?string} opt_label The label to change to.
 * @param {?string} opt_content The content to update to.
 */
InfoBubble.prototype.updateTab = function (index, opt_label, opt_content) {
  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
    return;
  }

  var tab = this.tabs_[index];
  if (opt_label != undefined) {
    tab.tab.innerHTML = tab.label = opt_label;
  }

  if (opt_content != undefined) {
    tab.content = opt_content;
  }

  if (this.activeTab_ == tab.tab) {
    this.setContent(tab.content);
    this.updateContent_();
  }
  this.redraw_();
};
InfoBubble.prototype['updateTab'] = InfoBubble.prototype.updateTab;

/**
 * Remove a tab at a specific index
 *
 * @param {number} index The index of the tab to remove.
 */
InfoBubble.prototype.removeTab = function (index) {
  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
    return;
  }

  var tab = this.tabs_[index];
  tab.tab.parentNode.removeChild(tab.tab);

  google.maps.event.removeListener(tab.tab.listener_);

  this.tabs_.splice(index, 1);

  tab = null;

  for (var i = 0, t; t = this.tabs_[i]; i++) {
    t.tab.index = i;
  }

  if (tab.tab == this.activeTab_) {
    // Removing the current active tab
    if (this.tabs_[index]) {
      // Show the tab to the right
      this.activeTab_ = this.tabs_[index].tab;
    } else if (this.tabs_[index - 1]) {
      // Show a tab to the left
      this.activeTab_ = this.tabs_[index - 1].tab;
    } else {
      // No tabs left to sho
      this.activeTab_ = undefined;
    }

    this.setTabActive_(this.activeTab_);
  }

  this.redraw_();
};
InfoBubble.prototype['removeTab'] = InfoBubble.prototype.removeTab;

/**
 * Get the size of an element
 * @private
 * @param {Node|string} element The element to size.
 * @param {number=} opt_maxWidth Optional max width of the element.
 * @param {number=} opt_maxHeight Optional max height of the element.
 * @return {google.maps.Size} The size of the element.
 */
InfoBubble.prototype.getElementSize_ = function (element, opt_maxWidth, opt_maxHeight) {
  var sizer = document.createElement('DIV');
  sizer.style['display'] = 'inline';
  sizer.style['position'] = 'absolute';
  sizer.style['visibility'] = 'hidden';

  if (typeof element == 'string') {
    sizer.innerHTML = element;
  } else {
    sizer.appendChild(element.cloneNode(true));
  }

  document.body.appendChild(sizer);
  var size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);

  // If the width is bigger than the max width then set the width and size again
  if (opt_maxWidth && size.width > opt_maxWidth) {
    sizer.style['width'] = this.px(opt_maxWidth);
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
  }

  // If the height is bigger than the max height then set the height and size
  // again
  if (opt_maxHeight && size.height > opt_maxHeight) {
    sizer.style['height'] = this.px(opt_maxHeight);
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
  }

  document.body.removeChild(sizer);
  sizer = null;
  return size;
};

/**
 * Redraw the InfoBubble
 * @private
 */
InfoBubble.prototype.redraw_ = function () {
  this.figureOutSize_();
  this.positionCloseButton_();
  this.draw();
};

/**
 * Figure out the optimum size of the InfoBubble
 * @private
 */
InfoBubble.prototype.figureOutSize_ = function () {
  var map = this.get('map');

  if (!map) {
    return;
  }

  var padding = this.getPadding_();
  var borderWidth = this.getBorderWidth_();
  var borderRadius = this.getBorderRadius_();
  var arrowSize = this.getArrowSize_();

  var mapDiv = map.getDiv();
  var gutter = arrowSize * 2;
  var mapWidth = mapDiv.offsetWidth - gutter;
  var mapHeight = mapDiv.offsetHeight - gutter - this.getAnchorHeight_();
  var tabHeight = 0;
  var width = /** @type {number} */this.get('minWidth') || 0;
  var height = /** @type {number} */this.get('minHeight') || 0;
  var maxWidth = /** @type {number} */this.get('maxWidth') || 0;
  var maxHeight = /** @type {number} */this.get('maxHeight') || 0;

  maxWidth = Math.min(mapWidth, maxWidth);
  maxHeight = Math.min(mapHeight, maxHeight);

  var tabWidth = 0;
  if (this.tabs_.length) {
    // If there are tabs then you need to check the size of each tab's content
    for (var i = 0, tab; tab = this.tabs_[i]; i++) {
      var tabSize = this.getElementSize_(tab.tab, maxWidth, maxHeight);
      var contentSize = this.getElementSize_(tab.content, maxWidth, maxHeight);

      if (width < tabSize.width) {
        width = tabSize.width;
      }

      // Add up all the tab widths because they might end up being wider than
      // the content
      tabWidth += tabSize.width;

      if (height < tabSize.height) {
        height = tabSize.height;
      }

      if (tabSize.height > tabHeight) {
        tabHeight = tabSize.height;
      }

      if (width < contentSize.width) {
        width = contentSize.width;
      }

      if (height < contentSize.height) {
        height = contentSize.height;
      }
    }
  } else {
    var content = /** @type {string|Node} */this.get('content');
    if (typeof content == 'string') {
      content = this.htmlToDocumentFragment_(content);
    }
    if (content) {
      var contentSize = this.getElementSize_(content, maxWidth, maxHeight);

      if (width < contentSize.width) {
        width = contentSize.width;
      }

      if (height < contentSize.height) {
        height = contentSize.height;
      }
    }
  }

  if (maxWidth) {
    width = Math.min(width, maxWidth);
  }

  if (maxHeight) {
    height = Math.min(height, maxHeight);
  }

  width = Math.max(width, tabWidth);

  if (width == tabWidth) {
    width = width + 2 * padding;
  }

  arrowSize = arrowSize * 2;
  width = Math.max(width, arrowSize);

  // Maybe add this as a option so they can go bigger than the map if the user
  // wants
  if (width > mapWidth) {
    width = mapWidth;
  }

  if (height > mapHeight) {
    height = mapHeight - tabHeight;
  }

  if (this.tabsContainer_) {
    this.tabHeight_ = tabHeight;
    this.tabsContainer_.style['width'] = this.px(tabWidth);
  }

  this.contentContainer_.style['width'] = this.px(width);
  this.contentContainer_.style['height'] = this.px(height);
};

/**
 *  Get the height of the anchor
 *
 *  This function is a hack for now and doesn't really work that good, need to
 *  wait for pixelBounds to be correctly exposed.
 *  @private
 *  @return {number} The height of the anchor.
 */
InfoBubble.prototype.getAnchorHeight_ = function () {
  var anchor = this.get('anchor');
  if (anchor) {
    var anchorPoint = /** @type google.maps.Point */this.get('anchorPoint');

    if (anchorPoint) {
      return -1 * anchorPoint.y;
    }
  }
  return 0;
};

InfoBubble.prototype.anchorPoint_changed = function () {
  this.draw();
};
InfoBubble.prototype['anchorPoint_changed'] = InfoBubble.prototype.anchorPoint_changed;

/**
 * Position the close button in the right spot.
 * @private
 */
InfoBubble.prototype.positionCloseButton_ = function () {
  var br = this.getBorderRadius_();
  var bw = this.getBorderWidth_();

  var right = 2;
  var top = 2;

  if (this.tabs_.length && this.tabHeight_) {
    top += this.tabHeight_;
  }

  top += bw;
  right += bw;

  var c = this.contentContainer_;
  if (c && c.clientHeight < c.scrollHeight) {
    // If there are scrollbars then move the cross in so it is not over
    // scrollbar
    right += 15;
  }

  this.close_.style['right'] = this.px(right);
  this.close_.style['top'] = this.px(top);
};

/***/ }),

/***/ "CFBi":
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate(argument) {
  return argument instanceof Date;
}

module.exports = isDate;

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HLwM":
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__("pfSt");
var parse = __webpack_require__("ajCz");
var differenceInSeconds = __webpack_require__("Sjwe");
var differenceInMonths = __webpack_require__("5KzI");
var enLocale = __webpack_require__("N6L2");

var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords(dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {};

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate);

  var locale = options.locale;
  var localize = enLocale.distanceInWords.localize;
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize;
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  };

  var dateLeft, dateRight;
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare);
    dateRight = parse(dirtyDate);
  } else {
    dateLeft = parse(dirtyDate);
    dateRight = parse(dirtyDateToCompare);
  }

  var seconds = differenceInSeconds(dateRight, dateLeft);
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset();
  var minutes = Math.round(seconds / 60) - offset;
  var months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions);
      } else {
        return localize('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions);
      } else {
        return localize('xMinutes', minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return localize('aboutXHours', hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return localize('xDays', days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return localize('aboutXMonths', months, localizeOptions);
  }

  months = differenceInMonths(dateRight, dateLeft);

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return localize('xMonths', nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions);
    }
  }
}

module.exports = distanceInWords;

/***/ }),

/***/ "HqMk":
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3.js
// @output_wrapper (function() {%output%})();
// ==/ClosureCompiler==

/**
 * @license
 * Copyright 2013 Google Inc. All Rights Reserved.
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
 */

/**
 * A RichMarker that allows any HTML/DOM to be added to a map and be draggable.
 *
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
function RichMarker(opt_options) {
  var options = opt_options || {};

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.dragging_ = false;

  if (opt_options['visible'] == undefined) {
    opt_options['visible'] = true;
  }

  if (opt_options['shadow'] == undefined) {
    opt_options['shadow'] = '7px -3px 5px rgba(88,88,88,0.7)';
  }

  if (opt_options['anchor'] == undefined) {
    opt_options['anchor'] = RichMarkerPosition['BOTTOM'];
  }

  this.setValues(options);
}
if (typeof window !== "undefined") {
  RichMarker.prototype = new google.maps.OverlayView();
  window['RichMarker'] = RichMarker;
}

/**
 * Returns the current visibility state of the marker.
 *
 * @return {boolean} The visiblity of the marker.
 */
RichMarker.prototype.getVisible = function () {
  return (/** @type {boolean} */this.get('visible')
  );
};
RichMarker.prototype['getVisible'] = RichMarker.prototype.getVisible;

/**
 * Sets the visiblility state of the marker.
 *
 * @param {boolean} visible The visiblilty of the marker.
 */
RichMarker.prototype.setVisible = function (visible) {
  this.set('visible', visible);
};
RichMarker.prototype['setVisible'] = RichMarker.prototype.setVisible;

/**
 *  The visible changed event.
 */
RichMarker.prototype.visible_changed = function () {
  if (this.ready_) {
    this.markerWrapper_.style['display'] = this.getVisible() ? '' : 'none';
    this.draw();
  }
};
RichMarker.prototype['visible_changed'] = RichMarker.prototype.visible_changed;

/**
 * Sets the marker to be flat.
 *
 * @param {boolean} flat If the marker is to be flat or not.
 */
RichMarker.prototype.setFlat = function (flat) {
  this.set('flat', !!flat);
};
RichMarker.prototype['setFlat'] = RichMarker.prototype.setFlat;

/**
 * If the makrer is flat or not.
 *
 * @return {boolean} True the marker is flat.
 */
RichMarker.prototype.getFlat = function () {
  return (/** @type {boolean} */this.get('flat')
  );
};
RichMarker.prototype['getFlat'] = RichMarker.prototype.getFlat;

/**
 * Get the width of the marker.
 *
 * @return {Number} The width of the marker.
 */
RichMarker.prototype.getWidth = function () {
  return (/** @type {Number} */this.get('width')
  );
};
RichMarker.prototype['getWidth'] = RichMarker.prototype.getWidth;

/**
 * Get the height of the marker.
 *
 * @return {Number} The height of the marker.
 */
RichMarker.prototype.getHeight = function () {
  return (/** @type {Number} */this.get('height')
  );
};
RichMarker.prototype['getHeight'] = RichMarker.prototype.getHeight;

/**
 * Sets the marker's box shadow.
 *
 * @param {string} shadow The box shadow to set.
 */
RichMarker.prototype.setShadow = function (shadow) {
  this.set('shadow', shadow);
  this.flat_changed();
};
RichMarker.prototype['setShadow'] = RichMarker.prototype.setShadow;

/**
 * Gets the marker's box shadow.
 *
 * @return {string} The box shadow.
 */
RichMarker.prototype.getShadow = function () {
  return (/** @type {string} */this.get('shadow')
  );
};
RichMarker.prototype['getShadow'] = RichMarker.prototype.getShadow;

/**
 * Flat changed event.
 */
RichMarker.prototype.flat_changed = function () {
  if (!this.ready_) {
    return;
  }

  this.markerWrapper_.style['boxShadow'] = this.markerWrapper_.style['webkitBoxShadow'] = this.markerWrapper_.style['MozBoxShadow'] = this.getFlat() ? '' : this.getShadow();
};
RichMarker.prototype['flat_changed'] = RichMarker.prototype.flat_changed;

/**
 * Sets the zIndex of the marker.
 *
 * @param {Number} index The index to set.
 */
RichMarker.prototype.setZIndex = function (index) {
  this.set('zIndex', index);
};
RichMarker.prototype['setZIndex'] = RichMarker.prototype.setZIndex;

/**
 * Gets the zIndex of the marker.
 *
 * @return {Number} The zIndex of the marker.
 */
RichMarker.prototype.getZIndex = function () {
  return (/** @type {Number} */this.get('zIndex')
  );
};
RichMarker.prototype['getZIndex'] = RichMarker.prototype.getZIndex;

/**
 * zIndex changed event.
 */
RichMarker.prototype.zIndex_changed = function () {
  if (this.getZIndex() && this.ready_) {
    this.markerWrapper_.style.zIndex = this.getZIndex();
  }
};
RichMarker.prototype['zIndex_changed'] = RichMarker.prototype.zIndex_changed;

/**
 * Whether the marker is draggable or not.
 *
 * @return {boolean} True if the marker is draggable.
 */
RichMarker.prototype.getDraggable = function () {
  return (/** @type {boolean} */this.get('draggable')
  );
};
RichMarker.prototype['getDraggable'] = RichMarker.prototype.getDraggable;

/**
 * Sets the marker to be draggable or not.
 *
 * @param {boolean} draggable If the marker is draggable or not.
 */
RichMarker.prototype.setDraggable = function (draggable) {
  this.set('draggable', !!draggable);
};
RichMarker.prototype['setDraggable'] = RichMarker.prototype.setDraggable;

/**
 * Draggable property changed callback.
 */
RichMarker.prototype.draggable_changed = function () {
  if (this.ready_) {
    if (this.getDraggable()) {
      this.addDragging_(this.markerWrapper_);
    } else {
      this.removeDragListeners_();
    }
  }
};
RichMarker.prototype['draggable_changed'] = RichMarker.prototype.draggable_changed;

/**
 * Gets the postiton of the marker.
 *
 * @return {google.maps.LatLng} The position of the marker.
 */
RichMarker.prototype.getPosition = function () {
  return (/** @type {google.maps.LatLng} */this.get('position')
  );
};
RichMarker.prototype['getPosition'] = RichMarker.prototype.getPosition;

/**
 * Sets the position of the marker.
 *
 * @param {google.maps.LatLng} position The position to set.
 */
RichMarker.prototype.setPosition = function (position) {
  this.set('position', position);
};
RichMarker.prototype['setPosition'] = RichMarker.prototype.setPosition;

/**
 * Position changed event.
 */
RichMarker.prototype.position_changed = function () {
  this.draw();
};
RichMarker.prototype['position_changed'] = RichMarker.prototype.position_changed;

/**
 * Gets the anchor.
 *
 * @return {google.maps.Size} The position of the anchor.
 */
RichMarker.prototype.getAnchor = function () {
  return (/** @type {google.maps.Size} */this.get('anchor')
  );
};
RichMarker.prototype['getAnchor'] = RichMarker.prototype.getAnchor;

/**
 * Sets the anchor.
 *
 * @param {RichMarkerPosition|google.maps.Size} anchor The anchor to set.
 */
RichMarker.prototype.setAnchor = function (anchor) {
  this.set('anchor', anchor);
};
RichMarker.prototype['setAnchor'] = RichMarker.prototype.setAnchor;

/**
 * Anchor changed event.
 */
RichMarker.prototype.anchor_changed = function () {
  this.draw();
};
RichMarker.prototype['anchor_changed'] = RichMarker.prototype.anchor_changed;

/**
 * Converts a HTML string to a document fragment.
 *
 * @param {string} htmlString The HTML string to convert.
 * @return {Node} A HTML document fragment.
 * @private
 */
RichMarker.prototype.htmlToDocumentFragment_ = function (htmlString) {
  var tempDiv = document.createElement('DIV');
  tempDiv.innerHTML = htmlString;
  if (tempDiv.childNodes.length == 1) {
    return (/** @type {!Node} */tempDiv.removeChild(tempDiv.firstChild)
    );
  } else {
    var fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};

/**
 * Removes all children from the node.
 *
 * @param {Node} node The node to remove all children from.
 * @private
 */
RichMarker.prototype.removeChildren_ = function (node) {
  if (!node) {
    return;
  }

  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};

/**
 * Sets the content of the marker.
 *
 * @param {string|Node} content The content to set.
 */
RichMarker.prototype.setContent = function (content) {
  this.set('content', content);
};
RichMarker.prototype['setContent'] = RichMarker.prototype.setContent;

/**
 * Get the content of the marker.
 *
 * @return {string|Node} The marker content.
 */
RichMarker.prototype.getContent = function () {
  return (/** @type {Node|string} */this.get('content')
  );
};
RichMarker.prototype['getContent'] = RichMarker.prototype.getContent;

/**
 * Sets the marker content and adds loading events to images
 */
RichMarker.prototype.content_changed = function () {
  if (!this.markerContent_) {
    // Marker content area doesnt exist.
    return;
  }

  this.removeChildren_(this.markerContent_);
  var content = this.getContent();
  if (content) {
    if (typeof content == 'string') {
      content = content.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
      content = this.htmlToDocumentFragment_(content);
    }
    this.markerContent_.appendChild(content);

    var that = this;
    var images = this.markerContent_.getElementsByTagName('IMG');
    for (var i = 0, image; image = images[i]; i++) {
      // By default, a browser lets a image be dragged outside of the browser,
      // so by calling preventDefault we stop this behaviour and allow the image
      // to be dragged around the map and now out of the browser and onto the
      // desktop.
      google.maps.event.addDomListener(image, 'mousedown', function (e) {
        if (that.getDraggable()) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          e.returnValue = false;
        }
      });

      // Because we don't know the size of an image till it loads, add a
      // listener to the image load so the marker can resize and reposition
      // itself to be the correct height.
      google.maps.event.addDomListener(image, 'load', function () {
        that.draw();
      });
    }

    google.maps.event.trigger(this, 'domready');
  }

  if (this.ready_) {
    this.draw();
  }
};
RichMarker.prototype['content_changed'] = RichMarker.prototype.content_changed;

/**
 * Sets the cursor.
 *
 * @param {string} whichCursor What cursor to show.
 * @private
 */
RichMarker.prototype.setCursor_ = function (whichCursor) {
  if (!this.ready_) {
    return;
  }

  var cursor = '';
  if (navigator.userAgent.indexOf('Gecko/') !== -1) {
    // Moz has some nice cursors :)
    if (whichCursor == 'dragging') {
      cursor = '-moz-grabbing';
    }

    if (whichCursor == 'dragready') {
      cursor = '-moz-grab';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  } else {
    if (whichCursor == 'dragging' || whichCursor == 'dragready') {
      cursor = 'move';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  }

  if (this.markerWrapper_.style.cursor != cursor) {
    this.markerWrapper_.style.cursor = cursor;
  }
};

/**
 * Start dragging.
 *
 * @param {Event} e The event.
 */
RichMarker.prototype.startDrag = function (e) {
  if (!this.getDraggable()) {
    return;
  }

  if (!this.dragging_) {
    this.dragging_ = true;
    var map = this.getMap();
    this.mapDraggable_ = map.get('draggable');
    map.set('draggable', false);

    // Store the current mouse position
    this.mouseX_ = e.clientX;
    this.mouseY_ = e.clientY;

    this.setCursor_('dragready');

    // Stop the text from being selectable while being dragged
    this.markerWrapper_.style['MozUserSelect'] = 'none';
    this.markerWrapper_.style['KhtmlUserSelect'] = 'none';
    this.markerWrapper_.style['WebkitUserSelect'] = 'none';

    this.markerWrapper_['unselectable'] = 'on';
    this.markerWrapper_['onselectstart'] = function () {
      return false;
    };

    this.addDraggingListeners_();

    google.maps.event.trigger(this, 'dragstart');
  }
};

/**
 * Stop dragging.
 */
RichMarker.prototype.stopDrag = function () {
  if (!this.getDraggable()) {
    return;
  }

  if (this.dragging_) {
    this.dragging_ = false;
    this.getMap().set('draggable', this.mapDraggable_);
    this.mouseX_ = this.mouseY_ = this.mapDraggable_ = null;

    // Allow the text to be selectable again
    this.markerWrapper_.style['MozUserSelect'] = '';
    this.markerWrapper_.style['KhtmlUserSelect'] = '';
    this.markerWrapper_.style['WebkitUserSelect'] = '';
    this.markerWrapper_['unselectable'] = 'off';
    this.markerWrapper_['onselectstart'] = function () {};

    this.removeDraggingListeners_();

    this.setCursor_('draggable');
    google.maps.event.trigger(this, 'dragend');

    this.draw();
  }
};

/**
 * Handles the drag event.
 *
 * @param {Event} e The event.
 */
RichMarker.prototype.drag = function (e) {
  if (!this.getDraggable() || !this.dragging_) {
    // This object isn't draggable or we have stopped dragging
    this.stopDrag();
    return;
  }

  var dx = this.mouseX_ - e.clientX;
  var dy = this.mouseY_ - e.clientY;

  this.mouseX_ = e.clientX;
  this.mouseY_ = e.clientY;

  var left = parseInt(this.markerWrapper_.style['left'], 10) - dx;
  var top = parseInt(this.markerWrapper_.style['top'], 10) - dy;

  this.markerWrapper_.style['left'] = left + 'px';
  this.markerWrapper_.style['top'] = top + 'px';

  var offset = this.getOffset_();

  // Set the position property and adjust for the anchor offset
  var point = new google.maps.Point(left - offset.width, top - offset.height);
  var projection = this.getProjection();
  this.setPosition(projection.fromDivPixelToLatLng(point));

  this.setCursor_('dragging');
  google.maps.event.trigger(this, 'drag');
};

/**
 * Removes the drag listeners associated with the marker.
 *
 * @private
 */
RichMarker.prototype.removeDragListeners_ = function () {
  if (this.draggableListener_) {
    google.maps.event.removeListener(this.draggableListener_);
    delete this.draggableListener_;
  }
  this.setCursor_('');
};

/**
 * Add dragability events to the marker.
 *
 * @param {Node} node The node to apply dragging to.
 * @private
 */
RichMarker.prototype.addDragging_ = function (node) {
  if (!node) {
    return;
  }

  var that = this;
  this.draggableListener_ = google.maps.event.addDomListener(node, 'mousedown', function (e) {
    that.startDrag(e);
  });

  this.setCursor_('draggable');
};

/**
 * Add dragging listeners.
 *
 * @private
 */
RichMarker.prototype.addDraggingListeners_ = function () {
  var that = this;
  if (this.markerWrapper_.setCapture) {
    this.markerWrapper_.setCapture(true);
    this.draggingListeners_ = [google.maps.event.addDomListener(this.markerWrapper_, 'mousemove', function (e) {
      that.drag(e);
    }, true), google.maps.event.addDomListener(this.markerWrapper_, 'mouseup', function () {
      that.stopDrag();
      that.markerWrapper_.releaseCapture();
    }, true)];
  } else {
    this.draggingListeners_ = [google.maps.event.addDomListener(window, 'mousemove', function (e) {
      that.drag(e);
    }, true), google.maps.event.addDomListener(window, 'mouseup', function () {
      that.stopDrag();
    }, true)];
  }
};

/**
 * Remove dragging listeners.
 *
 * @private
 */
RichMarker.prototype.removeDraggingListeners_ = function () {
  if (this.draggingListeners_) {
    for (var i = 0, listener; listener = this.draggingListeners_[i]; i++) {
      google.maps.event.removeListener(listener);
    }
    this.draggingListeners_.length = 0;
  }
};

/**
 * Get the anchor offset.
 *
 * @return {google.maps.Size} The size offset.
 * @private
 */
RichMarker.prototype.getOffset_ = function () {
  var anchor = this.getAnchor();
  if (typeof anchor == 'object') {
    return (/** @type {google.maps.Size} */anchor
    );
  }

  var offset = new google.maps.Size(0, 0);
  if (!this.markerContent_) {
    return offset;
  }

  var width = this.markerContent_.offsetWidth;
  var height = this.markerContent_.offsetHeight;

  switch (anchor) {
    case RichMarkerPosition['TOP_LEFT']:
      break;
    case RichMarkerPosition['TOP']:
      offset.width = -width / 2;
      break;
    case RichMarkerPosition['TOP_RIGHT']:
      offset.width = -width;
      break;
    case RichMarkerPosition['LEFT']:
      offset.height = -height / 2;
      break;
    case RichMarkerPosition['MIDDLE']:
      offset.width = -width / 2;
      offset.height = -height / 2;
      break;
    case RichMarkerPosition['RIGHT']:
      offset.width = -width;
      offset.height = -height / 2;
      break;
    case RichMarkerPosition['BOTTOM_LEFT']:
      offset.height = -height;
      break;
    case RichMarkerPosition['BOTTOM']:
      offset.width = -width / 2;
      offset.height = -height;
      break;
    case RichMarkerPosition['BOTTOM_RIGHT']:
      offset.width = -width;
      offset.height = -height;
      break;
  }

  return offset;
};

/**
 * Adding the marker to a map.
 * Implementing the interface.
 */
RichMarker.prototype.onAdd = function () {
  if (!this.markerWrapper_) {
    this.markerWrapper_ = document.createElement('DIV');
    this.markerWrapper_.style['position'] = 'absolute';
  }

  if (this.getZIndex()) {
    this.markerWrapper_.style['zIndex'] = this.getZIndex();
  }

  this.markerWrapper_.style['display'] = this.getVisible() ? '' : 'none';

  if (!this.markerContent_) {
    this.markerContent_ = document.createElement('DIV');
    this.markerWrapper_.appendChild(this.markerContent_);

    var that = this;
    google.maps.event.addDomListener(this.markerContent_, 'click', function (e) {
      google.maps.event.trigger(that, 'click');
    });
    google.maps.event.addDomListener(this.markerContent_, 'mouseover', function (e) {
      google.maps.event.trigger(that, 'mouseover');
    });
    google.maps.event.addDomListener(this.markerContent_, 'mouseout', function (e) {
      google.maps.event.trigger(that, 'mouseout');
    });
  }

  this.ready_ = true;
  this.content_changed();
  this.flat_changed();
  this.draggable_changed();

  var panes = this.getPanes();
  if (panes) {
    panes.overlayMouseTarget.appendChild(this.markerWrapper_);
  }

  google.maps.event.trigger(this, 'ready');
};
RichMarker.prototype['onAdd'] = RichMarker.prototype.onAdd;

/**
 * Impelementing the interface.
 */
RichMarker.prototype.draw = function () {
  if (!this.ready_ || this.dragging_) {
    return;
  }

  var projection = this.getProjection();

  if (!projection) {
    // The map projection is not ready yet so do nothing
    return;
  }

  var latLng = /** @type {google.maps.LatLng} */this.get('position');
  var pos = projection.fromLatLngToDivPixel(latLng);

  var offset = this.getOffset_();
  this.markerWrapper_.style['top'] = pos.y + offset.height + 'px';
  this.markerWrapper_.style['left'] = pos.x + offset.width + 'px';

  var height = this.markerContent_.offsetHeight;
  var width = this.markerContent_.offsetWidth;

  if (width != this.get('width')) {
    this.set('width', width);
  }

  if (height != this.get('height')) {
    this.set('height', height);
  }
};
RichMarker.prototype['draw'] = RichMarker.prototype.draw;

/**
 * Removing a marker from the map.
 * Implementing the interface.
 */
RichMarker.prototype.onRemove = function () {
  if (this.markerWrapper_ && this.markerWrapper_.parentNode) {
    this.markerWrapper_.parentNode.removeChild(this.markerWrapper_);
  }
  this.removeDragListeners_();
};
RichMarker.prototype['onRemove'] = RichMarker.prototype.onRemove;

/**
 * RichMarker Anchor positions
 * @enum {number}
 */
var RichMarkerPosition = {
  'TOP_LEFT': 1,
  'TOP': 2,
  'TOP_RIGHT': 3,
  'LEFT': 4,
  'MIDDLE': 5,
  'RIGHT': 6,
  'BOTTOM_LEFT': 7,
  'BOTTOM': 8,
  'BOTTOM_RIGHT': 9
};
if (typeof window !== 'undefined') {
  window['RichMarkerPosition'] = RichMarkerPosition;
}

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/date-fns/distance_in_words/index.js
var distance_in_words = __webpack_require__("HLwM");
var distance_in_words_default = /*#__PURE__*/__webpack_require__.n(distance_in_words);

// CONCATENATED MODULE: ./components/stats.js



var stats__ref2 = Object(preact_min["h"])(
	"p",
	{ "class": "stat-label" },
	"Infected"
);

var stats__ref3 = Object(preact_min["h"])(
	"p",
	{ "class": "stat-label" },
	"Died"
);

var stats__ref4 = Object(preact_min["h"])(
	"p",
	{ "class": "stat-label" },
	"Case fatality rate"
);

/* harmony default export */ var stats = (function (_ref) {
	var world = _ref.world;
	return Object(preact_min["h"])(
		"div",
		{ "class": "stats" },
		Object(preact_min["h"])(
			"div",
			{ "class": "stat-item" },
			Object(preact_min["h"])(
				"p",
				{ id: "stat-total", "class": "stat-number" },
				world.total
			),
			stats__ref2
		),
		Object(preact_min["h"])(
			"div",
			{ "class": "stat-item" },
			Object(preact_min["h"])(
				"p",
				{ id: "stat-died", "class": "stat-number" },
				world.died
			),
			stats__ref3
		),
		Object(preact_min["h"])(
			"div",
			{ "class": "stat-item" },
			Object(preact_min["h"])(
				"p",
				{ id: "stat-risk", "class": "stat-number" },
				world.risk,
				"%"
			),
			stats__ref4
		)
	);
});
// CONCATENATED MODULE: ./components/list.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ var list = (function (_ref) {
	var api = _ref.api,
	    mode = _ref.mode,
	    _onClick = _ref.onClick;
	return Object(preact_min["h"])(
		"ul",
		null,
		api[mode].map(function (row) {
			return _extends({}, row, api.all[row.id]);
		}).map(function (_ref2, idx) {
			var active = _ref2.active,
			    city = _ref2.city,
			    country = _ref2.country,
			    total = _ref2.total,
			    cured = _ref2.cured,
			    note = _ref2.note,
			    died = _ref2.died;

			var _ref3 = Object(preact_min["h"])(
				"h3",
				null,
				city
			);

			var _ref4 = Object(preact_min["h"])(
				"cite",
				null,
				country
			);

			var _ref5 = Object(preact_min["h"])(
				"h3",
				null,
				country
			);

			return Object(preact_min["h"])(
				"li",
				{ "class": "scroll-item", "data-idx": idx, role: "link", onClick: function onClick() {
						return _onClick(idx);
					} },
				Object(preact_min["h"])(
					"section",
					{ "class": "scroll-item-box" },
					Object(preact_min["h"])(
						"div",
						{ "class": "item-count" },
						Object(preact_min["h"])(
							"span",
							null,
							active
						)
					),
					Object(preact_min["h"])(
						"div",
						{ "class": "item-detail" },
						function () {
							if (city) {
								return [_ref3, _ref4];
							}
							return _ref5;
						}(),
						Object(preact_min["h"])(
							"p",
							null,
							"Total ",
							total,
							' ',
							cured ? " | " + cured + " recovered" : '',
							' ',
							died ? " | " + died + " died" : ''
						),
						note ? Object(preact_min["h"])(
							"p",
							{ "class": "news" },
							note
						) : ''
					)
				)
			);
		})
	);
});
// CONCATENATED MODULE: ./components/footer.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var footer__ref = Object(preact_min["h"])(
	'div',
	{ 'class': 'tweet tweet-btn' },
	Object(preact_min["h"])(
		'a',
		{
			href: 'https://twitter.com/coronamap',
			'class': 'twitter-follow-button',
			'data-show-count': 'false',
			'data-dnt': 'true'
		},
		'Follow @coronamap'
	)
);

var footer__ref2 = Object(preact_min["h"])(
	'div',
	{ 'class': 'tweet' },
	Object(preact_min["h"])(
		'a',
		{
			href: 'https://twitter.com/share',
			'class': 'twitter-share-button',
			'data-url': 'http://coronamap.com',
			'data-text': 'Follow the latest numbers on #MERS corona virus',
			'data-related': 'coronamap',
			'data-via': 'coronamap',
			'data-count': 'none'
		},
		'Tweet'
	)
);

var footer__default = function (_Component) {
	_inherits(_default, _Component);

	function _default() {
		var _temp, _this, _ret;

		_classCallCheck(this, _default);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.load = function (el) {
			var $script = __webpack_require__("zhAq");
			if (el) {
				var load = function load() {
					return $script('//platform.twitter.com/widgets.js');
				};
				if (document.readyState === 'comlete') {
					load();
				} else {
					document.addEventListener('DOMContentLoaded', function () {
						return load();
					});
				}
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_default.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
		return false;
	};

	_default.prototype.render = function render() {
		var _this2 = this;

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'footer', ref: this.load },
			Object(preact_min["h"])(
				'div',
				{ role: 'button', onClick: function onClick() {
						return _this2.props.onClick();
					} },
				'About'
			),
			footer__ref,
			footer__ref2
		);
	};

	return _default;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/map.js
var map__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function map__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function map__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function map__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global google */
/* eslint-disable brace-style */


var mapStyle = [{
	featureType: 'water',
	stylers: [{ color: '#d5d5d5' }]
}, {
	featureType: 'landscape',
	stylers: [{ color: '#ffffff' }]
}, {
	featureType: 'road',
	stylers: [{ weight: 0.5 }, { color: '#c4c4c4' }]
}, {
	featureType: 'poi',
	stylers: [{ visibility: 'off' }]
}, {
	featureType: 'poi.medical',
	elementType: 'labels',
	stylers: [{ color: '#808080' }, { weight: 1 }, { visibility: 'on' }]
}, {}, {
	featureType: 'road.highway',
	stylers: [{ color: '#aaaaaa' }, { weight: 0.3 }, { visibility: 'off' }]
}, {
	featureType: 'administrative.locality',
	elementType: 'labels.text.fill',
	stylers: [{ visibility: 'on' }, { color: '#737373' }]
}, {
	featureType: 'administrative.country',
	elementType: 'geometry.stroke',
	stylers: [{ weight: 1 }, { color: '#969696' }]
}, {
	featureType: 'administrative.country',
	elementType: 'labels.text.fill',
	stylers: [{ color: '#808080' }]
}];
var small = 5;
var medium = 11;
var large = 21;
function arrowSizeAt(count) {
	var rval = 35;
	if (count >= large) {
		rval = 75;
	} else if (count >= medium) {
		rval = 50;
	} else if (count >= small) {
		rval = 40;
	}
	return rval;
}

var map_Map = function (_Component) {
	map__inherits(Map, _Component);

	function Map() {
		var _temp, _this, _ret;

		map__classCallCheck(this, Map);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = map__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.openBubble = false, _this.listners = [], _this.markers = [], _this.addMarkers = function (data) {
			var bounds = new google.maps.LatLngBounds();
			var bubbles = [];
			var _this2 = _this,
			    listners = _this2.listners,
			    markers = _this2.markers,
			    map = _this2.map;
			var _this$props = _this.props,
			    api = _this$props.api,
			    mode = _this$props.mode;

			var _loop = function _loop(i) {
				var datum = data[i];
				var className = 'tiny-circle';
				if (datum.active >= large) {
					className = 'large-circle';
				} else if (datum.active >= medium) {
					className = 'medium-circle';
				} else if (datum.active >= small) {
					className = 'small-circle';
				} else if (datum.active === 0) {
					className = 'zero-circle';
				}
				var loc = new google.maps.LatLng(datum.lat, datum.lng);
				bounds.extend(loc);
				var marker = new window.RichMarker({
					position: loc,
					map: map,
					flat: true,
					dragganle: false,
					content: '<div class="map-circle ' + className + '">' + datum.active + '</div>'
				});

				markers.push(marker);

				var evt = google.maps.event.addListener(marker, 'click', function () {
					if (this.openBubble) {
						this.openBubble.close();
					}
					var curIdx = markers.indexOf(this);

					// bubbles on demand
					if (!bubbles[curIdx]) {
						var curDatum = api[mode][curIdx];
						var bubble = new window.InfoBubble({
							map: map,
							content: mode === 'countries' ? '<h3>' + datum.percentage + '%<h3>\n\t\t\t\t\t\t\t\t<h4>of global infections</h4>\n\t\t\t\t\t\t\t\t<h2>' + datum.country + '</h2>\n\t\t\t\t\t\t\t\t<ul class="bubble-list">\n\t\t\t\t\t\t\t\t\t<li>Total ' + datum.total + '</li>\n\t\t\t\t\t\t\t\t\t<li>' + datum.cured + ' recovered</li>\n\t\t\t\t\t\t\t\t\t<li>' + datum.died + ' died</li>\n\t\t\t\t\t\t\t\t</ul>' : '<h3>' + datum.percentage + '%<h3>\n\t\t\t\t\t\t\t\t<h4>of global infections</h4>\n\t\t\t\t\t\t\t\t<h2>' + datum.city + '</h2>\n\t\t\t\t\t\t\t\t<ul class="bubble-list">\n\t\t\t\t\t\t\t\t\t<li>Total ' + datum.total + '</li>\n\t\t\t\t\t\t\t\t\t<li>' + datum.cured + ' recovered</li>\n\t\t\t\t\t\t\t\t\t<li>' + datum.died + ' died</li>\n\t\t\t\t\t\t\t\t</ul>',
							backgroundColor: '#fff',
							borderRadius: 300,
							backgroundClassName: 'map-bubble',
							arrowStyle: 7,
							minWidth: 274,
							minHeight: 274,
							maxWidth: 274,
							maxHeight: 274,
							arrowSize: arrowSizeAt(curDatum.active),
							shadowStyle: 0,
							borderColor: '#DE3C2D',
							borderWidth: 3
						});
						bubbles[curIdx] = bubble;
					}
					bubbles[curIdx].open(map, markers[curIdx]);
					this.openBubble = bubbles[curIdx];
				});
				listners.push(evt);
			};

			for (var i = 0; i < data.length; i++) {
				_loop(i);
			}
			_this.map.fitBounds(bounds);
		}, _this.showMarkers = function () {
			var viewBounds = _this.map.getBounds();
			var _this3 = _this,
			    markers = _this3.markers;

			if (markers && markers.length > 0) {
				for (var i = markers.length - 1; i >= 0; i--) {
					if (!viewBounds.contains(markers[i].getPosition())) {
						if (markers[i].getMap()) {
							markers[i].setMap(null);
						}
					} else if (!markers[i].getMap()) {
						markers[i].setMap(_this.map);
					}
				}
			}
		}, _this.setupMap = function (el) {
			if (el) {
				var $script = __webpack_require__("zhAq");
				var load = function load() {
					return $script('https://maps.googleapis.com/maps/api/js?key=AIzaSyDH7YkLcwjNohpFCMGSHAqCaxA_k4G2sP8', function () {
						__webpack_require__("C2lg");
						__webpack_require__("HqMk");
						var mapOptions = {
							center: new google.maps.LatLng(21.597, 39.144),
							zoom: 8,
							styles: mapStyle,
							fullscreenControl: false
						};
						_this.map = new google.maps.Map(el, mapOptions);
						google.maps.event.addListener(_this.map, 'idle', _this.showMarkers);
						_this.addMarkers(_this.props.api[_this.props.mode].map(function (row) {
							return map__extends({}, row, _this.props.api.all[row.id]);
						}));
						window.addEventListener('orientationchange', function (e) {
							if (screen.orientation === 90 || screen.orientation === -90) {
								setTimeout(function () {
									this.map.fitBounds(this.map.getBounds());
								}, 10);
							}
						});
					});
				};
				if (document.readyState === 'comlete') {
					load();
				} else {
					document.addEventListener('DOMContentLoaded', function () {
						return load();
					});
				}
			}
		}, _temp), map__possibleConstructorReturn(_this, _ret);
	}

	Map.prototype.clear = function clear() {
		for (var i = 0; i < this.markers.length; i++) {
			this.markers[i].setMap(null);
			google.maps.event.removeListener(this.listners[i]);
		}
		this.markers.length = 0;
		this.listners.length = 0;
	};

	Map.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
		var _this4 = this;

		if (prevProps.mode !== this.props.mode) {
			this.clear();
			if (this.props.mode === 'countries') {
				this.addMarkers(this.props.api[this.props.mode]);
			} else {
				this.addMarkers(this.props.api[this.props.mode].map(function (row) {
					return map__extends({}, row, _this4.props.api.all[row.id]);
				}));
			}
			this.showMarkers();
		} else if (prevProps.curIdx !== this.props.curIdx && this.props.curIdx != null) {
			this.map.panTo(this.markers[this.props.curIdx].getPosition());
			if (this.props.mode === 'countries') {
				this.map.setZoom(5);
			} else {
				this.map.setZoom(11);
			}
		}
	};

	Map.prototype.render = function render() {
		return Object(preact_min["h"])(
			'section',
			{ 'class': 'map' },
			Object(preact_min["h"])('figure', { ref: this.setupMap })
		);
	};

	return Map;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./api.json
var api_0 = __webpack_require__("/PLn");
var api_default = /*#__PURE__*/__webpack_require__.n(api_0);

// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var index__ref = Object(preact_min["h"])(
	'h1',
	{ 'class': 'logo' },
	'MERS Corona Map'
);

var index__ref2 = Object(preact_min["h"])(
	'section',
	{ 'class': 'details' },
	Object(preact_min["h"])(
		'strong',
		null,
		'All data are by WHO and Health Ministries'
	),
	Object(preact_min["h"])('br', null),
	'Colored circles indicate current active cases'
);

var index__ref3 = Object(preact_min["h"])(
	'div',
	{ 'class': 'rotate' },
	'Rotate your device to see the map'
);

var index__ref4 = Object(preact_min["h"])(
	'li',
	{ 'class': 'about-item' },
	Object(preact_min["h"])(
		'span',
		null,
		'Data'
	),
	' @iwail'
);

var index__ref5 = Object(preact_min["h"])(
	'li',
	{ 'class': 'about-item' },
	Object(preact_min["h"])(
		'span',
		null,
		'Development'
	),
	' @salzhrani'
);

var _ref6 = Object(preact_min["h"])(
	'li',
	{ 'class': 'about-item' },
	Object(preact_min["h"])(
		'span',
		null,
		'Assistance'
	),
	' @11bushra11'
);

var _ref7 = Object(preact_min["h"])(
	'li',
	{ 'class': 'about-item' },
	Object(preact_min["h"])(
		'span',
		null,
		'Design'
	),
	' @bandar'
);

var index_App = function (_Component) {
	index__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		index__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = index__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			mode: 'cities',
			curIdx: null,
			showAbout: false
		}, _temp), index__possibleConstructorReturn(_this, _ret);
	}

	App.prototype.render = function render(props, state) {
		var _this2 = this;

		return Object(preact_min["h"])(
			'article',
			null,
			Object(preact_min["h"])(
				'section',
				{ 'class': 'main' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'scroll-list', role: 'navigation' },
					index__ref,
					Object(preact_min["h"])(
						'div',
						{ 'class': 'scroll-head' },
						Object(preact_min["h"])(
							'div',
							{ 'class': 'update' },
							'Updated',
							' ',
							distance_in_words_default()(api_default.a.world.modified, new Date())
						)
					),
					Object(preact_min["h"])(stats, { world: api_default.a.world }),
					Object(preact_min["h"])(
						'div',
						{ 'class': 'partition' },
						Object(preact_min["h"])(
							'div',
							{
								'class': 'map-country' + (state.mode === 'countries' ? ' picked' : ''),
								onClick: function onClick() {
									_this2.setState({
										mode: 'countries',
										curIdx: null
									});
								}
							},
							'Countries'
						),
						Object(preact_min["h"])(
							'div',
							{
								'class': 'map-city' + (state.mode === 'cities' ? ' picked' : ''),
								onClick: function onClick() {
									_this2.setState({
										mode: 'cities',
										curIdx: null
									});
								}
							},
							'Top cities'
						),
						Object(preact_min["h"])(
							'div',
							{
								'class': 'map-new' + (state.mode === 'new' ? ' picked' : ''),
								onClick: function onClick() {
									_this2.setState({
										mode: 'new',
										curIdx: null
									});
								}
							},
							'Latest cities'
						)
					),
					index__ref2,
					Object(preact_min["h"])(list, {
						api: api_default.a,
						mode: state.mode,
						onClick: function onClick(curIdx) {
							_this2.setState({ curIdx: curIdx });
						}
					}),
					index__ref3
				),
				Object(preact_min["h"])(footer__default, {
					onClick: function onClick() {
						_this2.setState({
							showAbout: true
						});
					}
				})
			),
			Object(preact_min["h"])(map_Map, {
				api: api_default.a,
				mode: this.state.mode,
				curIdx: this.state.curIdx
			}),
			Object(preact_min["h"])(
				'section',
				{
					'class': 'about' + (this.state.showAbout ? ' about-visible' : ''),
					style: { display: this.state.showAbout ? 'block' : '' }
				},
				Object(preact_min["h"])(
					'ul',
					{ 'class': 'about-list' },
					index__ref4,
					index__ref5,
					_ref6,
					_ref7,
					Object(preact_min["h"])('div', { 'class': 'about-close', onClick: function onClick() {
							_this2.setState({ showAbout: false });
						} })
				)
			)
		);
	};

	return App;
}(preact_min["Component"]);



/***/ }),

/***/ "KKv9":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("ajCz");

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var dateRight = parse(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

module.exports = differenceInMilliseconds;

/***/ }),

/***/ "LeeW":
/***/ (function(module, exports) {

function buildDistanceInWordsLocale() {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };

  function localize(token, count, options) {
    options = options || {};

    var result;
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token];
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one;
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  return {
    localize: localize
  };
}

module.exports = buildDistanceInWordsLocale;

/***/ }),

/***/ "N6L2":
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__("LeeW");
var buildFormatLocale = __webpack_require__("b/WI");

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
};

/***/ }),

/***/ "Sjwe":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("KKv9");

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

module.exports = differenceInSeconds;

/***/ }),

/***/ "UV3R":
/***/ (function(module, exports) {

var commonFormatterKeys = ['M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd', 'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss', 'S', 'SS', 'SSS', 'Z', 'ZZ', 'X', 'x'];

function buildFormattingTokensRegExp(formatters) {
  var formatterKeys = [];
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key);
    }
  }

  var formattingTokens = commonFormatterKeys.concat(formatterKeys).sort().reverse();
  var formattingTokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');

  return formattingTokensRegExp;
}

module.exports = buildFormattingTokensRegExp;

/***/ }),

/***/ "ajCz":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("CFBi");

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var parseTokenDateTimeDelimeter = /[T ]/;
var parseTokenPlainTime = /:/;

// year tokens
var parseTokenYY = /^(\d{2})$/;
var parseTokensYYY = [/^([+-]\d{2})$/, // 0 additional digits
/^([+-]\d{3})$/, // 1 additional digit
/^([+-]\d{4})$/ // 2 additional digits
];

var parseTokenYYYY = /^(\d{4})/;
var parseTokensYYYYY = [/^([+-]\d{4})/, // 0 additional digits
/^([+-]\d{5})/, // 1 additional digit
/^([+-]\d{6})/ // 2 additional digits
];

// date tokens
var parseTokenMM = /^-(\d{2})$/;
var parseTokenDDD = /^-?(\d{3})$/;
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
var parseTokenWww = /^-?W(\d{2})$/;
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/;

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/;
var parseTokenTimezoneZ = /^(Z)$/;
var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse(argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument !== 'string') {
    return new Date(argument);
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits;
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
  } else {
    additionalDigits = Number(additionalDigits);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
  } else {
    return new Date(argument);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(parseTokenDateTimeDelimeter);
  var timeString;

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits];
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }

  // Invalid ISO-formatted year
  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date;
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date;
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week);
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek);
  }

  // Invalid ISO-formatted date
  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = parseTokenHH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  }

  // Invalid ISO-formatted time
  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOYear(isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

module.exports = parse;

/***/ }),

/***/ "b/WI":
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__("UV3R");

function buildFormatLocale() {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var meridiemUppercase = ['AM', 'PM'];
  var meridiemLowercase = ['am', 'pm'];
  var meridiemFull = ['a.m.', 'p.m.'];

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function MMM(date) {
      return months3char[date.getMonth()];
    },

    // Month: January, February, ..., December
    'MMMM': function MMMM(date) {
      return monthsFull[date.getMonth()];
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function dd(date) {
      return weekdays2char[date.getDay()];
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function ddd(date) {
      return weekdays3char[date.getDay()];
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },

    // AM, PM
    'A': function A(date) {
      return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
    },

    // am, pm
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
    },

    // a.m., p.m.
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
    }

    // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  };var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date));
    };
  });

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  };
}

function ordinal(number) {
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

module.exports = buildFormatLocale;

/***/ }),

/***/ "mgfB":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("ajCz");

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var dateRight = parse(dirtyDateRight);

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
}

module.exports = differenceInCalendarMonths;

/***/ }),

/***/ "pfSt":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("ajCz");

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var timeLeft = dateLeft.getTime();
  var dateRight = parse(dirtyDateRight);
  var timeRight = dateRight.getTime();

  if (timeLeft > timeRight) {
    return -1;
  } else if (timeLeft < timeRight) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = compareDesc;

/***/ }),

/***/ "zhAq":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else this[name] = definition();
})('$script', function () {
  var doc = document,
      head = doc.getElementsByTagName('head')[0],
      s = 'string',
      f = false,
      push = 'push',
      readyState = 'readyState',
      onreadystatechange = 'onreadystatechange',
      list = {},
      ids = {},
      delay = {},
      scripts = {},
      scriptpath,
      urlArgs;

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) {
      if (!fn(ar[i])) return f;
    }return 1;
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el);
    });
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths];
    var idOrDoneIsDone = idOrDone && idOrDone.call,
        done = idOrDoneIsDone ? idOrDone : optDone,
        id = idOrDoneIsDone ? paths.join('') : idOrDone,
        queue = paths.length;
    function loopFn(item) {
      return item.call ? item() : list[item];
    }
    function callback() {
      if (! --queue) {
        list[id] = 1;
        done && done();
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback();

        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = path.indexOf('.js') === -1 ? scriptpath + path + '.js' : scriptpath + path;
        }

        if (scripts[path]) {
          if (id) ids[id] = 1;
          return scripts[path] == 2 ? callback() : setTimeout(function () {
            loading(path, true);
          }, 0);
        }

        scripts[path] = 1;
        if (id) ids[id] = 1;
        create(path, callback);
      });
    }, 0);
    return $script;
  }

  function create(path, fn) {
    var el = doc.createElement('script'),
        loaded;
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) return;
      el.onload = el[onreadystatechange] = null;
      loaded = 1;
      scripts[path] = 2;
      fn();
    };
    el.async = 1;
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild);
  }

  $script.get = create;

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift();
      !scripts.length ? $script(s, id, done) : $script(s, callback);
    })();
  };

  $script.path = function (p) {
    scriptpath = p;
  };
  $script.urlArgs = function (str) {
    urlArgs = str;
  };
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps];
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {
      return list[dep];
    }) ? ready() : !function (key) {
      delay[key] = delay[key] || [];
      delay[key][push](ready);
      req && req(missing);
    }(deps.join('|'));
    return $script;
  };

  $script.done = function (idOrDone) {
    $script([null], idOrDone);
  };

  return $script;
});

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map