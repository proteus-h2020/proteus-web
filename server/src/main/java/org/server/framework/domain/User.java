package org.server.framework.domain;

import javax.validation.constraints.NotNull;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonFilter;

@Document
@JsonFilter(org.server.framework.advice.ExcludeFieldsAdvice.FILTER_NAME)
public class User  {

	@NotNull
	private String username;

	@NotNull
	private String password;

	@NotNull
	private String email;

	private String fullName;

	@NotNull
	private String alias;

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		User user = (User) o;

		if (!username.equals(user.username)) return false;
		if (!password.equals(user.password)) return false;
		if (!email.equals(user.email)) return false;
		if (fullName != null ? !fullName.equals(user.fullName) : user.fullName != null) return false;
		return alias.equals(user.alias);
	}

	@Override
	public int hashCode() {
		int result = username.hashCode();
		result = 31 * result + password.hashCode();
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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