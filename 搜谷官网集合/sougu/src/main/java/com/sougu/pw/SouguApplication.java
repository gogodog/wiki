package com.sougu.pw;

import com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceAutoConfigure;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = DruidDataSourceAutoConfigure.class)
@MapperScan("com.sougu.pw.mapper")
@Slf4j
public class SouguApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(SouguApplication.class, args);
    }

}
