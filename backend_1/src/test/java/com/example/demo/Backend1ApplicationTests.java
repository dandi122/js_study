package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.dto.SalesGroupBy;
import com.example.demo.dto.SalesGroupByInterface;
import com.example.demo.repository.SalesRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
class Backend1ApplicationTests {
	
	//di
	@Autowired
	private SalesRepository salesRepository;

	@Test
	void contextLoads() {
		List<SalesGroupByInterface> sales = salesRepository.findSalesGoupByData();
		log.info("데이터 총개수" + sales.size());
		// 이상없는 분은 sales에서 데이터를 추출하여 SalesGroupBy 객체에 담아서
		// 객체에 담은 후, 값 확인 => tostring()
		// List<SalesGounpBy> res에 담아서 size() 출력
		List<SalesGroupBy> res = new ArrayList<SalesGroupBy>();
		for(SalesGroupByInterface sale : sales) {
			SalesGroupBy data = SalesGroupBy.builder()
					.category(sale.getCategory())
					.cnt(sale.getCnt())
					.price(sale.getPrice())
					.amount(sale.getAmount())
					.build();
			log.info("데이터확인 " + data.toString());
			res.add(data);
			
		}
		log.info("데이터확인 " + res.size());
		
	}

}
