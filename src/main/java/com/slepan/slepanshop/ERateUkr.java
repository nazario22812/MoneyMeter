package com.slepan.slepanshop;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONArray;
import org.json.JSONObject;

public class ERateUkr {

    private static final String URL_PRIVATBANK_API = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    private static final String URL_GOVERLA_API = "https://api.goverla.ua/graphql";
    private static final String QUERY_GOVERLA_STRING = "{\"operationName\":\"Point\",\"variables\":{\"alias\":\"goverla-ua\"},\"query\":\"query Point($alias: Alias!) { point(alias: $alias) { rates { currency { alias name } bid { absolute } ask { absolute } } } }\"}";

    // Отримати дані з PrivatBank
    public static JSONArray getPrivatbankRates() {
        try {
            URL url = new URL(URL_PRIVATBANK_API);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            return new JSONArray(response.toString());
        } catch (Exception e) {
            e.printStackTrace();
            return new JSONArray();
        }
    }

    // Отримати дані з Goverla
    public static JSONArray getGoverlaRates() {
        try {
            URL url = new URL(URL_GOVERLA_API);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            conn.getOutputStream().write(QUERY_GOVERLA_STRING.getBytes());

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            JSONObject jsonResponse = new JSONObject(response.toString());
            return jsonResponse.getJSONObject("data").getJSONObject("point").getJSONArray("rates");
        } catch (Exception e) {
            e.printStackTrace();
            return new JSONArray();
        }
    }
}
