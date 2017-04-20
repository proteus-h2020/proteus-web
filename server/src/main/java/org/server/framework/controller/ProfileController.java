package org.server.framework.controller;

import org.server.framework.domain.Profile;
import org.server.framework.exception.ProfileNotFoundException;
import org.server.framework.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/profile")
public class ProfileController {

    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @RequestMapping(
        path = "/{username}",
        method = RequestMethod.GET
    )
    public Profile profile(@PathVariable String username) throws Exception {
        return profileService.getProfile(username).orElseThrow(() -> new ProfileNotFoundException(username));
    }
}
