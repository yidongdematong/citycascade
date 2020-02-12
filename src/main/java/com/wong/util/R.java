package com.wong.util;

import java.util.HashMap;
import java.util.Map;

import static com.wong.util.UtilsConstant.*;

/**
 * @author ：bobby
 * @date ：Created in 2020/1/29 19:46
 * @description：封装返回数据
 * @modified By：
 * @version: 0.1
 */
public class R extends HashMap<String,Object> {
    public R() {
        put("code", R_RETURN_CODE_SUCCESS);
    }

    public static R error() {
        return error(R_RETURN_CODE_INNER_ERROR, "未知异常，请联系管理员");
    }

    public static R error(String msg) {
        return error(R_RETURN_CODE_OUTTER_ERROR, msg);
    }

    public static R error(int code, String msg) {
        R r = new R();
        r.put("code", code);
        r.put("msg", msg);
        return r;
    }

    public static R ok(String msg) {
        R r = new R();
        r.put("msg", msg);
        return r;
    }

    public static R ok(Map<String, Object> map) {
        R r = new R();
        r.putAll(map);
        return r;
    }

    public static R ok() {
        return new R();
    }

    @Override
    public R put(String key, Object value) {
        super.put(key, value);
        return this;
    }
}
