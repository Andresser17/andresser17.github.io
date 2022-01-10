exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js":
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendPost": () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   "send": () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   "sendForm": () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,
});


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.3.1',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendForm": () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.3.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailJSResponseStatus": () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/store/store.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams.js":
/*!******************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateParams": () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }),

/***/ "./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}

/***/ }),

/***/ "./src/app.config.js":
/*!***************************!*\
  !*** ./src/app.config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // this is used in Footer section
  GITHUB_URL: "https://github.com/Andresser17",
  LINKEDIN_URL: "https://www.linkedin.com/in/alejandro-serrano-frontend-developer/",
  // this is for the Contact Form
  EMAIL: "andresserserrano2020@gmail.com",
  SERVICE_ID: "service_dlhbxdh",
  TEMPLATE_ID: "template_9l4u4jj",
  USER_ID: "user_DTWMp4cNyF93TKGmMi3vJ"
});

/***/ }),

/***/ "./src/components/Buttons.js":
/*!***********************************!*\
  !*** ./src/components/Buttons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Buttons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.href,
    className: "block px-6 py-4 font-semibold text-black rounded shadow-md cursor-pointer bg-fourth"
  }, props.text);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ }),

/***/ "./src/components/Icons.js":
/*!*********************************!*\
  !*** ./src/components/Icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Icons(props) {
  const dim = props.dim ? props.dim : "w-12 h-12";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.href,
    className: `block ${dim} mr-6`
  }, props.children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/components/SectionTitle.js":
/*!****************************************!*\
  !*** ./src/components/SectionTitle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SectionTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center w-full p-4 h-min"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "px-4 pb-2 text-3xl font-semibold text-center border-b-2 border-fourth"
  }, props.text));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/Home */ "./src/sections/Home.js");
/* harmony import */ var _sections_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/Projects */ "./src/sections/Projects.js");
/* harmony import */ var _sections_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/About */ "./src/sections/About.js");
/* harmony import */ var _sections_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Contact */ "./src/sections/Contact.js");
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Footer */ "./src/sections/Footer.js");
 // Styles

 // Components
// Sections







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_About__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/projectsArticles.js":
/*!*********************************!*\
  !*** ./src/projectsArticles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_personal_page_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/personal-page.png */ "./src/images/personal-page.png");
/* harmony import */ var _icons_codepen_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/codepen-icon.svg */ "./src/icons/codepen-icon.svg");
/* harmony import */ var _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/linkedin-icon-2.svg */ "./src/icons/linkedin-icon-2.svg");
// Personal Site imports



const personalPage = {
  image: _images_personal_page_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: "Hello World",
  description: "lorem ipsun dolor hello world",
  sourceCode: "https://github.com",
  liveCode: "https://heroku.com",
  usedStack: [_icons_codepen_icon_svg__WEBPACK_IMPORTED_MODULE_1__.ReactComponent, _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__.ReactComponent]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([personalPage]);

/***/ }),

/***/ "./src/sections/About.js":
/*!*******************************!*\
  !*** ./src/sections/About.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.js");
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionTitle */ "./src/components/SectionTitle.js");
/* harmony import */ var _images_sample_person_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sample-person.jpg */ "./src/images/sample-person.jpg");
 // Components


 // Images



function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "about",
    className: "flex flex-wrap min-h-screen px-4 py-8 cont-blue-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "About Me"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center w-full mt-8 lg:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_sample_person_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "rounded w-60 h-60 lg:w-80 lg:h-80",
    alt: "Author"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full text-center lg:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "py-2"
  }, "Hi there!, I want to thank you for visit my website, my name is Alejandro Serrano, I'm a Junior Front End Developer, and I'm in the journey of get my first job. I start to been interested in the programming since the 16 years old, I know the topic because a cousin start to interesting in this topic, I knew nothing of programming, I think that was something that make a group of people with a white bat in a lab, nothing that you can do from your home, something like write a lot of 1 and 0 in the computer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "py-2"
  }, "What's something that blow up my mind when I start to learning by my self, I remember to start viewing videos on YouTube about JavaScript and struggling with the concept of what is a function or an iteration, then I see a video about what is a web developer, then I decide that I want to be one, I see videos of HTML and CSS and a little of JavaScript to start building little things, was a fun hobby, but then I let it for behind, because the school and my entry to the University."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "py-2"
  }, "A year ago I decide that this is the career I want to follow, and I start to put all my effort in it, trying to do little steps every day, and improve other soft skills like my English dominance, practice grammar and a little of speech every day."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "py-2"
  }, "I have the pride to say that I have been follow this path in the majority by my own and all the resources and help that provide the web and organizations like FreeCodeCamp, The Odin Project and all the docs of every framework and tool I have the interest to learn, I consider I have the discipline to learn every thing if I propose my self.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "#",
    text: "Download my resume"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/sections/Contact.js":
