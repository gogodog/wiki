package com.sougu.pw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 视图
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
@Controller
@RequestMapping("/diss")
public class IndexController {

    @GetMapping("/main")
    public String userList() {
        return "main";
    }

}
