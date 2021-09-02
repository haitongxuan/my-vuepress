# Ch 2. VSF 上下文中的 Elasticsearch

# 第 2 章 VSF 上下文中的 Elasticsearch

在本章中，我们将介绍：

- [0. 介绍](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_0-introduction)
- [1.现在VSF也支持ES7了](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-now-es7-is-also-supported-in-vsf)
- [2. 为 VSF 扩展 Elasticsearch 实体](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-extend-elasticsearch-entities-for-vsf)



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_0-introduction)0. 介绍

*Elasticsearch*是*Vue Storefront*为其数据存储的选择，这很自然，这背后一定有原因。顾名思义，*Elastic*意味着可扩展、可扩展、分布式和类型不可知，这在大数据时代非常棒，而*搜索*意味着索引、过滤、在*CRUD*中*读取*，这显示了它的重点。到目前为止一切顺利，那么，Elasticsearch 有什么好大惊小怪的呢？

*Elasticsearch*是一个基于*Apache Lucene*定义的全文搜索和分析引擎。它采用倒排索引，这意味着*文档*通过所有出现的唯一*术语*进行索引，并且利用组装每个字段数据结构的能力可以解释为什么*Elasticsearch*是超快的。

另一个优点是，值得注意的是，它是天生的分布式。来自单个节点 elasticsearch 和它的多个集群的经验几乎相同，并且这样做是无痛的，因为它开箱即用。几乎有很多观点可以说明为什么*Elasticsearch*是您选择的数据中心和店面之间的中间站。现在让我们继续讨论它是如何在*Vue Storefront 中*实现的。

*Vue Storefront*为自己定义了与后端无关的 PWA 电子商务解决方案，其中*Vue Storefront*是顾名思义的店面，而*Elasticsearch*用作*目录*及其兄弟数据（如*taxrule*、*产品*等）的数据存储。当店面请求有关产品的信息时，它会获取有关从*Elasticsearch*查询的*术语*的*文档**索引*，而无需将其遍历到源 Web 商店（无论是 Magento），因此它会跳过其数据库后面的商店的所有繁重负载让客户满意的愉快体验。

闲话少说，让我们看看什么是开胃菜😃



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-now-es7-is-also-supported-in-vsf)1.现在VSF也支持ES7了

*Elasticsearch*一直在大规模升级，间隔如此之大，在`6.7`和`7.0`. 你能感受到社区的热度吗？虽然我们可以享受*Elastic Stack*的改进和增强，但在平滑升级之前有一个列表需要检查。而且它的工作方式与您需要修复*Vue Storefront*堆栈以与*Elasticsearch 7.x*兼容的方式相同。

由于*Vue Storefront*堆栈主要通过*Vue Storefront API*与*Elasticsearch*相关联，因此您应该修复*Vue Storefront API 的*文件以及来自*Vue Storefront*的一些调用者。但是，大多数更改都是有意在平台的核心部分进行的，因此您的劳动将被最小化，以实现内心的平静。尽管如此，*配置*和/或*迁移*需要在必要时进行修复。这个食谱会一步一步地教你如何做。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-preparation)1. 准备

- 您需要[设置*Vue Storefront*堆栈，](https://docs.vuestorefront.io/v1/guide/cookbook/setup)包括*Vue Storefront API*。
- *Vue Storefront*版本`1.11`及更高版本支持 ES7 。你应该相应地拥有它。
- *Vue Storefront API*版本`1.11`及更高版本支持 ES7 。你也应该相应地拥有它。
- ES7 由*mage2vuestorefront*和 branch支持`feature/es7`。你也应该拥有它。

笔记

如何下载最新的`1.11`通过`git`中解释[*普罗蒂普*](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-upgrade-to-1-11-technically-foolproof-approach)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-recipe)2. 食谱

1. 您应该修复`docker-compose.nodejs.yml`文件，因为链接的*Elasticsearch*容器应该更新如下：

docker-compose.nodejs.yml改变

|      | @@ -6,7 +6,7 @@ 服务：                           |
| ---- | ------------------------------------------------ |
| 66   | 语境： 。                                        |
| 77   | dockerfile: docker/vue-storefront-api/Dockerfile |
| 88   | 取决于：                                         |
| 9    | -       -~~es1~~                                 |
| 9    | +       -es7                                     |
| 1010 | - Redis                                          |
| 1111 | env_file: docker/vue-storefront-api/default.env  |
| 1212 | 环境：                                           |

