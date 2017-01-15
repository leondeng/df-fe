/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var config_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(45);
	var Hello_1 = __webpack_require__(49);
	var app = config_1.container.get(constants_1.IDENTIFIER.APPLICATION);
	ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: app.name, framework: app.env }), document.getElementById('example'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	var Container_1 = __webpack_require__(44);
	exports.container = Container_1.default;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var inversify_1 = __webpack_require__(5);
	__webpack_require__(43);
	var Application = (function () {
	    function Application() {
	        this.name = 'TestApp';
	        this.env = 'Test';
	    }
	    return Application;
	}());
	Application = __decorate([
	    inversify_1.injectable(),
	    __metadata("design:paramtypes", [])
	], Application);
	exports.Application = Application;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var container_1 = __webpack_require__(6);
	exports.Container = container_1.Container;
	var container_module_1 = __webpack_require__(33);
	exports.ContainerModule = container_module_1.ContainerModule;
	var injectable_1 = __webpack_require__(34);
	exports.injectable = injectable_1.injectable;
	var tagged_1 = __webpack_require__(35);
	exports.tagged = tagged_1.tagged;
	var named_1 = __webpack_require__(37);
	exports.named = named_1.named;
	var inject_1 = __webpack_require__(38);
	exports.inject = inject_1.inject;
	var optional_1 = __webpack_require__(39);
	exports.optional = optional_1.optional;
	var unmanaged_1 = __webpack_require__(40);
	exports.unmanaged = unmanaged_1.unmanaged;
	var multi_inject_1 = __webpack_require__(41);
	exports.multiInject = multi_inject_1.multiInject;
	var target_name_1 = __webpack_require__(42);
	exports.targetName = target_name_1.targetName;
	var guid_1 = __webpack_require__(8);
	exports.guid = guid_1.guid;
	var decorator_utils_1 = __webpack_require__(36);
	exports.decorate = decorator_utils_1.decorate;
	var constraint_helpers_1 = __webpack_require__(31);
	exports.traverseAncerstors = constraint_helpers_1.traverseAncerstors;
	exports.taggedConstraint = constraint_helpers_1.taggedConstraint;
	exports.namedConstraint = constraint_helpers_1.namedConstraint;
	exports.typeConstraint = constraint_helpers_1.typeConstraint;
	var serialization_1 = __webpack_require__(22);
	exports.getServiceIdentifierAsString = serialization_1.getServiceIdentifierAsString;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_1 = __webpack_require__(7);
	var lookup_1 = __webpack_require__(10);
	var planner_1 = __webpack_require__(12);
	var resolver_1 = __webpack_require__(23);
	var binding_to_syntax_1 = __webpack_require__(25);
	var serialization_1 = __webpack_require__(22);
	var container_snapshot_1 = __webpack_require__(32);
	var guid_1 = __webpack_require__(8);
	var ERROR_MSGS = __webpack_require__(11);
	var METADATA_KEY = __webpack_require__(18);
	var literal_types_1 = __webpack_require__(9);
	var Container = (function () {
	    function Container(containerOptions) {
	        if (containerOptions !== undefined) {
	            if (typeof containerOptions !== "object") {
	                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
	            }
	            else if (containerOptions.defaultScope === undefined) {
	                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
	            }
	            else if (containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Singleton &&
	                containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Transient) {
	                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
	            }
	            this.options = {
	                defaultScope: containerOptions.defaultScope
	            };
	        }
	        else {
	            this.options = {
	                defaultScope: literal_types_1.BindingScopeEnum.Transient
	            };
	        }
	        this.guid = guid_1.guid();
	        this._bindingDictionary = new lookup_1.Lookup();
	        this._snapshots = [];
	        this._middleware = null;
	        this.parent = null;
	    }
	    Container.merge = function (container1, container2) {
	        var container = new Container();
	        var bindingDictionary = planner_1.getBindingDictionary(container);
	        var bindingDictionary1 = planner_1.getBindingDictionary(container1);
	        var bindingDictionary2 = planner_1.getBindingDictionary(container2);
	        function copyDictionary(origing, destination) {
	            origing.traverse(function (key, value) {
	                value.forEach(function (binding) {
	                    destination.add(binding.serviceIdentifier, binding.clone());
	                });
	            });
	        }
	        copyDictionary(bindingDictionary1, bindingDictionary);
	        copyDictionary(bindingDictionary2, bindingDictionary);
	        return container;
	    };
	    Container.prototype.load = function () {
	        var _this = this;
	        var modules = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            modules[_i] = arguments[_i];
	        }
	        var setModuleId = function (bindingToSyntax, moduleId) {
	            bindingToSyntax._binding.moduleId = moduleId;
	        };
	        var getBindFunction = function (moduleId) {
	            return function (serviceIdentifier) {
	                var _bind = _this.bind.bind(_this);
	                var bindingToSyntax = _bind(serviceIdentifier);
	                setModuleId(bindingToSyntax, moduleId);
	                return bindingToSyntax;
	            };
	        };
	        var getUnbindFunction = function (moduleId) {
	            return function (serviceIdentifier) {
	                var _unbind = _this.unbind.bind(_this);
	                _unbind(serviceIdentifier);
	            };
	        };
	        var getIsboundFunction = function (moduleId) {
	            return function (serviceIdentifier) {
	                var _isBound = _this.isBound.bind(_this);
	                return _isBound(serviceIdentifier);
	            };
	        };
	        modules.forEach(function (module) {
	            var bindFunction = getBindFunction(module.guid);
	            var unbindFunction = getUnbindFunction(module.guid);
	            var isboundFunction = getIsboundFunction(module.guid);
	            module.registry(bindFunction, unbindFunction, isboundFunction);
	        });
	    };
	    Container.prototype.unload = function () {
	        var _this = this;
	        var modules = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            modules[_i] = arguments[_i];
	        }
	        var conditionFactory = function (expected) { return function (item) {
	            return item.moduleId === expected;
	        }; };
	        modules.forEach(function (module) {
	            var condition = conditionFactory(module.guid);
	            _this._bindingDictionary.removeByCondition(condition);
	        });
	    };
	    Container.prototype.bind = function (serviceIdentifier) {
	        var defaultScope = literal_types_1.BindingScopeEnum.Transient;
	        defaultScope = (this.options.defaultScope === defaultScope) ? defaultScope : literal_types_1.BindingScopeEnum.Singleton;
	        var binding = new binding_1.Binding(serviceIdentifier, defaultScope);
	        this._bindingDictionary.add(serviceIdentifier, binding);
	        return new binding_to_syntax_1.BindingToSyntax(binding);
	    };
	    Container.prototype.unbind = function (serviceIdentifier) {
	        try {
	            this._bindingDictionary.remove(serviceIdentifier);
	        }
	        catch (e) {
	            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
	        }
	    };
	    Container.prototype.unbindAll = function () {
	        this._bindingDictionary = new lookup_1.Lookup();
	    };
	    Container.prototype.isBound = function (serviceIdentifier) {
	        return this._bindingDictionary.hasKey(serviceIdentifier);
	    };
	    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
	        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
	    };
	    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
	        var bindings = this._bindingDictionary.get(serviceIdentifier);
	        var request = planner_1.createMockRequest(this, serviceIdentifier, key, value);
	        return bindings.some(function (b) { return b.constraint(request); });
	    };
	    Container.prototype.snapshot = function () {
	        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
	    };
	    Container.prototype.restore = function () {
	        var snapshot = this._snapshots.pop();
	        if (snapshot === undefined) {
	            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
	        }
	        this._bindingDictionary = snapshot.bindings;
	        this._middleware = snapshot.middleware;
	    };
	    Container.prototype.createChild = function () {
	        var child = new Container();
	        child.parent = this;
	        return child;
	    };
	    Container.prototype.applyMiddleware = function () {
	        var middlewares = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            middlewares[_i] = arguments[_i];
	        }
	        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
	        this._middleware = middlewares.reduce(function (prev, curr) {
	            return curr(prev);
	        }, initial);
	    };
	    Container.prototype.get = function (serviceIdentifier) {
	        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
	    };
	    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
	        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
	    };
	    Container.prototype.getNamed = function (serviceIdentifier, named) {
	        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
	    };
	    Container.prototype.getAll = function (serviceIdentifier) {
	        return this._get(true, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
	    };
	    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
	        return this._get(false, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
	    };
	    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
	        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
	    };
	    Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
	        var result = null;
	        var defaultArgs = {
	            avoidConstraints: avoidConstraints,
	            contextInterceptor: function (context) { return context; },
	            isMultiInject: isMultiInject,
	            key: key,
	            serviceIdentifier: serviceIdentifier,
	            targetType: targetType,
	            value: value
	        };
	        if (this._middleware) {
	            result = this._middleware(defaultArgs);
	            if (result === undefined || result === null) {
	                throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
	            }
	        }
	        else {
	            result = this._planAndResolve()(defaultArgs);
	        }
	        return result;
	    };
	    Container.prototype._planAndResolve = function () {
	        var _this = this;
	        return function (args) {
	            var context = planner_1.plan(_this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
	            context = args.contextInterceptor(context);
	            var result = resolver_1.resolve(context);
	            return result;
	        };
	    };
	    return Container;
	}());
	exports.Container = Container;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guid_1 = __webpack_require__(8);
	var literal_types_1 = __webpack_require__(9);
	var Binding = (function () {
	    function Binding(serviceIdentifier, defaultScope) {
	        this.guid = guid_1.guid();
	        this.activated = false;
	        this.serviceIdentifier = serviceIdentifier;
	        this.scope = defaultScope;
	        this.type = literal_types_1.BindingTypeEnum.Invalid;
	        this.constraint = function (request) { return true; };
	        this.implementationType = null;
	        this.cache = null;
	        this.factory = null;
	        this.provider = null;
	        this.onActivation = null;
	        this.dynamicValue = null;
	    }
	    Binding.prototype.clone = function () {
	        var clone = new Binding(this.serviceIdentifier, this.scope);
	        clone.activated = false;
	        clone.implementationType = this.implementationType;
	        clone.dynamicValue = this.dynamicValue;
	        clone.scope = this.scope;
	        clone.type = this.type;
	        clone.factory = this.factory;
	        clone.provider = this.provider;
	        clone.constraint = this.constraint;
	        clone.onActivation = this.onActivation;
	        clone.cache = this.cache;
	        return clone;
	    };
	    return Binding;
	}());
	exports.Binding = Binding;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function guid() {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	            .toString(16)
	            .substring(1);
	    }
	    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
	        s4() + "-" + s4() + s4() + s4();
	}
	exports.guid = guid;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var BindingScopeEnum = {
	    Singleton: "Singleton",
	    Transient: "Transient"
	};
	exports.BindingScopeEnum = BindingScopeEnum;
	var BindingTypeEnum = {
	    ConstantValue: "ConstantValue",
	    Constructor: "Constructor",
	    DynamicValue: "DynamicValue",
	    Factory: "Factory",
	    Function: "Function",
	    Instance: "Instance",
	    Invalid: "Invalid",
	    Provider: "Provider"
	};
	exports.BindingTypeEnum = BindingTypeEnum;
	var TargetTypeEnum = {
	    ClassProperty: "ClassProperty",
	    ConstructorArgument: "ConstructorArgument",
	    Variable: "Variable"
	};
	exports.TargetTypeEnum = TargetTypeEnum;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ERROR_MSGS = __webpack_require__(11);
	var Lookup = (function () {
	    function Lookup() {
	        this._map = new Map();
	    }
	    Lookup.prototype.getMap = function () {
	        return this._map;
	    };
	    Lookup.prototype.add = function (serviceIdentifier, value) {
	        if (serviceIdentifier === null || serviceIdentifier === undefined) {
	            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
	        }
	        ;
	        if (value === null || value === undefined) {
	            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
	        }
	        ;
	        var entry = this._map.get(serviceIdentifier);
	        if (entry !== undefined) {
	            entry.push(value);
	            this._map.set(serviceIdentifier, entry);
	        }
	        else {
	            this._map.set(serviceIdentifier, [value]);
	        }
	    };
	    Lookup.prototype.get = function (serviceIdentifier) {
	        if (serviceIdentifier === null || serviceIdentifier === undefined) {
	            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
	        }
	        var entry = this._map.get(serviceIdentifier);
	        if (entry !== undefined) {
	            return entry;
	        }
	        else {
	            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
	        }
	    };
	    Lookup.prototype.remove = function (serviceIdentifier) {
	        if (serviceIdentifier === null || serviceIdentifier === undefined) {
	            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
	        }
	        if (!this._map.delete(serviceIdentifier)) {
	            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
	        }
	    };
	    Lookup.prototype.removeByCondition = function (condition) {
	        var _this = this;
	        this._map.forEach(function (entries, key) {
	            var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
	            if (updatedEntries.length > 0) {
	                _this._map.set(key, updatedEntries);
	            }
	            else {
	                _this._map.delete(key);
	            }
	        });
	    };
	    Lookup.prototype.hasKey = function (serviceIdentifier) {
	        if (serviceIdentifier === null || serviceIdentifier === undefined) {
	            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
	        }
	        return this._map.has(serviceIdentifier);
	    };
	    Lookup.prototype.clone = function () {
	        var copy = new Lookup();
	        this._map.forEach(function (value, key) {
	            value.forEach(function (b) { return copy.add(key, b.clone()); });
	        });
	        return copy;
	    };
	    Lookup.prototype.traverse = function (func) {
	        this._map.forEach(function (value, key) {
	            func(key, value);
	        });
	    };
	    ;
	    return Lookup;
	}());
	exports.Lookup = Lookup;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
	exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
	exports.NULL_ARGUMENT = "NULL argument";
	exports.KEY_NOT_FOUND = "Key Not Found";
	exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
	exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
	exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
	exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
	exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
	exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
	exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
	exports.INVALID_BINDING_TYPE = "Invalid binding type:";
	exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
	exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
	exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
	exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
	    "used as service identifier";
	exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
	    "must be applied to the parameters of a class constructor or a class property.";
	exports.ARGUMENTS_LENGTH_MISMATCH_1 = "The number of constructor arguments in the derived class ";
	exports.ARGUMENTS_LENGTH_MISMATCH_2 = " must be >= than the number of constructor arguments of its base class.";
	exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
	    "must be an object.";
	exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
	    "be a string ('singleton' or 'transient').";
	exports.INVALID_BINDING_PROPERTY = "TODO";


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var plan_1 = __webpack_require__(13);
	var context_1 = __webpack_require__(14);
	var request_1 = __webpack_require__(15);
	var target_1 = __webpack_require__(16);
	var binding_count_1 = __webpack_require__(20);
	var reflection_utils_1 = __webpack_require__(21);
	var metadata_1 = __webpack_require__(17);
	var ERROR_MSGS = __webpack_require__(11);
	var METADATA_KEY = __webpack_require__(18);
	var literal_types_1 = __webpack_require__(9);
	var serialization_1 = __webpack_require__(22);
	function getBindingDictionary(cntnr) {
	    return cntnr._bindingDictionary;
	}
	exports.getBindingDictionary = getBindingDictionary;
	function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
	    var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
	    var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
	    var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
	    if (key !== undefined) {
	        var tagMetadata = new metadata_1.Metadata(key, value);
	        target.metadata.push(tagMetadata);
	    }
	    return target;
	}
	function _getActiveBindings(avoidConstraints, context, parentRequest, target) {
	    var bindings = getBindings(context.container, target.serviceIdentifier);
	    var activeBindings = [];
	    if (avoidConstraints === false) {
	        activeBindings = bindings.filter(function (binding) {
	            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
	            return binding.constraint(request);
	        });
	    }
	    else {
	        activeBindings = bindings;
	    }
	    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
	    return activeBindings;
	}
	function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
	    switch (bindings.length) {
	        case binding_count_1.BindingCount.NoBindingsAvailable:
	            if (target.isOptional() === true) {
	                return bindings;
	            }
	            else {
	                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
	                var msg = ERROR_MSGS.NOT_REGISTERED;
	                msg += serialization_1.listMetadataForTarget(serviceIdentifierString, target);
	                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
	                throw new Error(msg);
	            }
	        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
	            if (target.isArray() === false) {
	                return bindings;
	            }
	        case binding_count_1.BindingCount.MultipleBindingsAvailable:
	        default:
	            if (target.isArray() === false) {
	                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier), msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
	                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
	                throw new Error(msg);
	            }
	            else {
	                return bindings;
	            }
	    }
	}
	function _createSubRequests(avoidConstraints, serviceIdentifier, context, parentRequest, target) {
	    try {
	        var activeBindings = void 0;
	        var childRequest_1;
	        if (parentRequest === null) {
	            activeBindings = _getActiveBindings(avoidConstraints, context, null, target);
	            childRequest_1 = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
	            var plan_2 = new plan_1.Plan(context, childRequest_1);
	            context.addPlan(plan_2);
	        }
	        else {
	            activeBindings = _getActiveBindings(avoidConstraints, context, parentRequest, target);
	            childRequest_1 = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
	        }
	        activeBindings.forEach(function (binding) {
	            var subChildRequest = null;
	            if (target.isArray()) {
	                subChildRequest = childRequest_1.addChildRequest(binding.serviceIdentifier, binding, target);
	            }
	            else {
	                subChildRequest = childRequest_1;
	            }
	            if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
	                var dependencies = reflection_utils_1.getDependencies(binding.implementationType);
	                dependencies.forEach(function (dependency) {
	                    _createSubRequests(false, dependency.serviceIdentifier, context, subChildRequest, dependency);
	                });
	            }
	        });
	    }
	    catch (error) {
	        if (error instanceof RangeError && parentRequest !== null) {
	            serialization_1.circularDependencyToException(parentRequest.parentContext.plan.rootRequest);
	        }
	        else {
	            throw new Error(error.message);
	        }
	    }
	}
	function getBindings(container, serviceIdentifier) {
	    var bindings = [];
	    var bindingDictionary = getBindingDictionary(container);
	    if (bindingDictionary.hasKey(serviceIdentifier)) {
	        bindings = bindingDictionary.get(serviceIdentifier);
	    }
	    else if (container.parent !== null) {
	        bindings = getBindings(container.parent, serviceIdentifier);
	    }
	    return bindings;
	}
	function plan(container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
	    if (avoidConstraints === void 0) { avoidConstraints = false; }
	    var context = new context_1.Context(container);
	    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
	    _createSubRequests(avoidConstraints, serviceIdentifier, context, null, target);
	    return context;
	}
	exports.plan = plan;
	function createMockRequest(container, serviceIdentifier, key, value) {
	    var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
	    var context = new context_1.Context(container);
	    var request = new request_1.Request(serviceIdentifier, context, null, [], target);
	    return request;
	}
	exports.createMockRequest = createMockRequest;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var Plan = (function () {
	    function Plan(parentContext, rootRequest) {
	        this.parentContext = parentContext;
	        this.rootRequest = rootRequest;
	    }
	    return Plan;
	}());
	exports.Plan = Plan;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guid_1 = __webpack_require__(8);
	var Context = (function () {
	    function Context(container) {
	        this.guid = guid_1.guid();
	        this.container = container;
	    }
	    Context.prototype.addPlan = function (plan) {
	        this.plan = plan;
	    };
	    return Context;
	}());
	exports.Context = Context;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guid_1 = __webpack_require__(8);
	var Request = (function () {
	    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
	        this.guid = guid_1.guid();
	        this.serviceIdentifier = serviceIdentifier;
	        this.parentContext = parentContext;
	        this.parentRequest = parentRequest;
	        this.target = target;
	        this.childRequests = [];
	        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
	    }
	    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
	        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
	        this.childRequests.push(child);
	        return child;
	    };
	    return Request;
	}());
	exports.Request = Request;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var queryable_string_1 = __webpack_require__(19);
	var guid_1 = __webpack_require__(8);
	var METADATA_KEY = __webpack_require__(18);
	var Target = (function () {
	    function Target(type, name, serviceIdentifier, namedOrTagged) {
	        this.guid = guid_1.guid();
	        this.type = type;
	        this.serviceIdentifier = serviceIdentifier;
	        this.name = new queryable_string_1.QueryableString(name || "");
	        this.metadata = new Array();
	        var metadataItem = null;
	        if (typeof namedOrTagged === "string") {
	            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
	        }
	        else if (namedOrTagged instanceof metadata_1.Metadata) {
	            metadataItem = namedOrTagged;
	        }
	        if (metadataItem !== null) {
	            this.metadata.push(metadataItem);
	        }
	    }
	    Target.prototype.hasTag = function (key) {
	        for (var i = 0; i < this.metadata.length; i++) {
	            var m = this.metadata[i];
	            if (m.key === key) {
	                return true;
	            }
	        }
	        return false;
	    };
	    Target.prototype.isArray = function () {
	        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
	    };
	    Target.prototype.matchesArray = function (name) {
	        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
	    };
	    Target.prototype.isNamed = function () {
	        return this.hasTag(METADATA_KEY.NAMED_TAG);
	    };
	    Target.prototype.isTagged = function () {
	        return this.metadata.some(function (m) {
	            return (m.key !== METADATA_KEY.INJECT_TAG) &&
	                (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
	                (m.key !== METADATA_KEY.NAME_TAG) &&
	                (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
	                (m.key !== METADATA_KEY.NAMED_TAG);
	        });
	    };
	    Target.prototype.isOptional = function () {
	        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
	    };
	    Target.prototype.getNamedTag = function () {
	        if (this.isNamed()) {
	            return this.metadata.filter(function (m) { return m.key === METADATA_KEY.NAMED_TAG; })[0];
	        }
	        return null;
	    };
	    Target.prototype.getCustomTags = function () {
	        if (this.isTagged()) {
	            return this.metadata.filter(function (m) {
	                return (m.key !== METADATA_KEY.INJECT_TAG) &&
	                    (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
	                    (m.key !== METADATA_KEY.NAME_TAG) &&
	                    (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
	                    (m.key !== METADATA_KEY.NAMED_TAG);
	            });
	        }
	        return null;
	    };
	    Target.prototype.matchesNamedTag = function (name) {
	        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
	    };
	    Target.prototype.matchesTag = function (key) {
	        var _this = this;
	        return function (value) {
	            for (var i = 0; i < _this.metadata.length; i++) {
	                var m = _this.metadata[i];
	                if (m.key === key && m.value === value) {
	                    return true;
	                }
	            }
	            return false;
	        };
	    };
	    return Target;
	}());
	exports.Target = Target;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var METADATA_KEY = __webpack_require__(18);
	var Metadata = (function () {
	    function Metadata(key, value) {
	        this.key = key;
	        this.value = value;
	    }
	    Metadata.prototype.toString = function () {
	        if (this.key === METADATA_KEY.NAMED_TAG) {
	            return "named: " + this.value.toString() + " ";
	        }
	        else {
	            return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
	        }
	    };
	    return Metadata;
	}());
	exports.Metadata = Metadata;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	exports.NAMED_TAG = "named";
	exports.NAME_TAG = "name";
	exports.UNMANAGED_TAG = "unmanaged";
	exports.OPTIONAL_TAG = "optional";
	exports.INJECT_TAG = "inject";
	exports.MULTI_INJECT_TAG = "multi_inject";
	exports.TAGGED = "inversify:tagged";
	exports.TAGGED_PROP = "inversify:tagged_props";
	exports.PARAM_TYPES = "inversify:paramtypes";
	exports.DESIGN_PARAM_TYPES = "design:paramtypes";


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var QueryableString = (function () {
	    function QueryableString(str) {
	        this.str = str;
	    }
	    QueryableString.prototype.startsWith = function (searchString) {
	        return this.str.indexOf(searchString) === 0;
	    };
	    QueryableString.prototype.endsWith = function (searchString) {
	        var reverseString = "";
	        var reverseSearchString = searchString.split("").reverse().join("");
	        reverseString = this.str.split("").reverse().join("");
	        return this.startsWith.call({ str: reverseString }, reverseSearchString);
	    };
	    QueryableString.prototype.contains = function (searchString) {
	        return (this.str.indexOf(searchString) !== -1);
	    };
	    QueryableString.prototype.equals = function (compareString) {
	        return this.str === compareString;
	    };
	    QueryableString.prototype.value = function () {
	        return this.str;
	    };
	    return QueryableString;
	}());
	exports.QueryableString = QueryableString;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	var BindingCount = {
	    MultipleBindingsAvailable: 2,
	    NoBindingsAvailable: 0,
	    OnlyOneBindingAvailable: 1
	};
	exports.BindingCount = BindingCount;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var serialization_1 = __webpack_require__(22);
	var target_1 = __webpack_require__(16);
	var ERROR_MSGS = __webpack_require__(11);
	var METADATA_KEY = __webpack_require__(18);
	var literal_types_1 = __webpack_require__(9);
	function getDependencies(func) {
	    var constructorName = serialization_1.getFunctionName(func);
	    var targets = getTargets(func, false);
	    var baseClassDepencencyCount = getBaseClassDepencencyCount(func);
	    if (targets.length < baseClassDepencencyCount) {
	        var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_1 +
	            constructorName + ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_2;
	        throw new Error(error);
	    }
	    return targets;
	}
	exports.getDependencies = getDependencies;
	function getTargets(func, isBaseClass) {
	    var constructorName = serialization_1.getFunctionName(func);
	    var serviceIdentifiers = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, func);
	    if (serviceIdentifiers === undefined) {
	        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
	        throw new Error(msg);
	    }
	    var constructorArgsMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, func) || [];
	    var targets = (getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, func.length)).concat((getClassPropsAsTargets(func)));
	    return targets;
	}
	function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, constructorLength) {
	    var targets = [];
	    for (var i = 0; i < constructorLength; i++) {
	        var targetMetadata = constructorArgsMetadata[i.toString()] || [];
	        var metadata = formatTargetMetadata(targetMetadata);
	        var serviceIndentifier = serviceIdentifiers[i];
	        var hasInjectAnnotations = (metadata.inject || metadata.multiInject);
	        serviceIndentifier = (hasInjectAnnotations) ? (hasInjectAnnotations) : serviceIndentifier;
	        var isObject = serviceIndentifier === Object;
	        var isFunction = serviceIndentifier === Function;
	        var isUndefined = serviceIndentifier === undefined;
	        var isUnknownType = (isObject || isFunction || isUndefined);
	        if (isBaseClass === false && isUnknownType) {
	            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + i + " in class " + constructorName + ".";
	            throw new Error(msg);
	        }
	        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIndentifier);
	        target.metadata = targetMetadata;
	        targets.push(target);
	    }
	    return targets;
	}
	function getClassPropsAsTargets(func) {
	    var classPropsMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, func) || [];
	    var targets = [];
	    var keys = Object.keys(classPropsMetadata);
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var targetMetadata = classPropsMetadata[key];
	        var metadata = formatTargetMetadata(classPropsMetadata[key]);
	        var targetName = metadata.targetName || key;
	        var serviceIndentifier = (metadata.inject || metadata.multiInject);
	        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIndentifier);
	        target.metadata = targetMetadata;
	        targets.push(target);
	    }
	    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
	    if (baseConstructor !== Object) {
	        var baseTargets = getClassPropsAsTargets(baseConstructor);
	        targets = targets.concat(baseTargets);
	    }
	    return targets;
	}
	function getBaseClassDepencencyCount(func) {
	    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
	    if (baseConstructor !== Object) {
	        var targets = getTargets(baseConstructor, true);
	        var metadata = targets.map(function (t) {
	            return t.metadata.filter(function (m) {
	                return m.key === METADATA_KEY.UNMANAGED_TAG;
	            });
	        });
	        var unmanagedCount = [].concat.apply([], metadata).length;
	        var dependencyCount = targets.length - unmanagedCount;
	        if (dependencyCount > 0) {
	            return dependencyCount;
	        }
	        else {
	            return getBaseClassDepencencyCount(baseConstructor);
	        }
	    }
	    else {
	        return 0;
	    }
	}
	function formatTargetMetadata(targetMetadata) {
	    var targetMetadataMap = {};
	    targetMetadata.forEach(function (m) {
	        targetMetadataMap[m.key.toString()] = m.value;
	    });
	    return {
	        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
	        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
	        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
	        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
	    };
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ERROR_MSGS = __webpack_require__(11);
	function getServiceIdentifierAsString(serviceIdentifier) {
	    if (typeof serviceIdentifier === "function") {
	        var _serviceIdentifier = serviceIdentifier;
	        return _serviceIdentifier.name;
	    }
	    else if (typeof serviceIdentifier === "symbol") {
	        return serviceIdentifier.toString();
	    }
	    else {
	        var _serviceIdentifier = serviceIdentifier;
	        return _serviceIdentifier;
	    }
	}
	exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
	function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
	    var registeredBindingsList = "";
	    var registeredBindings = getBindings(container, serviceIdentifier);
	    if (registeredBindings.length !== 0) {
	        registeredBindingsList = "\nRegistered bindings:";
	        registeredBindings.forEach(function (binding) {
	            var name = "Object";
	            if (binding.implementationType !== null) {
	                name = getFunctionName(binding.implementationType);
	            }
	            registeredBindingsList = registeredBindingsList + "\n " + name;
	            if (binding.constraint.metaData) {
	                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
	            }
	        });
	    }
	    return registeredBindingsList;
	}
	exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
	function circularDependencyToException(request, previousServiceIdentifiers) {
	    if (previousServiceIdentifiers === void 0) { previousServiceIdentifiers = []; }
	    var parentServiceIdentifier = getServiceIdentifierAsString(request.serviceIdentifier);
	    previousServiceIdentifiers.push(parentServiceIdentifier);
	    request.childRequests.forEach(function (childRequest) {
	        var childServiceIdentifier = getServiceIdentifierAsString(childRequest.serviceIdentifier);
	        if (previousServiceIdentifiers.indexOf(childServiceIdentifier) === -1) {
	            if (childRequest.childRequests.length > 0) {
	                circularDependencyToException(childRequest, previousServiceIdentifiers);
	            }
	            else {
	                previousServiceIdentifiers.push(childServiceIdentifier);
	            }
	        }
	        else {
	            previousServiceIdentifiers.push(childServiceIdentifier);
	            var services = previousServiceIdentifiers.reduce(function (prev, curr) {
	                return (prev !== "") ? prev + " -> " + curr : "" + curr;
	            }, "");
	            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
	        }
	    });
	}
	exports.circularDependencyToException = circularDependencyToException;
	function listMetadataForTarget(serviceIdentifierString, target) {
	    if (target.isTagged() || target.isNamed()) {
	        var m_1 = "";
	        var namedTag = target.getNamedTag();
	        var otherTags = target.getCustomTags();
	        if (namedTag !== null) {
	            m_1 += namedTag.toString() + "\n";
	        }
	        if (otherTags !== null) {
	            otherTags.forEach(function (tag) {
	                m_1 += tag.toString() + "\n";
	            });
	        }
	        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
	    }
	    else {
	        return " " + serviceIdentifierString;
	    }
	}
	exports.listMetadataForTarget = listMetadataForTarget;
	function getFunctionName(v) {
	    if (v.name) {
	        return v.name;
	    }
	    else {
	        var name_1 = v.toString();
	        var match = name_1.match(/^function\s*([^\s(]+)/);
	        return match ? match[1] : "Anonymous function: " + name_1;
	    }
	}
	exports.getFunctionName = getFunctionName;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var literal_types_1 = __webpack_require__(9);
	var serialization_1 = __webpack_require__(22);
	var instantiation_1 = __webpack_require__(24);
	var ERROR_MSGS = __webpack_require__(11);
	function _resolveRequest(request) {
	    var bindings = request.bindings;
	    var childRequests = request.childRequests;
	    var targetIsAnAray = request.target && request.target.isArray();
	    var targetParentIsNotAnArray = !request.parentRequest ||
	        !request.parentRequest.target ||
	        !request.target ||
	        !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
	    if (targetIsAnAray && targetParentIsNotAnArray) {
	        return childRequests.map(function (childRequest) {
	            return _resolveRequest(childRequest);
	        });
	    }
	    else {
	        var result = null;
	        if (request.target.isOptional() === true && bindings.length === 0) {
	            return undefined;
	        }
	        var binding = bindings[0];
	        var isSingleton = binding.scope === literal_types_1.BindingScopeEnum.Singleton;
	        if (isSingleton && binding.activated === true) {
	            return binding.cache;
	        }
	        if (binding.type === literal_types_1.BindingTypeEnum.ConstantValue) {
	            result = binding.cache;
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.Function) {
	            result = binding.cache;
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.Constructor) {
	            result = binding.implementationType;
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.DynamicValue && binding.dynamicValue !== null) {
	            result = binding.dynamicValue(request.parentContext);
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.Factory && binding.factory !== null) {
	            result = binding.factory(request.parentContext);
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.Provider && binding.provider !== null) {
	            result = binding.provider(request.parentContext);
	        }
	        else if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
	            result = instantiation_1.resolveInstance(binding.implementationType, childRequests, _resolveRequest);
	        }
	        else {
	            var serviceIdentifier = serialization_1.getServiceIdentifierAsString(request.serviceIdentifier);
	            throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifier);
	        }
	        if (typeof binding.onActivation === "function") {
	            result = binding.onActivation(request.parentContext, result);
	        }
	        if (isSingleton) {
	            binding.cache = result;
	            binding.activated = true;
	        }
	        return result;
	    }
	}
	function resolve(context) {
	    return _resolveRequest(context.plan.rootRequest);
	}
	exports.resolve = resolve;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var literal_types_1 = __webpack_require__(9);
	function _injectProperties(instance, childRequests, resolveRequest) {
	    var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
	        return (childRequest.target !== null && childRequest.target.type === literal_types_1.TargetTypeEnum.ClassProperty);
	    });
	    var propertyInjections = propertyInjectionsRequests.map(function (childRequest) {
	        return resolveRequest(childRequest);
	    });
	    propertyInjectionsRequests.forEach(function (r, index) {
	        var propertyName = "";
	        propertyName = r.target.name.value();
	        var injection = propertyInjections[index];
	        instance[propertyName] = injection;
	    });
	    return instance;
	}
	function _createInstance(Func, injections) {
	    return new (Func.bind.apply(Func, [void 0].concat(injections)))();
	}
	function resolveInstance(constr, childRequests, resolveRequest) {
	    var result = null;
	    if (childRequests.length > 0) {
	        var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
	            return (childRequest.target !== null && childRequest.target.type === literal_types_1.TargetTypeEnum.ConstructorArgument);
	        });
	        var constructorInjections = constructorInjectionsRequests.map(function (childRequest) {
	            return resolveRequest(childRequest);
	        });
	        result = _createInstance(constr, constructorInjections);
	        result = _injectProperties(result, childRequests, resolveRequest);
	    }
	    else {
	        result = new constr();
	    }
	    return result;
	}
	exports.resolveInstance = resolveInstance;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_in_when_on_syntax_1 = __webpack_require__(26);
	var binding_when_on_syntax_1 = __webpack_require__(28);
	var literal_types_1 = __webpack_require__(9);
	var ERROR_MSGS = __webpack_require__(11);
	var BindingToSyntax = (function () {
	    function BindingToSyntax(binding) {
	        this._binding = binding;
	    }
	    BindingToSyntax.prototype.to = function (constructor) {
	        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
	        this._binding.implementationType = constructor;
	        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toSelf = function () {
	        if (typeof this._binding.serviceIdentifier !== "function") {
	            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
	        }
	        var self = this._binding.serviceIdentifier;
	        return this.to(self);
	    };
	    BindingToSyntax.prototype.toConstantValue = function (value) {
	        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
	        this._binding.cache = value;
	        this._binding.dynamicValue = null;
	        this._binding.implementationType = null;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toDynamicValue = function (func) {
	        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
	        this._binding.cache = null;
	        this._binding.dynamicValue = func;
	        this._binding.implementationType = null;
	        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toConstructor = function (constructor) {
	        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
	        this._binding.implementationType = constructor;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toFactory = function (factory) {
	        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
	        this._binding.factory = factory;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toFunction = function (func) {
	        if (typeof func !== "function") {
	            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
	        }
	        ;
	        var bindingWhenOnSyntax = this.toConstantValue(func);
	        this._binding.type = literal_types_1.BindingTypeEnum.Function;
	        return bindingWhenOnSyntax;
	    };
	    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
	        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
	        this._binding.factory = function (context) {
	            return function () {
	                return context.container.get(serviceIdentifier);
	            };
	        };
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    BindingToSyntax.prototype.toProvider = function (provider) {
	        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
	        this._binding.provider = provider;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    return BindingToSyntax;
	}());
	exports.BindingToSyntax = BindingToSyntax;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_in_syntax_1 = __webpack_require__(27);
	var binding_when_syntax_1 = __webpack_require__(29);
	var binding_on_syntax_1 = __webpack_require__(30);
	var BindingInWhenOnSyntax = (function () {
	    function BindingInWhenOnSyntax(binding) {
	        this._binding = binding;
	        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
	        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
	        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
	    }
	    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
	        return this._bindingInSyntax.inSingletonScope();
	    };
	    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
	        return this._bindingInSyntax.inTransientScope();
	    };
	    BindingInWhenOnSyntax.prototype.when = function (constraint) {
	        return this._bindingWhenSyntax.when(constraint);
	    };
	    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
	        return this._bindingWhenSyntax.whenTargetNamed(name);
	    };
	    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
	        return this._bindingWhenSyntax.whenTargetIsDefault();
	    };
	    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
	    };
	    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
	        return this._bindingWhenSyntax.whenInjectedInto(parent);
	    };
	    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
	        return this._bindingWhenSyntax.whenParentNamed(name);
	    };
	    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenParentTagged(tag, value);
	    };
	    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
	        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
	    };
	    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
	        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
	    };
	    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
	        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
	    };
	    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
	    };
	    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
	        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
	    };
	    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
	    };
	    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
	        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
	    };
	    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
	        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
	    };
	    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
	        return this._bindingOnSyntax.onActivation(handler);
	    };
	    return BindingInWhenOnSyntax;
	}());
	exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var literal_types_1 = __webpack_require__(9);
	var binding_when_on_syntax_1 = __webpack_require__(28);
	var BindingInSyntax = (function () {
	    function BindingInSyntax(binding) {
	        this._binding = binding;
	    }
	    BindingInSyntax.prototype.inSingletonScope = function () {
	        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    BindingInSyntax.prototype.inTransientScope = function () {
	        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
	        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
	    };
	    return BindingInSyntax;
	}());
	exports.BindingInSyntax = BindingInSyntax;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_when_syntax_1 = __webpack_require__(29);
	var binding_on_syntax_1 = __webpack_require__(30);
	var BindingWhenOnSyntax = (function () {
	    function BindingWhenOnSyntax(binding) {
	        this._binding = binding;
	        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
	        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    }
	    BindingWhenOnSyntax.prototype.when = function (constraint) {
	        return this._bindingWhenSyntax.when(constraint);
	    };
	    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
	        return this._bindingWhenSyntax.whenTargetNamed(name);
	    };
	    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
	        return this._bindingWhenSyntax.whenTargetIsDefault();
	    };
	    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
	    };
	    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
	        return this._bindingWhenSyntax.whenInjectedInto(parent);
	    };
	    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
	        return this._bindingWhenSyntax.whenParentNamed(name);
	    };
	    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenParentTagged(tag, value);
	    };
	    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
	        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
	    };
	    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
	        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
	    };
	    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
	        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
	    };
	    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
	    };
	    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
	        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
	    };
	    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
	        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
	    };
	    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
	        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
	    };
	    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
	        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
	    };
	    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
	        return this._bindingOnSyntax.onActivation(handler);
	    };
	    return BindingWhenOnSyntax;
	}());
	exports.BindingWhenOnSyntax = BindingWhenOnSyntax;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_on_syntax_1 = __webpack_require__(30);
	var constraint_helpers_1 = __webpack_require__(31);
	var BindingWhenSyntax = (function () {
	    function BindingWhenSyntax(binding) {
	        this._binding = binding;
	    }
	    BindingWhenSyntax.prototype.when = function (constraint) {
	        this._binding.constraint = constraint;
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
	        this._binding.constraint = constraint_helpers_1.namedConstraint(name);
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
	        this._binding.constraint = function (request) {
	            var targetIsDefault = (request.target !== null) &&
	                (request.target.isNamed() === false) &&
	                (request.target.isTagged() === false);
	            return targetIsDefault;
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
	        this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value);
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
	        this._binding.constraint = function (request) {
	            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
	        this._binding.constraint = function (request) {
	            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
	        this._binding.constraint = function (request) {
	            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
	        this._binding.constraint = function (request) {
	            return constraint_helpers_1.traverseAncerstors(request, constraint);
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
	        this._binding.constraint = function (request) {
	            return !constraint_helpers_1.traverseAncerstors(request, constraint);
	        };
	        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
	    };
	    return BindingWhenSyntax;
	}());
	exports.BindingWhenSyntax = BindingWhenSyntax;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var binding_when_syntax_1 = __webpack_require__(29);
	var BindingOnSyntax = (function () {
	    function BindingOnSyntax(binding) {
	        this._binding = binding;
	    }
	    BindingOnSyntax.prototype.onActivation = function (handler) {
	        this._binding.onActivation = handler;
	        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
	    };
	    return BindingOnSyntax;
	}());
	exports.BindingOnSyntax = BindingOnSyntax;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var METADATA_KEY = __webpack_require__(18);
	var traverseAncerstors = function (request, constraint) {
	    var parent = request.parentRequest;
	    if (parent !== null) {
	        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
	    }
	    else {
	        return false;
	    }
	};
	exports.traverseAncerstors = traverseAncerstors;
	var taggedConstraint = function (key) { return function (value) {
	    var constraint = function (request) {
	        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
	    };
	    constraint.metaData = new metadata_1.Metadata(key, value);
	    return constraint;
	}; };
	exports.taggedConstraint = taggedConstraint;
	var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
	exports.namedConstraint = namedConstraint;
	var typeConstraint = function (type) { return function (request) {
	    var binding = null;
	    if (request !== null) {
	        binding = request.bindings[0];
	        if (typeof type === "string") {
	            var serviceIdentifier = binding.serviceIdentifier;
	            return serviceIdentifier === type;
	        }
	        else {
	            var constructor = request.bindings[0].implementationType;
	            return type === constructor;
	        }
	    }
	    return false;
	}; };
	exports.typeConstraint = typeConstraint;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var ContainerSnapshot = (function () {
	    function ContainerSnapshot() {
	    }
	    ContainerSnapshot.of = function (bindings, middleware) {
	        var snapshot = new ContainerSnapshot();
	        snapshot.bindings = bindings;
	        snapshot.middleware = middleware;
	        return snapshot;
	    };
	    return ContainerSnapshot;
	}());
	exports.ContainerSnapshot = ContainerSnapshot;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guid_1 = __webpack_require__(8);
	var ContainerModule = (function () {
	    function ContainerModule(registry) {
	        this.guid = guid_1.guid();
	        this.registry = registry;
	    }
	    return ContainerModule;
	}());
	exports.ContainerModule = ContainerModule;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var METADATA_KEY = __webpack_require__(18);
	var ERRORS_MSGS = __webpack_require__(11);
	function injectable() {
	    return function (target) {
	        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target) === true) {
	            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
	        }
	        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
	        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
	        return target;
	    };
	}
	exports.injectable = injectable;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	function tagged(metadataKey, metadataValue) {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
	        if (typeof index === "number") {
	            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	        }
	        else {
	            decorator_utils_1.tagProperty(target, targetKey, metadata);
	        }
	    };
	}
	exports.tagged = tagged;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var METADATA_KEY = __webpack_require__(18);
	var ERROR_MSGS = __webpack_require__(11);
	function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
	    var metadataKey = METADATA_KEY.TAGGED;
	    _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
	}
	exports.tagParameter = tagParameter;
	function tagProperty(annotationTarget, propertyName, metadata) {
	    var metadataKey = METADATA_KEY.TAGGED_PROP;
	    _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
	}
	exports.tagProperty = tagProperty;
	function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
	    var paramsOrPropertiesMetadata = {};
	    var isParameterDecorator = (typeof parameterIndex === "number");
	    var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
	    if (isParameterDecorator === true && propertyName !== undefined) {
	        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
	    }
	    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget) === true) {
	        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
	    }
	    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
	    if (Array.isArray(paramOrPropertyMetadata) !== true) {
	        paramOrPropertyMetadata = [];
	    }
	    else {
	        for (var i = 0; i < paramOrPropertyMetadata.length; i++) {
	            var m = paramOrPropertyMetadata[i];
	            if (m.key === metadata.key) {
	                throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key);
	            }
	        }
	    }
	    paramOrPropertyMetadata.push(metadata);
	    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
	    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
	}
	function _decorate(decorators, target) {
	    Reflect.decorate(decorators, target);
	}
	function _param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function decorate(decorator, target, parameterIndex) {
	    if (typeof parameterIndex === "number") {
	        _decorate([_param(parameterIndex, decorator)], target);
	    }
	    else {
	        _decorate([decorator], target);
	    }
	}
	exports.decorate = decorate;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function named(name) {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
	        if (typeof index === "number") {
	            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	        }
	        else {
	            decorator_utils_1.tagProperty(target, targetKey, metadata);
	        }
	    };
	}
	exports.named = named;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function inject(serviceIdentifier) {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
	        if (typeof index === "number") {
	            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	        }
	        else {
	            decorator_utils_1.tagProperty(target, targetKey, metadata);
	        }
	    };
	}
	exports.inject = inject;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function optional() {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true);
	        if (typeof index === "number") {
	            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	        }
	        else {
	            decorator_utils_1.tagProperty(target, targetKey, metadata);
	        }
	    };
	}
	exports.optional = optional;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function unmanaged() {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
	        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	    };
	}
	exports.unmanaged = unmanaged;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function multiInject(serviceIdentifier) {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
	        if (typeof index === "number") {
	            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	        }
	        else {
	            decorator_utils_1.tagProperty(target, targetKey, metadata);
	        }
	    };
	}
	exports.multiInject = multiInject;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(17);
	var decorator_utils_1 = __webpack_require__(36);
	var METADATA_KEY = __webpack_require__(18);
	function targetName(name) {
	    return function (target, targetKey, index) {
	        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
	        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
	    };
	}
	exports.targetName = targetName;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    var hasOwn = Object.prototype.hasOwnProperty;
	    // feature test for Object.create support
	    var supportsCreate = typeof Object.create === "function";
	    // feature test for __proto__ support
	    var supportsProto = { __proto__: [] } instanceof Array;
	    // feature test for Symbol support
	    var supportsSymbol = typeof Symbol === "function";
	    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
	    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
	    // create an object in dictionary mode (a.k.a. "slow" mode in v8)
	    var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
	        supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
	            function () { return MakeDictionary({}); };
	    var HashMap;
	    (function (HashMap) {
	        var downLevel = !supportsCreate && !supportsProto;
	        HashMap.has = downLevel
	            ? function (map, key) { return hasOwn.call(map, key); }
	            : function (map, key) { return key in map; };
	        HashMap.get = downLevel
	            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
	            : function (map, key) { return map[key]; };
	    })(HashMap || (HashMap = {}));
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var Metadata = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Example = Reflect.decorate(decoratorsArray, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(Example, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(Example.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsObject(target))
	                throw new TypeError();
	            if (!IsObject(targetDescriptor) && !IsUndefined(targetDescriptor) && !IsNull(targetDescriptor))
	                throw new TypeError();
	            if (IsNull(targetDescriptor))
	                targetDescriptor = undefined;
	            targetKey = ToPropertyKey(targetKey);
	            return DecorateProperty(decorators, target, targetKey, targetDescriptor);
	        }
	        else {
	            if (!IsArray(decorators))
	                throw new TypeError();
	            if (!IsConstructor(target))
	                throw new TypeError();
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class Example {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class Example {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target))
	                    throw new TypeError();
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target))
	                    throw new TypeError();
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, Example);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class Example {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", Example);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#deletemetadata-metadatakey-p-
	        if (!IsObject(target))
	            throw new TypeError();
	        if (!IsUndefined(targetKey))
	            targetKey = ToPropertyKey(targetKey);
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return false;
	        if (!metadataMap.delete(metadataKey))
	            return false;
	        if (metadataMap.size > 0)
	            return true;
	        var targetMetadata = Metadata.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0)
	            return true;
	        Metadata.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated) && !IsNull(decorated)) {
	                if (!IsConstructor(decorated))
	                    throw new TypeError();
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecorateProperty(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated) && !IsNull(decorated)) {
	                if (!IsObject(decorated))
	                    throw new TypeError();
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function GetOrCreateMetadataMap(O, P, Create) {
	        var targetMetadata = Metadata.get(O);
	        if (IsUndefined(targetMetadata)) {
	            if (!Create)
	                return undefined;
	            targetMetadata = new _Map();
	            Metadata.set(O, targetMetadata);
	        }
	        var metadataMap = targetMetadata.get(P);
	        if (IsUndefined(metadataMap)) {
	            if (!Create)
	                return undefined;
	            metadataMap = new _Map();
	            targetMetadata.set(P, metadataMap);
	        }
	        return metadataMap;
	    }
	    // Ordinary Object Internal Methods and Internal Slots
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinary-object-internal-methods-and-internal-slots
	    // OrdinaryHasMetadata(MetadataKey, O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return true;
	        var parent = OrdinaryGetPrototypeOf(O);
	        if (!IsNull(parent))
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        return false;
	    }
	    // OrdinaryHasOwnMetadata(MetadataKey, O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return false;
	        return ToBoolean(metadataMap.has(MetadataKey));
	    }
	    // OrdinaryGetMetadata(MetadataKey, O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn)
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        var parent = OrdinaryGetPrototypeOf(O);
	        if (!IsNull(parent))
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        return undefined;
	    }
	    // OrdinaryGetOwnMetadata(MetadataKey, O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (IsUndefined(metadataMap))
	            return undefined;
	        return metadataMap.get(MetadataKey);
	    }
	    // OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // OrdinaryMetadataKeys(O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = OrdinaryGetPrototypeOf(O);
	        if (parent === null)
	            return ownKeys;
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0)
	            return ownKeys;
	        if (ownKeys.length <= 0)
	            return parentKeys;
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
	            var key = ownKeys_1[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
	            var key = parentKeys_1[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // OrdinaryOwnMetadataKeys(O, P)
	    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        var keys = [];
	        if (IsUndefined(metadataMap))
	            return keys;
	        var keysObj = metadataMap.keys();
	        var iterator = GetIterator(keysObj);
	        while (true) {
	            var next = IteratorStep(iterator);
	            try {
	                if (!next)
	                    return keys;
	                var nextValue = IteratorValue(next);
	                keys.push(nextValue);
	            }
	            catch (e) {
	                try {
	                    if (next) {
	                        next = false;
	                        IteratorClose(iterator);
	                    }
	                }
	                finally {
	                    throw e;
	                }
	            }
	            finally {
	                if (next)
	                    IteratorClose(iterator);
	            }
	        }
	    }
	    // ECMAScript Specification
	    // https://tc39.github.io/ecma262/
	    // 6 ECMAScript Data Typ0es and Values
	    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
	    function Type(x) {
	        if (x === null)
	            return 1 /* Null */;
	        switch (typeof x) {
	            case "undefined": return 0 /* Undefined */;
	            case "boolean": return 2 /* Boolean */;
	            case "string": return 3 /* String */;
	            case "symbol": return 4 /* Symbol */;
	            case "number": return 5 /* Number */;
	            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
	            default: return 6 /* Object */;
	        }
	    }
	    // 6.1.1 The Undefined Type
	    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // 6.1.2 The Null Type
	    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
	    function IsNull(x) {
	        return x === null;
	    }
	    // 6.1.5 The Symbol Type
	    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // 6.1.7 The Object Type
	    // https://tc39.github.io/ecma262/#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // 7.1 Type Conversion
	    // https://tc39.github.io/ecma262/#sec-type-conversion
	    // 7.1.1 ToPrimitive(input [, PreferredType])
	    // https://tc39.github.io/ecma262/#sec-toprimitive
	    function ToPrimitive(input, PreferredType) {
	        switch (Type(input)) {
	            case 0 /* Undefined */: return input;
	            case 1 /* Null */: return input;
	            case 2 /* Boolean */: return input;
	            case 3 /* String */: return input;
	            case 4 /* Symbol */: return input;
	            case 5 /* Number */: return input;
	        }
	        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
	        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
	        if (exoticToPrim !== undefined) {
	            var result = exoticToPrim.call(input, hint);
	            if (IsObject(result))
	                throw new TypeError();
	            return result;
	        }
	        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
	    }
	    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
	    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
	    function OrdinaryToPrimitive(O, hint) {
	        if (hint === "string") {
	            var toString_1 = O.toString;
	            if (IsCallable(toString_1)) {
	                var result = toString_1.call(O);
	                if (!IsObject(result))
	                    return result;
	            }
	            var valueOf = O.valueOf;
	            if (IsCallable(valueOf)) {
	                var result = valueOf.call(O);
	                if (!IsObject(result))
	                    return result;
	            }
	        }
	        else {
	            var valueOf = O.valueOf;
	            if (IsCallable(valueOf)) {
	                var result = valueOf.call(O);
	                if (!IsObject(result))
	                    return result;
	            }
	            var toString_2 = O.toString;
	            if (IsCallable(toString_2)) {
	                var result = toString_2.call(O);
	                if (!IsObject(result))
	                    return result;
	            }
	        }
	        throw new TypeError();
	    }
	    // 7.1.2 ToBoolean(argument)
	    // https://tc39.github.io/ecma262/2016/#sec-toboolean
	    function ToBoolean(argument) {
	        return !!argument;
	    }
	    // 7.1.12 ToString(argument)
	    // https://tc39.github.io/ecma262/#sec-tostring
	    function ToString(argument) {
	        return "" + argument;
	    }
	    // 7.1.14 ToPropertyKey(argument)
	    // https://tc39.github.io/ecma262/#sec-topropertykey
	    function ToPropertyKey(argument) {
	        var key = ToPrimitive(argument, 3 /* String */);
	        if (IsSymbol(key))
	            return key;
	        return ToString(key);
	    }
	    // 7.2 Testing and Comparison Operations
	    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
	    // 7.2.2 IsArray(argument)
	    // https://tc39.github.io/ecma262/#sec-isarray
	    function IsArray(argument) {
	        return Array.isArray
	            ? Array.isArray(argument)
	            : argument instanceof Object
	                ? argument instanceof Array
	                : Object.prototype.toString.call(argument) === "[object Array]";
	    }
	    // 7.2.3 IsCallable(argument)
	    // https://tc39.github.io/ecma262/#sec-iscallable
	    function IsCallable(argument) {
	        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
	        return typeof argument === "function";
	    }
	    // 7.2.4 IsConstructor(argument)
	    // https://tc39.github.io/ecma262/#sec-isconstructor
	    function IsConstructor(argument) {
	        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
	        return typeof argument === "function";
	    }
	    // 7.3 Operations on Objects
	    // https://tc39.github.io/ecma262/#sec-operations-on-objects
	    // 7.3.9 GetMethod(V, P)
	    // https://tc39.github.io/ecma262/#sec-getmethod
	    function GetMethod(V, P) {
	        var func = V[P];
	        if (func === undefined || func === null)
	            return undefined;
	        if (!IsCallable(func))
	            throw new TypeError();
	        return func;
	    }
	    // 7.4 Operations on Iterator Objects
	    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
	    function GetIterator(obj) {
	        var method = GetMethod(obj, iteratorSymbol);
	        if (!IsCallable(method))
	            throw new TypeError(); // from Call
	        var iterator = method.call(obj);
	        if (!IsObject(iterator))
	            throw new TypeError();
	        return iterator;
	    }
	    // 7.4.4 IteratorValue(iterResult)
	    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
	    function IteratorValue(iterResult) {
	        return iterResult.value;
	    }
	    // 7.4.5 IteratorStep(iterator)
	    // https://tc39.github.io/ecma262/#sec-iteratorstep
	    function IteratorStep(iterator) {
	        var result = iterator.next();
	        return result.done ? false : result;
	    }
	    // 7.4.6 IteratorClose(iterator, completion)
	    // https://tc39.github.io/ecma262/#sec-iteratorclose
	    function IteratorClose(iterator) {
	        var f = iterator["return"];
	        if (f)
	            f.call(iterator);
	    }
	    // 9.1 Ordinary Object Internal Methods and Internal Slots
	    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
	    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
	    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
	    function OrdinaryGetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype)
	            return proto;
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype)
	            return proto;
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype)
	            return proto;
	        // If the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function")
	            return proto;
	        // If we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O)
	            return proto;
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        var arraySentinel = [];
	        var MapIterator = (function () {
	            function MapIterator(keys, values, selector) {
	                this._index = 0;
	                this._keys = keys;
	                this._values = values;
	                this._selector = selector;
	            }
	            MapIterator.prototype["@@iterator"] = function () { return this; };
	            MapIterator.prototype[iteratorSymbol] = function () { return this; };
	            MapIterator.prototype.next = function () {
	                var index = this._index;
	                if (index >= 0 && index < this._keys.length) {
	                    var result = this._selector(this._keys[index], this._values[index]);
	                    if (index + 1 >= this._keys.length) {
	                        this._index = -1;
	                        this._keys = arraySentinel;
	                        this._values = arraySentinel;
	                    }
	                    else {
	                        this._index++;
	                    }
	                    return { value: result, done: false };
	                }
	                return { value: undefined, done: true };
	            };
	            MapIterator.prototype.throw = function (error) {
	                if (this._index >= 0) {
	                    this._index = -1;
	                    this._keys = arraySentinel;
	                    this._values = arraySentinel;
	                }
	                throw error;
	            };
	            MapIterator.prototype.return = function (value) {
	                if (this._index >= 0) {
	                    this._index = -1;
	                    this._keys = arraySentinel;
	                    this._values = arraySentinel;
	                }
	                return { value: value, done: true };
	            };
	            return MapIterator;
	        }());
	        return (function () {
	            function Map() {
	                this._keys = [];
	                this._values = [];
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            }
	            Object.defineProperty(Map.prototype, "size", {
	                get: function () { return this._keys.length; },
	                enumerable: true,
	                configurable: true
	            });
	            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
	            Map.prototype.get = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                return index >= 0 ? this._values[index] : undefined;
	            };
	            Map.prototype.set = function (key, value) {
	                var index = this._find(key, /*insert*/ true);
	                this._values[index] = value;
	                return this;
	            };
	            Map.prototype.delete = function (key) {
	                var index = this._find(key, /*insert*/ false);
	                if (index >= 0) {
	                    var size = this._keys.length;
	                    for (var i = index + 1; i < size; i++) {
	                        this._keys[i - 1] = this._keys[i];
	                        this._values[i - 1] = this._values[i];
	                    }
	                    this._keys.length--;
	                    this._values.length--;
	                    if (key === this._cacheKey) {
	                        this._cacheKey = cacheSentinel;
	                        this._cacheIndex = -2;
	                    }
	                    return true;
	                }
	                return false;
	            };
	            Map.prototype.clear = function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cacheKey = cacheSentinel;
	                this._cacheIndex = -2;
	            };
	            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
	            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
	            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
	            Map.prototype["@@iterator"] = function () { return this.entries(); };
	            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
	            Map.prototype._find = function (key, insert) {
	                if (this._cacheKey === key)
	                    return this._cacheIndex;
	                var index = this._keys.indexOf(key);
	                if (index < 0 && insert) {
	                    index = this._keys.length;
	                    this._keys.push(key);
	                    this._values.push(undefined);
	                }
	                return this._cacheKey = key, this._cacheIndex = index;
	            };
	            return Map;
	        }());
	        function getKey(key, _) {
	            return key;
	        }
	        function getValue(_, value) {
	            return value;
	        }
	        function getEntry(key, value) {
	            return [key, value];
	        }
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        return (function () {
	            function Set() {
	                this._map = new _Map();
	            }
	            Object.defineProperty(Set.prototype, "size", {
	                get: function () { return this._map.size; },
	                enumerable: true,
	                configurable: true
	            });
	            Set.prototype.has = function (value) { return this._map.has(value); };
	            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
	            Set.prototype.delete = function (value) { return this._map.delete(value); };
	            Set.prototype.clear = function () { this._map.clear(); };
	            Set.prototype.keys = function () { return this._map.keys(); };
	            Set.prototype.values = function () { return this._map.values(); };
	            Set.prototype.entries = function () { return this._map.entries(); };
	            Set.prototype["@@iterator"] = function () { return this.keys(); };
	            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
	            return Set;
	        }());
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var keys = createDictionary();
	        var rootKey = CreateUniqueKey();
	        return (function () {
	            function WeakMap() {
	                this._key = CreateUniqueKey();
	            }
	            WeakMap.prototype.has = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.has(table, this._key) : false;
	            };
	            WeakMap.prototype.get = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? HashMap.get(table, this._key) : undefined;
	            };
	            WeakMap.prototype.set = function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            };
	            WeakMap.prototype.delete = function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                return table !== undefined ? delete table[this._key] : false;
	            };
	            WeakMap.prototype.clear = function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            };
	            return WeakMap;
	        }());
	        function CreateUniqueKey() {
	            var key;
	            do
	                key = "@@WeakMap@@" + CreateUUID();
	            while (HashMap.has(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create)
	                    return undefined;
	                Object.defineProperty(target, rootKey, { value: createDictionary() });
	            }
	            return target[rootKey];
	        }
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i)
	                buffer[i] = Math.random() * 0xff | 0;
	            return buffer;
	        }
	        function GenRandomBytes(size) {
	            if (typeof Uint8Array === "function") {
	                if (typeof crypto !== "undefined")
	                    return crypto.getRandomValues(new Uint8Array(size));
	                if (typeof msCrypto !== "undefined")
	                    return msCrypto.getRandomValues(new Uint8Array(size));
	                return FillRandomBytes(new Uint8Array(size), size);
	            }
	            return FillRandomBytes(new Array(size), size);
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8)
	                    result += "-";
	                if (byte < 16)
	                    result += "0";
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	    }
	    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
	    function MakeDictionary(obj) {
	        obj.__ = undefined;
	        delete obj.__;
	        return obj;
	    }
	    // patch global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    if (hasOwn.call(Reflect, p)) {
	                        __global.Reflect[p] = Reflect[p];
	                    }
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof global !== "undefined" ? global :
	        typeof self !== "undefined" ? self :
	            Function("return this;")());
	})(Reflect || (Reflect = {}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var inversify_1 = __webpack_require__(5);
	var Application_1 = __webpack_require__(4);
	var constants_1 = __webpack_require__(45);
	var User_1 = __webpack_require__(47);
	var container = new inversify_1.Container();
	container.bind(constants_1.IDENTIFIER.APPLICATION).to(Application_1.Application);
	container.bind(constants_1.IDENTIFIER.USERAPI).to(User_1.User);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = container;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Identifiers_1 = __webpack_require__(46);
	exports.IDENTIFIER = Identifiers_1.default;


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	var IDENTIFIER = {
	    APPLICATION: Symbol('Application'),
	    USERAPI: Symbol('UserApi')
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = IDENTIFIER;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var inversify_1 = __webpack_require__(5);
	var BaseApi_1 = __webpack_require__(48);
	var constants_1 = __webpack_require__(45);
	var User = (function (_super) {
	    __extends(User, _super);
	    function User(app) {
	        return _super.call(this, app) || this;
	    }
	    return User;
	}(BaseApi_1.default));
	User = __decorate([
	    inversify_1.injectable(),
	    __param(0, inversify_1.inject(constants_1.IDENTIFIER.APPLICATION)),
	    __metadata("design:paramtypes", [Object])
	], User);
	exports.User = User;


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var BaseApi = (function () {
	    function BaseApi(app) {
	        this.app = app;
	    }
	    return BaseApi;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BaseApi;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	// 'HelloProps' describes the shape of props.
	// state is never set so we use the 'undefined' type.
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        return _super.apply(this, arguments) || this;
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("h1", null,
	            "Hello from ",
	            this.props.compiler,
	            " and ",
	            this.props.framework,
	            "!");
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ }
/******/ ]);
//# sourceMappingURL=de-fe.js.map