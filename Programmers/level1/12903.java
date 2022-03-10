package level1;
// 가운데 글자 가져오기
public class Middle {

	public static void main(String[] args) {
		Middle m = new Middle();
		String str = "qbcde";
		System.out.println(m.solution(str));
	}
	
	public String solution(String s) {
        String answer = "";
        int m = s.length()/2;
        
        answer = s.length()%2==0 ? s.substring(m-1, m+1) : s.substring(m, m+1);
        
        return answer;
    }

}