/*!*********************************!*\
  !*** ./src/sections/Contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app.config.js");
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionTitle */ "./src/components/SectionTitle.js");
/* harmony import */ var _icons_copy_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/copy-icon.svg */ "./src/icons/copy-icon.svg");



 // Components

 // Icons



const validator = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");

function FormTextarea(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    disabled: props.disabled,
    name: props.name,
    placeholder: props.placeholder,
    value: props.toSend[props.name],
    onChange: props.onChange,
    className: `p-2 shadow-xl h-36 text-black disabled:opacity-40`
  });
}

function FormInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    disabled: props.disabled,
    name: props.name,
    placeholder: props.placeholder,
    value: props.toSend[props.name],
    onChange: props.onChange,
    className: `p-2 shadow-xl text-black disabled:opacity-40`
  });
}

function FormLabel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "mt-4 mb-1"
  }, props.text);
}

function FormButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: props.disabled,
    type: "submit",
    className: "block px-6 py-4 mt-4 font-semibold text-black rounded shadow-xl bg-fourth disabled:opacity-40"
  }, props.text);
}

function Notification(props) {
  // Basic configurations
  const {
    0: config,
    1: setConfig
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    duration: 1000,
    delay: 1000
  });
  const basicStyles = `fixed bottom-4 left-4 ${props.color} p-4 text-xl rounded-sm transition-opacity delay-${config.delay} duration-${config.duration}`; // Toggle animation

  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(`${basicStyles} opacity-0`);

  const timeout = ms => {
    return new Promise(res => setTimeout(res, ms));
  };

  const setOpacity = async () => {
    // Show component
    setToggle(`${basicStyles} opacity-1`); // await to finish the animation

    await timeout(config.delay + config.duration); // Hide component

    setToggle(`${basicStyles} opacity-0`); // await to finish the animation

    await timeout(config.duration); // Unmount component

    props.onToggle(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOpacity();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.message));
}

function ContactForm(props) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Template params

  const {
    0: toSend,
    1: setToSend
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    message: ""
  }); // Hide/Unhide message

  const {
    0: notMessage,
    1: setNotMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    toggle: false,
    message: "",
    color: ""
  });

  const checkInputs = () => {
    const name = toSend.name;
    const email = toSend.email;
    const message = toSend.message; // Check if inputs are empty

    if (!name.length || !email.length || !message.length) {
      setNotMessage({
        toggle: true,
        message: "All inputs have to be filled",
        color: "bg-red-600"
      });
      return true;
    } // Check if email is valid


    if (!validator.validate(email)) {
      setNotMessage({
        toggle: true,
        message: "The email provided is invalid",
        color: "bg-red-600"
      });
      return true;
    }

    return false;
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (checkInputs()) return;

    const timeout = ms => {
      return new Promise(res => setTimeout(res, ms));
    }; // const response = { status: 200 };


    setDisabled(true);
    const response = await (0,_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__.send)(_app_config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVICE_ID, _app_config__WEBPACK_IMPORTED_MODULE_2__["default"].TEMPLATE_ID, toSend, _app_config__WEBPACK_IMPORTED_MODULE_2__["default"].USER_ID); // await timeout(5000);
    // Display notification

    if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
      setNotMessage({
        toggle: true,
        message: "Message Sent",
        color: "bg-green-600"
      });
    }

    if ((response === null || response === void 0 ? void 0 : response.status) === 404) {
      setNotMessage({
        toggle: true,
        message: "Message not sent",
        color: "bg-red-600"
      });
    }
  };

  const handleChange = e => {
    setToSend({ ...toSend,
      [e.target.name]: e.target.value
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Active form when notMessage is unmounted
    if (!notMessage.toggle) setDisabled(false);
  }, [notMessage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmit,
    className: "flex flex-col w-96"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormLabel, {
    text: "Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormInput, {
    name: "name",
    disabled: disabled,
    placeholder: "Name",
    toSend: toSend,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormLabel, {
    text: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormInput, {
    name: "email",
    disabled: disabled,
    placeholder: "Email",
    toSend: toSend,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormLabel, {
    text: "Message"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormTextarea, {
    name: "message",
    disabled: disabled,
    placeholder: "Send me a message!",
    toSend: toSend,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormButton, {
    disabled: disabled,
    text: "Send"
  }), notMessage.toggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Notification, {
    onToggle: setNotMessage,
    message: notMessage.message,
    color: notMessage.color
  }));
}

function CopyEmail(props) {
  const {
    0: buttonText,
    1: setButtonText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Copy!"); // Copy the text inside the text field

  const copy = () => navigator.clipboard.writeText(props.email);

  const handleClick = e => {
    if (buttonText === "Copy!") {
      setButtonText("Copied!");
    }

    copy();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border rounded border-slate-900 w-fit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-end p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick,
    className: "inline-flex items-center justify-center h-8 px-3 min-w-20 hover:bg-slate-700 active:bg-gray-800"
  }, buttonText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 shadow-inner bg-slate-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-4 text-lg font-bold"
  }, props.email)));
}

function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "contact",
    className: "min-h-screen px-4 py-8 bg-first lg:flex lg:flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Contact Me"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-8 lg:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block text-xl"
  }, "Send me an email!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CopyEmail, {
    email: _app_config__WEBPACK_IMPORTED_MODULE_2__["default"].EMAIL
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center py-8 lg:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactForm, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/sections/Footer.js":
/*!********************************!*\
  !*** ./src/sections/Footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config.js */ "./src/app.config.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icons */ "./src/components/Icons.js");
