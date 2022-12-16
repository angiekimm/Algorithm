package level1;

import java.util.Arrays;

public class Incompletion {

	public static void main(String[] args) {
		String[] participant = {"mislav", "stanko", "mislav", "ana"};
		String[] completion = {"stanko", "ana", "mislav"};
		Incompletion inc = new Incompletion();
		String answer = inc.solution(participant, completion);
		System.out.println(answer);
	}

	public String solution(String[] participant, String[] completion) {
	        
	        Arrays.sort(participant);
	        Arrays.sort(completion);
	        int i = 0;
	        for(i=0; i<completion.length; i++) {
	        	if(!completion[i].equals(participant[i])) {
	        		break;
	        	}
	        }
	        
	        return participant[i];
	}
	
}