package org.server.framework.exception;

import static java.lang.String.format;

public class ProfileNotFoundException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProfileNotFoundException(String username) {
        super(format("Profile with username %s does not exist", username));
    }
}