1. `docker-compose`对于*Elasticsearch 7*被包含在`1.11`。让我们从**Vue Storefront API 根路径**运行*Elasticsearch 7*的 docker 容器，如下所示：

```bash
docker-compose -f docker-compose.elastic7.yml -f docker-compose.nodejs.yml up
```

提示

您可以在*分离*模式下使用选项标志运行它，`-d`如

```bash
docker-compose -f docker-compose.elastic7.yml -f docker-compose.nodejs.yml up -d
```

1. 您将看到如下屏幕：

```bash
Starting es7 ... 
Starting vuestorefrontapi_redis_1 ... 
Starting vuestorefrontapi_redis_1
Starting vuestorefrontapi_redis_1 ... done
Attaching to es7, vuestorefrontapi_redis_1
es7      | OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
redis_1  | 1:C 23 Dec 18:00:28.554 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1  | 1:C 23 Dec 18:00:28.554 # Redis version=4.0.14, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1  | 1:C 23 Dec 18:00:28.554 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
redis_1  | 1:M 23 Dec 18:00:28.555 * Running mode=standalone, port=6379.
redis_1  | 1:M 23 Dec 18:00:28.555 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
redis_1  | 1:M 23 Dec 18:00:28.555 # Server initialized
redis_1  | 1:M 23 Dec 18:00:28.556 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
redis_1  | 1:M 23 Dec 18:00:28.556 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis_1  | 1:M 23 Dec 18:00:28.556 * DB loaded from disk: 0.000 seconds
redis_1  | 1:M 23 Dec 18:00:28.556 * Ready to accept connections
es7      | {"type": "server", "timestamp": "2019-12-23T18:00:30,129+0000", "level": "INFO", "component": "o.e.e.NodeEnvironment", "cluster.name": "docker-cluster", "node.name": "be374d24f82e",  "message": "using [1] data paths, mounts [[/ (overlay)]], net usable_space [149.4gb], net total_space [250.9gb], types [overlay]"  }
es7      | {"type": "server", "timestamp": "2019-12-23T18:00:30,133+0000", "level": "INFO", "component": "o.e.e.NodeEnvironment", "cluster.name": "docker-cluster", "node.name": "be374d24f82e",  "message": "heap size [494.9mb], compressed ordinary object pointers [true]"  }
es7      | {"type": "server", "timestamp": "2019-12-23T18:00:30,135+0000", "level": "INFO", "component": "o.e.n.Node", "cluster.name": "docker-cluster", "node.name": "be374d24f82e",  "message": "node name [be374d24f82e], node ID [e8P_hrouSEKIWnylBaelVw], cluster name [docker-cluster]"  }
# abridged ...
```

📼你也可以在[bash播放中](https://asciinema.org/a/NcfdFuMkJ5LWzVbgb7m35coOV)观看[🎥（打开新窗口）](https://asciinema.org/a/NcfdFuMkJ5LWzVbgb7m35coOV)

您可能会注意到该脚本生成了两个容器，其中一个用于 for`redis`而另一个用于`elasticsearch 7`。（`kibana`容器是可选的`1.11`）

1. `localhost:9200`从您的浏览器访问然后它应该打印如下：

```text
{
  "name" : "be374d24f82e",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "3Gk6anHkQU--5TmenJkdrw",
  "version" : {
    "number" : "7.3.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "1c1faf1",
    "build_date" : "2019-09-06T14:40:30.409026Z",
    "build_snapshot" : false,
    "lucene_version" : "8.1.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

1. 修复`local.json`到用于更新配置`indexTypes`和`apiVersion`下`elasticsearch`如下：

配置/本地.json改变

|      | @@ -2,8 +2,6 @@                   |
| ---- | --------------------------------- |
| 22   | “主机”：“本地主机”，              |
| 33   | “端口”：9200，                    |
| 44   | "协议": "http",                   |
| 5    | -     “用户”：“弹性”，            |
| 6    | -     "密码": "changeme",         |
| 75   | “min_score”：0.01，               |
| 86   | “指数”：[                         |
| 97   | "vue_storefront_catalog",         |
|      | @@ -13,10 +11,11 @@               |
| 1311 | “索引类型”：[                     |
| 1412 | “产品”，                          |
| 1513 | “类别”，                          |
| 16   | ——       ”~~厘米~~”，             |
| 14   | +       "cms_block”，             |
| 15   | +       "cms_page",               |
| 1716 | “属性”，                          |
| 1817 | "税法",                           |
| 1918 | “审查”                            |
| 2019 | ],                                |
| 21   | -     "apiVersion": "~~5~~.~~6~~” |
| 22   | -   },                            |
| 20   | +     "apiVersion": "7.1”         |
| 21   | +   },                            |

1. 一旦*Elasticsearch 7*实例启动并运行，然后运行新脚本，该脚本使用应用的正确数据类型的字段创建索引。

```bash
yarn db7 new
```

这是因为您应该新放置*Elasticsearch 7 的*映射，它只允许每个*索引*一个*文档*。[更多信息](https://www.elastic.co/guide/en/elasticsearch/reference/current/breaking-changes-7.0.html)[（打开新窗口）](https://www.elastic.co/guide/en/elasticsearch/reference/current/breaking-changes-7.0.html)

屏幕吐出日志如下：

```bash
yarn run v1.21.1
$ node scripts/db7.js new
** Hello! I am going to create NEW ES index
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Public index alias does not exists aliases_not_found_exception
Done in 2.27s.
```

📼你也可以在[bash播放中](https://asciinema.org/a/UErONnmqK1m2EFNkWRrG0E6p4)观看[🎥（打开新窗口）](https://asciinema.org/a/UErONnmqK1m2EFNkWRrG0E6p4)

别担心`aliases_not_found_exception`。这只是意味着它未能清除孤立的别名，因为首先没有要删除的别名。

1. 从终端针对 Elasticsearch API 检查映射是否已成功创建：

```bash
curl -XGET 'http://localhost:9200/_mapping?pretty=true'
```

结果应显示为：

```bash
{
  "vue_storefront_catalog_cms_block" : {
    "mappings" : {
      "properties" : {
        "creation_time" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        },
        "id" : {
          "type" : "long"
        },
        "identifier" : {
          "type" : "keyword"
        },
        "update_time" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        }
      }
    }
  },
  "vue_storefront_catalog_review" : {
    "mappings" : { }
  },
  "vue_storefront_catalog_taxrule" : {
    "mappings" : {
      "properties" : {
        "id" : {
          "type" : "long"
        },
        "rates" : {
          "properties" : {
            "rate" : {
              "type" : "float"
            }
          }
        }
      }
    }
  },

# ... abridged ...

  "vue_storefront_catalog_category" : {
    "mappings" : {
      "properties" : {
        "created_at" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        },
        "is_active" : {
          "type" : "boolean"
        },
        "parent_id" : {
          "type" : "integer"
        },
        "position" : {
          "type" : "integer"
        },
        "product_count" : {
          "type" : "integer"
        },
        "slug" : {
          "type" : "keyword"
        },
        "updated_at" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        },
        "url_key" : {
          "type" : "keyword"
        },
        "url_path" : {
          "type" : "keyword"
        }
      }
    }
  }
}
```

你会发现每个索引只有它的一个带有约定的映射`${indexName}_${entityType}`。

1. 下一步是将数据从源 Web 商店抽取到新创建的 ES7 索引。转到*mage2vuestorefront*目录和修复`apiVersion`中`elasticsearch`的节点`config.js`。

源代码/config.js改变

|      | @@ -61,7 +61,7 @@ module.exports = {                         |
| ---- | ------------------------------------------------------------ |
| 6161 | },                                                           |
| 6262 |                                                              |
| 6363 | 弹性搜索：{                                                  |
| 64   | -     apiVersion: process.env.ELASTICSEARCH_API_VERSION \|\| '~~5~~.~~6~~' |
| 64   | +     apiVersion: process.env.ELASTICSEARCH_API_VERSION \|\| '7.1' |
| 6565 | },                                                           |
| 6666 |                                                              |
| 6767 | Redis：{                                                     |

有了这个变化`config.js`，`mage2vuestorefront`知道如何处理你的*Elasticsearch*版本高于`6`.

1. 现在使用 shell 教机器你的配置`ENV`，如下例：

```bash
export TIME_TO_EXIT=2000
export MAGENTO_CONSUMER_KEY=lv1unkldzkcex68l3eojut4j66qqho8w
export MAGENTO_CONSUMER_SECRET=zhkuqvweo0bsg14noujqje49x3wht0qr
export MAGENTO_ACCESS_TOKEN=z6ftgc5005212bc6lnszxa7d7ocl8hgc
export MAGENTO_ACCESS_TOKEN_SECRET=h8tikjq9sz7tqm6hyhdfgs96krb6qzyk

export MAGENTO_URL=http://local.magento/rest # Replace the url with your Magento 2 URL
export INDEX_NAME=vue_storefront_catalog # This will be the base name of the index we use
```

在 shell 中键入它们，然后您会`ENV`记住这些变量，直到会话过期。

提示

如果您不知道如何获取这些凭据，请查看[数据导入](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)

1. 运行您的工作程序以将其从源网络商店提取到 Elasticsearch ：

```bash
node --harmony cli.js categories --removeNonExistent=true
```

屏幕将显示如下日志：

```bash
2020-01-07T07:21:00.959Z - debug: Elasticsearch module initialized!
info: Winston logging library initialized.
2020-01-07T07:21:00.991Z - info: Connected correctly to server
2020-01-07T07:21:00.992Z - info: TRANSACTION KEY = 1578381660987
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories
debug: Response received.
Dest. cat path =  default-category-2
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/2
debug: Response received.
Dest. cat path =  default-category-2
2020-01-07T07:21:02.029Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_2
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/4
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/5
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/3
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/7
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/8
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/9
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/6
debug: Response received.
Dest. cat path =  boy/pants/pants-4
2020-01-07T07:21:03.427Z - info: Subcategory data extended for 2, children object 4
debug: Response received.
Dest. cat path =  girl/pants/pants-9
2020-01-07T07:21:03.431Z - info: Subcategory data extended for 2, children object 9

# abridged ...
```

📼你也可以在[bash播放中](https://asciinema.org/a/IViPWiFBkiE4of9L3ykncoPmU)观看[🎥（打开新窗口）](https://asciinema.org/a/IViPWiFBkiE4of9L3ykncoPmU)

使用以下命令确认您在正确的路径上：

```bash
curl -XGET "http://localhost:9200/vue_storefront_catalog_category/_search?pretty=true"
```

响应应如下所示：

```bash
# ... abridged
      {
        "_index" : "vue_storefront_catalog_category",
        "_type" : "_doc",
        "_id" : "8",
        "_score" : 1.0,
        "_source" : {
          "id" : 8,
          "parent_id" : 6,
          "name" : "Outer",
          "is_active" : true,
          "position" : 2,
          "level" : 3,
          "product_count" : 1,
          "children_data" : [ ],
          "children" : "",
          "created_at" : "2019-12-24 17:05:27",
          "updated_at" : "2019-12-24 17:05:27",
          "path" : "1/2/6/8",
          "available_sort_by" : [ ],
          "include_in_menu" : true,
          "display_mode" : "PRODUCTS",
          "is_anchor" : "1",
          "children_count" : "0",
          "custom_use_parent_settings" : "0",
          "custom_apply_to_products" : "0",
          "url_key" : "outer-8",
          "url_path" : "girl/outer/outer-8",
          "slug" : "outer-8",
          "tsk" : 1578381660987
        }
      },
      {
        "_index" : "vue_storefront_catalog_category",
        "_type" : "_doc",
        "_id" : "9",
        "_score" : 1.0,
        "_source" : {
          "id" : 9,
          "parent_id" : 6,
          "name" : "Pants",
          "is_active" : true,
          "position" : 3,
          "level" : 3,
          "product_count" : 0,
          "children_data" : [ ],
          "children" : "",
          "created_at" : "2019-12-24 17:05:52",
          "updated_at" : "2019-12-24 17:05:52",
          "path" : "1/2/6/9",
          "available_sort_by" : [ ],
          "include_in_menu" : true,
          "display_mode" : "PRODUCTS",
          "is_anchor" : "1",
          "children_count" : "0",
          "custom_use_parent_settings" : "0",
          "custom_apply_to_products" : "0",
          "url_key" : "pants-9",
          "url_path" : "girl/pants/pants-9",
          "slug" : "pants-9",
          "tsk" : 1578381660987
        }
      },
      {
        "_index" : "vue_storefront_catalog_category",
        "_type" : "_doc",
        "_id" : "7",
        "_score" : 1.0,
        "_source" : {
          "id" : 7,
          "parent_id" : 6,
          "name" : "Skirt",
          "is_active" : true,
          "position" : 1,
          "level" : 3,
          "product_count" : 1,
          "children_data" : [ ],
          "children" : "",
          "created_at" : "2019-12-24 17:05:13",
          "updated_at" : "2019-12-24 17:26:22",
          "path" : "1/2/6/7",
          "available_sort_by" : [ ],
          "include_in_menu" : true,
          "display_mode" : "PRODUCTS",
          "is_anchor" : "1",
          "children_count" : "0",
          "custom_use_parent_settings" : "0",
          "custom_apply_to_products" : "0",
          "url_key" : "skirt-7",
          "url_path" : "girl/skirt/skirt-7",
          "slug" : "skirt-7",
          "tsk" : 1578381660987
        }
      }
    ]
  }
}
```

1. 重复此过程，直到您完成导入之前映射到*Elasticsearch 的*所有索引的实体，例如*产品*、*属性*、*税收规则*等，如下所示：

```bash
node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent=true
node --harmony cli.js taxrule --removeNonExistent=true
node --harmony cli.js products --removeNonExistent=true --partitions=1
node --harmony cli.js reviews
node --harmony cli.js blocks
node --harmony cli.js pages
```

笔记

Magento 的*评论*、*块*和*页面的*API 端点不是开箱即用的。您应该自己为它们安装其他模块。[审查 （打开新窗口）](https://github.com/divanteLtd/magento2-review-api),[厘米（打开新窗口）](https://github.com/SnowdogApps/magento2-cms-api)

现在您已准备好启动由*Elasticsearch 7*提供支持的 Vue Storefront 商店。

1. 运行以下命令以在*Vue Storefront*根路径启动您的商店。

```sh
docker-compose up 
```

你们一切顺利！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_3-peep-into-the-kitchen-what-happens-internally)3.窥视厨房（内部发生的事情）

*Elasticsearch*经历了不断的密集更新。大多数情况下，它是具有向后兼容性的渐进式更改，因此即使您将其升级到另一个也不会有太大影响。然而，这一次升级到`7.x`有一些重大变化，其中一个值得注意的是，`_type`索引不允许有多个。

*Elasticsearch 7.x 的*修复中断已成功包含在*Vue Storefront 1.11*升级中。

您需要做的第一件事是使用`git`. 容器的升级版本在`docker-compose`文件中进行了描述，因此它包含的内容被很好地封装起来，除非您想调整自定义而不是默认设置，否则您不必担心它在内部是如何工作的。

接下来，您应该根据类型为*Elasticsearch*索引新创建每个映射。然后使用*mage2vuestorefront*将您的数据泵入*Elasticsearch*。

如果到目前为止一切按计划进行那么好，那么您的 7-Elasticsearch 应该作为具有增强索引能力的数据存储的高性能搜索引擎。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_4-chef-s-secret-protip)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-upgrade-to-1-11-technically-foolproof-approach)秘诀一、`1.11`技术上如何升级？万无一失的方法。

有 3 个存储库应该升级为`1.11`.

查看

请确保您的 git 空间是干净的，并且与即将进行的合并没有任何冲突。

首先，转到***Vue Storefront API***文件夹并键入以下内容：

```sh
git fetch
git merge v1.11.0
```

笔记

请注意`v1.11.0`，该*标签*表示当前版本的最终提交。

接下来，转到***Vue Storefront***文件夹并键入以下内容：

```sh
git fetch
git merge v1.11.0
```

最后，转到***mage2vuestorefront***文件夹并运行以下命令：

```sh
git fetch
git merge origin/feature/es7
```

现在你都准备好了😃

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-extend-elasticsearch-entities-for-vsf)2. 为 VSF 扩展 Elasticsearch 实体

网上商店通常具有某些类型的模型和场景。（因为商店归根结底是商店！你对商店有什么期望？😉）他们为社区所熟知，大多数电子商务软件已经按照预期将它们实现到他们的框架中，这对你的新业务有好处。这些表示为实体，即*Catalog*、*Products*、*Attributes*、*Tax rule*等。由于*Vue Storefront*作为通往这些电子商务后端的华丽门户，它还需要尽可能平滑地反映这些实体。

大部分主要实体已`core`按预期在 VSF 中实现，但您可能仍需要添加或删除其他实体，因为您希望它完成您的任务。这个食谱会让你知道如何去做。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-preparation-2)1. 准备

- 您需要[设置*Vue Storefront*堆栈，](https://docs.vuestorefront.io/v1/guide/cookbook/setup)包括*Vue Storefront API*。
- 有两种方法来处理*搜索适配器*的*实体类型*; 一个是*API*（方案 A），另一个是[*GraphQL* （打开新窗口）](https://graphql.org/)（配方B）
- 您应该在 Magento 2 中使用自定义实体模块来导入自定义实体。[在此处](https://github.com/kkdg/Offline_Stores)下载示例模块[（打开新窗口）](https://github.com/kkdg/Offline_Stores)
- 为了测试，您应该为新实体导入数据。[2-0。开胃菜会](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-0-appetizer)指导您如何做。

提示

默认的*搜索适配器*是*API*。

为了改变哪个*Search Adapter*应该在work，请看这里[Chef的秘诀1.如何切换search adapters](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-switch-search-adapters)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-0-appetizer)2-0 开胃菜

1. 例如，假设您需要*在线商店*的*离线商店*的实体类型。因此，您可以将商店的信息存储在数据存储中，在这种情况下是*Elasticsearch，*在需要时读取数据，就像您想在结账时显示*离线商店一样*，如果他们住在附近，客户可以选择。

笔记

有两种方法可以将数据导入数据存储。一用[`mage2vuestorefront` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront)它运行*NodeJS*脚本来完成这项工作，而另一个用于使用[`magento2-vsbridge-indexer` （打开新窗口）](https://github.com/vuestorefront/magento2-vsbridge-indexer)这是用于该作业的本机 Magento 2 模块。

在这个食谱中，我们选择前者。不过别担心，我们也会在[厨师的秘密 2 中研究](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-2-how-to-make-a-custom-import-using-magento2-vsbridge-indexer)后者。

1. 转到***mage2vuestorefront***根文件夹并执行以下操作：

```bash
cd src/adapters/magento 
```

该文件夹是连接器适配器所在的位置。

1. 创建以下名为的文件，例如，`offline_stores.js`如下：

```js
'use strict';

