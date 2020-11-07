const { promisify } = require("util"); //promise化
const ora = require("ora"); //加载效果
const chalk = require("chalk"); //命令行彩色化
const download = promisify(require("download-git-repo")); //下载github 上的代码
const dw = async function (repo, name) {
    const process = ora(`开始下载 ${chalk.blue('****************')}`);
    process.start();
    process.color = "yellow";
    process.text = `正在下载..... ${chalk.yellow('****************')} `;

    try {
        download(repo, name, { clone: true }, err => {
            // 如果下载错误给一个提示
            if (err) {
                process.fail();
                console.error(
                    chalk.red(`${err}下载模板失败`)
                );
                return;
            }
            process.color = "green";
            process.text = `下载成功 ${chalk.green('****************')} `;
            process.succeed();
        })
    } catch (error) {
        process.color = "red";
        process.text = "下载失败";
        process.fail();
    }
}

module.exports = dw;