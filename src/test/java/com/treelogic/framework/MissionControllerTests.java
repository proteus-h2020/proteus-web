package com.treelogic.framework;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Locale;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.treelogic.framework.advice.ExcludeFieldsAdvice;
import com.treelogic.framework.advice.HttpError;
import com.treelogic.framework.controller.MissionController;
import com.treelogic.framework.domain.Mission;
import com.treelogic.framework.domain.Mission.MissionStatus;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "test")
public class MissionControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;

	@Autowired
	private MessageSource messageSource;

	@Before
	public void setup() {
		FilterProvider filter = new SimpleFilterProvider().addFilter(ExcludeFieldsAdvice.FILTER_NAME,
				SimpleBeanPropertyFilter.serializeAllExcept());
		objectMapper.setFilterProvider(filter);
	}

	@Test
	public void testGet200() throws Exception {
		mockMvc.perform(get(MissionController.PATH)).andExpect(status().isOk());
	}

	@Test
	public void testPost400() throws Exception {
		mockMvc.perform(post(MissionController.PATH)).andExpect(status().isBadRequest());
	}

	@Test
	public void testPost415() throws Exception {
		Mission mission = new Mission();
		mockMvc.perform(post(MissionController.PATH).content(objectMapper.writeValueAsString(mission)))
				.andExpect(status().isUnsupportedMediaType());
	}

	@Test
	public void testPost400English() throws Exception {
		testPost400Locale(Locale.ENGLISH);
	}

	@Test
	public void testPost400Spanish() throws Exception {
		testPost400Locale(Locale.forLanguageTag("es"));
	}

	@Test
	public void testPost200() throws Exception {
		Mission mission = new Mission();
		mission.setStatus(MissionStatus.REGISTERED);
		mockMvc.perform(post(MissionController.PATH).contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(mission))).andExpect(status().isOk());
	}

	@Test
	public void testGetAfterPost200() throws Exception {
		mockMvc.perform(get(MissionController.PATH)).andExpect(status().isOk())
				.andExpect(jsonPath("$.totalElements", is(1)));
	}

	private void testPost400Locale(Locale locale) throws Exception {
		String content = mockMvc
				.perform(post(MissionController.PATH).contentType(MediaType.APPLICATION_JSON).locale(locale)
						.content(objectMapper.writeValueAsString(new Mission())))
				.andExpect(status().isBadRequest()).andReturn().getResponse().getContentAsString();
		HttpError httpError = objectMapper.readValue(content, HttpError.class);
		httpError.getMessage()
				.equals(messageSource.getMessage("NotNull", new String[] { null, "keycloakUser", null }, locale));
	}
}