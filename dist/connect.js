"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const utils_1 = require("@tsexpress-starter/utils");
const typeorm_1 = require("typeorm");
const insert_status_1 = __importDefault(require("./insert-status"));
const entity_validation_1 = __importDefault(require("./entity-validation"));
function connect(app, ...subscribers) {
    return typeorm_1.createConnection({
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [path_1.default.join(app.appDir, '/app/**/entity.{ts,js}')],
        subscribers: [entity_validation_1.default, insert_status_1.default, ...subscribers],
        synchronize: !!process.env.DB_SYNC
    })
        .then(() => utils_1.log('Connection to the database succeeded.'))
        .catch(console.log);
}
exports.default = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLG9EQUErQztBQUUvQyxxQ0FBc0U7QUFFdEUsb0VBQTJDO0FBQzNDLDRFQUFtRDtBQUVuRCxTQUF3QixPQUFPLENBQUMsR0FBZ0IsRUFBRSxHQUFHLFdBQXdDO0lBQzNGLE9BQU8sMEJBQWdCLENBQUM7UUFDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBYztRQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ3pCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztRQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQzdCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87UUFDN0IsUUFBUSxFQUFFLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDM0QsV0FBVyxFQUFFLENBQUMsMkJBQWdCLEVBQUUsdUJBQVksRUFBRSxHQUFJLFdBQTBCLENBQUM7UUFDN0UsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87S0FDbkMsQ0FBQztTQUNDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN4RCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFkRCwwQkFjQyJ9