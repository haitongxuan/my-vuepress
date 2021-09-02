# Ch 1. 数据导入

在本章中，我们将介绍：

- [0. 介绍](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_0-introduction)
- [1. Elasticsearch 数据映射迁移](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch)
- [2. 数据泵](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-data-pump)
- [3. Magento 2 的原生索引器](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-native-indexer-in-case-of-magento-2)



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_0-introduction)0. 介绍

当您决定将您的网络商店迁移到 Vue Storefront 时，您需要做的第一件事就是用数据填充商店 (Elasticsearch)。本章处理与 Vue Storefront 数据迁移相关的所有麻烦。



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch)1. Elasticsearch 数据映射迁移

Vue Storefront 使用 Elasticsearch 作为主要数据存储。此外，Vue Storefront 使用 Redis 作为缓存层，使用 Kue 进行队列处理。虽然所有这些数据存储基本上都是无模式的，但应该导入一些映射和元数据来设置 Elasticsearch 索引等。

Vue Storefront 使用基于[节点迁移](https://github.com/tj/node-migrate)的数据迁移机制[ （打开新窗口）](https://github.com/tj/node-migrate).

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation)1. 准备

- 你需要一个[Vue Storefront API （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api)[安装](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)在您机器上的实例以运行迁移。
- 您需要[运行](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)一个 Elasticsearch 实例，数据将迁移到该实例中 。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-recipe)2. 食谱

1. 从开箱即用配置的**Vue Storefront API 根路径**运行节点脚本。

```bash
yarn migrate
```

它在`migrations`文件夹中运行迁移。

1. 成功结果如下：

```bash
> vue-storefront-api@1.9.0 migrate /home/dex/code/vue/vue-backend
> node node_modules/migrate/bin/migrate

Elasticsearch INFO: 2019-05-29T09:41:04Z
  Adding connection to http://localhost:9200/

  up : 1513602693128-create_new_index.js
Elasticsearch DEBUG: 2019-05-29T09:41:04Z
  starting request {
    "method": "DELETE",
    "path": "/*/_alias/vue_storefront_catalog",
    "query": {}
  }
  

Elasticsearch DEBUG: 2019-05-29T09:41:04Z
  Request complete

Public index alias does not exists [aliases_not_found_exception] aliases [vue_storefront_catalog] missing, with { resource.type="aliases" & resource.id="vue_storefront_catalog" }
Elasticsearch DEBUG: 2019-05-29T09:41:04Z
  starting request {
    "method": "DELETE",
    "path": "/vue_storefront_catalog",
    "query": {}
  }
  
  ... # abridged 

Elasticsearch DEBUG: 2019-05-29T09:41:08Z
  Request complete

{ acknowledged: true }
  up : 1530101328854-local_es_config_fix.js
Searching for deprecated parameters in file '/home/dex/code/vue/vue-backend/config/custom-environment-variables.json'...
File '/home/dex/code/vue/vue-backend/config/custom-environment-variables.json' updated.
Searching for deprecated parameters in file '/home/dex/code/vue/vue-backend/config/local.json'...
File '/home/dex/code/vue/vue-backend/config/local.json' updated.

  migration : complete
  
```

