"use strict";!function(){var t=angular.module("githubViewer",[]),e=function(t,e){var r=function(r){t.user=r.data,e.get(t.user.repos_url).then(o,n)},o=function(e){t.repos=e.data},n=function(e){t.error="Could not fetch the data."};e.get("https://api.github.com/users/konekoya").then(r,n),t.message="Hey Joshua!",t.repoSortOrder="-stargazers_count"};t.controller("MainController",["$scope","$http",e])}();
"use strict";var JOSHUA=function(e){function n(n){if("string"==typeof n&&n.length>0){var t=i.querySelector(n);t&&t.addEventListener("click",function(){e.fn.fullpage.moveTo("intro")},!1)}}function t(){e("#fullpage").fullpage({menu:"#navigation",navigation:!0,navigationTooltips:["Home sweet home","Yep, A lllllittle About Me"],css3:!0,easingcss3:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",fitToSection:!0}),n(".avatar__mouse")}var i=document;return{init:t}}(jQuery);$(document).ready(function(){JOSHUA.init()});