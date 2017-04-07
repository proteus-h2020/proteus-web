package com.treelogic.framework.security;

import com.treelogic.framework.domain.Profile;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Component
public class SecretKeyProvider {

    public byte[] getKey() throws URISyntaxException, IOException {
        // TODO store key encripted
        return Files.readAllBytes(Paths.get(this.getClass().getResource("/jwt.key").toURI()));
    }
}
