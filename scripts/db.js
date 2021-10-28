"use strict";
(self["webpackChunksimvsm"] = self["webpackChunksimvsm"] || []).push([[510],{

/***/ 41267:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppSetting = void 0;
var typeorm_1 = __webpack_require__(95119);
var AppSetting = /** @class */ (function () {
    function AppSetting() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
        __metadata("design:type", Number)
    ], AppSetting.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "Property" }),
        __metadata("design:type", String)
    ], AppSetting.prototype, "property", void 0);
    __decorate([
        typeorm_1.Column({ name: "Value" }),
        __metadata("design:type", String)
    ], AppSetting.prototype, "value", void 0);
    AppSetting = __decorate([
        typeorm_1.Entity("AppSetting")
    ], AppSetting);
    return AppSetting;
}());
exports.AppSetting = AppSetting;


/***/ }),

/***/ 27125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = void 0;
var typeorm_1 = __webpack_require__(95119);
var Alternative_1 = __webpack_require__(12403);
var ProjectSettings_1 = __webpack_require__(64211);
var Uuid_1 = __webpack_require__(76863);
var Version_1 = __webpack_require__(47743);
var ShiftCalendar_1 = __webpack_require__(83257);
var User_1 = __webpack_require__(31402);
/**
 * Entity for a project. A project is a working set including settings and multiple alternatives of a model.
 */
var Project = /** @class */ (function () {
    function Project() {
        this.settings = new ProjectSettings_1.ProjectSettings();
        this.baseVersion = Version_1.Version.base;
        this.mainVersion = Version_1.Version.main;
        this.customVersion = Version_1.Version.custom;
    }
    Project.prototype.setUuid = function () {
        if (!this.uuid) {
            this.uuid = Uuid_1.Uuid.create();
        }
    };
    Object.defineProperty(Project.prototype, "resultView", {
        /** @returns A copy of the result view */
        get: function () {
            return this.resultViewJson ? JSON.parse(this.resultViewJson) : null;
        },
        set: function (resultView) {
            this.resultViewJson = resultView ? JSON.stringify(resultView) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "baseVersion", {
        /** @returns The base version (of the simUI framework) this project is compatible with */
        get: function () {
            return new Version_1.Version(this.baseVersionString);
        },
        /** Sets the base version (of the simUI framework) this project is compatible with */
        set: function (version) {
            this.baseVersionString = version.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "mainVersion", {
        /** @returns The main version this project is compatible with */
        get: function () {
            return this.mainVersionString ? new Version_1.Version(this.mainVersionString) : null;
        },
        /** Sets the main version this project is compatible with */
        set: function (version) {
            this.mainVersionString = version ? version.toString() : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "customVersion", {
        /** @returns The custom version this project is compatible with */
        get: function () {
            return this.customVersionString ? new Version_1.Version(this.customVersionString) : null;
        },
        /** Sets the custom version this project is compatible with */
        set: function (version) {
            this.customVersionString = version ? version.toString() : null;
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.isNew = function () {
        return this.id == null;
    };
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
        __metadata("design:type", Number)
    ], Project.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "Uuid" }),
        __metadata("design:type", String)
    ], Project.prototype, "uuid", void 0);
    __decorate([
        typeorm_1.Column({ name: "Name" }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "Description" }),
        __metadata("design:type", String)
    ], Project.prototype, "description", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alternative_1.Alternative; }, function (alternative) { return alternative.project; }),
        __metadata("design:type", Array)
    ], Project.prototype, "alternatives", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return ProjectSettings_1.ProjectSettings; }, function (projectSettings) { return projectSettings.project; }, { eager: true }),
        __metadata("design:type", typeof (_a = typeof ProjectSettings_1.ProjectSettings !== "undefined" && ProjectSettings_1.ProjectSettings) === "function" ? _a : Object)
    ], Project.prototype, "settings", void 0);
    __decorate([
        typeorm_1.Column({ name: "CreatedWithVersion" }),
        __metadata("design:type", String)
    ], Project.prototype, "baseVersionString", void 0);
    __decorate([
        typeorm_1.Column({ name: "MainVersion", nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "mainVersionString", void 0);
    __decorate([
        typeorm_1.Column({ name: "CustomVersion", nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "customVersionString", void 0);
    __decorate([
        typeorm_1.Column({ name: "ResultView", nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "resultViewJson", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ShiftCalendar_1.ShiftCalendar; }, function (shiftCalendar) { return shiftCalendar.project; }),
        __metadata("design:type", Array)
    ], Project.prototype, "shiftCalendars", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "userId" }),
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.projects; }, { onDelete: "CASCADE", nullable: true, eager: true }),
        __metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
    ], Project.prototype, "user", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Project.prototype, "setUuid", null);
    Project = __decorate([
        typeorm_1.Entity("Project"),
        __metadata("design:paramtypes", [])
    ], Project);
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ 83257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShiftCalendar = void 0;
var typeorm_1 = __webpack_require__(95119);
var Project_1 = __webpack_require__(27125);
var ShiftCalendarEntry_1 = __webpack_require__(23364);
var ShiftCalendar = /** @class */ (function () {
    function ShiftCalendar() {
    }
    /**
     * Returns a copy of the shifts.
     */
    ShiftCalendar.prototype.copyShifts = function () {
        return this.shiftsJson ? JSON.parse(this.shiftsJson) : [];
    };
    /**
     * @param shifts The shifts to set
     */
    ShiftCalendar.prototype.setShifts = function (shifts) {
        this.shiftsJson = JSON.stringify(shifts ? shifts : []);
    };
    ShiftCalendar.prototype.isNew = function () {
        return this.id == null;
    };
    var _a;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
        __metadata("design:type", Number)
    ], ShiftCalendar.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "Name" }),
        __metadata("design:type", String)
    ], ShiftCalendar.prototype, "name", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "ProjectId" }),
        typeorm_1.ManyToOne(function (type) { return Project_1.Project; }, function (project) { return project.shiftCalendars; }, { onDelete: "CASCADE" }),
        __metadata("design:type", typeof (_a = typeof Project_1.Project !== "undefined" && Project_1.Project) === "function" ? _a : Object)
    ], ShiftCalendar.prototype, "project", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ShiftCalendarEntry_1.ShiftCalendarEntry; }, function (entry) { return entry.shiftCalendar; }, { cascade: true }),
        __metadata("design:type", Array)
    ], ShiftCalendar.prototype, "entries", void 0);
    __decorate([
        typeorm_1.Column({ name: "Shifts" }),
        __metadata("design:type", String)
    ], ShiftCalendar.prototype, "shiftsJson", void 0);
    ShiftCalendar = __decorate([
        typeorm_1.Entity("ShiftCalendar")
    ], ShiftCalendar);
    return ShiftCalendar;
}());
exports.ShiftCalendar = ShiftCalendar;


