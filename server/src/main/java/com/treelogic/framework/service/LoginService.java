package com.treelogic.framework.service;

import com.treelogic.framework.domain.LoginCredentials;
import com.treelogic.framework.domain.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    private ProfileService profileService;

    @Autowired
    public LoginService(ProfileService profileService) {
        this.profileService = profileService;
    }

    public Optional<Profile> login(final LoginCredentials credentials) {
        // TODO compare hashed password instead of actual password
        return profileService.get(credentials.getUsername())
                .filter(user -> user.getPassword().equals(credentials.getPassword()))
                .map(user -> new Profile(user));
    }
}
