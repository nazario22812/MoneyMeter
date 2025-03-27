package com.slepan.slepanshop;
import com.slepan.slepanshop.ERateUkr;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class CurrencyController {

    @GetMapping("/goverla")
    public ResponseEntity<Object> getGoverlaRates() {
        return ResponseEntity.ok(ERateUkr.getGoverlaRates().toString());
    }

    @GetMapping("/privatbank")
    public ResponseEntity<Object> getPrivatbankRates() {
        return ResponseEntity.ok(ERateUkr.getPrivatbankRates().toString());
    }
}