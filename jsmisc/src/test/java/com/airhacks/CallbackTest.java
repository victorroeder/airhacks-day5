package com.airhacks;

import org.junit.Test;

/**
 *
 * @author airhacks.com
 */
public class CallbackTest {

    public void execute(Runnable run) {
        //do something else
        System.out.println("Endless loop");
        run.run();
    }

    @Test
    public void invokeServer() {
        this.execute(() -> {
            System.out.println("oh, server is done");
        });

        this.execute(this::anotherReferenceToMethod);
    }

    public void anotherReferenceToMethod() {
        System.out.println("Working like crazy");
    }

}
