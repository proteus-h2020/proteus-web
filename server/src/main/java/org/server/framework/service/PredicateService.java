package org.server.framework.service;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Ops;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.PathBuilder;

@Service
public class PredicateService {

	// [fieldName1][operator1][fieldValue1],[fieldName2][operator2][fieldValue2]
	private final Pattern WHERE_PATTERN = Pattern
			.compile(new StringBuilder("(\\w.+?)(").append(WhereOperators.EQ_IGNORE_CASE.value()).append("|")
					.append(WhereOperators.STRING_CONTAINS_IC.value()).append("|").append(WhereOperators.GT.value())
					.append("|").append(WhereOperators.LT.value()).append(")(\\w.+?),").toString());

	public enum WhereOperators {

		EQ_IGNORE_CASE(":"), STRING_CONTAINS_IC("~"), GT(">"), LT("<");

		private String op;

		private static Map<String, WhereOperators> map = new HashMap<String, WhereOperators>();
		static {
			for (WhereOperators op : WhereOperators.values()) {
				map.put(op.value(), op);
			}
		}

		private WhereOperators(String op) {
			this.op = op;
		}

		public String value() {
			return this.op;
		}

		public static WhereOperators fromValue(String op) {
			return map.get(op);
		}
	}

	public <T> Predicate predicate(String where, Class<? extends T> classType) {
		BooleanBuilder builder = new BooleanBuilder();
		PathBuilder<T> entityPath = new PathBuilder<T>(classType, classType.getCanonicalName());
		if (StringUtils.hasText(where)) {
			Matcher matcher = WHERE_PATTERN.matcher(where + ",");
			while (matcher.find()) {
				String field = matcher.group(1);
				Ops operator = Ops.valueOf(WhereOperators.fromValue(matcher.group(2)).name());
				String stringValue = matcher.group(3);
				Object value = stringValue;
				if (field.equals("id") || field.endsWith(".id")) {
					field = field.replaceAll(".id", "._id");
					operator = Ops.EQ;
					value = new ObjectId(stringValue);
				} else {
					try {
						value = Long.parseLong(stringValue);
					} catch (NumberFormatException nfe) {
					}
				}
				builder.and(Expressions.predicate(operator, entityPath.get(field), Expressions.constant(value)));
			}
		}
		return builder.getValue();
	}
}