function Person(name ,age){ 
    //Persion 함수
    this.name = name;
    this.age = age;

    this.agePrint = function(){{
        console.log(this.name+'의 나이는 '+age+'입니다.');
    }}
}


//person Prototype 객체 생성
Person.prototype.walk = function(speed){
    console.log(this.name+'님은'+speed+'km 속도로 걸어가고 있습니다.');
}

//데이터 밀어넣기
var person01 = new Person('둘리', 35);
var person02 = new Person('뿡', 35);

// 둘리님 출력
person01.agePrint();
person01.walk(50);


// 뿡님 출력
person02.agePrint();
person02.walk(30);