let AbstractMagentoAdapter = require('./abstract');
const CacheKeys = require('./cache_keys');
const util = require('util');

class OfflineStoresAdapter extends AbstractMagentoAdapter {

 getEntityType() {
   return 'offline_stores';
 }

 getName() {
   return 'adapters/magento/OfflineStoresAdapter';
 }

 getSourceData(context) {
   return this.api.offlineStores.list();
 }

 /**  Regarding Magento 2 api docs and reality we do have an exception here that items aren't listed straight in the response but under "items" key */
 prepareItems(items) {
   if(!items)
     return items;

   if (items.total_count)
     this.total_count = items.total_count;
   
   if(items.items)
     items = items.items; // this is an exceptional behavior for Magento 2 api  for attributes

   return items;
 }

 isFederated() {
   return false;
 }

 preProcessItem(item) {
   return new Promise((done, reject) => {
     if (item) {

     }

     return done(item);
   });
 }

 /**
  * We're transforming the data structure of item to be compliant with Smile.fr Elastic Search Suite
  * @param {object} item  document to be updated in elastic search
  */
 normalizeDocumentFormat(item) {
   return item;
 }
}

module.exports = OfflineStoresAdapter;
```

这是适配器的基本框架。我们稍后会看这个。

1. 现在，转到`magento2-rest-client`library ：

```bash
cd magento2-rest-client/lib
```

1. 在这里，我们需要`offline_stores.js`使用以下内容为适配器创建一个库文件：

```js
var util = require('util');

module.exports = function (restClient) {
   var module = {};

   module.list = function (searchCriteria) {
       var endpointUrl = util.format('/offline-stores');
       return restClient.get(endpointUrl);
   }

   return module;
}
```

此库文件仅处理*GET* API 以从 Magento 2 获取离线商店列表。

笔记

```js
var endpointUrl = util.format('/offline-stores');
```

这一行特别重要，因为`'/offline-stores'`它是确定 API url 端点的地方。它应该匹配 Magento 2 端的 API url 端点。

1. 现在我们需要将这个库包含在`index.js`：

```bash
cd ..
vi index.js
```

然后按如下方式修复它：

```js
// ... abridged 

var blocks = require('./lib/blocks');
var pages = require('./lib/pages');
var offlineStores = require('./lib/offline_stores');

const MAGENTO_API_VERSION = 'V1';

