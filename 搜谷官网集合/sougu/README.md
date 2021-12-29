# springboot-diss8

## 介绍
基于SpringBoot + Thymeleaf + Mybatis Plus 的springboot脚手架
数据库支持 MySQL主流数据库  
后台接口RESTful 风格，支持前后端分离，可与app公用一套接口。  
开发最精简，可当脚手架，适合你来 DIY  
**如果喜欢，防止您迷路， 请尽快Star项目。多了您的支持，更多了一份动力！感谢~**

## 特征
- 后台接口RESTful 风格，支持前后端分离，可与app公用一套接口
- 统一响应结果封装及生成工具
- 统一异常处理
- 使用Druid Spring Boot Starter 集成Druid数据库连接池和可选择监控
- 集成MyBatis-Plus，实现单表业务零SQL
- 支持多数据源，自由切换，只需方法或类上用 @DS 切换数据源
- 提供代码生成器(MySQL数据库)，生成从Html到Mapper

## 代码结构
```
├─main
│  ├─java
│  │  └─com
│  │      └─company
│  │          └─project
│  │              ├─Diss8Application.java 项目启动类
│  │              ├─common      公共资源，如注解、切面、定时、全局异常处理、通用工具类等
│  │              ├─controller  Controler层
│  │              ├─entity      实体类
│  │              ├─mapper      DAO层
│  │              ├─service     Service层
│  │              │  └─impl     Service层实现
│  └─resources
│      ├── application-dev.yml  开发环境配置文件
│      ├── application-test.yml 测试环境配置文件
│      ├── application-prod.yml 生产环境配置文件
│      ├── application.yml      通用配置文件
│      ├── logback-spring.xml   日志配置文件
│      ├─mapper                 Mybatis XML文件
│      ├─static                 静态文件
│      │  ├─css                 通用css文件
│      │  ├─images              静态图片
│      │  ├─js                  通用js文件
│      ├─template               代码生成模版-空
│      └─templates              项目页面目录
│          ├─main.html          测试页面
└─test
    └─java
        └─com
            └─company
                └─project
                    ├── CompanyFrameApplicationTests.java 单元测试
```

## 开发建议
- Model内成员变量建议与表字段数量对应，如需扩展成员变量（比如连表查询）建议创建VO，否则需在扩展的成员变量上加@TableField(exist = false)
- 建议业务失败直接使用throw new BusinessException("ErrorMessage")抛出，由统一异常处理器来封装业务失败的响应结果，会直接被封装为{"code":500002,"message":"ErrorMessage"}返回，尽情抛出；

## 使用说明
- 使用IDE导入本项目，IDE需要安装lombok插件
- 创建数据库, 导入mysql.sql
- 配置application-dev.yml中的数据库连接
- 运行项目
   - 直接运行Diss8Application.java
   - 项目根目录下执行mvn -X clean package -Dmaven.test.skip=true编译打包，然后执行java -jar diss8.jar
- 页面测试地址 http://localhost:8080/diss/main
- 接口测试地址 http://localhost:8080/sys/users?username=admin
	


## 技术文档
* 核心框架：[Spring Boot](https://spring.io/projects/spring-boot)
* 持久层框架：[MyBatis-Plus](https://mybatis.plus)
* 分页：[Page](https://mybatis.plus/guide/page.html)
* 数据库连接池：[Alibaba Druid](https://github.com/alibaba/druid/)
* 模板引擎：[Thymeleaf](https://www.thymeleaf.org/)
* 阿里巴巴Java开发手册[最新版下载](https://github.com/alibaba/p3c)

## 参与贡献
1. Fork 本项目
2. 新建 feature_xxx 分支
3. 提交代码
4. 提交 Pull Request

### 捐赠
> 项目的发展离不开您的支持， 如果您够宽裕，请作者喝杯咖啡吧！  
备注开源

