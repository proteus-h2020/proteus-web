package com.treelogic.framework.domain;

import javax.validation.constraints.NotNull;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonFilter;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;

@Document
@JsonFilter(ExcludeFieldsAdvice.FILTER_NAME)
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

	//	@NotNull
//	private String password;
//
//	@NotNull
//	private String name;
//
//	@NotNull
//	private String lastname;

//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getLastname() {
//		return lastname;
//	}
//
//	public void setLastname(String lastname) {
//		this.lastname = lastname;
//	}
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = super.hashCode();
//		result = prime * result + ((email == null) ? 0 : email.hashCode());
//		result = prime * result + ((lastname == null) ? 0 : lastname.hashCode());
//		result = prime * result + ((name == null) ? 0 : name.hashCode());
//		result = prime * result + ((password == null) ? 0 : password.hashCode());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (!super.equals(obj))
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		User other = (User) obj;
//		if (email == null) {
//			if (other.email != null)
//				return false;
//		} else if (!email.equals(other.email))
//			return false;
//		if (lastname == null) {
//			if (other.lastname != null)
//				return false;
//		} else if (!lastname.equals(other.lastname))
//			return false;
//		if (name == null) {
//			if (other.name != null)
//				return false;
//		} else if (!name.equals(other.name))
//			return false;
//		if (password == null) {
//			if (other.password != null)
//				return false;
//		} else if (!password.equals(other.password))
//			return false;
//		return true;
//	}
	
}