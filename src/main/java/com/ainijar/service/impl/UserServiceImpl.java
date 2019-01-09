package com.ainijar.service.impl;

import com.ainijar.domain.User;
import com.ainijar.dao.UserMapper;
import com.ainijar.service.IUserService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
