package com.wong.service.impl;

import com.wong.entity.Area;
import com.wong.repository.AreaMapper;
import com.wong.service.IndexService;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * @author ：bobby
 * @date ：Created in 2020/2/12 16:46
 * @description：地区业务
 * @modified By：
 * @version: 0.1
 */
@Service
public class IndexServiceImpl implements IndexService {
    private AreaMapper areaMapper;

    public IndexServiceImpl(AreaMapper areaMapper) {
        this.areaMapper = areaMapper;
    }

    @Override
    public List<Area> getAreaListByPid(HashMap<String, Object> paramsMap) {
        return areaMapper.getAreaListByCondition(paramsMap);
    }
}
