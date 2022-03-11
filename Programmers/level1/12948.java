package level1;

public class Phone {
	// 12948_핸드폰 번호 가리기
	public static void main(String[] args) {
		Phone ph = new Phone();
		String phone_number = "01033334444";
		System.out.println(ph.solution(phone_number));
		
	}

	public String solution(String phone_number) {
		String answer = "";
		int l = phone_number.length() - 4;
		for (int i = 0; i < l; i++) {
			answer += "*";
		}
		phone_number = phone_number.substring(l);
		return answer += phone_number;
	}

}
