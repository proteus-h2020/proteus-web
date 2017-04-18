package com.treelogic.framework.exception;


public class FailedLoginException extends RuntimeException {
    public FailedLoginException(String username) {
        super(String.format("Failed to login with username %s", username));
    }
}
