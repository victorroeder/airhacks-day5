package com.airhacks.prototype.chain;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author airhacks.com
 */
public class MyObject {

    public Map<String, Runnable> own = new HashMap<>();
    public JSObject root = new JSObject();

    public Runnable get(String key) {
        if (!own.containsKey(key)) {
            return root.prototype.get(key);
        } else {
            return own.get(key);
        }
    }

    public void set(String key, Runnable function) {
        this.own.put(key, function);
    }

}
