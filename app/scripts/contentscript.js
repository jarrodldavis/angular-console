'use strict';

var element = document.createElement("script");
element.innerHTML =
    "if (window.angular) {" +
    "    var ngAppElem = angular.element(document.querySelector('[ng-app]') || document);" +
    "" +
    "    window.injector = ngAppElem.injector();" +
    "    window.inject = injector.invoke;" +
    "    window.$rootScope = ngAppElem.scope();" +
    "" +
    "    Object.defineProperty(window, '$scope', {" +
    "        get: function () {" +
    "            var elem = angular.element(__commandLineAPI.$0);" +
    "            return elem.isolateScope() || elem.scope();" +
    "        }" +
    "    });" +
    "    console.info('Injected Angular injector, $rootScope, and $scope selector.');" +
    "}";
document.head.appendChild(element);
