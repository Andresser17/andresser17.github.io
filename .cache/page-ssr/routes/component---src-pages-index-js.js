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
/* harmony import */ var _icons_codepen_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_codepen_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/linkedin-icon-2.svg */ "./src/icons/linkedin-icon-2.svg");
/* harmony import */ var _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__);
// Personal Site imports



const personalPage = {
  image: _images_personal_page_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: "Hello World",
  description: "lorem ipsun dolor hello world",
  sourceCode: "https://github.com",
  liveCode: "https://heroku.com",
  usedStack: [(_icons_codepen_icon_svg__WEBPACK_IMPORTED_MODULE_1___default()), (_icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_2___default())]
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
/* harmony import */ var _icons_copy_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_copy_icon_svg__WEBPACK_IMPORTED_MODULE_4__);



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
/* harmony import */ var _icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_linkedin_icon_2_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/github-icon-1.svg */ "./src/icons/github-icon-1.svg");
/* harmony import */ var _icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_4__);

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
/* harmony import */ var _icons_menu_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_menu_icon_svg__WEBPACK_IMPORTED_MODULE_1__);

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
/* harmony import */ var _icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/external-link-icon.svg */ "./src/icons/external-link-icon.svg");
/* harmony import */ var _icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/arrow-down-icon.svg */ "./src/icons/arrow-down-icon.svg");
/* harmony import */ var _icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5__);
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
} // function Card(props) {
//   return (
//     <article className="px-4 pb-8 mb-16 border-b border-fourth sm:border-none lg:flex lg:justify-around lg:even:flex-row-reverse">
//       <div className="w-full py-10 lg:w-5/12">
//         <img src={props.image} className="w-full shadow-sm shadow-white/10" />
//         {/* Source code and live code */}
//         <div className="pt-8">
//           <ProjectLink href={props.sourceCode} text="Source Code">
//             <GithubIcon />
//           </ProjectLink>
//           <ProjectLink href={props.liveCode} text="Live Code">
//             <ExternalLinkIcon />
//           </ProjectLink>
//         </div>
//       </div>
//       <div className="w-fit lg:w-96">
//         <h3 className="text-xl font-semibold text-center">{props.title}</h3>
//         <p className="mt-4 mb-8">{props.description}</p>
//         {/* Used stack */}
//         <div className="flex flex-wrap p-4 bg-black/40">
//           <span className="block w-full mb-4 text-xl border-b">Used Stack</span>
//           {props.children}
//         </div>
//       </div>
//     </article>
//   );
// }


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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_icons_github_icon_1_svg__WEBPACK_IMPORTED_MODULE_3___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectLink, {
    href: props.liveCode,
    text: "Live Code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_icons_external_link_icon_svg__WEBPACK_IMPORTED_MODULE_4___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_icons_arrow_down_icon_svg__WEBPACK_IMPORTED_MODULE_5___default()), null));
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

  const cards = _projectsArticles__WEBPACK_IMPORTED_MODULE_7__["default"].map(item => {
    const usedStack = item.usedStack.map((Icon, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: key,
        dim: "w-8 h-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, null));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, {
      image: item.image,
      key: item.title,
      title: item.title,
      description: item.description,
      sourceCode: item.sourceCode,
      liveCode: item.liveCode
    }, usedStack);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "projects",
    className: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Projects"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:grid sm:grid-cols-2 sm:gap-1 lg:block"
  }, cards));
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function ArrowDownIcon (props) {
    return React.createElement("svg",props,[React.createElement("circle",{"cx":"12","cy":"12","r":"10","key":0}),React.createElement("polyline",{"points":"8 12 12 16 16 12","key":1}),React.createElement("line",{"x1":"12","x2":"12","y1":"8","y2":"16","key":2})]);
}

ArrowDownIcon.defaultProps = {"fill":"inherit","stroke":"inherit","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"1","viewBox":"0 0 24 24"};

module.exports = ArrowDownIcon;

ArrowDownIcon.default = ArrowDownIcon;


/***/ }),

