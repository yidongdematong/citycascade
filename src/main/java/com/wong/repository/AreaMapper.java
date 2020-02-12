package com.wong.repository;


import com.wong.entity.Area;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface AreaMapper {
    int deleteByPrimaryKey(Integer cid);

    int insert(Area record);

    int insertSelective(Area record);

    Area selectByPrimaryKey(Integer cid);

    int updateByPrimaryKeySelective(Area record);

    int updateByPrimaryKey(Area record);

    /**
     * 根据pid获取地区列表
     * */
    List<Area> getAreaListByCondition(@Param("paramsMap")HashMap<String,Object> paramsMap);
}