/***/ }),

/***/ 23364:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShiftCalendarEntry = void 0;
var typeorm_1 = __webpack_require__(95119);
var DateTimeUtils_1 = __webpack_require__(23745);
var ShiftCalendar_1 = __webpack_require__(83257);
/**
 * @deprecated since 1.14.0
 */
var ShiftCalendarEntry = /** @class */ (function () {
    function ShiftCalendarEntry() {
    }
    Object.defineProperty(ShiftCalendarEntry.prototype, "startDate", {
        get: function () {
            return DateTimeUtils_1.DateTimeUtils.convertTicksToDate(this.startDateTicks);
        },
        set: function (startDate) {
            this.startDateTicks = DateTimeUtils_1.DateTimeUtils.convertDateToTicks(startDate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShiftCalendarEntry.prototype, "endDate", {
        get: function () {
            return DateTimeUtils_1.DateTimeUtils.convertTicksToDate(this.endDateTicks);
        },
        set: function (endDate) {
            this.endDateTicks = DateTimeUtils_1.DateTimeUtils.convertDateToTicks(endDate);
        },
        enumerable: false,
        configurable: true
    });
    var _a;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
        __metadata("design:type", Number)
    ], ShiftCalendarEntry.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "Type" }),
        __metadata("design:type", String)
    ], ShiftCalendarEntry.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "CustomName", nullable: true }),
        __metadata("design:type", String)
    ], ShiftCalendarEntry.prototype, "customName", void 0);
    __decorate([
        typeorm_1.Column({ name: "StartDate" }),
        __metadata("design:type", Number)
    ], ShiftCalendarEntry.prototype, "startDateTicks", void 0);
    __decorate([
        typeorm_1.Column({ name: "EndDate" }),
        __metadata("design:type", Number)
    ], ShiftCalendarEntry.prototype, "endDateTicks", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ShiftCalendar_1.ShiftCalendar; }, function (shiftCalendar) { return shiftCalendar.entries; }, { onDelete: "CASCADE" }),
        typeorm_1.JoinColumn({ name: "ShiftCalendarId" }),
        __metadata("design:type", typeof (_a = typeof ShiftCalendar_1.ShiftCalendar !== "undefined" && ShiftCalendar_1.ShiftCalendar) === "function" ? _a : Object)
    ], ShiftCalendarEntry.prototype, "shiftCalendar", void 0);
    ShiftCalendarEntry = __decorate([
        typeorm_1.Entity("ShiftCalendarEntry")
    ], ShiftCalendarEntry);
    return ShiftCalendarEntry;
}());
exports.ShiftCalendarEntry = ShiftCalendarEntry;


/***/ }),

/***/ 31402:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
/* eslint-disable @typescript-eslint/no-inferrable-types */
var typeorm_1 = __webpack_require__(95119);
var Project_1 = __webpack_require__(27125);
/**
 * The user entity.
 */
var User = /** @class */ (function () {
    function User() {
        this.passwordExpired = true;
    }
    var _a, _b;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid", { name: "Id" }),
        __metadata("design:type", String)
    ], User.prototype, "uuid", void 0);
    __decorate([
        typeorm_1.Column({ name: "SessionToken" }),
        __metadata("design:type", String)
    ], User.prototype, "sessionToken", void 0);
    __decorate([
        typeorm_1.Column({ name: "Name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "Password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ name: "LastLoginDate" }),
        __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
    ], User.prototype, "lastLogin", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Project_1.Project; }, function (project) { return project.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "projects", void 0);
    __decorate([
        typeorm_1.Column({ name: "PasswordExpired" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "passwordExpired", void 0);
    __decorate([
        typeorm_1.Column({ name: "SessionExpiryDate" }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], User.prototype, "sessionExpiryDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "LicenseType" }),
        __metadata("design:type", String)
    ], User.prototype, "licenseType", void 0);
    User = __decorate([
        typeorm_1.Entity("User")
    ], User);
    return User;
}());
exports.User = User;


/***/ }),

