package com.treelogic.framework.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.treelogic.framework.service.ProteusAppService;

@Configuration
public class ProteusAppConfig {	
	
	@Bean
	public ProteusAppService appInfo(){
		return new ProteusAppService();
	}
}
