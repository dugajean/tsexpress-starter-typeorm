"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const errors_1 = require("@tsexpress-starter/errors");
const typeorm_1 = require("typeorm");
let EntityValidation = class EntityValidation {
    validateEntity(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(entity);
            if (errors.length > 0) {
                throw new errors_1.BadRequestError(errors);
            }
        });
    }
    beforeInsert(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateEntity(event.entity);
        });
    }
    beforeUpdate(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateEntity(event.entity);
        });
    }
};
EntityValidation = __decorate([
    typeorm_1.EventSubscriber()
], EntityValidation);
exports.default = EntityValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW50aXR5LXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUEyQztBQUMzQyxzREFBNEQ7QUFDNUQscUNBQTJHO0FBRzNHLElBQXFCLGdCQUFnQixHQUFyQyxNQUFxQixnQkFBZ0I7SUFDN0IsY0FBYyxDQUFDLE1BQWtCOztZQUNyQyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLHdCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsS0FBdUI7O1lBQ3hDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEtBQXVCOztZQUN4QyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUNGLENBQUE7QUFoQm9CLGdCQUFnQjtJQURwQyx5QkFBZSxFQUFFO0dBQ0csZ0JBQWdCLENBZ0JwQztrQkFoQm9CLGdCQUFnQiJ9