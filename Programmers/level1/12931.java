import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if(n <= 100000000 && n >= 0) {
           while(true) {
                answer += n % 10;
                n /= 10;
                if(n == 0) {
                    break;  
                }
            }
        } else {
            System.out.println("100,000,000 이하의 자연수를 입력해주세요.");
        }


        return answer;
    }
}