package com.treelogic.framework.domain;


import javax.validation.constraints.NotNull;

public class Profile {
    @NotNull
    private String username;

    @NotNull
    private String email;

    private String fullName;

    @NotNull
    private String alias;

    public Profile(User profile) {
        this.username = profile.getUsername();
        this.email = profile.getEmail();
        this.fullName = profile.getFullName();
        this.alias = profile.getAlias();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Profile profile = (Profile) o;

        if (!username.equals(profile.username)) return false;
        if (!email.equals(profile.email)) return false;
        if (fullName != null ? !fullName.equals(profile.fullName) : profile.fullName != null) return false;
        return alias.equals(profile.alias);
    }

    @Override
    public int hashCode() {
        int result = username.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + (fullName != null ? fullName.hashCode() : 0);
        result = 31 * result + alias.hashCode();
        return result;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }
}
