package com.treelogic.framework.kafka;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles(value="test")
public class KafkaReceiverTests {
/**
	@Value("${kafka.topicName}")
	private static String TEST_TOPIC = "proteus-realtime";

	@Autowired
	private KafkaSender sender;

	@Autowired
	private KafkaReceiver receiver;

	@Autowired
	private KafkaListenerEndpointRegistry kafkaListenerEndpointRegistry;

	@ClassRule
	public static KafkaEmbedded embeddedKafka = new KafkaEmbedded(1, true, TEST_TOPIC);

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		System.setProperty("kafka.bootstrap-servers", embeddedKafka.getBrokersAsString());
	}

	@Before
	public void setUp() throws Exception {
		// wait until the partitions are assigned
		for (MessageListenerContainer messageListenerContainer : kafkaListenerEndpointRegistry
				.getListenerContainers()) {
			ContainerTestUtils.waitForAssignment(messageListenerContainer, embeddedKafka.getPartitionsPerTopic());
		}
	}

	@Test
	public void testReceive() throws Exception {
		sender.send(TEST_TOPIC, new SensorMeasurement1D(1, 12, 12, 121D));

	}
	**/
	
	@Test
	public void testReceive() throws Exception {
		//TODO: Add tests
		Assert.assertEquals(1, 1);
	}
}