/* harmony import */ var _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/linkedin-icon-2.svg */ "./src/icons/linkedin-icon-2.svg");
/* harmony import */ var _icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/github-icon-1.svg */ "./src/icons/github-icon-1.svg");

 // Components

 // Icons


 // function Footer() {
//   return (
//     <footer className="bg-first">
//       <div className="flex items-center justify-end w-full p-2 bg-black/60">
//         <p className="block p-2 mr-6 text-lg">
//           <span>&copy;2022</span> Alejandro Serrano
//         </p>
//         <div className="flex justify-center">
//           <Icons href={config.LINKEDIN_URL} dim="w-8 h-8">
//             <LinkedinIcon />
//           </Icons>
//           <Icons href={config.GITHUB_URL} dim="w-8 h-8">
//             <GithubIcon />
//           </Icons>
//         </div>
//       </div>
//     </footer>
//   );
// }

function Fater() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
} // export default Footer;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fater);

/***/ }),

/***/ "./src/sections/Home.js":
/*!******************************!*\
  !*** ./src/sections/Home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_menu_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu-icon.svg */ "./src/icons/menu-icon.svg");

 // Icons



function Menu(props) {
  const items = props.items.map(item => {
    const id = item.toLowerCase();
    let styles = `mx-4 px-2 py-0.5`;
    if (props.selected === id) styles = `${styles} border-b-2`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: styles,
      href: `#${id}`,
      onClick: () => props.onSelectedChange(id)
    }, item));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "hidden sm:flex"
  }, items);
} // function MenuButton(props) {
//   return (
//     <span className="flex items-center justify-center block w-12 h-12 p-2 mx-2 text-white rounded shadow-md bg-fourth sm:hidden">
//       <MenuIcon />
//     </span>
//   );
// }


function TopPanel(props) {
  // Manage scroll position
  const {
    0: scrollPosition,
    1: setScrollPosition
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Top Panel behaviour

  const base = "fixed top-0 w-full py-2 sm:py-4 flex justify-end transition-all duration-300 ease-out z-10";
  const home = "bg-black/50 text-white";
  const inactive = "bg-black/20 text-white/20 text-xs";
  const active = "sm:hover:text-base sm:hover:py-4 sm:hover:bg-black/50 sm:hover:text-white ";
  let styles = "";

  if (scrollPosition === 0) {
    styles = `${base} ${home}`;
  } else {
    styles = `${base} ${inactive} ${active}`;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles
  }, props.children);
}

function Home() {
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("home");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    id: "home",
    className: "flex items-center min-h-screen cont-blue-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TopPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Menu, {
    onSelectedChange: setSelected,
    selected: selected,
    items: ["Home", "Projects", "About", "Contact"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col w-full p-4 sm:w-2/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block mb-2 text-2xl font-extralight"
  }, "Hello, I'm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-5xl font-black"
  }, "Alejandro Serrano")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block text-2xl border-b border-fourth"
  }, "Front End Developer")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/sections/Projects.js":
