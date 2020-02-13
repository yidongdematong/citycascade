package com.wong.service;

import com.wong.entity.Area;

import java.util.HashMap;
import java.util.List;

public interface IndexService {


    /**
     * 根据pid获取地区列表
     * */
    List<Area> getAreaListByPid(HashMap<String,Object> paramsMap);

    /**
     *
     * 根据cid获取地区数据
     * */
    List<Area> getAreaByCid(int [] paramsMap);
}
