# Ch 3. 新手入门包（安装）

在本章中，我们将介绍：

- [0. 介绍](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_0-introduction)
- [1. 使用 Docker 安装](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)
- [2.使用安装程序的用户友好安装（已弃用）](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-user-friendly-installation-using-installer-deprecated)
- [4. Storefront CLI 为您服务](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service)



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_0-introduction)0. 介绍

现在你肯定对**Vue Storefront**感兴趣。这就是你在这里的原因。你已经越界了。你做出了选择。你会得到一些回报，这很棒。无论是开发人员、企业家还是营销经理，他们都可能想尝试一些新的东西来获得更好的产品，以期增强他们的客户或客户的体验。你选择了正确的道路。我们将探索让您开始使用[**Vue Storefront**基础架构所需的任何内容 （打开新窗口）](https://github.com/vuestorefront).

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)1. 使用 Docker 安装

Docker 可以说是最受追捧的，自推出以来就在市场上掀起了风暴。虽然它是否是同行中的最佳选择还存在争议，但我从未见过整个开发者社区对一种技术产品如此一致的热情。

那么，为什么会这样呢？在现代计算机工程中，产品非常复杂，有无数相互交织的依赖关系。在需要的每个场合构建这样的依赖关系是一项艰巨的工作，更不用说所有版本变化带来的故障了。这就是 Docker 介入以帮助您实现**基础设施自动化的地方**。这个概念旨在帮助您专注于您的业务逻辑，而不是让您陷入低级修补的麻烦。

幸运的是，我们已经为你经历了这一切，弄脏了我们的手。您只需要运行一组 docker 命令即可让您从头开始运行。事不宜迟，让我们开始吧！

更新

从 VSF`1.12`开始，

1. `CLI`是安装*Vue Storefront*基础设施的主要方法。（这更容易、更轻松、更直观）
2. Bleeding-edge`vsf-capybara`是默认主题，而原始`default`主题仍有待您自行选择。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-preparation)1. 准备

- 你需要 [`docker` （打开新窗口）](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)和 [`docker-compose` （打开新窗口）](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)安装。
- 你需要 [`git` （打开新窗口）](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04)安装。

笔记

我们将带您了解*Linux*上的 docker 。（如果需要，特别是*Ubuntu 18.04*）

在使用 Docker 之前，它只有一种偏见；*在 Linux 上运行它*。Docker 是原生 Linux，是使用 Linux 技术创建的；首先是 LXC（linux 容器）。尽管曾多次尝试使其可用于其他平台，就像在 Linux 上一样，而且它确实取得了进展，但是，在 Linux 上使用 Docker 是处理该技术的最可靠方法。

