package com.sougu.pw.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.sougu.pw.entity.SysUser;

/**
 * 用户 服务类
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
public interface UserService extends IService<SysUser> {

    /**
     * 分页
     *
     * @param vo vo
     * @return IPage
     */
    IPage<SysUser> pageInfo(SysUser vo);

    /**
     * 添加用户
     *
     * @param vo vo
     */
    void addUser(SysUser vo);

    /**
     * 修改密码
     *
     * @param vo vo
     */
    void updatePwd(SysUser vo);
}