/***/ 50974:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitialTables1529582677992 = void 0;
var typeorm_1 = __webpack_require__(95119);
var InitialTables1529582677992 = /** @class */ (function () {
    function InitialTables1529582677992() {
    }
    InitialTables1529582677992.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: "AppSetting",
                            columns: [
                                {
                                    name: "Id",
                                    type: "integer",
                                    isPrimary: true,
                                    isGenerated: true,
                                    generationStrategy: "increment",
                                },
                                {
                                    name: "Property",
                                    type: "varchar",
                                },
                                {
                                    name: "Value",
                                    type: "varchar",
                                },
                            ],
                        }), true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "Project",
                                columns: [
                                    {
                                        name: "Id",
                                        type: "integer",
                                        isPrimary: true,
                                        isGenerated: true,
                                        generationStrategy: "increment",
                                    },
                                    {
                                        name: "Name",
                                        type: "varchar",
                                    },
                                    {
                                        name: "CreatedWithVersion",
                                        type: "varchar",
                                    },
                                    {
                                        name: "ResultView",
                                        type: "varchar",
                                        isNullable: true,
                                    },
                                ],
                            }), true)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "Alternative",
                                columns: [
                                    {
                                        name: "Id",
                                        type: "integer",
                                        isPrimary: true,
                                        isGenerated: true,
                                        generationStrategy: "increment",
                                    },
                                    {
                                        name: "Name",
                                        type: "varchar",
                                    },
                                    {
                                        name: "ModificationTime",
                                        type: "bigint",
                                    },
                                    {
                                        name: "SimulationRequestId",
                                        type: "integer",
                                        isNullable: true,
                                    },
                                    {
                                        name: "Model",
                                        type: "varchar",
                                    },
                                    {
                                        name: "ResultData",
                                        type: "varchar",
                                        isNullable: true,
                                    },
                                    {
                                        name: "ProjectId",
                                        type: "integer",
                                    },
                                ],
                                indices: [
                                    {
                                        name: "Alternative_ProjectId",
                                        columnNames: ["ProjectId"],
                                    },
                                ],
                            }), true)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "ShiftCalendar",
                                columns: [
                                    {
                                        name: "Id",
                                        type: "integer",
                                        isPrimary: true,
                                        isGenerated: true,
                                        generationStrategy: "increment",
                                    },
                                    {
                                        name: "Name",
                                        type: "varchar",
                                    },
                                    {
                                        name: "ProjectId",
                                        type: "integer",
                                    },
                                ],
                                indices: [
                                    {
                                        name: "ShiftCalendar_ProjectId",
                                        columnNames: ["ProjectId"],
                                    },
                                ],
                            }), true)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "ShiftCalendarEntry",
                                columns: [
                                    {
                                        name: "Id",
                                        type: "integer",
                                        isPrimary: true,
                                        isGenerated: true,
                                        generationStrategy: "increment",
                                    },
                                    {
                                        name: "Type",
                                        type: "varchar",
                                    },
                                    {
                                        name: "CustomName",
                                        type: "varchar",
                                        isNullable: true,
                                    },
                                    {
                                        name: "StartDate",
                                        type: "bigint",
                                    },
                                    {
                                        name: "EndDate",
                                        type: "bigint",
                                    },
                                    {
                                        name: "ShiftCalendarId",
                                        type: "integer",
                                    },
                                ],
                                indices: [
                                    {
                                        name: "ShiftCalendarEntry_ShiftCalendarId",
                                        columnNames: ["ShiftCalendarId"],
                                    },
                                ],
                            }), true)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "Product",
                                columns: [
                                    {
                                        name: "Id",
                                        type: "integer",
                                        isPrimary: true,
                                        isGenerated: true,
                                        generationStrategy: "increment",
                                    },
                                    {
                                        name: "Name",
                                        type: "varchar",
                                    },
                                    {
                                        name: "ProjectId",
                                        type: "integer",
                                    },
                                ],
                                indices: [
                                    {
                                        name: "Product_ProjectId",
                                        columnNames: ["ProjectId"],
                                    },
                                ],
                            }), true)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "ProjectSettings",
                                columns: [
                                    {
                                        name: "ProjectId",
                                        type: "integer",
                                        isPrimary: true,
                                    },
                                    {
                                        name: "SimulationStartDate",
                                        type: "varchar",
                                    },
                                    {
                                        name: "SimulationEndDate",
                                        type: "varchar",
                                    },
                                    {
                                        name: "SimulationWebServiceUrl",
                                        type: "varchar",
                                        isNullable: true,
                                    },
                                    {
                                        name: "ShiftCalendarReferenceDay",
                                        type: "integer",
                                    },
                                ],
                                indices: [
                                    {
                                        name: "ProjectSettings_ProjectId",
                                        columnNames: ["ProjectId"],
                                    },
                                ],
                            }), true)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InitialTables1529582677992.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], InitialTables1529582677992.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], InitialTables1529582677992.prototype, "down", null);
    return InitialTables1529582677992;
}());
exports.InitialTables1529582677992 = InitialTables1529582677992;


/***/ }),

