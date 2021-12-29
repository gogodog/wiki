package com.sougu.pw.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.sougu.pw.common.exception.BusinessException;
import com.sougu.pw.common.exception.code.BaseResponseCode;
import com.sougu.pw.entity.SysUser;
import com.sougu.pw.mapper.SysUserMapper;
import com.sougu.pw.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户 服务类
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
@Service
@Slf4j
public class UserServiceImpl extends ServiceImpl<SysUserMapper, SysUser> implements UserService {

    @Resource
    private SysUserMapper sysUserMapper;

    @Override
    public IPage<SysUser> pageInfo(SysUser vo) {
        Page page = new Page(vo.getPage(), vo.getLimit());
        LambdaQueryWrapper<SysUser> queryWrapper = Wrappers.lambdaQuery();
        if (!StringUtils.isEmpty(vo.getUsername())) {
            queryWrapper.like(SysUser::getUsername, vo.getUsername());
        }
        if (!StringUtils.isEmpty(vo.getStartTime())) {
            queryWrapper.gt(SysUser::getCreateTime, vo.getStartTime());
        }
        if (!StringUtils.isEmpty(vo.getEndTime())) {
            queryWrapper.lt(SysUser::getCreateTime, vo.getEndTime());
        }
        if (!StringUtils.isEmpty(vo.getNickName())) {
            queryWrapper.like(SysUser::getNickName, vo.getNickName());
        }
        if (null != vo.getStatus()) {
            queryWrapper.eq(SysUser::getStatus, vo.getStatus());
        }
        queryWrapper.orderByDesc(SysUser::getCreateTime);
        IPage<SysUser> iPage = sysUserMapper.selectPage(page, queryWrapper);
        return iPage;
    }

    @Override
    public void addUser(SysUser vo) {

        SysUser sysUserOne = sysUserMapper.selectOne(Wrappers.<SysUser>lambdaQuery().eq(SysUser::getUsername, vo.getUsername()));
        if (sysUserOne != null) {
            throw new BusinessException("用户已存在，请勿重复添加！");
        }
        vo.setSalt("1");
        vo.setPassword("2");
        vo.setStatus(1);
        vo.setCreateWhere(1);
        sysUserMapper.insert(vo);
    }

    @Override
    public void updatePwd(SysUser vo) {
        SysUser sysUser = sysUserMapper.selectById(vo.getId());
        if (sysUser == null) {
            throw new BusinessException(BaseResponseCode.DATA_ERROR);
        }
        sysUser.setPassword("3");
        sysUserMapper.updateById(sysUser);

    }
}