/*!**********************************!*\
  !*** ./src/sections/Projects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icons */ "./src/components/Icons.js");
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SectionTitle */ "./src/components/SectionTitle.js");
/* harmony import */ var _icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/github-icon-1.svg */ "./src/icons/github-icon-1.svg");
/* harmony import */ var _icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/external-link-icon.svg */ "./src/icons/external-link-icon.svg");
/* harmony import */ var _icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/arrow-down-icon.svg */ "./src/icons/arrow-down-icon.svg");
/* harmony import */ var _images_sample_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/sample-image.png */ "./src/images/sample-image.png");
/* harmony import */ var _projectsArticles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projectsArticles */ "./src/projectsArticles.js");

 // Components


 // Icons



 // Images

 // Articles to iterate



function ProjectLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.href,
    className: "flex py-2 my-4 bg-black/25 hover:bg-black/40 transition duration-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block w-6 mx-4 text-white"
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block"
  }, props.text));
}

function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "px-4 pb-8 mb-16 border-b border-fourth sm:border-none lg:flex lg:justify-around lg:even:flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full py-10 lg:w-5/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: props.image,
    className: "w-full shadow-sm shadow-white/10"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectLink, {
    href: props.sourceCode,
    text: "Source Code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_3__.ReactComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectLink, {
    href: props.liveCode,
    text: "Live Code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4__.ReactComponent, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-fit lg:w-96"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-semibold text-center"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 mb-8"
  }, props.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap p-4 bg-black/40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block w-full mb-4 text-xl border-b"
  }, "Used Stack"), props.children)));
}

function OpenButton(props) {
  const handleClick = () => {
    props.setOpen(!props.open);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick,
    className: "absolute bottom-0 w-12 m-4 fill-first stroke-fourth animate-bounce left-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent, null));
}

function Projects() {
  // const [open, setOpen] = useState(false);
  const basicStyles = "relative w-full px-4 py-8 overflow-hidden bg-first transition-all";
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(`${basicStyles}`); // const handleClick = () => {
  //   setOpen(!open);
  // };
  // useEffect(() => {
  //   const animHeight = () => {
  //     if (!open) {
  //       setToggle(`${basicStyles} min-h-fit`);
  //     } else {
  //       setToggle(`${basicStyles} max-h`);
  //     }
  //   };
  //   animHeight(open);
  // }, [open]);
  // const cards = projectsArticles.map((item) => {
  //   const usedStack = item.usedStack.map((Icon) => (
  //     <Icons key={Icon.render.name} dim="w-8 h-8">
  //       <Icon />
  //     </Icons>
  //   ));
  //   return (
  //     <Card
  //       image={item.image}
  //       key={item.title}
  //       title={item.title}
  //       description={item.description}
  //       sourceCode={item.sourceCode}
  //       liveCode={item.liveCode}
  //     >
  //       {usedStack}
  //     </Card>
  //   );
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "projects",
    className: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Projects"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/icons/arrow-down-icon.svg":
/*!***************************************!*\
  !*** ./src/icons/arrow-down-icon.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0iaW5oZXJpdCIgc3Ryb2tlPSJpbmhlcml0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBvbHlsaW5lIHBvaW50cz0iOCAxMiAxMiAxNiAxNiAxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iOCIgeTI9IjE2Ii8+PC9zdmc+Cg==");

/***/ }),