📼你也可以在[bash播放中](https://asciinema.org/a/C9z7daIJAog0xPhNlzwoHhBl4)观看[🎥（打开新窗口）](https://asciinema.org/a/C9z7daIJAog0xPhNlzwoHhBl4)

1. 为了验证映射是否成功完成，您可以向`curl`Elasticsearch API发送请求，如下所示：

```bash
curl -XGET 'http://localhost:9200/_mapping?pretty=true'
```

笔记

`http://localhost:9200`如果您手动配置，请替换为您的 Elasticsearch 端点。

1. 如果成功导入（删节），结果如下：

```bash
{
  "vue_storefront_catalog" : {
    "mappings" : {
      "category" : {
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
      },
      "product" : {
        "properties" : {
          "Color_options" : {
            "type" : "keyword"
          },
          "Size_options" : {
            "type" : "keyword"
          },
          "category_gear" : {
            "type" : "integer"
          },
          "category_ids" : {
            "type" : "long"
          },
          "color" : {
            "type" : "integer"
          },
          "color_options" : {
            "type" : "integer"
          },
          "configurable_children" : {
            "properties" : {
              "has_options" : {
                "type" : "boolean"
              },
              "price" : {
                "type" : "float"
              },
              "sku" : {
                "type" : "keyword"
              },
              "special_price" : {
                "type" : "float"
              },
              "url_key" : {
                "type" : "keyword"
              }
            }
          },
          "configurable_options" : {
            "properties" : {
              "attribute_id" : {
                "type" : "long"
              },
              "default_label" : {
                "type" : "text"
              },
              "frontend_label" : {
                "type" : "text"
              },
              "label" : {
                "type" : "text"
              },
              "store_label" : {
                "type" : "text"
              },
              "values" : {
                "properties" : {
                  "default_label" : {
                    "type" : "text"
                  },
                  "frontend_label" : {
                    "type" : "text"
                  },
                  "label" : {
                    "type" : "text"
                  },
                  "store_label" : {
                    "type" : "text"
                  },
                  "value_index" : {
                    "type" : "keyword"
                  }
                }
              }
            }
          },
          "created_at" : {
            "type" : "date",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
          },
          "description" : {
            "type" : "text"
          },
          "eco_collection" : {
            "type" : "integer"
          },
          "eco_collection_options" : {
            "type" : "integer"
          },
          "erin_recommends" : {
            "type" : "integer"
          },
          "gender" : {
            "type" : "integer"
          },
          "has_options" : {
            "type" : "integer"
          },
          "id" : {
            "type" : "long"
          },
          "material" : {
            "type" : "integer"
          },
          "name" : {
            "type" : "text"
          },
          "news_from_date" : {
            "type" : "date",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
          },
          "news_to_date" : {
            "type" : "date",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
          },
          "pattern" : {
            "type" : "text"
          },
          "position" : {
            "type" : "integer"
          },
          "price" : {
            "type" : "float"
          },
          "required_options" : {
            "type" : "integer"
          },
          "size" : {
            "type" : "integer"
          },
          "size_options" : {
            "type" : "integer"
          },
          "sku" : {
            "type" : "keyword"
          },
          "slug" : {
            "type" : "keyword"
          },
          "special_from_date" : {
            "type" : "date",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
          },
          "special_price" : {
            "type" : "float"
          },
          "special_to_date" : {
            "type" : "date",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
          },
          "status" : {
            "type" : "integer"
          },
          "tax_class_id" : {
            "type" : "integer"
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
          },
          "visibility" : {
            "type" : "integer"
          },
          "weight" : {
            "type" : "integer"
          }
        }
      },
      "cms_block" : {
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
      },
      "attribute" : {
        "properties" : {
          "attribute_id" : {
            "type" : "long"
          },
          "id" : {
            "type" : "long"
          },
          "options" : {
            "properties" : {
              "value" : {
                "type" : "text"
              }
            }
          }
        }
      },
      "taxrule" : {
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
      },
      "cms_page" : {
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
    }
  }
}
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally)3.窥视厨房（内部发生的事情）

![架构数据导入部分](https://docs.vuestorefront.io/v1/assets/img/GitHub-Architecture-VS-data-import.649e2383.png) 我们在架构的红色矩形部分工作，为数据导入做准备。

我们用一个简单的术语做了什么，我们教了 Elasticsearch 类型和数据类型（映射，也称为模式），我们稍后将用于 Vue Storefront API。

运行时`yarn migrate`，它会运行预先配置的[迁移脚本 （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/tree/master/migrations)使用[节点迁移 （打开新窗口）](https://github.com/tj/node-migrate). 如果您仔细查看迁移脚本，您会注意到最终的 js 文件位于[`./src/lib/elastic.js` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/elastic.js)这为移民提供了实际的劳动力。如果您再仔细查看该`elastic.js`文件，您还会发现所有架构文件都位于[`./config` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/tree/master/config)文件夹。这些脚本的作用可以根据文件名分为几个步骤。它首先从索引模式创建索引，然后从`elastic.schema.[types].json`文件导入模式。然后它将重新索引它们，并删除临时索引。最后，它将使用一些变通方法来处理已弃用的流程。

现在，您已准备好继续将您的数据输入到商店中。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-1-deal-with-index-not-found-exception)秘密 1. 处理 `index not found exception`

如果您在迁移脚本过程中遇到如下异常：

![index_not_found_exception](https://docs.vuestorefront.io/v1/assets/img/sss.758b7c03.png)

这意味着您没有`vue_storefront_catalog_temp`所需的临时索引。解决方案是：

```bash
yarn restore
```

这将创造必要的临时索引，则所需临时索引将提到的步骤被删除[上述](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally)当迁移完成

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-2-add-a-new-migration-script)秘诀2.添加新的迁移脚本

您可能需要编写自己的迁移脚本。在这种情况下，您可以通过在`./migrations`目录下添加文件来实现，尽管这不是推荐的方法。`node-migrate`为您提供 cli 命令，目的如下：

```bash
yarn migrate create name-of-migration
```

这将在`./migration`具有标准命名约定的文件夹下创建迁移脚本模板。 [更多信息（打开新窗口）](https://github.com/tj/node-migrate#creating-migrations)

例子

示例迁移显示了如何操作产品映射如下：

```js
// Migration scripts use: https://github.com/tj/node-migrate
'use strict';

let config = require('config');
let common = require('./.common');

module.exports.up = function(next) {
  // example of adding a field to the schema
  // other examples: https://stackoverflow.com/questions/22325708/elasticsearch-create-index-with-mappings-using-javascript,
  common.db.indices
    .putMapping({
      index: config.elasticsearch.indices[0],
      type: 'product',
      body: {
        properties: {
          slug: { type: 'string' }, // add slug field
          suggest: {
            type: 'completion',
            analyzer: 'simple',
            search_analyzer: 'simple',
          },
        },
      },
    })
    .then(res => {
      console.dir(res, { depth: null, colors: true });
      next();
    });
};

module.exports.down = function(next) {
  next();
};
```

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-3-execute-migration-multiple-times)秘诀3.多次执行迁移

如果使用多次运行迁移`yarn migrate`，它只会运行一次迁移，后续执行将被忽略，只会重复结果如下：

![迁移完成](https://docs.vuestorefront.io/v1/assets/img/npm-run-migrate-result.4fd1f51f.png)

发生这种情况是因为`node-migrate`通过检查`./migrate`文件知道它之前已经执行过，因此您不需要重复它。但是，如果您需要多次运行它，您可以通过删除`./migrate`文件来实现。





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-data-pump)2. 数据泵

零售业务首先必须在商店中存放产品才能开始。同样，开展在线商店业务也需要在线（数据存储）库存产品。

启动 Vue Storefront 也不例外。我们需要将您的数据（产品、类别、税收规则等）抽取到 Vue Storefront 的主要数据存储区，即 Elasticsearch。我们还在两者之间使用 Redis 缓存来提高性能。

通过在架构中使用 Elasticsearch 作为数据存储，我们可以使平台后端不可知以及许多其他优势，例如性能和可扩展性。

在这个秘籍中，我们将带您了解**Magento 2**示例。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation-2)1. 准备

- 你需要一个[Vue Storefront API （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api)为后端[安装](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)的实例。
- 您需要一个[运行](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)映射的 Elasticsearch 实例，如[*Recipe 1 Data Mapping Migration for Elasticsearch 中所述*](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch)
- 你需要[mage2vuestorefront （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront)下载数据桥。此实例依赖于后端（在本例中为 Magento 2），您可以将其替换为其他数据桥，例如[coreshop-vsbridge （打开新窗口）](https://github.com/divanteLtd/coreshop-vsbridge), [shopware2vuestorefront （打开新窗口）](https://github.com/divanteLtd/shopware2vuestorefront)对你有利。
- 最后，您需要一个 Magento 2 实例作为数据源来从中抽取数据。（仅适用于[配方 B](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)）

我们将按如下方式导入实体：

- 产品
- 类别
- 税则
- 属性
- 产品到类别
- 评论（需要自定义模块[Divante/ReviewApi （打开新窗口）](https://github.com/divanteLtd/magento2-review-api))
- Cms 块和页面（需要自定义模块[SnowdogApps/magento2-cms-api （打开新窗口）](https://github.com/SnowdogApps/magento2-cms-api))

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-1-recipe-a-using-demo)2-1。配方 A（使用演示）

使用演示数据，您可以快速体验整个行程。如果您想立即处理原始数据，请查看方法[B](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)

1. 从**mage2vuestorefront 根路径的**npm install 开始，它为项目安装依赖项。

```bash
npm install
```

1. 通过设置配置值或 ENV 变量来设置所需的选项。

```bash
export TIME_TO_EXIT=2000
export MAGENTO_CONSUMER_KEY=byv3730rhoulpopcq64don8ukb8lf2gq
export MAGENTO_CONSUMER_SECRET=u9q4fcobv7vfx9td80oupa6uhexc27rb
export MAGENTO_ACCESS_TOKEN=040xx3qy7s0j28o3q0exrfop579cy20m
export MAGENTO_ACCESS_TOKEN_SECRET=7qunl3p505rubmr7u1ijt7odyialnih9

export MAGENTO_URL=http://demo-magento2.vuestorefront.io/rest
export INDEX_NAME=vue_storefront_catalog
```

在[配方 B](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)的同一步骤中更详细地解释了这意味着什么。

1. 运行以下命令从演示商店导入类别`mage2vuestorefront/src`：

```bash
node --harmony cli.js categories --removeNonExistent=true
```

📼 您可以在[bash 播放中](https://asciinema.org/a/75MTwaet3IO3vOCdDyCVOAgqL)观看结果[🎥（打开新窗口）](https://asciinema.org/a/75MTwaet3IO3vOCdDyCVOAgqL)

运行以下命令以完成泵送：

```bash
node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent=true
node --harmony cli.js taxrule --removeNonExistent=true
node --harmony cli.js products --removeNonExistent=true --partitions=1
node --harmony cli.js reviews
node --harmony cli.js blocks
node --harmony cli.js pages
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise)2-2。方案 B（使用内部部署）

