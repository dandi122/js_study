package com.example.demo.socketio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;

/**
 * TODO IO-STEP1 #005 
 *  소켓io 서버 구성을 위한 환경 설정
 *  -hostname, port 설정
 *  @Configuration
 *   - Bean을 수동으로 등록할 때 절차
 *   	- class 위에 @Configuration 추가
 *    	- class 내부에 특정 메소드(특정 객체를 반환) 위에 @Bean 추가 
 */
@org.springframework.context.annotation.Configuration
public class SocketIOConfig {
	// application.properties에서 정보를 획득해여 멤버 변수의 초기값으로 주입
	@Value("${socketio.server.hostname}")
	private String hostname;
	@Value("${socketio.server.port}")
	private int port;
	
	@Bean
	public SocketIOServer socketIOServer() {
		Configuration config = new Configuration();
		config.setHostname(hostname);
		config.setPort(port);
		return new SocketIOServer(config);
	}

}