/***/ "./src/icons/codepen-icon.svg":
/*!************************************!*\
  !*** ./src/icons/codepen-icon.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjU1LjgwNyA4Ny4wODdjLS4wNTktLjMxLS4xMS0uNjItLjE5My0uOTI0LS4wNTItLjE4My0uMTE0LS4zNTUtLjE3Mi0uNTM1YTExLjAwNyAxMS4wMDcgMCAwIDAtLjI4My0uOGMtLjA3Ni0uMTgyLS4xNjItLjM1OC0uMjQ1LS41MzRhOS43NCA5Ljc0IDAgMCAwLS4zNzYtLjczYy0uMDk2LS4xNzYtLjIwNy0uMzQyLS4zMTMtLjUxYTExLjAzOCAxMS4wMzggMCAwIDAtLjg0Mi0xLjE0MiAxMS4xNjYgMTEuMTY2IDAgMCAwLS41NDQtLjU5NmMtLjE0NS0uMTQ1LS4yOS0uMjktLjQ0Mi0uNDMxYTkuMDcgOS4wNyAwIDAgMC0uNjI0LS41MmMtLjE2NS0uMTI4LS4zMjctLjI2LS41LS4zNzctLjA2MS0uMDQ0LS4xMTctLjA5Ni0uMTgyLS4xMzhMMTM0LjA5OSAxLjg1YTEwLjk4OSAxMC45ODkgMCAwIDAtMTIuMjAxIDBsLTExNyA3Ny45OThjLS4wNjUuMDQxLS4xMTYuMDkzLS4xODIuMTM4LS4xNzIuMTItLjMzNC4yNDgtLjUuMzc2YTE1LjUyIDE1LjUyIDAgMCAwLS42MjQuNTE3IDguNjA0IDguNjA0IDAgMCAwLS40MzguNDNjLS4xOTMuMTk0LS4zNzIuMzktLjU0OC41OTctLjEzLjE1NS0uMjU1LjMxLS4zNzYuNDgzLS4xNjUuMjE3LS4zMTcuNDM4LS40NjUuNjY5LS4xMDcuMTY5LS4yMTQuMzM0LS4zMTQuNTFhOS41OTMgOS41OTMgMCAwIDAtLjM3Mi43MjRjLS4wODMuMTc2LS4xNzIuMzU1LS4yNDUuNTM0LS4xMDcuMjYyLS4yLjUzMS0uMjg2LjgtLjA1OC4xOC0uMTIuMzU1LS4xNjkuNTE3LS4wOC4zMDMtLjEzOC42MS0uMTkzLjkyNC0uMDMuMTU5LS4wNjkuMzE0LS4wOS40NzYtLjA2Mi40NzUtLjA5Ni45NTEtLjA5NiAxLjQzN3Y3OC4wMTZjMCAuNDgyLjAzNC45NjUuMTAzIDEuNDM3LjAyNS4xNzMuMDcuMzEuMTA0LjQ3Ni4wNTUuMzEuMTAzLjYyLjIwNy45MzEuMDQ4LjE3Mi4xMDMuMzQ1LjE3Mi41MzQuMDg2LjI3Ni4xNzIuNTUyLjI3Ni44MDQuMDcyLjE3Mi4xNzIuMzQ0LjI0MS41MTcuMTE0LjI0MS4yNDIuNDgyLjM4LjczNC4wOTYuMTcyLjIwNi4zNDUuMzEuNTAzLjE0OC4yNDIuMzEuNDQ5LjQ4Mi42NTUuMTIxLjE3My4yNDIuMzEuMzguNDc2LjE3NS4yMDcuMzQ0LjQxNC41NTEuNTk3LjE0MS4xMzcuMjc2LjMxLjQ0OC40MTMuMi4xNzMuNDE0LjM0NS42Mi41MjQuMTY2LjEzOC4zNDYuMjQyLjQ4My4zNzYuMDY2LjAzNC4xMDQuMTAzLjE3My4xMzRsMTE2Ljk2OCA3OC4wNGExMC44MTUgMTAuODE1IDAgMCAwIDYuMTAyIDEuODUxIDExLjA2IDExLjA2IDAgMCAwIDYuMTAyLTEuODVsMTE3LTc4Yy4wNjUtLjA0LjEyLS4wODkuMTgyLS4xMzQuMTcyLS4xMi4zMzQtLjI0OC41LS4zNzUuMjE0LS4xNy40MjQtLjM0NS42MjQtLjUyNC4xNTEtLjEzNS4yOTYtLjI4My40NDEtLjQyOGE5Ljg3NiA5Ljg3NiAwIDAgMCAuOTItMS4wNzJjLjE2Ni0uMjE3LjMxOC0uNDQxLjQ2Ni0uNjY5LjEwNy0uMTY1LjIxNC0uMzM0LjMxNC0uNTAzLjEzOC0uMjQyLjI1OC0uNDg2LjM3NS0uNzM0LjA4My0uMTc2LjE3LS4zNTIuMjQ1LS41MzEuMTA3LS4yNjYuMTk3LS41MzUuMjgzLS44MDQuMDU4LS4xNzkuMTItLjM1NS4xNzItLjUzNC4wOC0uMzAzLjEzNS0uNjE0LjE5My0uOTI0LjAyOC0uMTU5LjA3LS4zMTQuMDg2LS40NzYuMDYzLS40NzUuMDk3LS45NTEuMDk3LTEuNDM3Vjg5YzAtLjQ4Ni0uMDM4LS45NjItLjA5Ny0xLjQzOC0uMDI3LS4xNjktLjA3OS0uMzA2LS4xMTMtLjQ3NWguMDE3em0tMTI3LjgxIDY2LjkzNWwtMzguOTA1LTI2LjAyMSAzOC45MDUtMjYuMDI1IDM4LjkwNyAyNi4wMjUtMzguOTA3IDI2LjAyMXptLTEwLjk5OC03MS4xNTVsLTQ3LjY5MiAzMS45TDMwLjgxIDg5LjAxMyAxMTcgMzEuNTU1djUxLjMxMnptLTY3LjQ3NyA0NS4xM2wtMjcuNTE3IDE4LjQwNnYtMzYuODExbDI3LjUxNyAxOC40MDV6bTE5Ljc4NSAxMy4yNDVMMTE3IDE3My4xMzh2NTEuMzEybC04Ni4xOS01Ny40NjUgMzguNDk4LTI1Ljc1di4wMDd6bTY5LjY5IDMxLjg5bDQ3LjY5Mi0zMS44OTYgMzguNTAxIDI1Ljc0OS04Ni4xOTMgNTcuNDU4di01MS4zMTJ6bTY3LjQ3Ny00NS4xMjhsMjcuNTIxLTE4LjQwOXYzNi44MTVsLTI3LjUyLTE4LjQxM3YuMDA3em0tMTkuNzg1LTEzLjIzOEwxMzguOTk3IDgyLjg3VjMxLjU1NWw4Ni4xOTMgNTcuNDU5LTM4LjUgMjUuNzUyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+Cg==");

/***/ }),

