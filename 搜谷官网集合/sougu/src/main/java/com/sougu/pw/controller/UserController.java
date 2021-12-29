package com.sougu.pw.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.sougu.pw.common.aop.annotation.LogAnnotation;
import com.sougu.pw.common.utils.DataResult;
import com.sougu.pw.entity.SysUser;
import com.sougu.pw.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

/**
 * 用户管理
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
@RestController
@RequestMapping("/sys")
@Slf4j
public class UserController {
    @Resource
    private UserService userService;

    @GetMapping("/users")
    @LogAnnotation(title = "用户管理", action = "分页获取用户列表")
    public DataResult pageInfo(SysUser vo) {
        return DataResult.success(userService.pageInfo(vo));
    }

    @PostMapping("/user")
    public DataResult addUser(@RequestBody @Valid SysUser vo) {
        userService.addUser(vo);
        return DataResult.success();
    }

    @PutMapping("/user/pwd")
    @LogAnnotation(title = "用户管理", action = "更新密码")
    public DataResult updatePwd(@RequestBody SysUser vo) {
        if (StringUtils.isEmpty(vo.getOldPwd()) || StringUtils.isEmpty(vo.getNewPwd())) {
            return DataResult.fail("旧密码与新密码不能为空");
        }
        vo.setId("1");
        userService.updatePwd(vo);
        return DataResult.success();
    }

    @DeleteMapping("/user")
    public DataResult deletedUser(@RequestBody  List<String> userIds) {
        LambdaQueryWrapper<SysUser> queryWrapper = Wrappers.lambdaQuery();
        queryWrapper.in(SysUser::getId, userIds);
        userService.remove(queryWrapper);
        return DataResult.success();
    }
}
