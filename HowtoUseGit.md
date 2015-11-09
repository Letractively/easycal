# Howto Use Git #

# NOTE #
一个更新的版本维护在 [这里](http://wiki-awesome.rhcloud.com/index.php/Git)。

# git 初始配置 #

## 用户名和邮箱 ##
`git config --global user.name 'Your Name'`

`git config --global user.email 'You@your.domain'`

## 配置换行符 ##

Windows下建议：

`git config --global core.autocrlf true`

这将使文件换行符在仓库里LF，工作目录里CRLF。

Linux下建议：

git config --global core.autocrlf input

只在进仓库时CRLF-->LF。

## 起命令别名 ##
可以给命令起 alias 以减少拼写，例如：

```
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.st status
```

则 git ci 就等同于 git commit，等等。

## 其它 ##
自动给一些命令的输出加上色彩：

git config --global color.ui auto

# 本地工作流程 #

## 初始化 ##
如果已经有一个远程仓库，可以以 `git clone` 开始，这会在当前目录下
建立仓库对应的目录。

如果直接从本地开始，则先建议项目目录，在项目顶层目录使用命令
`git init` 初始化新项目。这会在顶层目录下建立文件夹 `.git/`。

## 基本流程 ##
本地工作的基本流程是：
  1. 编辑文件、写代码等。
  1. `git add filename` 将新建的文件或修改了的文件 add 到 index 区域，准备提交。注意修改了的文件也需要 git add。
  1. `git commit` 将 index 区域的内容提交到仓库(repo)
  1. 回到第一步，coding...
注：可以 `git commit -a`，以自动地把已经入库了的目录中修改了的文件 add 到
index 区域，并做提交。

`git commit` 时，会打开默认的文本编辑器，要求你输入提交信息。
提交信息的格式一般是第一行是简要的更改说明，之后空一行，再之后写具体
内容（这里格式就无所谓了。不过如果有多条消息需要说明推荐用`*`做列表）。

当你没有设置默认文本编辑器时，会打开 vi。其基本操作是：
  * 初始在正常模式，按 i （小写，即按 I 键）进入插入模式，写文本；
  * 写完后按 Esc 回到正常模式，输入 `:wq` （依次按 <Shift-;> w q，会在末行
显示）保存更改并退出编辑器。

## 查看状态 ##
在本地操作时，可以随时查看目前的状态，使用命令

`git status`

查看文件具体的修改内容，使用

`git diff`

查看历次提交信息，使用

`git log`

## 分支操作 ##
默认在master分支上。一般情况下，我们 master 分支存放主干代码（比较
稳定），实验性的更改可以先新建分支。如下以当前工作为基础新建 devel 分支，
并切换过去：

`git checkout -b devel`

一般地，在分支间切换：

`git checkout 分支名`

`git branch` 命令可以列出各个（本地）分支，当前分支前面会有一个 `*` 号指示。

每个分支上的操作都是 “编辑 --- add --- commit” 三部曲。只有 commit 到
仓库才算保存了工作成果。

当你觉得目前 devel 分支上的工作成果足够好，可以加入主干了，就
先切换回 master 分支：

`git checkout master`

然后在 master 分支上执行：

`git merge devel`

这样就把 devel 分支上的更改合并到了 master 分支上。
merge 时如果没有冲突，会自动产生新的提交（可以用 `git log` 查看）。
如果有冲突，需要手工解决冲突，再手动提交。Git 会在命令行提示有冲突的文件
名，而且会在含有冲突的文件中加入类似下面的标记
```
<<<<<<< HEAD
HEAD version of code
=======
OTHER version of code
>>>>>>> OTHER
```
手工解决冲突一般就是自己裁定选取哪个版本，或者其他整合方式。
修改后记得把 `<<<, ===, >>>` 等标记删除。手动解决所有冲突之后，使用
`git add` 将修改加入 index 暂存区域，`git commit` 提交。

## .gitignore ##
习惯上使用 `.gitignore` 文件忽视一些不需要/不应该出现在版本库里的文件。如

以下内容：
```
*.bak
*~
*.tmp
```

会使得工作目录下以 .bak, .tmp. ~ 结尾的（备份）文件不会被跟踪进版本库，
保证版本库只含有用历史。

一般 .gitignore 文件会放入版本库。(命令 `git add .gitignore`)

## 其他常用操作 ##
使用如下目录可以给当前版本打上标签 v1.0：
```
git tag -a v1.0
```
输入这条命令后按回车键，会进入文本编辑器（缺省 vi），让你输入一段
提交消息。其处理和提交时的消息类似。

如果你有 GPG 密钥，可以把上面的 `-a` 替换为 `-s` 以使用自己的 GPG 私钥
对标签做数字签名。你可能需要事先指定你的 GPG 密钥 ID：
```
git config --global user.signingkey 0x12345678
```

# 与远程仓库交互 #

## 初始化 ##
初始化新仓库

`git clone 远程URL`

这会在本机新建项目目录，包含有项目的全部历史。
另外还会自动创建 origin 远程追踪分支，以追踪远程仓库的更改。

## 拉取远程更新 ##
拉取仓库新内容并合并到当前分支：（仅建议在master分支做）

`git pull origin master`

拉取仓库新内容但不合并：

`git fetch origin master`

## 推送本地更新 ##

`git push origin master`

或者简单地，

`git push`

# 图形界面工具 #

`gitk` 可视化历史记录，版本间的修改情况等。

git-gui 图形界面commit等。

tortoiseGit，类似tortoiseSVN。

# 后注 #

切勿认为这么简单的介绍就够了。看一个电子教程是很有用有必要的。

有一些中文文档也是很不错的。链接参见
http://learn.tsinghua.edu.cn:8080/2008011211/html/git.html