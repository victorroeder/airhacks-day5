package com.airhacks;

/**
 *
 * @author airhacks.com
 */
public class Airplane {

    private String speed;

    public Airplane(String speed) {
        this.speed = speed;
    }

    public void takeOff() {
        System.out.println("Taking off " + this.speed);

    }

}
