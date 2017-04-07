package com.treelogic.framework.exception;


public class JwtAuthenticationException extends RuntimeException {
    public JwtAuthenticationException(String msg, Throwable t) {
        super(msg, t);
    }
}
