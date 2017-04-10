package com.treelogic.framework.controller;

import com.treelogic.framework.domain.Profile;
import com.treelogic.framework.exception.ProfileNotFoundException;
import com.treelogic.framework.service.ProfileService;
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
