# git

# git初始化

```
git init   //初始化
ls显示当前文件的所有目录
```

初始化之后会显示.git文件

# 2、git工作原理

git有工作区、版本库（暂存区和本地仓库）

工作流程：把工作区的内容提交到暂存区，暂存区（确认没有问题后）提交到master，然后生成一条记录，这里是在git里面的操作

## 2.1、添加暂存区

- git add + 文件名(如果有多个文件，可以使用git add .  或者 git add  all    全部添加到暂存区)
- 查看状态：git status可以查看状态，如果说明内容成功加入带暂存区

![image-20230403145007431](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230403145007431.png)

- git rm --cached +文件名：说明该文件已经从暂存区删除

![image-20230403145216779](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230403145216779.png)

- git commit -m  "提交的注释"
- git log    查看提交的历史记录

注意：如果提交历史区域的时候忘记加-m 和注释了，会进入vim编辑器里面，按下i变成insert，然后添加注释，按下：wq直接回车可以直接退出

## 2.2、分支(master)

当我们多次提交的时候，master时钟指向新提交的里面

### git reset  --hard HEAD

- git reset  --hard HEAD^  //回退到上一次提交的版本
- git reset --hard HEAD^^回退到上上次的版本
- git reset --hard HEAD~n   //回退到n次前的版本
- git reflog查看本地库所有操作记录，然后使用git reset --hard +操作记录的编号，即可将head指向上次操作的地方

### git reset  --soft HEAD^

回退到暂存区，用处：把暂存区的注释进行重写

而hard是直接回退到工作区

# 3、创建分支

## 3.1、开辟一个分支使用git branch +分支名称

- git branch               //查看分支
- git branch +分支名        //创建分支名
- git checkout +分支名       //切换分支
- git merge +分支名            //合并分支
- git branch -d  "分支名"       //删除分支
- git branch  -a            //查看所有分支

# 4、上传远程仓库

可以使用git remote add （自己命名）https://github.com/yiyijing/html-css-js.git   //添加git远程仓库

- git remote -v    //查看远程仓库
- git remote remove (自己命名地址)    //删除远程仓库名
- git push  远程仓库名  本地主分支：远程主分支   //将本地的内容推送到远程仓库

## 4.1、本地修改，远程更新

1. 工作区添加到暂存区                    //git add  .
2. 暂存区提交到本地仓库                //git branch -m "注释"
3. 将仓库的内容push到远程仓库      //git push   远程仓库   本地主分支：远程主分支

注意：第三步可能发生fatal: unable to access 'https://[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020).com/.......': OpenSSL SSL_read: Connection was reset, errno 10054这种错误，产生原因：一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错，可以使用：git config --[global](https://so.csdn.net/so/search?q=global&spm=1001.2101.3001.7020) http.sslVerify "false"，解决参考网上解决办法：解除ssl验证后，再次git即可

## 4.2、远程修改，本地更新

1. 远程修改
2. git   pull   远程仓库名   本地主分支：远程主分支

注意：第二步可能发生fatal: unable to access 'https://[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020).com/.......': OpenSSL SSL_read: Connection was reset, errno 10054这种错误，产生原因：一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错，可以使用：git config --[global](https://so.csdn.net/so/search?q=global&spm=1001.2101.3001.7020) http.sslVerify "false"，解决参考网上解决办法：解除ssl验证后，再次git即可

# 5、克隆

- git clone  远程的code里面的地址          //克隆备份

注意：当443错误的时候，可能是因为网络原因

# 6、团队协作

当多人来操作远程仓库的时候，有两种情况

1. 如果修改的不是同一个文件，则后来提交远程仓库的人需要先pull，拉取仓库的文件，然后再提交
2. 如果修改的是同一个文件，则需要手动的进行合并

修改完之后具体的流程：1、将工作区添加到暂存区   2、将暂存区的内容提交到本地仓库   3、将本地仓库的内容更新到远程仓库