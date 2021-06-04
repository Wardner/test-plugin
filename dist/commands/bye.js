"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Bye extends command_1.Command {
    async run() {
        var _a;
        const { args, flags } = this.parse(Bye);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`Bye ${name} from .\\src\\commands\\Bye.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Bye;
Bye.description = 'describe the command here';
Bye.examples = [
    `$ oclif-example Bye
Bye world from ./src/Bye.ts!
`,
];
Bye.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Bye.args = [{ name: 'file' }];