/***/ "./src/icons/copy-icon.svg":
/*!*********************************!*\
  !*** ./src/icons/copy-icon.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjUwMjggNC42MjcwNEw1LjUgNi43NVYxNy4yNTQyQzUuNSAxOS4wNDkxIDYuOTU1MDcgMjAuNTA0MiA4Ljc1IDIwLjUwNDJMMTcuMzY2MyAyMC41MDQ1QzE3LjA1NzMgMjEuMzc4MiAxNi4yMjQgMjIuMDA0MiAxNS4yNDQ0IDIyLjAwNDJIOC43NUM2LjEyNjY1IDIyLjAwNDIgNCAxOS44Nzc2IDQgMTcuMjU0MlY2Ljc1QzQgNS43NjkyOSA0LjYyNzQ1IDQuOTM1MTIgNS41MDI4IDQuNjI3MDRaTTE3Ljc1IDJDMTguOTkyNiAyIDIwIDMuMDA3MzYgMjAgNC4yNVYxNy4yNUMyMCAxOC40OTI2IDE4Ljk5MjYgMTkuNSAxNy43NSAxOS41SDguNzVDNy41MDczNiAxOS41IDYuNSAxOC40OTI2IDYuNSAxNy4yNVY0LjI1QzYuNSAzLjAwNzM2IDcuNTA3MzYgMiA4Ljc1IDJIMTcuNzVaTTE3Ljc1IDMuNUg4Ljc1QzguMzM1NzkgMy41IDggMy44MzU3OSA4IDQuMjVWMTcuMjVDOCAxNy42NjQyIDguMzM1NzkgMTggOC43NSAxOEgxNy43NUMxOC4xNjQyIDE4IDE4LjUgMTcuNjY0MiAxOC41IDE3LjI1VjQuMjVDMTguNSAzLjgzNTc5IDE4LjE2NDIgMy41IDE3Ljc1IDMuNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/icons/external-link-icon.svg":
/*!******************************************!*\
  !*** ./src/icons/external-link-icon.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMTN2NmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoNiIvPjxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMSA5Ii8+PGxpbmUgeDE9IjEwIiB4Mj0iMjEiIHkxPSIxNCIgeTI9IjMiLz48L3N2Zz4K");

/***/ }),

