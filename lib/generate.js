const chalk = require("chalk");
const Prompt = require("inquirer");//交互式命令
const download = require("./download");
const origin = "https://github.com:wmh0855/vue_cli#master";

const initQuestions = name => [
    {
        type: "confirm",
        name: "isInit",
        message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
        prefix: "?"
    }
];

const init = async name => {
    try {
        const { isInit } = await Prompt.prompt(initQuestions(name));
        if (isInit) {
            await download(origin, name);
        } else {
            console.log(chalk.red("程序提前结束"));
        }
    } catch (error) {
        console.log(chalk.red(error));
    }
};

module.exports = init;