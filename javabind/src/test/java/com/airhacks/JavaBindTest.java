package com.airhacks;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import org.junit.Test;

/**
 *
 * @author airhacks.com
 */
public class JavaBindTest {

    @Test
    public void invokeMethod() throws NoSuchMethodException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        Airplane airplane = new Airplane("42");
        Airplane rocket = new Airplane("1000");
        Method method = Airplane.class.getMethod("takeOff");
        method.invoke(airplane);

        method.invoke(rocket);
    }

}