/***/ 81214:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddForeignKeys1529588981853 = void 0;
var typeorm_1 = __webpack_require__(95119);
var AddForeignKeys1529588981853 = /** @class */ (function () {
    function AddForeignKeys1529588981853() {
    }
    AddForeignKeys1529588981853.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Recreating ID columns as typeORM does not recognize Autoincrement key of SQLite databases created with Xamarin-version of the app
                    // See https://github.com/typeorm/typeorm/issues/2582
                    return [4 /*yield*/, queryRunner.changeColumn("Project", "Id", new typeorm_1.TableColumn({
                            name: "Id",
                            type: "integer",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        }))];
                    case 1:
                        // Recreating ID columns as typeORM does not recognize Autoincrement key of SQLite databases created with Xamarin-version of the app
                        // See https://github.com/typeorm/typeorm/issues/2582
                        _a.sent();
                        return [4 /*yield*/, queryRunner.changeColumn("Alternative", "Id", new typeorm_1.TableColumn({
                                name: "Id",
                                type: "integer",
                                isPrimary: true,
                                isGenerated: true,
                                generationStrategy: "increment",
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.changeColumn("ShiftCalendar", "Id", new typeorm_1.TableColumn({
                                name: "Id",
                                type: "integer",
                                isPrimary: true,
                                isGenerated: true,
                                generationStrategy: "increment",
                            }))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.changeColumn("ShiftCalendarEntry", "Id", new typeorm_1.TableColumn({
                                name: "Id",
                                type: "integer",
                                isPrimary: true,
                                isGenerated: true,
                                generationStrategy: "increment",
                            }))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.changeColumn("Product", "Id", new typeorm_1.TableColumn({
                                name: "Id",
                                type: "integer",
                                isPrimary: true,
                                isGenerated: true,
                                generationStrategy: "increment",
                            }))];
                    case 5:
                        _a.sent();
                        // Add foreign keys
                        return [4 /*yield*/, queryRunner.createForeignKey("Alternative", new typeorm_1.TableForeignKey({
                                columnNames: ["ProjectId"],
                                referencedTableName: "Project",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 6:
                        // Add foreign keys
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("ShiftCalendar", new typeorm_1.TableForeignKey({
                                columnNames: ["ProjectId"],
                                referencedTableName: "Project",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("ShiftCalendarEntry", new typeorm_1.TableForeignKey({
                                columnNames: ["ShiftCalendarId"],
                                referencedTableName: "ShiftCalendar",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("Product", new typeorm_1.TableForeignKey({
                                columnNames: ["ProjectId"],
                                referencedTableName: "Project",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("ProjectSettings", new typeorm_1.TableForeignKey({
                                columnNames: ["ProjectId"],
                                referencedTableName: "Project",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddForeignKeys1529588981853.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], AddForeignKeys1529588981853.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], AddForeignKeys1529588981853.prototype, "down", null);
    return AddForeignKeys1529588981853;
}());
exports.AddForeignKeys1529588981853 = AddForeignKeys1529588981853;


/***/ }),

/***/ 4982:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_5_0AddSimulationRunTable1531748224253 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_5_0AddSimulationRunTable1531748224253 = /** @class */ (function () {
    function V1_5_0AddSimulationRunTable1531748224253() {
    }
    V1_5_0AddSimulationRunTable1531748224253.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: "SimulationRun",
                            columns: [
                                {
                                    name: "Id",
                                    type: "varchar",
                                    isPrimary: true,
                                    isGenerated: true,
                                    generationStrategy: "uuid",
                                },
                                {
                                    name: "State",
                                    type: "varchar",
                                },
                                {
                                    name: "SentDate",
                                    type: "datetime",
                                },
                                {
                                    name: "RequestId",
                                    type: "integer",
                                    isNullable: true,
                                },
                                {
                                    name: "ResultsReceivedDate",
                                    type: "datetime",
                                    isNullable: true,
                                },
                                {
                                    name: "SimulationFilesPath",
                                    type: "varchar",
                                    isNullable: true,
                                },
                                {
                                    name: "Details",
                                    type: "varchar",
                                    isNullable: true,
                                },
                                {
                                    name: "AlternativeId",
                                    type: "integer",
                                    isUnique: true,
                                },
                            ],
                            indices: [
                                {
                                    name: "SimulationRun_AlternativeId",
                                    columnNames: ["AlternativeId"],
                                },
                            ],
                        }), true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("SimulationRun", new typeorm_1.TableForeignKey({
                                columnNames: ["AlternativeId"],
                                referencedTableName: "Alternative",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn("Alternative", "SimulationRequestId")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_5_0AddSimulationRunTable1531748224253.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_5_0AddSimulationRunTable1531748224253.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_5_0AddSimulationRunTable1531748224253.prototype, "down", null);
    return V1_5_0AddSimulationRunTable1531748224253;
}());
exports.V1_5_0AddSimulationRunTable1531748224253 = V1_5_0AddSimulationRunTable1531748224253;


/***/ }),

/***/ 57920:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_5_0UpdateTables1532078169003 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_5_0UpdateTables1532078169003 = /** @class */ (function () {
    function V1_5_0UpdateTables1532078169003() {
    }
    V1_5_0UpdateTables1532078169003.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "SimulationWebServiceUrl")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn("Project", new typeorm_1.TableColumn({
                                name: "CustomVersion",
                                type: "varchar",
                                isNullable: true,
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_5_0UpdateTables1532078169003.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_5_0UpdateTables1532078169003.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_5_0UpdateTables1532078169003.prototype, "down", null);
    return V1_5_0UpdateTables1532078169003;
}());
exports.V1_5_0UpdateTables1532078169003 = V1_5_0UpdateTables1532078169003;


/***/ }),

/***/ 39564:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_6_0UpdateTables1533299056919 = void 0;
var typeorm_1 = __webpack_require__(95119);
var Uuid_1 = __webpack_require__(76863);
var V1_6_0UpdateTables1533299056919 = /** @class */ (function () {
    function V1_6_0UpdateTables1533299056919() {
    }
    V1_6_0UpdateTables1533299056919.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteExampleProject(queryRunner)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addProjectDescriptionColumn(queryRunner)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.addProjectUuidColumn(queryRunner)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.addUserTable(queryRunner)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_6_0UpdateTables1533299056919.prototype.deleteExampleProject = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, projectCount, shiftCalendarIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = queryRunner.manager.createQueryBuilder();
                        return [4 /*yield*/, queryBuilder
                                .select()
                                .from("Project", "p")
                                .where("Id = :id", { id: -40 })
                                .andWhere("Name = :name", { name: "Example Value Stream" })
                                .getCount()];
                    case 1:
                        projectCount = _a.sent();
                        if (!(projectCount > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, queryBuilder.delete().from("Project").where("Id = :id", { id: -40 }).execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("ProjectSettings").where("ProjectId = :id", { id: -40 }).execute()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("Alternative").where("ProjectId = :id", { id: -40 }).execute()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("Product").where("ProjectId = :id", { id: -40 }).execute()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder
                                .select("s.Id")
                                .from("ShiftCalendar", "s")
                                .where("s.ProjectId = :id", { id: -40 })
                                .getMany()];
                    case 6:
                        shiftCalendarIds = _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("ShiftCalendarEntry").whereInIds(shiftCalendarIds).execute()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("ShiftCalendar").where("ProjectId = :id", { id: -40 }).execute()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    V1_6_0UpdateTables1533299056919.prototype.addProjectDescriptionColumn = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("Project", new typeorm_1.TableColumn({
                            name: "Description",
                            type: "varchar",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_6_0UpdateTables1533299056919.prototype.addProjectUuidColumn = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var rows, rows_1, rows_1_1, row, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("Project", new typeorm_1.TableColumn({
                            name: "Uuid",
                            type: "string",
                            isNullable: true,
                            isGenerated: true,
                            generationStrategy: "uuid",
                        }))];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.manager.query("SELECT Id From Project WHERE Uuid IS NULL OR Uuid = '';")];
                    case 2:
                        rows = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        rows_1 = __values(rows), rows_1_1 = rows_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!rows_1_1.done) return [3 /*break*/, 7];
                        row = rows_1_1.value;
                        return [4 /*yield*/, queryRunner.manager.query("UPDATE Project SET Uuid = ? WHERE Id = ?;", [Uuid_1.Uuid.create(), row.Id])];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        rows_1_1 = rows_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: 
                    // Remove nullable
                    return [4 /*yield*/, queryRunner.changeColumn("Project", "Uuid", new typeorm_1.TableColumn({
                            name: "Uuid",
                            type: "string",
                            isGenerated: true,
                            generationStrategy: "uuid",
                        }))];
                    case 11:
                        // Remove nullable
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_6_0UpdateTables1533299056919.prototype.addUserTable = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: "User",
                            columns: [
                                {
                                    name: "Id",
                                    type: "varchar",
                                    isPrimary: true,
                                    isGenerated: true,
                                    generationStrategy: "uuid",
                                },
                                {
                                    name: "SessionToken",
                                    type: "string",
                                    isUnique: true,
                                },
                                {
                                    name: "Name",
                                    type: "varchar",
                                },
                                {
                                    name: "Password",
                                    type: "varchar",
                                },
                                {
                                    name: "LastLoginDate",
                                    type: "datetime",
                                },
                                {
                                    name: "PasswordExpired",
                                    type: "boolean",
                                },
                            ],
                            indices: [
                                {
                                    name: "User_Id",
                                    columnNames: ["Id"],
                                },
                            ],
                        }), true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn("Project", new typeorm_1.TableColumn({
                                name: "UserId",
                                type: "string",
                                isNullable: true,
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("Project", new typeorm_1.TableForeignKey({
                                columnNames: ["UserId"],
                                referencedTableName: "User",
                                referencedColumnNames: ["Id"],
                                onDelete: "CASCADE",
                            }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_6_0UpdateTables1533299056919.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_6_0UpdateTables1533299056919.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_6_0UpdateTables1533299056919.prototype, "down", null);
    return V1_6_0UpdateTables1533299056919;
}());
exports.V1_6_0UpdateTables1533299056919 = V1_6_0UpdateTables1533299056919;


/***/ }),

/***/ 92968:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_7_0UpdateTables1537456206682 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_7_0UpdateTables1537456206682 = /** @class */ (function () {
    function V1_7_0UpdateTables1537456206682() {
    }
    V1_7_0UpdateTables1537456206682.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addProjectSettingsColumns(queryRunner)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adjustAppSettingId(queryRunner)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_7_0UpdateTables1537456206682.prototype.addProjectSettingsColumns = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("ProjectSettings", new typeorm_1.TableColumn({
                            name: "InitialStatsOffsetInHours",
                            type: "integer",
                            default: 0,
                        }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn("ProjectSettings", new typeorm_1.TableColumn({
                                name: "LinkValidationEnabled",
                                type: "integer",
                                default: 1,
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_7_0UpdateTables1537456206682.prototype.adjustAppSettingId = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Recreating ID columns as typeORM does not recognize Autoincrement key of SQLite databases created with Xamarin-version of the app
                    // See https://github.com/typeorm/typeorm/issues/2582
                    return [4 /*yield*/, queryRunner.changeColumn("AppSetting", "Id", new typeorm_1.TableColumn({
                            name: "Id",
                            type: "integer",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        }))];
                    case 1:
                        // Recreating ID columns as typeORM does not recognize Autoincrement key of SQLite databases created with Xamarin-version of the app
                        // See https://github.com/typeorm/typeorm/issues/2582
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_7_0UpdateTables1537456206682.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_7_0UpdateTables1537456206682.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_7_0UpdateTables1537456206682.prototype, "down", null);
    return V1_7_0UpdateTables1537456206682;
}());
exports.V1_7_0UpdateTables1537456206682 = V1_7_0UpdateTables1537456206682;


/***/ }),

/***/ 35235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_8_0Update1541606434014 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_8_0Update1541606434014 = /** @class */ (function () {
    function V1_8_0Update1541606434014() {
    }
    V1_8_0Update1541606434014.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addSettingsJsonColumn(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_8_0Update1541606434014.prototype.addSettingsJsonColumn = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("ProjectSettings", new typeorm_1.TableColumn({
                            name: "SettingsJson",
                            type: "varchar",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_8_0Update1541606434014.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_8_0Update1541606434014.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_8_0Update1541606434014.prototype, "down", null);
    return V1_8_0Update1541606434014;
}());
exports.V1_8_0Update1541606434014 = V1_8_0Update1541606434014;


/***/ }),

/***/ 2913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_9_0Update1544540392457 = void 0;
var typeorm_1 = __webpack_require__(95119);
/**
 * Database migration for update to v1.9.0.
 */
var V1_9_0Update1544540392457 = /** @class */ (function () {
    function V1_9_0Update1544540392457() {
    }
    V1_9_0Update1544540392457.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteResultData(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_9_0Update1544540392457.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    V1_9_0Update1544540392457.prototype.deleteResultData = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = queryRunner.manager.createQueryBuilder();
                        return [4 /*yield*/, queryBuilder.update("Project").set({ resultViewJson: null }).execute()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.update("Alternative").set({ resultDataJson: null }).execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryBuilder.delete().from("SimulationRun").execute()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_9_0Update1544540392457.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_9_0Update1544540392457.prototype, "down", null);
    return V1_9_0Update1544540392457;
}());
exports.V1_9_0Update1544540392457 = V1_9_0Update1544540392457;


/***/ }),

/***/ 63473:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_13_3AddProductReferenceColumn1580311439408 = void 0;
var Uuid_1 = __webpack_require__(76863);
var ProductReferencesUpdate_1 = __webpack_require__(23186);
var gojs_1 = __importDefault(__webpack_require__(88006));
var typeorm_1 = __webpack_require__(95119);
var V1_13_3AddProductReferenceColumn1580311439408 = /** @class */ (function () {
    function V1_13_3AddProductReferenceColumn1580311439408() {
        this.productReferencesUpdate = new ProductReferencesUpdate_1.ProductReferencesUpdate();
    }
    V1_13_3AddProductReferenceColumn1580311439408.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            var hasReferenceIdColumn, rows, rows_1, rows_1_1, row, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, queryRunner.hasColumn("Product", "ReferenceId")];
                    case 1:
                        hasReferenceIdColumn = _b.sent();
                        if (!!hasReferenceIdColumn) return [3 /*break*/, 13];
                        return [4 /*yield*/, queryRunner.addColumn("Product", new typeorm_1.TableColumn({
                                name: "ReferenceId",
                                type: "varchar",
                                isNullable: true,
                            }))];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.manager.query("SELECT Id From Product WHERE ReferenceId IS NULL;")];
                    case 3:
                        rows = (_b.sent());
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 9, 10, 11]);
                        rows_1 = __values(rows), rows_1_1 = rows_1.next();
                        _b.label = 5;
                    case 5:
                        if (!!rows_1_1.done) return [3 /*break*/, 8];
                        row = rows_1_1.value;
                        return [4 /*yield*/, queryRunner.manager.query("UPDATE Product SET ReferenceId = ? WHERE Id = ?;", [
                                Uuid_1.Uuid.create(),
                                row.Id,
                            ])];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        rows_1_1 = rows_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: 
                    // Remove nullable
                    return [4 /*yield*/, queryRunner.changeColumn("Product", "ReferenceId", new typeorm_1.TableColumn({
                            name: "ReferenceId",
                            type: "varchar",
                        }))];
                    case 12:
                        // Remove nullable
                        _b.sent();
                        _b.label = 13;
                    case 13: return [4 /*yield*/, this.updateProjectData(queryRunner)];
                    case 14:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_13_3AddProductReferenceColumn1580311439408.prototype.updateProjectData = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, projects_1, projects_1_1, project, alternatives, products, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, queryRunner.manager.query("SELECT * FROM Project;")];
                    case 1:
                        projects = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 9, 10, 11]);
                        projects_1 = __values(projects), projects_1_1 = projects_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!projects_1_1.done) return [3 /*break*/, 8];
                        project = projects_1_1.value;
                        return [4 /*yield*/, this.getAlternatives(queryRunner, project)];
                    case 4:
                        alternatives = _b.sent();
                        return [4 /*yield*/, this.getProducts(queryRunner, project)];
                    case 5:
                        products = _b.sent();
                        return [4 /*yield*/, this.updateAlternativesModel(alternatives, products, queryRunner)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        projects_1_1 = projects_1.next();
                        return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (projects_1_1 && !projects_1_1.done && (_a = projects_1.return)) _a.call(projects_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    V1_13_3AddProductReferenceColumn1580311439408.prototype.getAlternatives = function (queryRunner, project) {
        return __awaiter(this, void 0, Promise, function () {
            var alternatives, alternatives_1, alternatives_1_1, alternative;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, queryRunner.manager.query("SELECT * FROM Alternative WHERE ProjectId = ?;", [
                            project.Id,
                        ])];
                    case 1:
                        alternatives = (_b.sent());
                        try {
                            for (alternatives_1 = __values(alternatives), alternatives_1_1 = alternatives_1.next(); !alternatives_1_1.done; alternatives_1_1 = alternatives_1.next()) {
                                alternative = alternatives_1_1.value;
                                alternative.model = gojs_1.default.Model.fromJson(alternative.Model);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (alternatives_1_1 && !alternatives_1_1.done && (_a = alternatives_1.return)) _a.call(alternatives_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/, alternatives];
                }
            });
        });
    };
    V1_13_3AddProductReferenceColumn1580311439408.prototype.getProducts = function (queryRunner, project) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.manager.query("SELECT * FROM Product WHERE ProjectId = ?;", [
                            project.Id,
                        ])];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    V1_13_3AddProductReferenceColumn1580311439408.prototype.updateAlternativesModel = function (alternatives, products, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var alternatives_2, alternatives_2_1, alternative, e_4_1;
            var e_4, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        alternatives_2 = __values(alternatives), alternatives_2_1 = alternatives_2.next();
                        _b.label = 1;
                    case 1:
                        if (!!alternatives_2_1.done) return [3 /*break*/, 4];
                        alternative = alternatives_2_1.value;
                        this.productReferencesUpdate.updateModel(alternative.model, products.map(function (p) {
                            return {
                                id: p.Id,
                                referenceId: p.ReferenceId,
                            };
                        }));
                        return [4 /*yield*/, queryRunner.manager.query("UPDATE Alternative SET Model = ? WHERE Id = ?;", [
                                JSON.stringify(JSON.parse(alternative.model.toJson())),
                                alternative.Id,
                            ])];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        alternatives_2_1 = alternatives_2.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (alternatives_2_1 && !alternatives_2_1.done && (_a = alternatives_2.return)) _a.call(alternatives_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    V1_13_3AddProductReferenceColumn1580311439408.prototype.down = function (_queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_13_3AddProductReferenceColumn1580311439408.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_13_3AddProductReferenceColumn1580311439408.prototype, "down", null);
    return V1_13_3AddProductReferenceColumn1580311439408;
}());
exports.V1_13_3AddProductReferenceColumn1580311439408 = V1_13_3AddProductReferenceColumn1580311439408;


/***/ }),

/***/ 81169:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_14_0AddProjectMainVersion1580311439409 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_14_0AddProjectMainVersion1580311439409 = /** @class */ (function () {
    function V1_14_0AddProjectMainVersion1580311439409() {
    }
    V1_14_0AddProjectMainVersion1580311439409.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addMainVersionColumnToProjectTable(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_14_0AddProjectMainVersion1580311439409.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    V1_14_0AddProjectMainVersion1580311439409.prototype.addMainVersionColumnToProjectTable = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var hasMainVersionColumn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.hasColumn("Project", "MainVersion")];
                    case 1:
                        hasMainVersionColumn = _a.sent();
                        if (!!hasMainVersionColumn) return [3 /*break*/, 3];
                        return [4 /*yield*/, queryRunner.addColumn("Project", new typeorm_1.TableColumn({
                                name: "MainVersion",
                                type: "varchar",
                                isNullable: true,
                            }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_14_0AddProjectMainVersion1580311439409.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_14_0AddProjectMainVersion1580311439409.prototype, "down", null);
    return V1_14_0AddProjectMainVersion1580311439409;
}());
exports.V1_14_0AddProjectMainVersion1580311439409 = V1_14_0AddProjectMainVersion1580311439409;


/***/ }),

/***/ 81386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_14_0AddShifts1580311439409 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_14_0AddShifts1580311439409 = /** @class */ (function () {
    function V1_14_0AddShifts1580311439409() {
    }
    V1_14_0AddShifts1580311439409.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addShiftCalendarField(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_14_0AddShifts1580311439409.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    V1_14_0AddShifts1580311439409.prototype.addShiftCalendarField = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("ShiftCalendar", new typeorm_1.TableColumn({
                            name: "Shifts",
                            type: "varchar",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_14_0AddShifts1580311439409.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_14_0AddShifts1580311439409.prototype, "down", null);
    return V1_14_0AddShifts1580311439409;
}());
exports.V1_14_0AddShifts1580311439409 = V1_14_0AddShifts1580311439409;


/***/ }),

/***/ 95337:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_18_0UpdateUserTable1597236872627 = void 0;
var typeorm_1 = __webpack_require__(95119);
// eslint-disable-next-line @typescript-eslint/naming-convention
var V1_18_0UpdateUserTable1597236872627 = /** @class */ (function () {
    function V1_18_0UpdateUserTable1597236872627() {
    }
    V1_18_0UpdateUserTable1597236872627.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addUserSessionExpiryDate(queryRunner)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.addUserLicenseType(queryRunner)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.makeSessionTokenColumnNullable(queryRunner)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_18_0UpdateUserTable1597236872627.prototype.down = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    V1_18_0UpdateUserTable1597236872627.prototype.addUserSessionExpiryDate = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("User", new typeorm_1.TableColumn({
                            name: "SessionExpiryDate",
                            type: "datetime",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_18_0UpdateUserTable1597236872627.prototype.addUserLicenseType = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("User", new typeorm_1.TableColumn({
                            name: "LicenseType",
                            type: "string",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_18_0UpdateUserTable1597236872627.prototype.makeSessionTokenColumnNullable = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.changeColumn("User", "SessionToken", new typeorm_1.TableColumn({
                            name: "SessionToken",
                            type: "string",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var _a, _b, _c;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_18_0UpdateUserTable1597236872627.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], V1_18_0UpdateUserTable1597236872627.prototype, "down", null);
    return V1_18_0UpdateUserTable1597236872627;
}());
exports.V1_18_0UpdateUserTable1597236872627 = V1_18_0UpdateUserTable1597236872627;


/***/ }),

/***/ 65282:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_18_0AddAlternativeSortIndexColumn1599800760733 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V1_18_0AddAlternativeSortIndexColumn1599800760733 = /** @class */ (function () {
    function V1_18_0AddAlternativeSortIndexColumn1599800760733() {
    }
    V1_18_0AddAlternativeSortIndexColumn1599800760733.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addSortIndexColumn(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_18_0AddAlternativeSortIndexColumn1599800760733.prototype.addSortIndexColumn = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("Alternative", new typeorm_1.TableColumn({
                            name: "SortIndex",
                            type: "integer",
                            isNullable: true,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_18_0AddAlternativeSortIndexColumn1599800760733.prototype.down = function (_queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_18_0AddAlternativeSortIndexColumn1599800760733.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_18_0AddAlternativeSortIndexColumn1599800760733.prototype, "down", null);
    return V1_18_0AddAlternativeSortIndexColumn1599800760733;
}());
exports.V1_18_0AddAlternativeSortIndexColumn1599800760733 = V1_18_0AddAlternativeSortIndexColumn1599800760733;


/***/ }),

/***/ 80015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsJsonUpdate = void 0;
var Logger_1 = __webpack_require__(87367);
var SettingsJsonUpdate = /** @class */ (function () {
    function SettingsJsonUpdate() {
    }
    SettingsJsonUpdate.prototype.moveSettingPropertiesIntoJsonColumn = function (settings) {
        var settingsJson = settings.settingsJson
            ? JSON.parse(settings.settingsJson)
            : undefined;
        if (settingsJson == null) {
            settingsJson = {
                modelling: null,
                simulation: null,
            };
            Logger_1.Logger.info("SettingsJson doesn't exist. Creating new.");
        }
        var simulationSettings = settingsJson.simulation;
        if (!simulationSettings) {
            simulationSettings = {};
            Logger_1.Logger.info("SimulationSettings in settingsJson doesn't exist. Creating new.");
        }
        simulationSettings.simulationStartDate = settings.SimulationStartDate;
        simulationSettings.simulationEndDate = settings.SimulationEndDate;
        simulationSettings.shiftCalendarReferenceDayNumber = settings.ShiftCalendarReferenceDay;
        simulationSettings.initialStatsOffsetInHours = settings.InitialStatsOffsetInHours;
        settingsJson.simulation = simulationSettings;
        var modellingSettings = settingsJson.modelling;
        if (!modellingSettings) {
            modellingSettings = {};
            Logger_1.Logger.info("ModellingSettings in settingsJson doesn't exist. Creating new.");
        }
        modellingSettings.linkValidationEnabled = settings.LinkValidationEnabled;
        settingsJson.modelling = modellingSettings;
        settings.settingsJson = JSON.stringify(settingsJson);
    };
    return SettingsJsonUpdate;
}());
exports.SettingsJsonUpdate = SettingsJsonUpdate;


/***/ }),

/***/ 72434:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_20_0UpdateProjectSettings1610387870520 = void 0;
var typeorm_1 = __webpack_require__(95119);
var _1610387870520_V1_20_0SettingsJsonUpdate_1 = __webpack_require__(80015);
var V1_20_0UpdateProjectSettings1610387870520 = /** @class */ (function () {
    function V1_20_0UpdateProjectSettings1610387870520() {
        this.projectSettingsUpdate = new _1610387870520_V1_20_0SettingsJsonUpdate_1.SettingsJsonUpdate();
    }
    V1_20_0UpdateProjectSettings1610387870520.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            var queryBuilder, settings, settings_1, settings_1_1, entry, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        queryBuilder = queryRunner.manager.createQueryBuilder();
                        return [4 /*yield*/, queryBuilder
                                .select("settings")
                                .from("ProjectSettings", "settings")
                                .getMany()];
                    case 1:
                        settings = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        settings_1 = __values(settings), settings_1_1 = settings_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!settings_1_1.done) return [3 /*break*/, 6];
                        entry = settings_1_1.value;
                        this.projectSettingsUpdate.moveSettingPropertiesIntoJsonColumn(entry);
                        return [4 /*yield*/, queryBuilder
                                .update("ProjectSettings")
                                .set(entry)
                                .where("ProjectId = :id", { id: entry.ProjectId })
                                .execute()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        settings_1_1 = settings_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (settings_1_1 && !settings_1_1.done && (_a = settings_1.return)) _a.call(settings_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "SimulationStartDate")];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "SimulationEndDate")];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "ShiftCalendarReferenceDay")];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "InitialStatsOffsetInHours")];
                    case 13:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.dropColumn("ProjectSettings", "LinkValidationEnabled")];
                    case 14:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V1_20_0UpdateProjectSettings1610387870520.prototype.down = function (_queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V1_20_0UpdateProjectSettings1610387870520.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V1_20_0UpdateProjectSettings1610387870520.prototype, "down", null);
    return V1_20_0UpdateProjectSettings1610387870520;
}());
exports.V1_20_0UpdateProjectSettings1610387870520 = V1_20_0UpdateProjectSettings1610387870520;


/***/ }),

/***/ 46894:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2_1_0_AddAlternativeLastOpenDateColumn1617437002335 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V2_1_0_AddAlternativeLastOpenDateColumn1617437002335 = /** @class */ (function () {
    function V2_1_0_AddAlternativeLastOpenDateColumn1617437002335() {
    }
    V2_1_0_AddAlternativeLastOpenDateColumn1617437002335.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addLastOpenDateColumn(queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V2_1_0_AddAlternativeLastOpenDateColumn1617437002335.prototype.addLastOpenDateColumn = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn("Alternative", new typeorm_1.TableColumn({
                            name: "LastOpenDate",
                            type: "datetime",
                            isNullable: true,
                            default: null,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V2_1_0_AddAlternativeLastOpenDateColumn1617437002335.prototype.down = function (_queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V2_1_0_AddAlternativeLastOpenDateColumn1617437002335.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V2_1_0_AddAlternativeLastOpenDateColumn1617437002335.prototype, "down", null);
    return V2_1_0_AddAlternativeLastOpenDateColumn1617437002335;
}());
exports.V2_1_0_AddAlternativeLastOpenDateColumn1617437002335 = V2_1_0_AddAlternativeLastOpenDateColumn1617437002335;


/***/ }),

/***/ 19566:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2_1_0_DropSimulationFilesPathColumn1627301668255 = void 0;
var typeorm_1 = __webpack_require__(95119);
/**
 * Database migration when upgading to v2.1.0.
 */
var V2_1_0_DropSimulationFilesPathColumn1627301668255 = /** @class */ (function () {
    function V2_1_0_DropSimulationFilesPathColumn1627301668255() {
    }
    V2_1_0_DropSimulationFilesPathColumn1627301668255.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropColumn("SimulationRun", "SimulationFilesPath")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    V2_1_0_DropSimulationFilesPathColumn1627301668255.prototype.down = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V2_1_0_DropSimulationFilesPathColumn1627301668255.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], V2_1_0_DropSimulationFilesPathColumn1627301668255.prototype, "down", null);
    return V2_1_0_DropSimulationFilesPathColumn1627301668255;
}());
exports.V2_1_0_DropSimulationFilesPathColumn1627301668255 = V2_1_0_DropSimulationFilesPathColumn1627301668255;


/***/ }),