令人难过的是，[Chef's Secrets](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-chef-s-secret-protip)中也有使用其他 docker 平台的技巧。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-recipe)2. 食谱

1. 首先从backend开始，下载[**Vue Storefront API** （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api)来自 github。

```bash
git clone https://github.com/vuestorefront/vue-storefront-api.git vue-storefront-api
cd vue-storefront-api
```

1. 复制`./config/default.json`到`./config/local.json`

```bash
cp config/default.json config/local.json
```

然后`local.json`根据您的需要进行编辑。我们将在[Chef's secret](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-chef-s-secret-protip)中更详细地研究这一点

提示

如果您对 的值满意，则可以跳过此步骤，`default.json`因为它遵循[文件加载顺序 （打开新窗口）](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order)的[节点配置（打开新窗口）](https://github.com/lorenwest/node-config)

1. 运行以下 Docker 命令：

```bash
docker-compose -f docker-compose.yml -f docker-compose.nodejs.yml up -d
```

然后结果看起来像这样：

```bash
Building app
Step 1/8 : FROM node:10-alpine
 ---> 9dfa73010b19
Step 2/8 : ENV VS_ENV prod
 ---> Using cache
 ---> 4d0a83421665
Step 3/8 : WORKDIR /var/www
 ---> Using cache
 ---> e3871c8db7f3
Step 4/8 : RUN apk add --no-cache curl git
 ---> Using cache
 ---> 49e996f0f6cb
Step 5/8 : COPY package.json ./
 ---> 14ed18d76efc
Step 6/8 : RUN apk add --no-cache --virtual .build-deps ca-certificates wget &&     yarn install --no-cache &&     apk del .build-deps
 ---> Running in 3d6f91acc2fe
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
(1/2) Installing wget (1.20.3-r0)
(2/2) Installing .build-deps (0)
Executing busybox-1.29.3-r10.trigger
OK: 22 MiB in 26 packages
yarn install v1.16.0
info No lockfile found.
[1/4] Resolving packages...
warning @babel/node > @babel/polyfill@7.4.4: 🚨 As of Babel 7.4.0, this
package has been deprecated in favor of directly
including core-js/stable (to polyfill ECMAScript
features) and regenerator-runtime/runtime
(needed to use transpiled generator functions):

  > import "core-js/stable";
  > import "regenerator-runtime/runtime";
warning eslint > file-entry-cache > flat-cache > circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
[2/4] Fetching packages...

# ... abridged
```

📼你也可以在[bash播放中](https://asciinema.org/a/7XT5CWP4ynrPItattiP3on6wS)观看[🎥（打开新窗口）](https://asciinema.org/a/7XT5CWP4ynrPItattiP3on6wS)

提示

```
-f`标志允许您使用以下 docker-compose 文件。如果没有这个标志，它将使用默认文件`docker-compose.yml
```

`-d`标志允许您运行命令，`detach mode`这意味着*运行后台*。

1. 为了验证，运行`docker ps`以显示哪些容器已启动

```bash
docker ps
```

然后，

```bash
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                                            NAMES
53a47d5a6440        vuestorefrontapi_kibana   "/bin/bash /usr/loca…"   31 seconds ago      Up 29 seconds       0.0.0.0:5601->5601/tcp                           vuestorefrontapi_kibana_1
7d8f6328601b        vuestorefrontapi_app      "docker-entrypoint.s…"   31 seconds ago      Up 27 seconds       0.0.0.0:8080->8080/tcp                           vuestorefrontapi_app_1
165ae945dbe5        vuestorefrontapi_es1      "/bin/bash bin/es-do…"   8 days ago          Up 30 seconds       0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   elasticsearch
8dd144746cef        redis:4-alpine            "docker-entrypoint.s…"   11 days ago         Up 31 seconds       0.0.0.0:6379->6379/tcp                           vuestorefrontapi_redis_1
```

端口号稍后将在前端配置中使用。事实上，它们已经被设置为默认值。

您将看到 4 个容器正在运行，即：

| 容器              | 港口  |
| ----------------- | ----- |
| Vue 店面 API 应用 | :8080 |
| 弹性搜索          | :9200 |
| 基巴纳            | :5601 |
| Redis             | :6379 |

1. 现在后端部分已经完成，让我们处理前端部分，安装 `@vue-storefront/cli`

```bash
yarn global add @vue-storefront/cli 
```

1. `init`在要安装*Vue Storefront*的目录中运行命令，如下所示：

```bash
vsf init vue-storefront # [vue-storefront] is the directory where the app is going to be installed. 
```

1. 从下面选择您的目标版本（在本节中选择*稳定版本*）：

```bash
dex@ubuntu:~/code$ vsf init vue-storefront
  ✔ Check avalilable versions
? Which version of Vue Storefront you'd like to install? (Use arrow keys)
❯ Stable versions (recommended for production) 
  Release Candidates 
  In development branches (could be unstable!) 
```

1. 然后`1.12`从下面选择安装版本：

```bash
  ✔ Check avalilable versions
? Which version of Vue Storefront you'd like to install? Stable versions (recommended for production)
? Select specific version (Use arrow keys)
❯ v1.12.0 
  v1.11.4 
  v1.11.3 
  v1.11.2 
  v1.11.1 
  v1.11.0 
  v1.10.6 
```

1. 选择一个你想开始的主题（这次`Capybara`是食谱）：

```bash
  ✔ Check available versions
? Which version of Vue Storefront you'd like to install? Stable version (recommended for production)
? Select specific version v1.12.0
? Select theme for Vue Storefront 
❯ Capybara - based on Storefront UI 
  Default
```

信息

Capybara 建立在[Storefront UI](https://www.storefrontui.io/)之上[ （打开新窗口）](https://www.storefrontui.io/). 值得一试！

然后，`Stable version`如下：

```bash
  ✔ Check available versions
? Which version of Vue Storefront you'd like to install? Stable version (recommended for production)
? Select specific version v1.12.0
? Select theme for Vue Storefront Capybara - based on Storefront UI
? Select theme version (Use arrow keys)
❯ Stable version (recommended for production) 
  In development branch (could be unstable!) 
```

1. 现在通过`Manual installation`从下一步中选择来结束它：

```bash
  ✔ Check avalilable versions
? Which version of Vue Storefront you'd like to install? Stable versions (recommended for production)
? Select specific version v1.12.0
? Would you like to use friendly installer or install Vue Storefront manually? 
  Installer (MacOS/Linux only) 
❯ Manual installation
```

然后`cli`将所有需要的文件复制到指定的文件夹中。

让我们`cd`到文件夹。

📼你也可以在[bash播放中](https://asciinema.org/a/i4lHsWZHDDWvDjkdFEb8zQa0m)观看[🎥（打开新窗口）](https://asciinema.org/a/i4lHsWZHDDWvDjkdFEb8zQa0m)

警告

`Installer`不推荐使用上述选项中的友好，但支持它。

1. 准备配置文件在`./config/local.json`. 有`default.json`中作为默认设置配置的同一文件夹中的文件。复制如下：

```bash
cp config/default.json config/local.json
```

然后根据需要在`local.json`文件中修复该值。在 中`local.json`，您可以更改后端族信息的值。但是，如果您逐字遵循此配方，则不必这样做，因为它已经具有默认值了。如果你研究内容，请看[厨师的秘密](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-1-study-in-local-json)

1. 安装主题

从 1.12 版开始，您需要将主题添加到您的项目中。[这里有更多信息](https://docs.vuestorefront.io/v1/guide/installation/theme.html)

1. 最后运行以下 Docker 命令：

```bash
docker-compose up -d
```

结果应该是这样的：

```bash
Building app
Step 1/8 : FROM node:10-alpine
 ---> 9dfa73010b19
Step 2/8 : ENV VS_ENV prod
 ---> Using cache
 ---> 4d0a83421665
Step 3/8 : WORKDIR /var/www
 ---> Using cache
 ---> e3871c8db7f3
Step 4/8 : COPY package.json ./
 ---> 0eab68a8f13a
Step 5/8 : COPY yarn.lock ./
 ---> ac1f5e4a1831
Step 6/8 : RUN apk add --no-cache --virtual .build-deps ca-certificates wget git   && yarn install --no-cache   && apk del .build-deps
 ---> Running in 1ca7bc7782e3
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
(1/9) Installing ca-certificates (20190108-r0)
(2/9) Installing wget (1.20.3-r0)
(3/9) Installing nghttp2-libs (1.35.1-r0)
(4/9) Installing libssh2 (1.8.2-r0)
(5/9) Installing libcurl (7.64.0-r2)
(6/9) Installing expat (2.2.6-r0)
(7/9) Installing pcre2 (10.32-r1)
(8/9) Installing git (2.20.1-r0)
(9/9) Installing .build-deps (0)
Executing busybox-1.29.3-r10.trigger
Executing ca-certificates-20190108-r0.trigger
OK: 22 MiB in 25 packages
yarn install v1.16.0
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
info fsevents@1.2.4: The platform "linux" is incompatible with this module.

# ... abridged
```

📼你也可以在[bash播放中](https://asciinema.org/a/JZYI9ZE6DHeC7N2keBNoFUWjQ)观看[🎥（打开新窗口）](https://asciinema.org/a/JZYI9ZE6DHeC7N2keBNoFUWjQ)

1. 为了验证运行`docker ps`，应该有另一个容器添加到列表中。

```bash
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                                            NAMES
88d758bc24d0        vuestorefront_app         "docker-entrypoint.s…"   2 minutes ago       Up 2 minutes                                                         vuestorefront_app_1
de560221fdaf        vuestorefrontapi_kibana   "/bin/bash /usr/loca…"   8 hours ago         Up 23 minutes       0.0.0.0:5601->5601/tcp                           vuestorefrontapi_kibana_1
5576cd9963a1        vuestorefrontapi_app      "docker-entrypoint.s…"   8 hours ago         Up 23 minutes       0.0.0.0:8080->8080/tcp                           vuestorefrontapi_app_1
88f5db9486da        vuestorefrontapi_es1      "/bin/bash bin/es-do…"   8 hours ago         Up 24 minutes       0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   elasticsearch
d46c1e0a22af        redis:4-alpine            "docker-entrypoint.s…"   8 hours ago         Up 24 minutes       0.0.0.0:6379->6379/tcp                           vuestorefrontapi_redis_1
```

1. 打开浏览器并访问[http://localhost:3000/（打开新窗口）](http://localhost:3000/)

编译后，*瞧！*

![vs_home_intro_borderline](https://docs.vuestorefront.io/v1/assets/img/home_capybara.22bcb3d6.png)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_3-peep-into-the-kitchen-what-happens-internally)3.窥视厨房（内部发生的事情）

我们用于`docker-compose`搭建 Vue Storefront 的整个环境。启动后面的机器来运行商店就足够了。

这是可能的，因为`docker`将整个基础设施封装成所需状态的线性声明性定义集。

我们有两个步骤，`docker-compose`其中一个用于后端**Vue Storefront API**，另一个用于前端**Vue Storefront**。

第一个`docker-compose`有两个`yml`文件用于输入。第一个输入文件`docker-compose.yml`描述了它的基本需求，除了**Vue Storefront API**本身；也就是说，**Elasticsearch**作为数据存储，**Redis**用于缓存，**Kibana**用于帮助您直观地获取数据（一对 Elasticsearch）。

```yaml
# docker-compose.yml
version: '3.0'
services:
  es1:
    container_name: elasticsearch
    build: docker/elasticsearch/
    volumes:
      - ./docker/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml:ro
      - ./docker/elasticsearch/data:/usr/share/elasticsearch/data
    ports:
      - '9200:9200'
      - '9300:9300'
    environment:
      ES_JAVA_OPTS: "-Xmx512m -Xms512m"

  kibana:
    build: docker/kibana/
    volumes:
      - ./docker/kibana/config/:/usr/share/kibana/config:ro
    ports:
      - '5601:5601'
    depends_on:
      - es1

  redis:
    image: 'redis:4-alpine'
    ports:
      - '6379:6379'

volumes:
  esdat1:
```

笔记

一旦解释了一个术语，它会在以后连续出现时被忽略。

`version`表示`docker-compose`此文件使用的版本。

```
services`描述容器。它规定了它们应该如何运行。换句话说，它编码了与`docker run ...
```

`es1` contains information of data store *Elasticsearch* container.

- `build` denotes build path of container.
- `volumes` contains the mount path of volumes shared between host and container as *host:container*
- `ports` connect ports between host and container as in *host:container*
- `environment` allows you to add environment variables. `Xmx512m` means JVM will take up to maximum 512MB memory. `Xms512m` means minimum memory. Combining them, there will be no memory resize, it will just stick to 512MB from start to end throughout its life cycle.

`kibana` contains information of *Kibana* application container.

- `depends_on` creates dependency for a container of other containers. So, this container is dependent on `es1` that's just described above.
- `volumes`平均卷共享，`:ro`在`read-only`模式下为容器创建卷。

`redis`包含*Redis*缓存应用容器的信息。

- `image` node 包含此容器所基于的图像的名称。

`volumes` 在顶级可以用作跨多个服务（容器）使用的参考。



第二个输入文件`docker-compose.nodejs.yml`处理**Vue Storefront API**节点应用程序。

```yaml
version: '3.0'
services:
  app:
    # image: divante/vue-storefront-api:latest
    build:
      context: .
      dockerfile: docker/vue-storefront-api/Dockerfile
    depends_on:
      - es1
      - redis
    env_file: docker/vue-storefront-api/default.env
    environment:
      VS_ENV: dev
    volumes:
      - './config:/var/www/config'
      - './ecosystem.json:/var/www/ecosystem.json'
      - './migrations:/var/www/migrations'
      - './package.json:/var/www/package.json'
      - './babel.config.js:/var/www/babel.config.js'
      - './scripts:/var/www/scripts'
      - './src:/var/www/src'
      - './var:/var/www/var'
    tmpfs:
      - /var/www/dist
    ports:
      - '8080:8080'
```

`app`包含*Vue Storefront API*应用程序的信息。

- `build`是构建信息的路径。如果值为字符串，则为普通路径。当它是对象时，您可能有几个选项要添加。`context`是相对路径或 git repo url 所在`Dockerfile`的位置。`dockerfile`节点可能会更改`Dockerfile`. [更多信息（打开新窗口）](https://docs.docker.com/compose/compose-file/#build)
- `depends_on`告诉我们是基于这个容器`es1`和`redis`容器，我们上面创建。
- `env_file`帮助您从文件中添加环境值。它`docker-compose`是进程中文件的相对路径，在这种情况下，它是`docker-compose.nodejs.yml`
- `environment`是这样设置的`VS_ENV`，`dev`以便为开发人员模式设置环境。
- `tmpfs`表示仅可用于主机内存的临时卷。与 不同`volumes`，`tmpfs`一旦容器停止，这将消失。此选项仅适用于*Linux*。





第二`docker-compose`步骤处理**的Vue店面**前端。

```yaml
version: '2.0'
services:
  app:
    # image: divante/vue-storefront:latest
    build:
      context: .
      dockerfile: docker/vue-storefront/Dockerfile
    env_file: docker/vue-storefront/default.env
    environment:
      VS_ENV: dev
    network_mode: host
    volumes:
      - './babel.config.js:/var/www/babel.config.js'
      - './config:/var/www/config'
      - './core:/var/www/core'
      - './ecosystem.json:/var/www/ecosystem.json'
      - './.eslintignore:/var/www/.eslintignore'
      - './.eslintrc.js:/var/www/.eslintrc.js'
      - './lerna.json:/var/www/lerna.json'
      - './tsconfig.json:/var/www/tsconfig.json'
      - './tsconfig-build.json:/var/www/tsconfig-build.json'
      - './shims.d.ts:/var/www/shims.d.ts'
      - './package.json:/var/www/package.json'
      - './src:/var/www/src'
      - './var:/var/www/var'
    tmpfs:
      - /var/www/dist
    ports:
      - '3000:3000'
```

这看起来与*Vue Storefront API*大致相同，但有一些变化。

`app`服务描述了*Vue Storefront*前端应用程序的选项。

- `network_mode`允许您修改`--network`docker 客户端选项的值。`host`选项允许您指定的容器打开主机网络。例如，如果您将容器绑定到主机的`80`端口，则可以在主机的`<IP address>:80`Internet 上访问该容器。换句话说，容器不是孤立的。[更多信息（打开新窗口）](https://docs.docker.com/network/host/)

如果您仔细查看内部`Dockerfile's`，您会注意到它们安装了项目的所有依赖项`package.json`，更不用说所需的操作系统功能，包括`git`,`wget`和证书。您不必担心要做什么，因为我们为您做到了。

接下来，您可能想要导入您的货物数据。如果您不想停止，请跳到[数据导入](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html)。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-chef-s-secret-protip)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-1-study-in-local-json-for-vue-storefront-api)揭秘1.研究`local.json`了*Vue的店面API*

定制的起点是平台寻求配置值的地方`default.json`或其副本`local.json`。

笔记

如果要修改`default.json`，请不要直接编辑它，而是将整个文件复制到该文件中`local.json`并开始对其进行编辑。为什么应该这样做，稍后在[Secret 3 中](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-3-why-use-node-config)解释[。为什么要使用 node-config？](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-3-why-use-node-config)

我们有 2 个`local.json`文件，其中一个用于后端，我们将查看[Secret 2](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-2-study-in-local-json-for-vue-storefront)，另一个用于前端。

在 [`vue-storefront-api/config/default.json` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json)对于**后端**：

```json
  "server": {
    "host": "localhost",
    "port": 8080,
    "searchEngine": "elasticsearch"
  },
```

- 这是定义您的 API 后端的地方。服务器将侦听`server.host`：`server.port`除非在环境变量中另有定义。
- `server.searchEngine`用于集成，`graphql`所以请不要更改它。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/resolvers.js#L6)

```json
  "orders": {
    "useServerQueue": false
  },
  "catalog": {
    "excludeDisabledProducts": false
  },
```

- `orders.useServerQueue`允许您在使用`order`API 创建订单时使用队列流程。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L65)
- `catalog.excludeDisabledProducts`允许您在使用`mage2vs`. [跳转到代码（打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/magento/product.js#L166)

```json
  "elasticsearch": {
    "host": "localhost",
    "port": 9200,
    "protocol": "http",
    "user": "elastic",
    "password": "changeme",
    "min_score": 0.01,
    "indices": [
      "vue_storefront_catalog",
      "vue_storefront_catalog_de",
      "vue_storefront_catalog_it"
    ],
    "indexTypes": [
      "product",
      "category",
      "cms",
      "attribute",
      "taxrule",
      "review"
    ],
    "apiVersion": "5.6"
  },
```

- `elasticsearch`元素在整个平台上被广泛使用。考虑`elasticsearch`作为数据存储（数据库）工作，这是很自然的。

  - `host`, `port`,`protocol`定义`elasticsearch`连接信息。

- `user`,`password`是 的默认凭据`elasticsearch`。如果您更改了 的凭据`elasticsearch`，请相应地进行更改。[更多信息（打开新窗口）](https://www.elastic.co/guide/en/x-pack/current/security-getting-started.html)

  - ```
    min_score
    ```

    为

    ```
    min_score
    ```

    构建查询时设置 a 

    ```
    elasticsearch
    ```

    。

    跳转到代码（打开新窗口）

    提示

    `min_score`帮助您排除`_score`小于`min_score`值的文档。

  - ```
    indices
    ```

    可能包含一个或多个索引。每个索引都充当店面的数据存储。您可以使用任意名称向数组添加条目或从中删除条目。

    注意！

    但是，索引名称应与您将用于[数据泵的](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)名称相匹配。

  为默认值`indices`假设你有2个额外的专卖店（`de`，`it`）加上默认存储。

  - `indexTypes`包含映射值。你可以考虑`table`，如果你把`indices`数据库。
  - `apiVersion`定义`elasticsearch`它使用的版本。

```json
  "redis": {
    "host": "localhost",
    "port": 6379,
    "db": 0
  },
  "kue": {},
```

- `redis`包含`redis`服务器连接信息。
- `kue`包含`kue`应用程序选项。[跳转到选项代码（打开新窗口）](https://github.com/Automattic/kue/blob/master/lib/kue.js#L88)

```json
  "availableStores": [
    "de",
    "it"
  ],
```

- `availableStores`包含附加商店代码名称。如果该值是一个空数组，则意味着您只有一个默认存储。

```json
"storeViews": {
    "multistore": true,
    "mapStoreUrlsFor": [
      "de",
      "it"
    ],
    "de": {
      "storeCode": "de",
      "storeId": 3,
      "name": "German Store",
      "url": "/de",
      "elasticsearch": {
        "host": "localhost:8080/api/catalog",
        "index": "vue_storefront_catalog_de"
      },
      "tax": {
        "defaultCountry": "DE",
        "defaultRegion": "",
        "calculateServerSide": true,
    "sourcePriceIncludesTax": false
      },
      "i18n": {
        "fullCountryName": "Germany",
        "fullLanguageName": "German",
        "defaultLanguage": "DE",
        "defaultCountry": "DE",
        "defaultLocale": "de-DE",
        "currencyCode": "EUR",
        "currencySign": "EUR",
        "dateFormat": "HH:mm D-M-YYYY"
      }
    },
    "it": {
      "storeCode": "it",
      "storeId": 4,
      "name": "Italian Store",
      "url": "/it",
      "elasticsearch": {
        "host": "localhost:8080/api/catalog",
        "index": "vue_storefront_catalog_it"
      },
      "tax": {
        "defaultCountry": "IT",
        "defaultRegion": "",
        "calculateServerSide": true,
        "sourcePriceIncludesTax": false
      },
      "i18n": {
        "fullCountryName": "Italy",
        "fullLanguageName": "Italian",
        "defaultCountry": "IT",
        "defaultLanguage": "IT",
        "defaultLocale": "it-IT",
        "currencyCode": "EUR",
        "currencySign": "EUR",
        "dateFormat": "HH:mm D-M-YYYY"
      }
    }
  },
```

- `storeViews`元素包含***附加***商店的全部信息。此处不存在默认商店信息，它存在于顶层。

- `multistore`应该告诉平台是否有多个商店要考虑。例如，用于配置`tax`附加商店的值。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L14)

- `mapStoreUrlsFor`用于在前端构建 url 路由。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/multistore.ts#L85)

- ```
  de
  ```

  元素包含

  ```
  de
  ```

  商店的详细信息。您需要将这种元素用于添加到的所有附加商店，并将

  ```
  availableStores
  ```

  其

  ```
  storeCode
  ```

  作为键。

  ```
  de
  ```

  并

  ```
  it
  ```

  在

  ```
  default.json
  ```

  展品的例子，你可以复制和粘贴需要添加其他商店。

  - `storeCode` 表示商店的商店代码。

  - `storeId` 表示商店的商店ID。

  - `name` 表示商店名称。

  - `url` 表示商店的 URL。

  - ```
    elasticsearch
    ```

    包含商店的信息。此信息可能会覆盖上面定义的默认信息。

    - `host`是您的*Elasticsearch*监听的地方。
    - `index` 是商店的索引名称。

  - ```
    tax
    ```

     包含商店的税务信息。

    - `defaultCountry` 是为商店计算税费的国家/地区的代码名称。
    - `defaultRegion` 是默认区域。
    - `calculateServerSide`确定是否使用（`true`）/不使用（`false`）税计算获取价格。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/product.js#L48)
    - `sourcePriceIncludesTax`确定价格是在应用税款 ( `true`) 还是在运行时计算税款 ( ) 时存储`false`。 [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L12)

  - ```
    i18n
    ```

    意味着

    国际化

    。

    更多信息（打开新窗口）

    - `fullCountryName`是所`i18n`应用的国家/地区的全名。
    - `fullLanguageName`是所`i18n`应用的语言的全名。
    - `defaultCountry`是`i18n`默认情况下应用的国家/地区的缩写名称。
    - `defaultLanguage`是`i18n`默认情况下应用的语言的缩写名称。
    - `defaultLocale`是它`i18n`使用的默认语言环境。
    - `currencyCode` 是这家商店使用的货币代码。
    - `currencySign` 是这家商店使用的货币符号。
    - `dateFormat` 是该商店使用的日期格式。

```json
 "authHashSecret": "__SECRET_CHANGE_ME__",
 "objHashSecret": "__SECRET_CHANGE_ME__",
```

- `authHashSecret` 用于编码和解码 JWT 以供 API 使用。
- `objHashSecret`是 1) 的回退秘密哈希`authHashSecret`，2) 用于税收计算中的哈希。

```json
  "cart": {
    "setConfigurableProductOptions": false
  },
  "tax": {
    "defaultCountry": "PL",
    "defaultRegion": "",
    "calculateServerSide": true,
    "alwaysSyncPlatformPricesOver": false,
    "usePlatformTotals": true,
    "setConfigurableProductOptions": true,
    "sourcePriceIncludesTax": false
  },
```

- ```
  cart
  ```

  - `setConfigurableProductOptions`标志决定在购物车上下文中显示父项或子项（又名选定的选项项）。`true`显示父项而不是所选的选项项。 [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/o2m.js#L94)

- ```
  tax
  ```

  - `alwaysSyncPlatformPricesOver` [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L49)
  - `usePlatformTotals` 这两个选项用于确定是否从数据源动态获取价格。如果您设置为`alwaysSyncPlatformPricesOver`true，则它会根据价格跳过检查购物车项目的校验和。

```json
  "bodyLimit": "100kb",
  "corsHeaders": [
    "Link"
  ],
```

- `bodyLimit` 限制您的应用程序的请求有多大。
- `corsHeaders` 允许您添加条目 `Access-Control-Expose-Headers`

```json
  "platform": "magento2",
```

- `platform`定义使用哪个电子商务平台作为来源。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L13)

```json
  "registeredExtensions": [
    "mailchimp-subscribe",
    "example-magento-api",
    "cms-data",
    "mail-service"
  ],
  "extensions": {
    "mailchimp": {
      "listId": "e06875a7e1",
      "apiKey": "a9a3318ea7d30f5c5596bd4a78ae0985-us3",
      "apiUrl": "https://us3.api.mailchimp.com/3.0"
    },
    "mailService": {
      "transport": {
        "host": "smtp.gmail.com",
        "port": 465,
        "secure": true,
        "user": "vuestorefront",
        "pass": "vuestorefront.io"
      },
      "targetAddressWhitelist": ["contributors@vuestorefront.io"],
      "secretString": "__THIS_IS_SO_SECRET__"
    }
  },
```

- `registeredExtensions`元素包含支持的扩展列表，它引导这些扩展的入口点[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/index.js#L45)

- `extensions`包含扩展的额外配置。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/tree/master/src/api/extensions)

  - ```
    mailchimp
    ```

    提供

    ```
    POST
    ```

    ，

    ```
    DELETE
    ```

    用于API的

    Mailchimp

     

    ```
    subscribe
    ```

    方法。

    - `listId` 是您要发布的列表的 ID。
    - `apiKey` 是分配给您的 API 密钥。
    - `apiUrl`是*Mailchimp*服务的API 基本 URL 。

  - ```
    mailService
    ```

     用于通过

    Gmail

    从 Vue Storefront 发送电子邮件。

    - ```
      transport
      ```

      包含

      Gmail

      服务的基本信息。

      - `host` 是您的邮件在途中发送的地方。
      - `port` 是用于服务的端口号。
      - `secure` 决定使用 SSL 连接。
      - `user`是`username`为了服务。
      - `pass`是`password`为了服务。

    - `targetAddressWhitelist`检查用户是否确认他/她的电子邮件地址*和*源电子邮件是否被列入白名单。

    - `secretString` 用于散列。

```json
  "magento2": {
    "url": "http://demo-magento2.vuestorefront.io/",
    "imgUrl": "http://demo-magento2.vuestorefront.io/media/catalog/product",
    "assetPath": "/../var/magento2-sample-data/pub/media",
    "magentoUserName": "",
    "magentoUserPassword": "",
    "httpUserName": "",
    "httpUserPassword": "",
    "api": {
      "url": "http://demo-magento2.vuestorefront.io/rest",
      "consumerKey": "byv3730rhoulpopcq64don8ukb8lf2gq",
      "consumerSecret": "u9q4fcobv7vfx9td80oupa6uhexc27rb",
      "accessToken": "040xx3qy7s0j28o3q0exrfop579cy20m",
      "accessTokenSecret": "7qunl3p505rubmr7u1ijt7odyialnih9"
    }
  },
  "magento1": {
    "url": "http://magento-demo.local",
    "imgUrl": "http://magento-demo.local/media/catalog/product",
    "magentoUserName": "",
    "magentoUserPassword": "",
    "httpUserName": "",
    "httpUserPassword": "",
    "api": {
      "url": "http://magento-demo.local/vsbridge",
      "consumerKey": "",
      "consumerSecret": "",
      "accessToken": "",
      "accessTokenSecret": ""
    }
  },
```

- `magento2` 用于与 Magento 2 作为数据源集成。

  - `imgUrl`是基本图片网址。[跳转到代码（打开新窗口）](https://github.com/kkdg/vue-storefront-api/blob/master/src/api/img.js#L38)

  - `assetPath`用于`media`路径。[跳转到代码（打开新窗口）](https://github.com/kkdg/vue-storefront-api/blob/master/src/index.js#L22)

  - `api` 包含用于集成的 API 凭据。

    - `url` 是 Magento 2 实例的基本 URL。
    - `consumerKey`见**提示**
    - `consumerSecret`
    - `accessToken`
    - `accessTokenSecret`

    提示

    上面这 4 个节点是与 Magento 2 集成所需的凭据。[如何获取它们](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)

`magento1`与 具有相同的结构`magento2`。

```json
  "imageable": {
    "namespace": "",
    "maxListeners": 512,
    "imageSizeLimit": 1024,
    "whitelist": {
      "allowedHosts": [
        ".*divante.pl",
        ".*vuestorefront.io"
      ]
    },
    "cache": {
      "memory": 50,
      "files": 20,
      "items": 100
    },
    "concurrency": 0,
    "counters": {
      "queue": 2,
      "process": 4
    },
    "simd": true,
    "keepDownloads": true
  },
```

- `imageable` 处理涉及店面图像（尤其是产品图像）时需要配置的所有内容。

  - `maxListeners`将最大侦听器限制为请求的套接字。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/img.js#L21)

  - `imageSizeLimit` 限制最大图像大小。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/img.js#L56)

  - `whitelist` 包含图像源域的白名单

    - `allowedHosts` 包含白名单数组

    不要忘记

    您应该在其中包含您的源域，`allowedHosts`否则您对产品图片的请求将失败。[更多信息](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-1-product-image-is-not-synced)

    笔记

    从`cache`到`simd`它们用于配置[夏普 （打开新窗口）](https://github.com/lovell/sharp)图书馆。*Sharp*是一个流行的*Node.js*图像处理库。[跳转到选项文档（打开新窗口）](https://sharp.dimens.io/en/stable/api-utility/#cache)

  - `cache`限制*Sharp 的*`libvips`操作缓存。下文中的值为默认值。[跳转到代码](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/image.js#L5)[（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/image.js#L5)

    - `memory` 是用于缓存的最大内存（以 MB 为单位）。
    - `files` 是要保持打开的最大文件数。
    - `items` 是要缓存的最大操作数。

  - `concurrency` 是处理每个图像的线程数。

  - `counters` 提供对内部任务计数器的访问。

    - `queue`是队列中供*libuv*提供工作线程的任务数。
    - `process` 限制同时处理的调整大小任务的数量。

  - `simd` 使用 CPU 的 SIMD 矢量单元以提高性能。

```json
 "entities": {
    "category": {
        "includeFields": [ "children_data", "id", "children_count", "sku", "name", "is_active", "parent_id", "level", "url_key" ]
    },
    "attribute": {
      "includeFields": [ "attribute_code", "id", "entity_type_id", "options", "default_value", "is_user_defined", "frontend_label", "attribute_id", "default_frontend_label", "is_visible_on_front", "is_visible", "is_comparable" ]
    },
    "productList": {
      "sort": "",
      "includeFields": [ "type_id", "sku", "product_links", "tax_class_id", "special_price", "special_to_date", "special_from_date", "name", "price", "priceInclTax", "originalPriceInclTax", "originalPrice", "specialPriceInclTax", "id", "image", "sale", "new", "url_key" ],
      "excludeFields": [ "configurable_children", "description", "configurable_options", "sgn" ]
    },
    "productListWithChildren": {
      "includeFields": [ "type_id", "sku", "name", "tax_class_id", "special_price", "special_to_date", "special_from_date", "price", "priceInclTax", "originalPriceInclTax", "originalPrice", "specialPriceInclTax", "id", "image", "sale", "new", "configurable_children.image", "configurable_children.sku", "configurable_children.price", "configurable_children.special_price", "configurable_children.priceInclTax", "configurable_children.specialPriceInclTax", "configurable_children.originalPrice", "configurable_children.originalPriceInclTax", "configurable_children.color", "configurable_children.size", "product_links", "url_key"],
      "excludeFields": [ "description", "sgn"]
    },
    "product": {
      "excludeFields": [ "updated_at", "created_at", "attribute_set_id", "status", "visibility", "tier_prices", "options_container", "msrp_display_actual_price_type", "has_options", "stock.manage_stock", "stock.use_config_min_qty", "stock.use_config_notify_stock_qty", "stock.stock_id",  "stock.use_config_backorders", "stock.use_config_enable_qty_inc", "stock.enable_qty_increments", "stock.use_config_manage_stock", "stock.use_config_min_sale_qty", "stock.notify_stock_qty", "stock.use_config_max_sale_qty", "stock.use_config_max_sale_qty", "stock.qty_increments", "small_image"],
      "includeFields": null,
      "filterFieldMapping": {
        "category.name": "category.name.keyword"
      }
    }
  },
```

- ```
  entities
  ```

  使用具有集成

  GraphQL

  在

  Vue公司店面API

  。

  - ```
    category
    ```

    - `includeFields`包含要添加为[跳转到代码](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/category/resolver.js#L10)的字段数组`sourceInclude` [（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/category/resolver.js#L10)

  - ```
    product
    ```

    - ```
      filterFieldMapping
      ```

      添加字段映射以在查询[跳转到代码中](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/mapping.js#L19)应用过滤器

      （打开新窗口）

      - `category.name`

```json
  "usePriceTiers": false,
  "boost": {
    "name": 3,
    "category.name": 1,
    "short_description": 1,
    "description": 1,
    "sku": 1,
    "configurable_children.sku": 1
  }
```

- `usePriceTiers` 确定是否对组中的客户使用价格等级

- ```
  boost
  ```

  用于为

  Elasticsearch

  查询的字段提供加权值，越大越重。

  - `name`字段的值为*3，*以便与 匹配的查询具有`name`最高优先级。
  - `category.name`, `short_description`, `description`, `sku`,`configurable_children.sku`其余字段为默认值；1.





#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-2-study-in-local-json-for-vue-storefront)秘密2.研究`local.json`了*Vue的店面*

在 [`vue-storefront/config/default.json` （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/config/default.json)对于**前端**：

```json
"server": {
  "host": "localhost",
  "port": 3000,
  "protocol": "http",
  "api": "api",
  "devServiceWorker": false,
  "useOutputCacheTagging": false,
  "useOutputCache": false,
  "outputCacheDefaultTtl": 86400,
  "availableCacheTags": ["product", "category", "home", "checkout", "page-not-found", "compare", "my-account", "P", "C", "error"],
  "invalidateCacheKey": "aeSu7aip",
  "dynamicConfigReload": false,
  "dynamicConfigContinueOnError": false,
  "dynamicConfigExclude": ["ssr", "storeViews", "entities", "localForage", "shipping", "boost", "query"],
  "dynamicConfigInclude": [],
  "elasticCacheQuota": 4096
},
```

- `server`包含与*前端*服务器相关的各种功能的信息。

  - `host`是您的*Vue Storefront*实例开始所在的主机地址。

  - `port` 是您的*Vue Storefront*实例侦听的端口号。

  - `protocol` 用于*GraphQL*集成。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/search/adapter/graphql/searchAdapter.ts#L48)

  - `api` 确定`api` 和之间的 API 模式 `graphql`。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/resolvers/resolveGraphQL.js#L7)

    提示

    您可以查看[*GraphQL 行动计划*](https://docs.vuestorefront.io/v1/guide/basics/graphql.html)指南来帮助自己决定应该采用哪种模式。

  - `devServiceWorker`在模式下启用*服务工作者*`develop`。该*服务人员*通常缺省启用了`production`模式，而不是`develop`模式。将此标志设置为*true*也会强制在模式下使用*服务工作者*`develop`。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/service-worker/registration.js#L5)

    提示

    您可以查看[与 Service Workers 合作](https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html)以获得更好的理解。

  - `useOutputCacheTagging`决定允许*输出缓存标签*。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L168)

  - `useOutputCache`决定允许*输出缓存*。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L64)

  - `outputCacheDefaultTtl` 定义*Redis 标签缓存*的默认超时时间。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/utils/cache-instance.js#L16)

  - `availableCacheTags` 包含可用缓存标签的列表。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/cache.js#L7)

  - `invalidateCacheKey` 是用于检查无效有效性的密钥。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L66)

    提示

    你可以看看[SSR缓存](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html)为了抢的念头*输出缓存*在*Vue公司店面*

  - `dynamicConfigReload`允许`config.json`在每个服务器请求或仅第一个请求时即时重新加载（可通过以下设置进行配置）。 [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L295)

  - `dynamicConfigReloadWithEachRequest`可以根据`config.json`每个服务器请求即时重新加载。 [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L313)

  - `dynamicConfigContinueOnError`允许在动态合并配置期间跳过错误。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L240)

  - `dynamicConfigExclude`

  - `dynamicConfigInclude`

  - `elasticCacheQuota`

```json
"seo": {
  "useUrlDispatcher": true
},
"console": {
  "showErrorOnProduction" : true,
  "verbosityLevel": "display-everything"
},
"redis": {
  "host": "localhost",
  "port": 6379,
  "db": 0
},
"graphql":{
  "host": "localhost",
  "port": 8080
},
"api": {
  "url": "http://localhost:8080"
},
```

- `seo`
- `console`
- `redis`
- `graphql`
- `api`

```json
"elasticsearch": {
  "httpAuth": "",
  "host": "/api/catalog",
  "index": "vue_storefront_catalog",
  "min_score": 0.02,
  "csrTimeout": 5000,
  "ssrTimeout": 1000,
  "queryMethod": "GET",
  "disableLocalStorageQueriesCache": true,
  "searchScoring": {
    "attributes": {
      "attribute_code": {
        "scoreValues": { "attribute_value": { "weight": 1 } }
      }
    },
    "fuzziness": 2,
    "cutoff_frequency":  0.01,
    "max_expansions": 3,
    "minimum_should_match": "75%",
    "prefix_length": 2,
    "boost_mode": "multiply",
    "score_mode": "multiply",
    "max_boost": 100,
    "function_min_score": 1
  },
  "searchableAttributes": {
    "name": {
      "boost": 4
    },
    "sku": {
      "boost": 2
    },
    "category.name": {
      "boost": 1
    }
  }
},
```

`elasticsearch` ...

```json
"ssr": {
  "templates": {
    "default": "dist/index.html",
    "minimal": "dist/index.minimal.html",
    "basic": "dist/index.basic.html",
    "amp": "dist/index.amp.html"
  },
  "executeMixedinAsyncData": true,
  "initialStateFilter": ["__DEMO_MODE__", "version", "storeView"],
  "useInitialStateFilter": true
},
```

- ```
  ssr
  ```

  - ```
    templates
    ```

    - `default`

```json
"defaultStoreCode": "",
"storeViews": {
  "multistore": false,
  "commonCache": false,
  "mapStoreUrlsFor": ["de", "it"],
  "de": {
    "storeCode": "de",
    "storeId": 3,
    "name": "German Store",
    "url": "/de",
    "elasticsearch": {
      "host": "/api/catalog",
      "index": "vue_storefront_catalog_de"
    },
    "tax": {
      "sourcePriceIncludesTax": false,
      "defaultCountry": "DE",
      "defaultRegion": "",
      "calculateServerSide": true
    },
    "i18n": {
      "fullCountryName": "Germany",
      "fullLanguageName": "German",
      "defaultLanguage": "DE",
      "defaultCountry": "DE",
      "defaultLocale": "de-DE",
      "currencyCode": "EUR",
      "currencySign": "EUR",
      "dateFormat": "HH:mm D-M-YYYY"
    }
  },
  "it": {
    "storeCode": "it",
    "storeId": 4,
    "name": "Italian Store",
    "url": "/it",
    "elasticsearch": {
      "host": "/api/catalog",
      "index": "vue_storefront_catalog_it"
    },
    "tax": {
      "sourcePriceIncludesTax": false,
      "defaultCountry": "IT",
      "defaultRegion": "",
      "calculateServerSide": true
    },
    "i18n": {
      "fullCountryName": "Italy",
      "fullLanguageName": "Italian",
      "defaultCountry": "IT",
      "defaultLanguage": "IT",
      "defaultLocale": "it-IT",
      "currencyCode": "EUR",
      "currencySign": "EUR",
      "dateFormat": "HH:mm D-M-YYYY"
    }
  }
},
```

- `defaultStoreCode`

```json
"entities": {
  "optimize": true,
  "twoStageCaching": true,
  "optimizeShoppingCart": true,
  "category": {
    "includeFields": [ "id", "*.children_data.id", "*.id", "children_count", "sku", "name", "is_active", "parent_id", "level", "url_key", "url_path", "product_count", "path"],
    "excludeFields": [ "sgn" ],
    "categoriesRootCategorylId": 2,
    "categoriesDynamicPrefetchLevel": 2,
    "categoriesDynamicPrefetch": true
  },
  "attribute": {
    "includeFields": [ "attribute_code", "id", "entity_type_id", "options", "default_value", "is_user_defined", "frontend_label", "attribute_id", "default_frontend_label", "is_visible_on_front", "is_visible", "is_comparable", "tier_prices", "frontend_input" ]
  },
  "productList": {
    "sort": "",
    "includeFields": [ "type_id", "sku", "product_links", "tax_class_id", "special_price", "special_to_date", "special_from_date", "name", "price", "priceInclTax", "originalPriceInclTax", "originalPrice", "specialPriceInclTax", "id", "image", "sale", "new", "url_path", "url_key", "status", "tier_prices", "configurable_children.sku", "configurable_children.price", "configurable_children.special_price", "configurable_children.priceInclTax", "configurable_children.specialPriceInclTax", "configurable_children.originalPrice", "configurable_children.originalPriceInclTax" ],
    "excludeFields": [ "description", "configurable_options", "sgn", "*.sgn", "msrp_display_actual_price_type", "*.msrp_display_actual_price_type", "required_options" ]
  },
  "productListWithChildren": {
    "includeFields": [ "type_id", "sku", "name", "tax_class_id", "special_price", "special_to_date", "special_from_date", "price", "priceInclTax", "originalPriceInclTax", "originalPrice", "specialPriceInclTax", "id", "image", "sale", "new", "configurable_children.image", "configurable_children.sku", "configurable_children.price", "configurable_children.special_price", "configurable_children.priceInclTax", "configurable_children.specialPriceInclTax", "configurable_children.originalPrice", "configurable_children.originalPriceInclTax", "configurable_children.color", "configurable_children.size", "configurable_children.id", "configurable_children.tier_prices", "product_links", "url_path", "url_key", "status", "tier_prices"],
    "excludeFields": [ "description", "sgn", "*.sgn", "msrp_display_actual_price_type", "*.msrp_display_actual_price_type", "required_options"]
  },
  "review": {
    "excludeFields": ["review_entity", "review_status"]
  },
  "product": {
    "excludeFields": [ "*.msrp_display_actual_price_type", "required_options", "updated_at", "created_at", "attribute_set_id", "options_container", "msrp_display_actual_price_type", "has_options", "stock.manage_stock", "stock.use_config_min_qty", "stock.use_config_notify_stock_qty", "stock.stock_id",  "stock.use_config_backorders", "stock.use_config_enable_qty_inc", "stock.enable_qty_increments", "stock.use_config_manage_stock", "stock.use_config_min_sale_qty", "stock.notify_stock_qty", "stock.use_config_max_sale_qty", "stock.use_config_max_sale_qty", "stock.qty_increments", "small_image", "sgn", "*.sgn"],
    "includeFields": null,
    "useDynamicAttributeLoader": true,
    "standardSystemFields": [
      "description",
      "configurable_options",
      "tsk",
      "custom_attributes",
      "size_options",
      "regular_price",
      "final_price",
      "price",
      "color_options",
      "id",
      "links",
      "gift_message_available",
      "category_ids",
      "sku",
      "stock",
      "image",
      "thumbnail",
      "visibility",
      "type_id",
      "tax_class_id",
      "media_gallery",
      "url_key",
      "url_path",
      "max_price",
      "minimal_regular_price",
      "special_price",
      "minimal_price",
      "name",
      "configurable_children",
      "max_regular_price",
      "category",
      "status",
      "priceTax",
      "priceInclTax",
      "specialPriceTax",
      "specialPriceInclTax",
      "_score",
      "slug",
      "errors",
      "info",
      "erin_recommends",
      "special_from_date",
      "news_from_date",
      "custom_design_from",
      "originalPrice",
      "originalPriceInclTax",
      "parentSku",
      "options",
      "product_option",
      "qty",
      "is_configured"
    ]
  }
},
"cart": {
  "serverMergeByDefault": true,
  "serverSyncCanRemoveLocalItems": false,
  "serverSyncCanModifyLocalItems": false,
  "synchronize": true,
  "synchronize_totals": true,
  "setCustomProductOptions": true,
  "setConfigurableProductOptions": true,
  "askBeforeRemoveProduct": true,
  "displayItemDiscounts": true,
  "minicartCountType": "quantities",
  "create_endpoint": "http://localhost:8080/api/cart/create?token={{token}}",
  "updateitem_endpoint": "http://localhost:8080/api/cart/update?token={{token}}&cartId={{cartId}}",
  "deleteitem_endpoint": "http://localhost:8080/api/cart/delete?token={{token}}&cartId={{cartId}}",
  "pull_endpoint": "http://localhost:8080/api/cart/pull?token={{token}}&cartId={{cartId}}",
  "totals_endpoint": "http://localhost:8080/api/cart/totals?token={{token}}&cartId={{cartId}}",
  "paymentmethods_endpoint": "http://localhost:8080/api/cart/payment-methods?token={{token}}&cartId={{cartId}}",
  "shippingmethods_endpoint": "http://localhost:8080/api/cart/shipping-methods?token={{token}}&cartId={{cartId}}",
  "shippinginfo_endpoint": "http://localhost:8080/api/cart/shipping-information?token={{token}}&cartId={{cartId}}",
  "collecttotals_endpoint": "http://localhost:8080/api/cart/collect-totals?token={{token}}&cartId={{cartId}}",
  "deletecoupon_endpoint": "http://localhost:8080/api/cart/delete-coupon?token={{token}}&cartId={{cartId}}",
  "applycoupon_endpoint": "http://localhost:8080/api/cart/apply-coupon?token={{token}}&cartId={{cartId}}&coupon={{coupon}}"
},
"products": {
  "useShortCatalogUrls": false,
  "useMagentoUrlKeys": true,
  "setFirstVarianAsDefaultInURL": false,
  "configurableChildrenStockPrefetchStatic": false,
  "configurableChildrenStockPrefetchDynamic": false,
  "configurableChildrenStockPrefetchStaticPrefetchCount": 8,
  "filterUnavailableVariants": false,
  "listOutOfStockProducts": true,
  "preventConfigurableChildrenDirectAccess": true,
  "alwaysSyncPlatformPricesOver": false,
  "clearPricesBeforePlatformSync": false,
  "waitForPlatformSync": false,
  "setupVariantByAttributeCode": true,
  "endpoint": "http://localhost:8080/api/product",
  "defaultFilters": ["color", "size", "price", "erin_recommends"],
  "systemFilterNames": ["sort"],
  "filterFieldMapping": {
    "category.name": "category.name.keyword"
  },
  "colorMappings": {
    "Melange graphite": "#eeeeee"
  },
  "sortByAttributes": {
    "Latest": "updated_at",
    "Price: Low to high":"final_price",
    "Price: High to low":"final_price:desc"
  },
  "gallery": {
    "variantsGroupAttribute": "color",
    "mergeConfigurableChildren": true,
    "imageAttributes": ["image","thumbnail","small_image"],
    "width": 600,
    "height": 744
  },
  "filterAggregationSize": {
    "default": 10,
    "size": 10,
    "color": 10
  }
},
"orders": {
  "directBackendSync": true,
  "endpoint": "http://localhost:8080/api/order",
  "payment_methods_mapping": {
  },
  "offline_orders": {
    "automatic_transmission_enabled": false,
    "notification" : {
      "enabled": true,
      "title" : "Order waiting!",
      "message": "Click here to confirm the order that you made offline.",
      "icon": "/assets/logo.png"
    }
  }
},
"localForage": {
  "defaultDrivers": {
    "user": "LOCALSTORAGE",
    "cmspage": "LOCALSTORAGE",
    "cmsblock": "LOCALSTORAGE",
    "carts": "LOCALSTORAGE",
    "orders": "LOCALSTORAGE",
    "wishlist": "LOCALSTORAGE",
    "categories": "LOCALSTORAGE",
    "attributes": "LOCALSTORAGE",
    "products": "INDEXEDDB",
    "elasticCache": "LOCALSTORAGE",
    "claims": "LOCALSTORAGE",
    "syncTasks": "LOCALSTORAGE",
    "ordersHistory": "LOCALSTORAGE",
    "checkoutFieldValues": "LOCALSTORAGE"
  }
},
"reviews": {
  "create_endpoint": "http://localhost:8080/api/review/create"
},
"users": {
  "autoRefreshTokens": true,
  "endpoint": "http://localhost:8080/api/user",
  "history_endpoint": "http://localhost:8080/api/user/order-history?token={{token}}",
  "resetPassword_endpoint": "http://localhost:8080/api/user/reset-password",
  "changePassword_endpoint": "http://localhost:8080/api/user/change-password?token={{token}}",
  "login_endpoint": "http://localhost:8080/api/user/login",
  "create_endpoint": "http://localhost:8080/api/user/create",
  "me_endpoint": "http://localhost:8080/api/user/me?token={{token}}",
  "refresh_endpoint": "http://localhost:8080/api/user/refresh"
},
"stock": {
  "synchronize": true,
  "allowOutOfStockInCart": true,
  "endpoint": "http://localhost:8080/api/stock"
},
"images": {
  "useExactUrlsNoProxy": false,
  "baseUrl": "https://demo.vuestorefront.io/img/",
  "productPlaceholder": "/assets/placeholder.jpg"
},
"install": {
  "is_local_backend": true,
  "backend_dir": "../vue-storefront-api"
},
"demomode": false,
"tax": {
  "defaultCountry": "US",
  "defaultRegion": "",
  "sourcePriceIncludesTax": false,
  "calculateServerSide": true,
  "userGroupId": null,
  "useOnlyDefaultUserGroupId": false,
  "deprecatedPriceFieldsSupport": true,
  "finalPriceIncludesTax": false
},
```

- ```
  tax
  ```

  : ...

  - `defaultCountry` 是为商店计算税费的国家/地区的代码名称。
  - `defaultRegion` 是默认区域。
  - `sourcePriceIncludesTax`确定价格是在应用税款 ( `true`) 还是在运行时计算税款 ( ) 时存储`false`。 [跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L12)
  - `calculateServerSide`确定是否使用（`true`）/不使用（`false`）税计算获取价格。[跳转到代码（打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/product.js#L48)
  - `userGroupId`： 空值，
  - `useOnlyDefaultUserGroupId`： 错误的，
  - `deprecatedPriceFieldsSupport`： 真的，
  - `finalPriceIncludesTax`： 错误的

```json
"shipping": {
  "methods": [
    {
      "method_title": "DPD Courier",
      "method_code": "flatrate",
      "carrier_code": "flatrate",
      "amount": 4,
      "price_incl_tax": 5,
      "default": true,
      "offline": true
    }
  ]
},
"i18n": {
  "defaultCountry": "US",
  "defaultLanguage": "EN",
  "availableLocale": ["en-US","de-DE","fr-FR","es-ES","nl-NL", "ja-JP", "ru-RU", "it-IT", "pt-BR", "pl-PL", "cs-CZ"],
  "defaultLocale": "en-US",
  "currencyCode": "USD",
  "currencySign": "$",
  "currencyDecimal": null,
  "currencyGroup": null,
  "fractionDigits": 2,
  "priceFormat": "{sign}{amount}",
  "dateFormat": "HH:mm D/M/YYYY",
  "fullCountryName": "United States",
  "fullLanguageName": "English",
  "bundleAllStoreviewLanguages": true
},
"mailchimp": {
  "endpoint": "http://localhost:8080/api/ext/mailchimp-subscribe/subscribe"
},
"mailer": {
  "endpoint": {
    "send": "http://localhost:8080/api/ext/mail-service/send-email",
    "token": "http://localhost:8080/api/ext/mail-service/get-token"
  },
  "contactAddress": "contributors@vuestorefront.io",
  "sendConfirmation": true
},
"theme": "@vue-storefront/theme-default",
"analytics": {
  "id": false
},
"hotjar": {
  "id": false
},
"cms": {
  "endpoint": "http://localhost:8080/api/ext/cms-data/cms{{type}}/{{cmsId}}",
  "endpointIdentifier": "http://localhost:8080/api/ext/cms-data/cms{{type}}Identifier/{{cmsIdentifier}}/storeId/{{storeId}}"
},
"cms_block": {
  "max_count": 500
},
"cms_page": {
  "max_count": 500
},
"usePriceTiers": false,
"useZeroPriceProduct": true,
"query": {
  "inspirations": {
    "filter": [
      {
        "key": "category.name",
        "value" : { "eq": "Performance Fabrics" }
      }
    ]
  },
  "newProducts": {
    "filter": [
      {
        "key": "category.name",
        "value" : { "eq": "Tees" }
      }
    ]
  },
  "bestSellers": {
    "filter": [
      {
        "key": "category.name",
        "value" : { "eq": "Tees" }
      }
    ]
  }
}
```

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-3-how-to-launch-multiple-instances)秘诀 3. 如何启动多个实例

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-4-why-use-node-config)秘密 4. 为什么要使用`node-config`？

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-5-using-docker-on-mac)秘密 5. 在 Mac 上使用 Docker

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-6-using-docker-on-windows)秘诀 6. 在 Windows 上使用 Docker





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-user-friendly-installation-using-installer-deprecated)2.使用安装程序的用户友好安装（已弃用）

警告

此配方已弃用，任何版本可能不支持安装程序，恕不另行通知。请自担风险使用它。

我们更进了一步，您只需要回答一系列问题即可设置整个架构。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-preparation-2)1. 准备

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-recipe-2)2. 食谱

1. 如果您现在是 MacOS 或 Linux 用户，您可以使用非常漂亮的 CLI 安装程序进行安装 😃

```bash
git clone --single-branch --branch master https://github.com/vuestorefront/vue-storefront.git vue-storefront
cd vue-storefront
yarn
yarn installer
```

安装需要一些时间，在最后一步，您会被问到一些问题。第一个是

```text
Would you like to use https://demo.vuestorefront.io as the backend?
```

1. 如果您回答`Yes`，您将在`https://demo.vuestorefront.io`. 否则，您将需要安装`vue-storefront-api`.

2-1。使用 Vue Storefront 演示作为后端

在这种情况下，你不需要运行 Docker，你会被问到一个额外的问题：

```text
? Please provide path for images endpoint (https://demo.vuestorefront.io/img/)
```

您可以简单地继续，因此您`vue-storefront`的项目根目录中将有一个文件夹，并且 Storefront 应用程序在`http://localhost:3000`. 所有图像也将托管在`https://demo.vuestorefront.io/img/`.

2-2。在本地安装 vue-storefront-api

如果您回答了`No`上一个问题，请确保 Docker 正在运行，否则您可能会收到错误消息。您将立即被问到更多问题：

```text
? Would you like to use https://demo.vuestorefront.io as the backend? No
? Please provide Git path (if it's not globally installed) git
? Please provide path for installing backend locally ../vue-storefront-api
? Choose path for images endpoint http://localhost:8080/img/
```

至于图像端点：您可以`https://demo.vuestorefront.io/img/`再次选择或在本地主机上托管您的图像。

回答完所有问题后，安装过程将开始（安装所有依赖项可能需要一些时间）。完成后，您将收到以下消息：

```text
┌────────────────────────────────────────────────────────────────┐
│ Congratulations!                                               │
│                                                                │
│ You've just successfully installed vue-storefront.             │
│ All required servers are running in background                 │
│                                                                │
│ Storefront: http://localhost:3000                              │
│ Backend: http://localhost:8080                                 │
│                                                                │
│ Logs: /Users/natalia/Desktop/work/test/vue-storefront/var/log/ │
│                                                                │
│ Good Luck!                                                     │
└────────────────────────────────────────────────────────────────┘
```

此时您的项目应该包含 2 个文件夹：`vue-storefront`和`vue-storefront-api`. Vue Storefront 应该运行在`http://localhost:3000`：

![店面截图](https://docs.vuestorefront.io/v1/assets/img/storefront.c56ff96e.png)

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service)4. Storefront CLI 为您服务

在 1.10 发布时，我们还提供了一种新的设置方式及其所有种类，`CLI`如果我必须说的话，它是全球开发人员有史以来最喜欢的工具。当`CLI`方法可用时有很多好处，例如与其他自动化工具合作的脚本自动化。

我们将不断添加新功能 [`CLI` （打开新窗口）](https://www.npmjs.com/package/@vue-storefront/cli)随着版本的上升。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-preparation-3)1. 准备

- 你需要安装 [`npm` （打开新窗口）](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)在您的机器上和 [`yarn` （打开新窗口）](https://yarnpkg.com/lang/en/docs/install/#debian-stable).

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-recipe-3)2. 食谱

1. 使用以下标志在您的机器上安装*Vue Storefront CLI*包`-g`：

```bash
npm install -g  @vue-storefront/cli
```

📼你也可以在[bash播放中](https://asciinema.org/a/ZK0BVF7cQ8OaHHRcsaZgcOCfN)观看[🎥（打开新窗口）](https://asciinema.org/a/ZK0BVF7cQ8OaHHRcsaZgcOCfN)

1. 现在转到要在其下安装*Vue Storefront*应用程序的任何随机文件夹，并运行以下命令：

```bash
vsf init
```

1. 安装应用程序会遇到一系列问题，首先如下：

```bash
  ✔ Check avalilable versions
? Which version of Vue Storefront you'd like to install?
❯ Stable versions (recommended for production)
  Release Candidates
  In development branches (could be unstable!)
```

根据要安装的选项选择一个选项。

1. 下一个问题是关于要安装的特定版本，如下所示：

```bash
? Select specific version
  v1.8.0
❯ v1.10.0
  v1.9.2
  v1.9.1
  v1.9.0
  v1.8.5
  v1.8.4
```

选择目标版本。

1. 下一个问题是关于主题安装。

```text
? Select theme for Vue Storefront (Use arrow keys)
❯ Capybara - based on Storefront UI 
  Default 
```

您还将收到有关主题版本的问题。

```text
? Select theme version (Use arrow keys)
❯ Stable version (recommended for production) 
  In development branch (could be unstable!) 
```

1. 下一个问题是关于如何在`installer`/之间安装它，`manual`如下所示：

```bash
? Would you like to use friendly installer or install Vue Storefront manually?
❯ Installer (MacOS/Linux only)
  Manual installation
```

让我们`Installer`现在选择这个选项。

然后你会看到机器开始安装：

```bash
? Would you like to use friendly installer or install Vue Storefront manually? Installer (MacOS/Linux only)
  ✔ Copying Vue Storefront files
  ⠸ Installing dependencies
    Running installer
```

1. 准备完成后，会弹出另一系列问题`installer`，如下所示：

```bash
yarn run v1.17.3
$ node ./core/scripts/installer
┌─────────────────────────────────────────────────┐
│ Hi, welcome to the vue-storefront installation. │
│ Let's configure it together :)                  │
└─────────────────────────────────────────────────┘

? Would you like to use https://demo.vuestorefront.io as the backend? (Y/n)
```

从现在开始，问题将与通过`installer`. 您可以在[使用安装程序安装](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_2-using-installer)时进一步遵循它

1. 一旦问题得到回答，剩下的过程就会被采取行动。完成后，您将看到如下屏幕：

```bash
? Please provide path for images endpoint https://demo.vuestorefront.io/img/

 Trying to create log files...

 Creating storefront config 'config/local.json'...

 Build storefront npm...

 Starting storefront server...

┌────────────────────────────────────────────────────┐
│ Congratulations!                                   │
│                                                    │
│ You've just successfully installed vue-storefront. │
│ All required servers are running in background     │
│                                                    │
│ Storefront: http://localhost:3000                  │
│ Backend: https://demo.vuestorefront.io             │
│                                                    │
│ Logs: /home/dex/code/cli/vue-storefront/var/log/   │
│                                                    │
│ Good Luck!                                         │
  ✔ Copying Vue Storefront files
  ✔ Installing dependencies
  ✔ Running installer
```

1. 现在访问您浏览器上显示在屏幕上的地址，然后瞧！：

![home_borderline](https://docs.vuestorefront.io/v1/assets/img/home-vuestorefront.c88538b7.png)

恭喜！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_3-peep-into-the-kitchen-what-happens-internally-2)3.窥视厨房（内部发生的事情）

*Vue Storefront*人员准备了为作为包提供`CLI`的*Vue Storefront*应用程序安装整个基础架构的方式`npm`。现在就像`npm`在任何机器上安装软件包一样简单。安装然后运行带有几个选项的命令对于启动和运行应用程序来说已经足够了。相信我，只要可访问，您的下一个*Vue Storefront*应用程序将立即与您同在`CLI`。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-chef-s-secret-protip-2)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-1-install-with-manual-path)揭秘1.安装*手动*路径

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-2-install-a-module-skeleton)秘诀2.安装*模块*骨架

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#secret-3-build-your-own-command-for-vsf-cli)秘密 3. 建立你自己的命令 `vsf-cli`