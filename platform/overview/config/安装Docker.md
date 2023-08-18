# 安装Docker

::: tip 推荐
使用提供的安装脚本进行一键安装： [https://github.com/rancher/install-docker](https://github.com/rancher/install-docker)
:::
## 使用 Docker 仓库进行安装
在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker。
**设置仓库**
安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2。
```bash
 sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```
使用以下命令来设置稳定的仓库。
```bash
 sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
## 安装 Docker Engine-Community
安装最新版本的 Docker Engine-Community 和 containerd，或者转到下一步安装特定版本：
```bash
 sudo yum install docker-ce docker-ce-cli containerd.io
 sudo systemctl start docker
```
## 代码提示
```bash
sudo yum install -y bash-completion

source /usr/share/bash-completion/completions/docker
source /usr/share/bash-completion/bash_completion
```
## docker镜像加速
```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://5qe8w1eb.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```


## 安装docker-compose
> 可以从 Github 上下载它的二进制包来使用，最新发行的版本地址：[https://github.com/docker/compose/releases](https://github.com/docker/compose/releases)

1. 运行以下命令以下载 Docker Compose 的当前稳定版本
  ```bash
  sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  ```
2. 将可执行权限应用于二进制文件
  ```bash
  sudo chmod +x /usr/local/bin/docker-compose
  ```
3. 创建软链
  ```bash
  sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
  ```
4. 测试是否安装成功
  ```bash
  docker-compose --version
  ```
## 删除none镜像脚本
```bash
# 直接删除带none的镜像，报错了。提示先停止容器。
docker stop $(docker ps -a | grep "Exited" | awk '{print $1 }')

# 删除容器
docker rm $(docker ps -a | grep "Exited" | awk '{print $1 }')

# 删除none镜像
docker rmi $(docker images | grep "none" | awk '{print $3}')
```
