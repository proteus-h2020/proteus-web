package com.treelogic.framework.service;

import com.treelogic.framework.domain.Profile;
import com.treelogic.framework.domain.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class ProfileService {
    private final Map<String, User> users;

    public ProfileService() {
        users = new HashMap<String, User>();
        // TODO remove
        User fakeUser = new User();
        fakeUser.setAlias("Fakerino");
        fakeUser.setEmail("fakerino@example.org");
        fakeUser.setFullName("Fakerino So Fake");
        fakeUser.setPassword("letmein");
        fakeUser.setUsername("fakerino");
        users.put("fakerino", fakeUser);
    }

    protected Optional<User> get(String username) {
        return Optional.ofNullable(users.get(username));
    }

    public Optional<Profile> getProfile(String username) {
        if (users.containsKey(username)) {
            return Optional.of(new Profile(users.get(username)));
        } else {
            return Optional.empty();
        }
    }
}