/***/ "./src/icons/github-icon-1.svg":
/*!*************************************!*\
  !*** ./src/icons/github-icon-1.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xMjcuNTA1IDBDNTcuMDk1IDAgMCA1Ny4wODUgMCAxMjcuNTA1YzAgNTYuMzM2IDM2LjUzNCAxMDQuMTMgODcuMTk2IDEyMC45OSA2LjM3MiAxLjE4IDguNzEyLTIuNzY2IDguNzEyLTYuMTM0IDAtMy4wNC0uMTE5LTEzLjA4NS0uMTczLTIzLjczOS0zNS40NzMgNy43MTMtNDIuOTU4LTE1LjA0NC00Mi45NTgtMTUuMDQ0LTUuOC0xNC43MzgtMTQuMTU3LTE4LjY1Ni0xNC4xNTctMTguNjU2LTExLjU2OC03LjkxNC44NzItNy43NTIuODcyLTcuNzUyIDEyLjgwNC45IDE5LjU0NiAxMy4xNCAxOS41NDYgMTMuMTQgMTEuMzcyIDE5LjQ5MyAyOS44MjggMTMuODU3IDM3LjEwNCAxMC42IDEuMTQ0LTguMjQyIDQuNDQ5LTEzLjg2NiA4LjA5NS0xNy4wNS0yOC4zMi0zLjIyNS01OC4wOTItMTQuMTU4LTU4LjA5Mi02My4wMTQgMC0xMy45MiA0Ljk4MS0yNS4yOTUgMTMuMTM4LTM0LjIyNC0xLjMyNC0zLjIxMi01LjY4OC0xNi4xOCAxLjIzNS0zMy43NDMgMCAwIDEwLjcwNy0zLjQyNyAzNS4wNzMgMTMuMDcgMTAuMTctMi44MjYgMjEuMDc4LTQuMjQyIDMxLjkxNC00LjI5IDEwLjgzNi4wNDggMjEuNzUyIDEuNDY0IDMxLjk0MiA0LjI5IDI0LjMzNy0xNi40OTcgMzUuMDI5LTEzLjA3IDM1LjAyOS0xMy4wNyA2Ljk0IDE3LjU2MyAyLjU3NCAzMC41MzEgMS4yNSAzMy43NDMgOC4xNzUgOC45MjkgMTMuMTIyIDIwLjMwMyAxMy4xMjIgMzQuMjI0IDAgNDguOTcyLTI5LjgyOCA1OS43NTYtNTguMjIgNjIuOTEyIDQuNTczIDMuOTU3IDguNjQ4IDExLjcxNyA4LjY0OCAyMy42MTIgMCAxNy4wNi0uMTQ4IDMwLjc5MS0uMTQ4IDM0Ljk5MSAwIDMuMzkzIDIuMjk1IDcuMzY5IDguNzU5IDYuMTE3IDUwLjYzNC0xNi44NzkgODcuMTIyLTY0LjY1NiA4Ny4xMjItMTIwLjk3M0MyNTUuMDA5IDU3LjA4NSAxOTcuOTIyIDAgMTI3LjUwNSAwIi8+PHBhdGggZD0iTTQ3Ljc1NSAxODEuNjM0Yy0uMjguNjMzLTEuMjc4LjgyMy0yLjE4NS4zODktLjkyNS0uNDE2LTEuNDQ1LTEuMjgtMS4xNDUtMS45MTYuMjc1LS42NTIgMS4yNzMtLjgzNCAyLjE5Ni0uMzk2LjkyNy40MTUgMS40NTUgMS4yODcgMS4xMzQgMS45MjNNNTQuMDI3IDE4Ny4yM2MtLjYwOC41NjQtMS43OTcuMzAyLTIuNjA0LS41ODktLjgzNC0uODg5LS45OS0yLjA3Ny0uMzczLTIuNjUuNjI3LS41NjMgMS43OC0uMyAyLjYxNi41OS44MzQuODk5Ljk5NiAyLjA4LjM2IDIuNjVNNTguMzMgMTk0LjM5Yy0uNzgyLjU0My0yLjA2LjAzNC0yLjg0OS0xLjEtLjc4MS0xLjEzMy0uNzgxLTIuNDkzLjAxNy0zLjAzOC43OTItLjU0NSAyLjA1LS4wNTUgMi44NSAxLjA3Ljc4IDEuMTUzLjc4IDIuNTEzLS4wMTkgMy4wNjlNNjUuNjA2IDIwMi42ODNjLS42OTkuNzctMi4xODcuNTY0LTMuMjc3LS40ODgtMS4xMTQtMS4wMjgtMS40MjUtMi40ODctLjcyNC0zLjI1OC43MDctLjc3MiAyLjIwNC0uNTU1IDMuMzAyLjQ4OCAxLjEwNyAxLjAyNiAxLjQ0NSAyLjQ5Ni43IDMuMjU4TTc1LjAxIDIwNS40ODNjLS4zMDcuOTk4LTEuNzQxIDEuNDUyLTMuMTg1IDEuMDI4LTEuNDQyLS40MzctMi4zODYtMS42MDctMi4wOTUtMi42MTYuMy0xLjAwNSAxLjc0LTEuNDc4IDMuMTk1LTEuMDI0IDEuNDQuNDM1IDIuMzg2IDEuNTk2IDIuMDg2IDIuNjEyTTg1LjcxNCAyMDYuNjdjLjAzNiAxLjA1Mi0xLjE4OSAxLjkyNC0yLjcwNSAxLjk0My0xLjUyNS4wMzMtMi43NTgtLjgxOC0yLjc3NC0xLjg1MiAwLTEuMDYyIDEuMTk3LTEuOTI2IDIuNzIxLTEuOTUxIDEuNTE2LS4wMyAyLjc1OC44MTUgMi43NTggMS44Nk05Ni4yMjggMjA2LjI2N2MuMTgyIDEuMDI2LS44NzIgMi4wOC0yLjM3NyAyLjM2LTEuNDguMjctMi44NS0uMzYzLTMuMDM5LTEuMzgtLjE4NC0xLjA1Mi44OS0yLjEwNSAyLjM2Ny0yLjM3OCAxLjUwOC0uMjYyIDIuODU3LjM1NSAzLjA0OSAxLjM5OCIvPjwvZz48L3N2Zz4K");

/***/ }),

