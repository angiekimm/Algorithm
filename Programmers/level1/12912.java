package level1;

public class AddInteger {

	public static void main(String[] args) {
		AddInteger ai = new AddInteger();
		int a = 3;
		int b = 3;
		System.out.println(ai.solution(a, b));
	}

	public long solution(int a, int b) {
		long answer = 0;
		int temp = 0;
		
		if (a > b) {
			temp = a;
			a = b;
			b = temp;
		}

		if (a == b) {
			answer = a;
		} else {
			for (int i = a; i < b + 1; i++) {
				answer += i;
			}
		}
		return answer;
	}

}