/***/ "./src/icons/codepen-icon.svg":
/*!************************************!*\
  !*** ./src/icons/codepen-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function CodepenIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M255.807 87.087c-.059-.31-.11-.62-.193-.924-.052-.183-.114-.355-.172-.535a11.007 11.007 0 0 0-.283-.8c-.076-.182-.162-.358-.245-.534a9.74 9.74 0 0 0-.376-.73c-.096-.176-.207-.342-.313-.51a11.038 11.038 0 0 0-.842-1.142 11.166 11.166 0 0 0-.544-.596c-.145-.145-.29-.29-.442-.431a9.07 9.07 0 0 0-.624-.52c-.165-.128-.327-.26-.5-.377-.061-.044-.117-.096-.182-.138L134.099 1.85a10.989 10.989 0 0 0-12.201 0l-117 77.998c-.065.041-.116.093-.182.138-.172.12-.334.248-.5.376a15.52 15.52 0 0 0-.624.517 8.604 8.604 0 0 0-.438.43c-.193.194-.372.39-.548.597-.13.155-.255.31-.376.483-.165.217-.317.438-.465.669-.107.169-.214.334-.314.51a9.593 9.593 0 0 0-.372.724c-.083.176-.172.355-.245.534-.107.262-.2.531-.286.8-.058.18-.12.355-.169.517-.08.303-.138.61-.193.924-.03.159-.069.314-.09.476-.062.475-.096.951-.096 1.437v78.016c0 .482.034.965.103 1.437.025.173.07.31.104.476.055.31.103.62.207.931.048.172.103.345.172.534.086.276.172.552.276.804.072.172.172.344.241.517.114.241.242.482.38.734.096.172.206.345.31.503.148.242.31.449.482.655.121.173.242.31.38.476.175.207.344.414.551.597.141.137.276.31.448.413.2.173.414.345.62.524.166.138.346.242.483.376.066.034.104.103.173.134l116.968 78.04a10.815 10.815 0 0 0 6.102 1.851 11.06 11.06 0 0 0 6.102-1.85l117-78c.065-.04.12-.089.182-.134.172-.12.334-.248.5-.375.214-.17.424-.345.624-.524.151-.135.296-.283.441-.428a9.876 9.876 0 0 0 .92-1.072c.166-.217.318-.441.466-.669.107-.165.214-.334.314-.503.138-.242.258-.486.375-.734.083-.176.17-.352.245-.531.107-.266.197-.535.283-.804.058-.179.12-.355.172-.534.08-.303.135-.614.193-.924.028-.159.07-.314.086-.476.063-.475.097-.951.097-1.437V89c0-.486-.038-.962-.097-1.438-.027-.169-.079-.306-.113-.475h.017zm-127.81 66.935l-38.905-26.021 38.905-26.025 38.907 26.025-38.907 26.021zm-10.998-71.155l-47.692 31.9L30.81 89.013 117 31.555v51.312zm-67.477 45.13l-27.517 18.406v-36.811l27.517 18.405zm19.785 13.245L117 173.138v51.312l-86.19-57.465 38.498-25.75v.007zm69.69 31.89l47.692-31.896 38.501 25.749-86.193 57.458v-51.312zm67.477-45.128l27.521-18.409v36.815l-27.52-18.413v.007zm-19.785-13.238L138.997 82.87V31.555l86.193 57.459-38.5 25.752z","fill":"currentColor"}));
}

CodepenIcon.defaultProps = {"viewBox":"0 0 256 256","preserveAspectRatio":"xMinYMin meet"};

module.exports = CodepenIcon;

CodepenIcon.default = CodepenIcon;


/***/ }),

/***/ "./src/icons/copy-icon.svg":
/*!*********************************!*\
  !*** ./src/icons/copy-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function CopyIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.224 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z","fill":"currentColor"}));
}

CopyIcon.defaultProps = {"fill":"none","viewBox":"0 0 24 24"};

module.exports = CopyIcon;

CopyIcon.default = CopyIcon;


/***/ }),

/***/ "./src/icons/external-link-icon.svg":
/*!******************************************!*\
  !*** ./src/icons/external-link-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function ExternalLinkIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6","key":0}),React.createElement("polyline",{"points":"15 3 21 3 21 9","key":1}),React.createElement("line",{"x1":"10","x2":"21","y1":"14","y2":"3","key":2})]);
}

ExternalLinkIcon.defaultProps = {"fill":"none","height":"24","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","viewBox":"0 0 24 24","width":"24"};

module.exports = ExternalLinkIcon;

ExternalLinkIcon.default = ExternalLinkIcon;


/***/ }),

/***/ "./src/icons/github-icon-1.svg":
/*!*************************************!*\
  !*** ./src/icons/github-icon-1.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function GithubIcon1 (props) {
    return React.createElement("svg",props,React.createElement("g",{"fill":"currentColor"},[React.createElement("path",{"d":"M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0","key":0}),React.createElement("path",{"d":"M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398","key":1})]));
}

GithubIcon1.defaultProps = {"viewBox":"0 0 256 249","preserveAspectRatio":"xMinYMin meet"};

module.exports = GithubIcon1;

GithubIcon1.default = GithubIcon1;


/***/ }),

/***/ "./src/icons/linkedin-icon-2.svg":
/*!***************************************!*\
  !*** ./src/icons/linkedin-icon-2.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LinkedinIcon2 (props) {
    return React.createElement("svg",props,React.createElement("g",{"fill":"none"},[React.createElement("path",{"d":"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z","fill":"#069","key":0}),React.createElement("path",{"d":"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z","fill":"#fff","key":1})]));
}

LinkedinIcon2.defaultProps = {"viewBox":"0 0 256 256"};

module.exports = LinkedinIcon2;

LinkedinIcon2.default = LinkedinIcon2;


/***/ }),

/***/ "./src/icons/menu-icon.svg":
/*!*********************************!*\
  !*** ./src/icons/menu-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function MenuIcon (props) {
    return React.createElement("svg",props,[React.createElement("line",{"x1":"3","x2":"21","y1":"12","y2":"12","key":0}),React.createElement("line",{"x1":"3","x2":"21","y1":"6","y2":"6","key":1}),React.createElement("line",{"x1":"3","x2":"21","y1":"18","y2":"18","key":2})]);
}

MenuIcon.defaultProps = {"fill":"currentColor","height":"24","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","viewBox":"0 0 24 24","width":"24"};

module.exports = MenuIcon;

MenuIcon.default = MenuIcon;


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