module.exports.Magento2Client = function (options) {
   var instance = {};

   options.version = MAGENTO_API_VERSION;

   var client = RestClient(options);

   instance.offlineStores = offlineStores(client);
   instance.attributes = attributes(client);
   instance.categories = categories(client);

// abridged ...
```

1. 创建命令导入数据的时间，转到`cli.js`所在文件夹：

```bash
cd ../../.. # ./src 
```

打开`cli.js`并添加一个方法和一个命令，如下所示：

```js
// ... abridged 

const reindexOfflineStores = (adapterName) => {
 return new Promise((resolve, reject) => {
   let adapter = factory.getAdapter(adapterName, 'offline_stores');
   adapter.run({
     done_callback: () => {
       logger.info('Task done! Exiting in 30s...');
       setTimeout(process.exit, TIME_TO_EXIT); // let ES commit all changes made
       resolve();
     }
   });
 });
}

program
 .command('offlinestores')
 .option('--adapter <adapter>', 'name of the adapter', 'magento')
 .option('--removeNonExistent <removeNonExistent>', 'remove non existent products', false)
 .action(async (cmd) => {
   await reindexOfflineStores(cmd.adapter, cmd.removeNonExistent);
 });

program
 .command('attributes')
 .option('--adapter <adapter>', 'name of the adapter', 'magento')
// abridged...
```

1. 一切都很好，现在运行命令导入离线商店信息！

```bash
node cli.js offlinestores
```

您将看到如下所示的屏幕：

```bash
2020-03-10T09:22:30.359Z - debug: Elasticsearch module initialized!
info: Winston logging library initialized.
2020-03-10T09:22:30.796Z - info: Connected correctly to server
2020-03-10T09:22:30.796Z - info: TRANSACTION KEY = 1583832150786
debug: Calling API endpoint: GET http://localhost/rest//V1/offline-stores
debug: Response received.
2020-03-10T09:22:32.130Z - info: Importing 0 of 3 - 1 with tsk = 1583832150786
2020-03-10T09:22:32.131Z - info: Tasks count = 2
2020-03-10T09:22:32.139Z - info: Importing 1 of 3 - 2 with tsk = 1583832150786
2020-03-10T09:22:32.139Z - info: Tasks count = 1
2020-03-10T09:22:32.139Z - info: Importing 2 of 3 - 3 with tsk = 1583832150786
2020-03-10T09:22:32.140Z - info: Tasks count = 0
2020-03-10T09:22:32.140Z - info: No tasks to process. All records processed!
2020-03-10T09:22:32.140Z - info: Task done! Exiting in 30s...
```

笔记

在运行命令之前，您应该像这样告诉机器环境变量：

```bash
export MAGENTO_URL=http://localhost/rest
```

如果您为 Magento 2 实例使用不同的网址，请更换网址。

1. 让我们确认结果并结束它！

```bash
curl localhost:8080/api/catalog/vue_storefront_catalog/offline_stores/_search
```

除非有问题，否则响应应如下所示：

```bash
{
  "took": 2,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 3,
      "relation": "eq"
    },
    "max_score": 1,
    "hits": [
      {
        "_index": "vue_storefront_catalog_offline_stores",
        "_type": "_doc",
        "_id": "2",
        "_score": 1,
        "_source": {
          "id": "2",
          "name": "Wrocaw",
          "address": "Ulica Romana Dmowskiego 17, 50-203 Wrocaw, Poland",
          "phone": "+48 577 032 500",
          "is_active": "1",
          "tsk": 1583832150786
        }
      },
      {
        "_index": "vue_storefront_catalog_offline_stores",
        "_type": "_doc",
        "_id": "3",
        "_score": 1,
        "_source": {
          "id": "3",
          "name": "Seoul",
          "address": "Seoul GangNam Street 1st 12",
          "phone": "+82 10 2364 3330",
          "is_active": "1",
          "tsk": 1583832150786
        }
      },
      {
        "_index": "vue_storefront_catalog_offline_stores",
        "_type": "_doc",
        "_id": "1",
        "_score": 1,
        "_source": {
          "id": "1",
          "name": "Warszawa",
          "address": "Koci pw. w. Michaa Archanioa",
          "phone": "+48 22 845 46 04",
          "is_active": "1",
          "tsk": 1583832150786
        }
      }
    ]
  }
}
```

您已成功导入自定义实体！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-1-recipe-a-with-api)2-1。配方 A（带 API）

1. 首先，我们需要在下面创建一个`api`文件夹`src/search/adapter/`：

```bash
cd src/search/adapter
mkdir api 
```

1. `searchAdapter`从`core`文件夹复制文件：

```bash
cp ../../../core/lib/search/adapter/api/searchAdapter.ts api/
```

笔记

您应该复制整个`searchAdapter.ts`文件的原因是，这样做时您的适配器还将默认实体包含`core`到自定义文件中，因为您的自定义实体无法增量添加到默认值中。这就是[为什么（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/search/adapter/searchAdapterFactory.js#L12-L20)

1. 编写一个函数来处理`searchAdapter.ts`刚刚复制的自定义实体类型的添加，并在同一个类的*构造*函数中对其进行初始化，如下所示：

```js
// ... abridged

