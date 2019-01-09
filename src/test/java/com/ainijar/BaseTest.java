package com.ainijar;

import com.ainijar.common.config.Result;
import com.ainijar.controller.UserController;
import com.ainijar.domain.User;
import com.ainijar.service.IUserService;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

/**
 * @author slt
 * @date 2018/8/31
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/spring.xml", "classpath:spring/spring-mvc.xml" })
@WebAppConfiguration
public class BaseTest {

    @Autowired
    UserController userController;

    @Autowired
    IUserService iUserService;

    @Test
    public void test1() throws Exception {
        Result result = userController.say1("hello");
        System.out.println(result);
    }

    @Test
    public void test2() throws Exception {
        List<User> user = iUserService.selectList(new EntityWrapper<User>());
        System.out.println("success");
    }

}
