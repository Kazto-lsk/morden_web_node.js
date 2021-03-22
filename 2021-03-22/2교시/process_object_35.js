/*

    Process 객체

    - argv = 실행 매개변수를 나타냄
    - env = 실행되는 컴퓨터의 환경과 관련된 정보 출력
    - version = node.js의 버전
    - versions = node.js와 종속된 프로그램 버전을 출력
    - arch = 프로세서의 아키텍쳐를 출력
    - platform = 플랫폼을 나타냅니다.

*/

process.argv.forEach(function (item, index) {
    // 출력합니다.
    console.log(index + ' : ' + typeof (item) + ' :', item);

    // 실행 매개 변수에 --exit이 있을 때
    if (item == '--exit') {
        // 다음 실행 매개 변수를 얻습니다.
        var exitTime = Number(process.argv[index + 1]);

        // 일정한 시간 후에 프로그램을 종료합니다.
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});