export class SearchAdapter {
 public entities: any

 public constructor () {
   this.entities = []
   this.initBaseTypes()
   this.initCustomTypes()
 }

 //... abridged ...

 public initCustomTypes() {
   this.registerEntityType('offline_stores', {
     queryProcessor: (query) => {
       // function that can modify the query each time before it's being executed
       return query
     },
     resultProcessor: (resp, start, size) => {
       return this.handleResult(resp, 'offline_stores', start, size)
     }
   })
 }
}
```

在这里你可以看到以`registerEntityType`方法添加`offline_stores`实体类型为例。

如果您想添加更多实体，您可以根据需要多次克隆该示例并根据需要更改实体名称。

提示

`initCustomTypes`上面的方法是随意命名的，因此您实际上可以为该方法使用任何其他名称。

现在您已准备好使用您刚刚创建的自定义实体。下一步让您对如何确认有一个简单的想法。（可选的）

1. 前往`src/modules/instant-checkout/components`并打开`InstantCheckout.vue`。修复如下：

```js
// ... abridged 
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import { registerModule } from '@vue-storefront/core/lib/modules'
import { OrderModule } from '@vue-storefront/core/modules/order'
import { quickSearchByQuery } from '@vue-storefront/core/lib/search'; // Import the method to fetch data from ES

const storeView = currentStoreView()

// ... abridged

 methods: {
   async showPayment () { // the method should be done with async/await
     let offlineStores = await quickSearchByQuery({ entityType: 'offline_stores' }); 
     alert("Your item will be sent from the shop at " + offlineStores.items[0].address); 
     const payment = new PaymentRequest(this.paymentMethods, this.paymentDetails , this.paymentOptions)

     // abridged ...
```

现在去您的网上商店，将商品放入购物车并打开它，单击“**即时结账”**按钮，然后您将看到如下屏幕：

![Instant_checkout_store_borderline](https://docs.vuestorefront.io/v1/assets/img/stores.79c55657.png)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_3-peep-into-the-kitchen-what-happens-internally-2)3.窥视厨房（内部发生的事情）

在这个秘籍中，我们迭代了在您的在线商店（这次是 Magento 2）上构建自定义实体的整个过程，无论出于何种原因处理各种信息以增强您的客户体验。

首先，我们为*离线商店*实体下载了一个 Magento 2 模块。它包含每个线下商店的基本信息。

其次，作为开胃菜，我们必须使用*mage2vuestorefront*从商店导入数据。我们跟随核心团队如何使用其兄弟开源来做到这一点。

第三，主菜，我们在`src`文件夹中扩展了核心适配器，以便我们可以安全地进行未来更新😃。其实很简单！您只需要`registerEntityType`为您的自定义实体！我们还研究了如何在实际示例中实现它，尽管它是简化版本，您最好遵循`vuex`最佳实践。

我们还有各种主菜，为您提供使用*GraphQL*的选项。这种方法需要我们进行更多的调整，但相信我，*GraphQL*有[很好的优势 （打开新窗口）](https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/)超过其竞争对手。

现在，我们可以尽可能地扩展我们的商店，以处理更多关于您商店的信息。恭喜！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_4-chef-s-secret-protip-2)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-switch-search-adapters)秘密 1. 如何切换*搜索适配器*

如果要使用*GraphQL*适配器进行搜索，则需要将*Vue Storefront 中*`server.api`node的值更改为`graphql`in `./config/local.json`，如下所示：

```json
{
  "server": {
    "host": "localhost",
    "port": 3000,
    "protocol": "http",
    "api": "graphql",
    "devServiceWorker": false,
    "useHtmlMinifier": true,
    "htmlMinifierOptions": {
```