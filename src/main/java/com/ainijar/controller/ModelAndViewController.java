package com.ainijar.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author slt
 * @date 2018/12/4
 */
@Controller
@RequestMapping("/view")
@Slf4j
public class ModelAndViewController {

    @GetMapping("/test")
    public String list(@RequestParam(defaultValue = "", required = true) String warnIds, Model model) {
        model.addAttribute("list", null);
        return "test";
    }
}