/***/ "./src/icons/linkedin-icon-2.svg":
/*!***************************************!*\
  !*** ./src/icons/linkedin-icon-2.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAxOC4zMzhDMCA4LjIxNiA4LjQ3NCAwIDE4LjkyIDBoMjE4LjE2QzI0Ny41MyAwIDI1NiA4LjIxNiAyNTYgMTguMzM4djIxOS4zMjdDMjU2IDI0Ny43OSAyNDcuNTMgMjU2IDIzNy4wOCAyNTZIMTguOTJDOC40NzUgMjU2IDAgMjQ3Ljc5MSAwIDIzNy42NjhWMTguMzM1eiIgZmlsbD0iIzA2OSIvPjxwYXRoIGQ9Ik03Ny43OTYgMjE0LjIzOFY5OC45ODZIMzkuNDg4djExNS4yNTJINzcuOHpNNTguNjUgODMuMjUzYzEzLjM1NiAwIDIxLjY3MS04Ljg1IDIxLjY3MS0xOS45MS0uMjUtMTEuMzEyLTguMzE1LTE5LjkxNS0yMS40MTctMTkuOTE1LTEzLjExMSAwLTIxLjY3NCA4LjYwMy0yMS42NzQgMTkuOTE0IDAgMTEuMDYgOC4zMTIgMTkuOTEgMjEuMTY5IDE5LjkxaC4yNDh6TTk5IDIxNC4yMzhoMzguMzA1di02NC4zNTVjMC0zLjQ0LjI1LTYuODg5IDEuMjYyLTkuMzQ2IDIuNzY4LTYuODg1IDkuMDcxLTE0LjAxMiAxOS42NTYtMTQuMDEyIDEzLjg1OCAwIDE5LjQwNSAxMC41NjggMTkuNDA1IDI2LjA2M3Y2MS42NWgzOC4zMDR2LTY2LjA4MmMwLTM1LjM5OS0xOC44OTYtNTEuODcyLTQ0LjA5OS01MS44NzItMjAuNjYzIDAtMjkuNzM4IDExLjU0OS0zNC43OCAxOS40MTVoLjI1NVY5OC45OUg5OS4wMDJjLjUgMTAuODEyLS4wMDMgMTE1LjI1Mi0uMDAzIDExNS4yNTJ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/icons/menu-icon.svg":
/*!*********************************!*\
  !*** ./src/icons/menu-icon.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0iY3VycmVudENvbG9yIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjMiIHgyPSIyMSIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjMiIHgyPSIyMSIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4K");

/***/ }),

/***/ "./src/images/personal-page.png":
/*!**************************************!*\
  !*** ./src/images/personal-page.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/personal-page-46a6120d4fe5755a82f2360995f9b22a.png");

/***/ }),

/***/ "./src/images/sample-image.png":
/*!*************************************!*\
  !*** ./src/images/sample-image.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/sample-image-cdef594f1bd8cc4251c97c09b48d12fa.png");

/***/ }),

/***/ "./src/images/sample-person.jpg":
/*!**************************************!*\
  !*** ./src/images/sample-person.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAFeAV4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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UAFFFFABRRRQB9cf8E0fiM1xpfiDwnPJk2jrqdmpOTsfCSgeiqwjP1lNfVFfnn+xX4ubwh+0n4ebzPLg1Qy6bN/tiRDsH/f1Yvyr9DKACiiigAooooAKKKKACiiigAooooAKKKKAOL/aP1s+HfgF4yu1YrIuj3KRsD913jZFP/fTCvzTUbVx6V+kH7UvhXVPG/wD8RaToto99qV7DGkMCMqtJ+9QtyxA+6CeT2r4p/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDzWivSv8Ahjr4n/8AQn33/gVbf/HaP+GOvif/ANCfff8AgVbf/HaAPNaK9K/4Y6+J/wD0J99/4FW3/wAdo/4Y6+J//Qn33/gVbf8Ax2gDjfh5rB8O/ELw/qA4On6pa3P/AHxMjf0r9SK/On/hjz4oKQy+D77cpBH+lW3X/v7X6LUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map