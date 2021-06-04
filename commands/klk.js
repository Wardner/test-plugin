"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Klk extends command_1.Command {
    async run() {
        var _a;
        const { args, flags } = this.parse(Klk);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`Klk ${name} from .\\src\\commands\\Klk.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Klk;
Klk.description = 'describe the command here';
Klk.examples = [
    `$ oclif-example Klk
Klk world from ./src/Klk.ts!
`,
];
Klk.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Klk.args = [{ name: 'file' }];
