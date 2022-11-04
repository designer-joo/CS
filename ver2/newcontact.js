function myFunction(){

    //오늘 날짜 확인
      var date = new Date(); //매개변수가 없는 경우 현재 날짜와 시간을 가지는 인스턴스를 반환한다.
       var month = date.getMonth() + 1; // 0부터 시작하므로 1더함 더함
       var day   = date.getDate();
    
       if (("" + month).length == 1) { month = "0" + month; }
       if (("" + day).length   == 1) { day   = "0" + day;   }
       var printedDate = month +'-'+day;
    
    
    //   <!-- 아래 부분은 정보 활용 체크박스-->
        var Location = ""
        for(var i=0; i<2; i++){
         if(document.getElementsByName("entry.466242312")[i].checked == true){
    
           var Location = Location + document.getElementsByName("entry.466242312")[i].value
         }};
    
    //
    

    
    // 아래 부분은 텍스트 파악 필요없음 현재 //
    var Trauma=""
    var TraumaReason= document.getElementById("entry.1513259949").value
    var TraumaDuration= document.getElementById("entry.1106238533").value
  
    }
   

    function submitHandler(){
      setTimeout(function() {
        alert("분당 추모공원 휴를 찾아 주셔서 감사합니다. 빠르게 상담 전화 드리겠습니다.")
       location.reload();
      }, 3000);
       
    }
    

    function checkNumber(event) {
        if(event.key === '.' 
           || event.key === '-'
           || event.key >= 0 && event.key <= 9) {
          return true;
        }
        alert("숫자만 입력해주세요.")
        return false;
      }


    function cspopup(){
      let CSPOPUP = document.querySelector("#check-popup"); 
      let CSBG = document.querySelector(".modalBG");
  
      CSPOPUP.style.display = "block";
      CSBG.style.display = "unset";
      
    }  

    function CspopupClose(){
      let CSPOPUP = document.querySelector("#check-popup"); 
      let CSBG = document.querySelector(".modalBG");
      CSPOPUP.style.display = "none";
      CSBG.style.display = "none";
    }
 