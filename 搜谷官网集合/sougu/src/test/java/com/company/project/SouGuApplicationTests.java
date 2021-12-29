package com.pw.diss8;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.sougu.pw.entity.SysUser;
import com.sougu.pw.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class SouGuApplicationTests {

    @Autowired
    UserService userService;

    @Test
    public void contextLoads() {
        log.info("Unit Test");
        SysUser user = new SysUser();
        user.setUsername("admin");
        IPage<SysUser> list = this.userService.pageInfo(user);
        log.info(JSON.toJSONString(list));
        Assert.assertFalse(1==1);
    }

}
