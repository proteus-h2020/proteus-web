package org.server.framework.exception;


public class FailedLoginException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public FailedLoginException(String username) {
        super(String.format("Failed to login with username %s", username));
    }
}