/***/ 37611:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2_2_0_DropProductTable_1627301668257 = void 0;
var typeorm_1 = __webpack_require__(95119);
var V2_2_0_DropProductTable_1627301668257 = /** @class */ (function () {
    function V2_2_0_DropProductTable_1627301668257() {
    }
    V2_2_0_DropProductTable_1627301668257.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable("Product")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    V2_2_0_DropProductTable_1627301668257.prototype.down = function (_queryRunner) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d;
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _a : Object]),
        __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
    ], V2_2_0_DropProductTable_1627301668257.prototype, "up", null);
    __decorate([
        override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.QueryRunner !== "undefined" && typeorm_1.QueryRunner) === "function" ? _c : Object]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], V2_2_0_DropProductTable_1627301668257.prototype, "down", null);
    return V2_2_0_DropProductTable_1627301668257;
}());
exports.V2_2_0_DropProductTable_1627301668257 = V2_2_0_DropProductTable_1627301668257;


/***/ }),

/***/ 54107:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModelling = void 0;
var Alternative_1 = __webpack_require__(12403);
var ProductItemDefiniton_1 = __webpack_require__(96039);
var gojs_1 = __importDefault(__webpack_require__(88006));
var typeorm_1 = __webpack_require__(95119);
var ProductModelling = /** @class */ (function () {
    function ProductModelling(model, alternative) {
        this.model = model !== null && model !== void 0 ? model : this.createProductModel();
        if (alternative) {
            this.alternative = alternative;
        }
    }
    ProductModelling_1 = ProductModelling;
    Object.defineProperty(ProductModelling.prototype, "model", {
        get: function () {
            return gojs_1.default.Model.fromJson(this.modelJson);
        },
        // goJS toJson() Method contains linebreaks and whitespaces. Apply JSON.stringify(JSON.parse(...)) to remove those
        set: function (model) {
            this.modelJson = JSON.stringify(JSON.parse(model.toJson()));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductModelling.prototype, "products", {
        get: function () {
            var products = this.model.nodeDataArray.filter(function (value) { return value.class === ProductItemDefiniton_1.ProductItemDefinition.class; });
            return products;
        },
        enumerable: false,
        configurable: true
    });
    ProductModelling.prototype.serialize = function () {
        return {
            model: JSON.parse(this.modelJson),
        };
    };
    ProductModelling.deserialize = function (serializedEntity) {
        var productModelling = new ProductModelling_1();
        productModelling.modelJson = JSON.stringify(serializedEntity.model);
        return productModelling;
    };
    ProductModelling.prototype.createProductModel = function () {
        var model = new gojs_1.default.GraphLinksModel();
        model.copiesArrays = true;
        model.copiesArrayObjects = true;
        model.linkFromPortIdProperty = "fromPort";
        model.linkToPortIdProperty = "toPort";
        return model;
    };
    var ProductModelling_1, _a, _b, _c, _d;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid", { name: "Id" }),
        __metadata("design:type", String)
    ], ProductModelling.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Alternative_1.Alternative; }),
        typeorm_1.JoinColumn({ name: "AlternativeId" }),
        __metadata("design:type", typeof (_a = typeof Alternative_1.Alternative !== "undefined" && Alternative_1.Alternative) === "function" ? _a : Object)
    ], ProductModelling.prototype, "alternative", void 0);
    __decorate([
        typeorm_1.Column({ name: "Model" }),
        __metadata("design:type", String)
    ], ProductModelling.prototype, "modelJson", void 0);
    __decorate([
        typeorm_1.Column({ name: "ModificationTime" }),
        __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
    ], ProductModelling.prototype, "modificationTime", void 0);
    ProductModelling = ProductModelling_1 = __decorate([
        typeorm_1.Entity("ProductModelling"),
        __metadata("design:paramtypes", [typeof (_c = typeof gojs_1.default !== "undefined" && gojs_1.default.Model) === "function" ? _c : Object, typeof (_d = typeof Alternative_1.Alternative !== "undefined" && Alternative_1.Alternative) === "function" ? _d : Object])
    ], ProductModelling);
    return ProductModelling;
}());
exports.ProductModelling = ProductModelling;


/***/ })

}]);