1. 从**mage2vuestorefront 根路径的**npm install 开始，它为项目安装依赖项。

```bash
npm install
```

1. 按照以下步骤获取 Magento 集成凭据：

- 登录到您的数据泵源**管理员**并转到**扩展**>**集成**，如下所示：

![数据泵_1](https://docs.vuestorefront.io/v1/assets/img/data_pump_1.58cc766a.png)

- 单击“**添加新集成”**按钮，如下所示：

![数据泵_2](https://docs.vuestorefront.io/v1/assets/img/data_pump_2.afeddbcd.png)

- 根据需要填充以下字段：

![数据泵_3](https://docs.vuestorefront.io/v1/assets/img/data_pump_3.ddcf41b8.png)

- 单击左侧边栏中的**API**选项卡。此屏幕可让您选择允许进行此集成的 API 端点：

![数据泵_6](https://docs.vuestorefront.io/v1/assets/img/data_pump_6.22e0fd44.png)

- 如果您不确定，请在**资源访问中**选择*全部*，如下所示：

![数据泵_7](https://docs.vuestorefront.io/v1/assets/img/data_pump_7.12ba6ad3.png)

- 单击上一个屏幕中的**保存**将获得以下屏幕：

![数据泵_5](https://docs.vuestorefront.io/v1/assets/img/data_pump_5.b33f4253.png)

- 在上一个屏幕中，我们成功创建了一个集成凭据，但还需要在其中完成另一个步骤，即单击“**激活”**按钮，它将带您进入以下屏幕：

![数据泵_8](https://docs.vuestorefront.io/v1/assets/img/data_pump_8.9c5dacb1.png)

- 此屏幕要求您确认要为集成授予的端点。如果您同意，您可以单击**Allow**。

![数据泵_9](https://docs.vuestorefront.io/v1/assets/img/data_pump_9.d4f2b47c.png)

- 然后应用程序将提示您提供新创建的用于集成的令牌。复制它们，我们将在下一步使用它们。

1. 通过使用在上一步中获取的凭据设置配置值或 ENV 变量来设置所需的选项。

```bash
export TIME_TO_EXIT=2000
export MAGENTO_CONSUMER_KEY=lv1unkldzkcex68l3eojut4j66qqho8w
export MAGENTO_CONSUMER_SECRET=zhkuqvweo0bsg14noujqje49x3wht0qr
export MAGENTO_ACCESS_TOKEN=z6ftgc5005212bc6lnszxa7d7ocl8hgc
export MAGENTO_ACCESS_TOKEN_SECRET=h8tikjq9sz7tqm6hyhdfgs96krb6qzyk

export MAGENTO_URL=http://local.magento/rest # Replace the url with your Magento 2 URL
export INDEX_NAME=vue_storefront_catalog # This will be the name of the index we use
```

笔记

- **Access Token**和**Access Token Secret**可能会随着时间而改变，因为它们是由使用**Consumer Key**和**Consumer Secret**发出的请求创建的。
- 将*http://local.magento/*替换 为运行 Magento 2 的 URL。

1. 现在是导入数据的时候了。在 处运行以下命令**`mage2vuestorefront/src`**：

```bash
node --harmony cli.js categories --removeNonExistent=true
```

成功结果如下：

```bash
2019-06-09T05:43:23.330Z - debug: Elasticsearch module initialized!
info: Winston logging library initialized.
2019-06-09T05:43:23.402Z - info: Connected correctly to server
2019-06-09T05:43:23.402Z - info: TRANSACTION KEY = 1560059003367
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories
debug: Response received.
Dest. cat path =  default-category-2
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/2
debug: Response received.
Dest. cat path =  default-category-2
2019-06-09T05:43:24.042Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_2
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/44
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/29
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/30
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/31
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/32

... # abridged

debug: Response received.
Dest. cat path =  women/bottoms-women/shorts-women/shorts-34
2019-06-09T05:44:32.360Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_34
2019-06-09T05:44:32.360Z - info: Importing 1 of 2 - [(34) Shorts] with tsk = 1560059042304
2019-06-09T05:44:32.360Z - info: Tasks count = 0
2019-06-09T05:44:32.361Z - info: No tasks to process. All records processed!
2019-06-09T05:44:32.361Z - info: Cleaning up with tsk = 1560059042304
2019-06-09T05:44:32.363Z - info: Task done! Exiting in 30s...
2019-06-09T05:44:32.380Z - info:  
{ took: 10,
  timed_out: false,
  total: 13,
  deleted: 0,
  batches: 1,
  version_conflicts: 13,
  noops: 0,
  retries: { bulk: 0, search: 0 },
  throttled_millis: 0,
  requests_per_second: -1,
  throttled_until_millis: 0,
  failures: [] }
```

📼你也可以在[bash播放中](https://asciinema.org/a/BnDQONQSs3WSVvh0SUjHRJeNo)观看[🎥（打开新窗口）](https://asciinema.org/a/BnDQONQSs3WSVvh0SUjHRJeNo)

笔记

- `--removeNonExistent`选项意味着在索引中找到但当前不存在于 API 提要中的所有记录都将被删除。请**仅**将此选项用于完整的重新索引！
- `--harmony`标志意味着我们正在启用尖端的 ECMAScript 6 阶段性功能，因为我们需要它。[更多信息（打开新窗口）](https://nodejs.org/en/docs/es6/)

1. 为了验证它是否按计划导入，请按如下方式运行命令：

```bash
curl -XGET "http://localhost:9200/vue_storefront_catalog/_search?pretty=true" -H 'Content-Type: application/json' -d'
{
  "query": {
    "terms": {
      "_type": [ "category" ] 
    }
  }
}'
```

笔记

我们在上面步骤 3 中在 ENV 变量中设置的索引名称在命令中使用为：`http://localhost:9200/`**vue_storefront_catalog**`/_search?pretty=true`

一个成功的结果将是这样的：

```bash
{
  "took" : 1,
  "timed_out" : false,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : 39,
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "vue_storefront_catalog_1559623128",
        "_type" : "category",
        "_id" : "44",
        "_score" : 1.0,
        "_source" : {
          "id" : 44,
          "parent_id" : 2,
          "name" : "What's New",
          "is_active" : true,
          "position" : 1,
          "level" : 2,
          "product_count" : 0,
          "children_data" : [ ],
          "children" : "",
          "created_at" : "2019-05-21 09:04:41",
          "updated_at" : "2019-05-21 09:04:41",
          "path" : "1/2/44",
          "available_sort_by" : [ ],
          "include_in_menu" : true,
          "display_mode" : "PAGE",
          "is_anchor" : "0",
          "children_count" : "0",
          "url_key" : "whats-new-44",
          "url_path" : "what-is-new/whats-new-44",
          "slug" : "whats-new-44",
          "tsk" : 1560059042304
        }
      },

    ... # abridged
```

现在以相同的方式导入其他剩余的实体：

```bash
node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent=true
node --harmony cli.js taxrule --removeNonExistent=true
node --harmony cli.js products --removeNonExistent=true --partitions=1
```

笔记

`--partitions=1`标志表示并行模式。此处设置的值将成为进程计数。因此，*1*表示单进程模式。

1. 为了导入`reviews`和`cms`，我们需要安装额外的 Magento 2 模块，以便我们可以公开所需的 API。

下载并安装[Review API 模块 （打开新窗口）](https://github.com/divanteLtd/magento2-review-api)并运行以下命令：

```bash
node --harmony cli.js reviews
```

下载并安装[CMS API 模块 （打开新窗口）](https://github.com/SnowdogApps/magento2-cms-api)并运行以下命令：

```bash
node --harmony cli.js blocks
node --harmony cli.js pages
```

1. 最后，重新索引 Elasticsearch，确保**Vue Storefront API**根路径中的数据源是最新的。

```bash
yarn db rebuild
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally-2)3.窥视厨房（内部发生的事情）

![数据泵设计](https://docs.vuestorefront.io/v1/assets/img/datum_pump_design.04efbdad.png) 我们在架构的红色矩形部分工作，作为泵送数据。

在配方中，我们将源数据从 Magento 2 导入 Elasticsearch 作为数据存储，这可以使平台后端不可知以及许多其他优势，例如性能、可扩展性，以及最重要的 PWA。

我们从演示数据泵开始。[迪万特有限公司 （打开新窗口）](https://vuestorefront.io/)准备demo store用于演示目的，以便我们快速了解数据泵的过程。

方案 B 开始在 Magento 2 Admin 中创建一个集成条目，以授予数据泵的权限。Magento 2 会询问您有关集成的基本信息，包括处理每个端点的权限的 ACL（访问控制列表）。完成后，Magento 2 将为您提供凭据和令牌。

在配置文件中提供这些凭据，或者在这种情况下我们设置 ENV 变量，允许 [`src/cli.js` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/cli.js)脚本文件来运行抽水。在更深入的研究中[`src/cli.js` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/cli.js)，您会注意到处理每个实体的函数。在函数内部，有一个[`factory` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/factory.js)将`adapter`注入作为参数的方法 - 在本节中，它是`magento`- 表示数据源的后端类型，另一个参数`driver`表示您正在导入的实体类型，例如，`products`。还有另一个`adapter`名字`nosql`是 Elasticsearch。终极泵逻辑定位[`abstract` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/abstract.js)该负载`nosql`如`db`在`constructor`和执行`run`方法与内继承个别逻辑。您可能会发现个体`drivers`对于`magento adapter`在[`magento` （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront/tree/master/src/adapters/magento)文件夹。

现在，您已准备好使用您的原始产品为您的**Vue Storefront**实例提供服务！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip-2)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-1-product-image-is-not-synced)秘密 1. 产品图片未同步

当您的产品成功导入后，还有一件重要的事情需要考虑，那就是产品图片。但是，您应该将源域列入白名单，以便异步获取图像。否则，你会看到这样一个悲伤的画面：

![图像失败。 数据泵](https://docs.vuestorefront.io/v1/assets/img/img_catalog_prod_fail.cb86b3c5.png)

转到**Vue Storefront API**根目录并`local.json`在`config`文件夹下找到。

信息

`local.json`是安装过程中创建的文件。它包含 Vue Storefront API 实例的所有配置。如果你没有它，你应该从[`default.json` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json)从同一目录并根据需要填充字段。

查找`imageable`节点并在`whitelist/allowedHosts`下面添加您的源域，如下所示：

```json
  "imageable": {
    "namespace": "",
    "maxListeners": 512,
    "imageSizeLimit": 1024,
    "whitelist": {
      "allowedHosts": [
        ".*divante.pl",
        ".*vuestorefront.io",
        "localhost",
        // add a source domain here 
        "degi.magento"
      ]
    },
```

现在，重启**Vue Storefront API**实例，重新加载页面和*Presto！*

![图像失败。 数据泵](https://docs.vuestorefront.io/v1/assets/img/img_catalog_prod.c2e6cd3e.png)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-2-taking-advantage-of-delta-indexer)秘密 2. 利用 Delta Indexer

引用

*计算机科学中只有两件难事：**缓存失效**和**命名。***

*——菲尔·卡尔顿*

在计算机科学的每个角落，工程师都应该关注资源经济学。同样，**Vue Storefront 也**设计了一种处理优化的方法。话虽如此，每次将产品添加到数据源（例如 Magento 2）时运行完全重新索引将是多余且低效的。我们有这个问题的解决方案：*Delta Indexer*

希腊字母*Delta*通常*`quantity changed`*在简单的数学中表示，这对于它所做的工作来说听起来似乎是合理的。

现在，在**mage2vuestorefront/src**运行以下命令：

```bash
node --harmony cli.js productsdelta
```

成功的结果将是这样的：

```bash
# ... abridged

2019-06-16T10:55:34.354Z - info: Product sub-stage 6: Getting product categories for dress_girl
2019-06-16T10:55:34.354Z - info: Using category_ids binding for dress_girl: 2,6,7
Dest. product path =  default-category-2/dress-girl-1.html
2019-06-16T10:55:34.355Z - info: Product sub-stages done for dress_girl
2019-06-16T10:55:34.356Z - info: Importing 0 of 3 - [(1 - dress_girl) Dress Girl ] with tsk = 1560682531040
2019-06-16T10:55:34.356Z - info: Tasks count = 2
debug: Response received.
2019-06-16T10:55:34.404Z - info: Product sub-stage 6: Getting product categories for trans_bng
2019-06-16T10:55:34.404Z - info: Using category_ids binding for trans_bng: 2,3,6,4,7
Dest. product path =  default-category-2/trans-boys-and-girls-2.html
2019-06-16T10:55:34.405Z - info: Product sub-stages done for trans_bng
2019-06-16T10:55:34.405Z - info: Importing 1 of 3 - [(2 - trans_bng) Trans Boys and Girls] with tsk = 1560682531040
2019-06-16T10:55:34.405Z - info: Tasks count = 1
debug: Response received.
2019-06-16T10:55:34.480Z - info: Product sub-stage 6: Getting product categories for romantic_t
2019-06-16T10:55:34.480Z - info: Using category_ids binding for romantic_t: 6,7,8
Dest. product path =  girls/girls-6/romantic-t-3.html
2019-06-16T10:55:34.481Z - info: Product sub-stages done for romantic_t
2019-06-16T10:55:34.481Z - info: Importing 2 of 3 - [(3 - romantic_t) Romantic T] with tsk = 1560682531040
2019-06-16T10:55:34.481Z - info: Tasks count = 0
2019-06-16T10:55:34.482Z - debug: --L:0 Level done! Current page: 1 of 1
2019-06-16T10:55:34.482Z - info: All pages processed!
2019-06-16T10:55:34.482Z - info: Task done! Exiting in 30s...
```

📼你也可以在[bash播放中](https://asciinema.org/a/DWaasVJ5RXhSn7Aoc7PqDLG3F)观看[🎥（打开新窗口）](https://asciinema.org/a/DWaasVJ5RXhSn7Aoc7PqDLG3F)

现在，新添加的产品也出现在 Elasticsearch 中，因此与 Vue Storefront 同步。

小心！

您需要具有类别的缓存条目，否则它将按如下方式中止：

![delta_error](https://docs.vuestorefront.io/v1/assets/img/delta_error.5f341603.png)

**解决方案**是：先运行分类导入，然后进行增量导入

```bash
node --harmony cli.js categories
node --harmony cli.js productsdelta
```

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-3-when-you-have-imported-multiple-data-source)秘诀3.当你导入了多个数据源时

由于 Magento 以拥有强大的多商店功能而闻名，**Vue Storefront**也准备好顺利采用该功能。使用[mage2vuestorefront](https://github.com/vuestorefront/mage2vuestorefront)导入数据时，可以通过指定索引名称来拥有多个索引[ （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront).

`INDEX_NAME`为每个商店设置不同的 ENV 变量将在 Elasticsearch 中创建相应的索引。您可能还需要根据商店名称提供不同的 API 基本端点。

```bash
# ... abridged
export MAGENTO_ACCESS_TOKEN_SECRET=7qunl3p505rubmr7u1ijt7odyialnih9

export MAGENTO_URL=http://demo-magento2.vuestorefront.io/rest
# Change REST API base endpoint 
export INDEX_NAME=vue_storefront_catalog 
# Change INDEX_NAME variable to be distinguishable from each store
```

您还需要将多商店信息通知**Vue Storefront**和**Vue Storefront API**。 [进一步说明](https://docs.vuestorefront.io/v1/guide/cookbook/guide/integrations/multistore.html#vue-storefront-and-vue-storefront-api-configuration)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-4-dealing-with-version-conflict-engine-exception)秘密 4. 处理 `version_conflict_engine_exception`

`version_conflict_engine_exception`基本上意味着在执行您的 Elasticsearch 命令时存在竞争条件。Elasticsearch 是并行和异步的，因此旧版本可能会意外覆盖新版本。

因此，它具有保护较新版本文档的方法，以确保其不受较旧版本的影响，并且`version_conflict_engine_exception`是其中之一。

重复相同的请求只会解决冲突。但是，如果没有，发送标志`conflicts=proceed`应该忽略冲突，但是，您应该对这些强制更新的后果负责。[更多信息（打开新窗口）](https://www.elastic.co/guide/en/elasticsearch/guide/current/optimistic-concurrency-control.html)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-5-options-available-for-cli-js)秘密 5. 可供选择的选项 `cli.js`

`cli.js`处理所有导入命令；这是**mage2vuestorefront**的入口。它不仅接受所有命令，而且还接受选项。虽然大多数命令接受类似的选项，但少数选项仅适用于某些命令。

笔记

示例中的值显示以下默认值

```bash
cli.js attributes \ 
  --adapter=magento \
  --removeNonExistent=false
adapter`option 表示您将用于数据源的适配器。基本上你不需要更改默认值`magento
```

`removeNonExistent` 选项删除存在于索引中但不存在于数据源中的条目。

```bash
cli.js categories \ 
  --adapter=magento \
  --removeNonExistent=false \
  --extendedCategories=true \
  --generateUniqueUrlKeys=true
```

`extendedCategories`选项允许导入有关类别的扩展信息；例如`created_at`, `path`,`included_in_menu`等等。

`generateUniqueUrlKeys`选项允许使用在导入过程中生成的url键`slugfied name`+ `-`+ `id`。

```bash
cli.js cleanup \
  --adapter=magento \
  --cleanupType=product \
  --transactionKey=0
```

`cleanup`命令用于删除在当前插入之前插入的条目。此命令将删除时间戳早于当前导入的任何条目。这就是`--removeNonExistent`option时执行的内容`true`。

小心！

`cleanup`command 不打算从命令行使用。这是**仅供内部使用**。如果在命令行中单独使用它，它将清除指定索引类型的索引，其事务键与当前事务键不同，这意味着到目前为止存储的类型的所有条目都将消失。请小心使用。

`cleanupType` option 表示要清除的索引类型。

`transactionKey` 选项表示执行的时间戳，它将您的交易与其他交易区分开来。

```bash
cli.js fullreindex \
  --adapter=magento \
  --partitions=1 \
  --partitionSize=50 \
  --initQueue=true \
  --skus= \
  --extendedCategories=true \
  --generateUniqueUrlKeys=true 
```

`fullreindex` 是一个将按顺序运行所有其他导入命令的命令。

`partitions`选项标志表示并行模式。此处设置的值将成为进程计数。因此，1 表示单进程模式。

`partitionSize`选项表示`pageSize`通过每个请求配置返回的集合大小。

`initQueue` 选项启用队列模式，以便进程并行运行。

`skus` 选项仅通过一组 skus 获取查询结果。

```bash
cli.js productcategories \
  --adapter=magento
```

`productcategories`是获取`magento`'s`catalog_category_product`表数据的命令。该表存储了关于哪个类别包含哪些产品以及该类别中的产品位置的索引信息。

```bash
cli.js products \
  --adapter=magento \
  --partitions=1 \
  --partitionSize=50 \
  --initQueue=true \
  --skus= \
  --removeNonExistent=false \
  --updatedAfter= \
  --page=
```

`updatedAfter` 选项仅通过在此值之后更新的产品查询来限制产品查询。

`page`option`setCurPage`在 Magento 中的意思是所谓的。它可以帮助您从某个页面获取数据，其页面大小由`partitionsSize`.

```bash
cli.js productsdelta \
  --adapter=magento \
  --partitions=1 \
  --partitionSize=50 \
  --initQueue=true \ 
  --skus= \
  --removeNonExistent=false
cli.js productsworker \ 
  --adapter=magento \
  --partitions=1
```

`productsworker` 是一个命令来运行一个进程，该进程堆叠在计划导入产品的队列中。

```bash
cli.js reviews \
  --adapter=magento \
  --removeNonExistent=false
cli.js taxrule \
  --adapter=magento \
  --removeNonExistent=false
cli.js blocks \ 
  --adapter=magento \
  --removeNonExistent=false
cli.js pages \
  --adapter=magento \
  --removeNonExistent=false
```





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-native-indexer-in-case-of-magento-2)3. Magento 2 的原生索引器

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation-3)1. 准备

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-recipe-2)2. 食谱

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally-3)3.窥视厨房（内部发生的事情）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip-3)4. 厨师的秘密 (protip)