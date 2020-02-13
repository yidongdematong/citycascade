package com.wong.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wong.service.IndexService;
import com.wong.util.R;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;

import static com.wong.WebUriMappingConstant.URI_INDEX_AREA;
import static com.wong.WebUriMappingConstant.URI_INDEX_AREA_LIST;

/**
 * @author ：bobby
 * @date ：Created in 2020/2/12 16:07
 * @description：控制器
 * @modified By：
 * @version: 0.1
 */
@RestController
public class IndexController {



    private IndexService indexService;

    public IndexController(IndexService indexService) {
        this.indexService = indexService;
    }

    /**
     * 根据pid获取地区列表
     */
    @PostMapping(URI_INDEX_AREA_LIST)
    public R doQueryShipAddressList(@RequestParam HashMap<String, Object> params) {
        return R.ok().put("result", indexService.getAreaListByPid(params));

    }

    /**
     * 根据cid地区数据
     * */
    @PostMapping(URI_INDEX_AREA)
    public R doQueryArea(@RequestParam  String  m) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        int[] s=mapper.readValue(m,int[].class);
        return   R.ok().put("result", indexService.getAreaByCid(s));


    }
}
