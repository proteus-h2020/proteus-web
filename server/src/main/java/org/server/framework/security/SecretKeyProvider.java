package org.server.framework.security;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
public class SecretKeyProvider {

    public byte[] getKey() throws URISyntaxException, IOException {
        // TODO store key encripted
        byte[] key = null;
        try {
            key = Files.readAllBytes(Paths.get(this.getClass().getResource("/jwt.key").toURI()));
        } catch (IOException e) {
            throw new IOException("The secret signing key couldn't be retrieved. Please remember to set it before running the application.");
        } catch (NullPointerException e) {
            throw new IOException("The secret signing key couldn't be retrieved. Please remember to set it before running the application.");
        }
        return key;
    }
}
