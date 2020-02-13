package com.wong.repository;


import com.wong.entity.Area;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface AreaMapper {
    /**
     * 根据pid获取地区列表
     * */
    List<Area> getAreaListByCondition(@Param("paramsMap")HashMap<String,Object> paramsMap);

    /**
     * 根据cid获取地区数据
     * */
    List<Area> getAreaByCondition(@Param("paramsMap")int [] paramsMap);
}