
let percent=0.95;
let minus=0.05;
var star=0;
let result;

function enchant() {
    let ran = Math.random();
    console.log("강화성공 확률"+percent);
    console.log(ran+"난수");
    if(ran <= percent){
      
       percent -=minus;
       star++;
    
       return sunggong();
    }
    else {return fail();} 
    
}

function sunggong() {
    if(star==3 ) {
        percent=percent+0.05;
    }
    else if(star > 14) {
        percent=0.30;
    }
    
    alert("★★★★성공!!★★★★★\n"+"강화된횟수:"+star+"성");
    
}

function fail() {
    alert("실패...");
    
    
    if(percent > 0.98) {
        percent=0.95;
    } 

    else if(star==11) {
        let ran = Math.random();
        if(ran <= 0.55) {
            percent=percent+minus;
        star--;
        alert("하락...");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }
        else {alert("스타포스 유지됨:"+star+"성")};
    }
    else if(star==12) {
        let ran = Math.random();
        if(ran < 0.59) {
            percent=percent+minus;
        star--;
      
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }
        else  {alert("단계유지"+star+"성")}
        
    }

    else if(star==13) {
        let ran = Math.random();
        if(ran < 0.637) {
            percent=percent+minus;
        star--;
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }

        if(ran < 0.13) {alert("파괴.....")
        window.location.reload();   
    }
        else {alert("단계유지"+star)}
        
    }

    
    else if(star==14) {
        let ran = Math.random();
        if(ran < 0.686) {
            percent=percent+minus;
        star--;
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }

        
        if(ran < 0.14) {alert("파괴.....")
        window.location.reload;}
        
        else {alert("단계유지"+star)}
        
    }

    
    else if(star==16 || star==17) {
        let ran = Math.random();
        if(ran < 0.68) {
            percent=percent+minus;
        star--;
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }
        else {alert("단계유지"+star)}
        
    }

    
    else if(star==18 || star==19) {
        let ran = Math.random();
        if(ran < 0.67) {
            percent=percent+minus;
        star--;
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }
        else {alert("단계유지"+star)}
        
    }

    
    else if(star==21) {
        let ran = Math.random();
        if(ran < 0.63) {
            percent=percent+minus;
        star--;
        alert("하락");
        console.log("단계하락 성공!!!!!!!!!"+star);
        }
        else {alert("단계유지"+star)}
        
    }

    else if(star > 14) {
        percent=0.30;
    }
    
}





